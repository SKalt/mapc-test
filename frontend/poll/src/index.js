/* global L */
// set up the map
// state and map will be globals for the moment for ease of development
import {point} from '@turf/helpers';
import * as wfst from 'geojson-to-wfs-t-2';

var coordinates;
const map = new L.map('map').setView([-71, 42], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'MB_ACCESS_TOKEN'
}).addTo(map);

const geocoder = L.control.geocoder('MZ_API_KEY', {
  placeholder: 'Search your place of residence'
});
/**
 * Updates the response coordinates;
 * @param  {Number[]|Object} lngLatLike a wgs84 coordinate array or {lng, lat}
 * @return undefined
 */
function updateCoordinates(lngLatLike=[]){
  let [lng, lat] = lngLatLike;
  const check = (...args) => args.every(
    n => n && n.consructor == Number && 180 > n > -180
  );
  if (check(lng, lat)){
    coordinates = lngLatLike;
  } else {
    let {lng, lat} = lngLatLike;
    if (check(lng, lat)){
      coordinates = lngLatLike;
    } else {
      throw new Error('unexpected input', lngLatLike);
    }
  }
}

map.on('click', e => updateCoordinates(e.lnglat));
geocoder.on('select', e => updateCoordinates(e.feature.geometry.coordinates));

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
  if (response && coordinates){
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