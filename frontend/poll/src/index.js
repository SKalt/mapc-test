/* global L, MB_ACCESS_TOKEN, MZ_API_KEY */
// set up the map
// state and map will be globals for the moment for ease of development
import {point} from '@turf/helpers';
import * as wfst from 'geojson-to-wfs-t-2';

const map = new L.map('map').setView([ 42.36, -71.0589], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: MB_ACCESS_TOKEN
}).addTo(map);

const geocoder = L.control.geocoder(MZ_API_KEY, {
  placeholder: 'Search your place of residence'
}).addTo(map);

var coordinates;
var marker;

/**
 * Updates the response coordinates;
 * @param  {Number[]|Object} point a wgs84 coordinate array or {lng, lat}
 * @return undefined
 */
function updateCoordinates(point){
  coordinates = point;
  if (!marker){
    marker = L.marker(coordinates).addTo(map);
  } else {
    marker.setLatLng(coordinates);
  }
}

const getCoordinates = ()=>coordinates;


map.on('click', e => updateCoordinates(e.latlng));
geocoder.on('select', e => updateCoordinates(
  e.feature.geometry.coordinates.reverse()
));

const getResponse = (function formListenClosure(){
  let response = '';
  document.querySelector('form').addEventListener('input', e=>{
    response = e.target.value;
  });
  return ()=> response;
})();

const post = (body) => fetch(GEOSERVER_URL, {
  method:'POST', body
}); // might need headers

function submit(){
  const response = getResponse();
  let coordinates = getCoordinates();
  if (response && coordinates){
    if (!Array.isArray(coordinates)){
      coordinates = [coordinates.lng, coordinates.lat];
    }
    const transaction = wfst.Transaction(
      wfst.Insert(
        point(coordinates, {response})
      ),
      {/* namespace*/}
    );
    return post(transaction)
      .then( data => console.log(data)) //TODO: check the response for insertion
                                        // success.
      .catch(err=>{
        console.error('post failure: ', err)
      });
  } else {
    alert('Please enter both coordinates and a response to submit your answer');
  }
}

const button = document.getElementById('submit');
button.addEventListener('click', submit);
button.disabled = false;