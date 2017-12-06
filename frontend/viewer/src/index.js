import supercluster from 'supercluster';
// init map
mapboxgl.accessToken = MB_ACCESS_TOKEN;
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  zoom: 13,
  center: [ 42.36, -71.0589]
});

// get all data to work with in supercluster
// I was going to tile it, but at this point, ¯\_(ツ)_/¯
var geojson;
const geojsonFetch = fetch(
  GEOSERVER_URL +
    'request=GetFeature' +
    '&version=2.0.0' +
    '&outputFormat=json' +
    '&typeNames=mapc_test:responses' +
    '&srsName=EPSG:4326'
)
  .then(resp => resp.ok && resp.json() || new Error(resp))
  .catch(err => console.error(err))
  .then(responses =>{
    geojson = responses;
  });

const mapLoad = new Promise( resolve => {
  map.once('loaded', () =>{
    map.addSource('clusters-src', {
      type:'geojson',
      data:{type:'FeatureCollection', features:[]}
    });
    map.addLayer({
      id:'clusters-lyr',
      type:'circle'
    })
    resolve()});
});
Promise.all((mapLoad, geojsonFetch)=>{
  const index = load(geojson);
  map.on('moveend', ()=>{

  })
})
