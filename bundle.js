/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__turf_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_geojson_to_wfs_t_2__ = __webpack_require__(2);
/* global L, MB_ACCESS_TOKEN, MZ_API_KEY */
// set up the map
// state and map will be globals for the moment for ease of development



const map = new L.map('map').setView([ 42.36, -71.0589], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1Ijoic2thbHQwMSIsImEiOiJjaXM3aWNqOW8wM3FsMnRwbmV3OW5lMmE5In0.AFnslIthn6ju_7FtnHtNNw'
}).addTo(map);

const geocoder = L.control.geocoder('mapzen-SyxXMGc', {
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

const post = (body) => fetch("https://www.example.com", {
  method:'POST', body
}); // might need headers

function submit(){
  const response = getResponse();
  let coordinates = getCoordinates();
  if (response && coordinates){
    if (!Array.isArray(coordinates)){
      coordinates = [coordinates.lng, coordinates.lat];
    }
    const transaction = __WEBPACK_IMPORTED_MODULE_1_geojson_to_wfs_t_2__["b" /* Transaction */](
      __WEBPACK_IMPORTED_MODULE_1_geojson_to_wfs_t_2__["a" /* Insert */](
        Object(__WEBPACK_IMPORTED_MODULE_0__turf_helpers__["a" /* point */])(coordinates, {response})
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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export earthRadius */
/* unused harmony export factors */
/* unused harmony export unitsFactors */
/* unused harmony export areaFactors */
/* unused harmony export feature */
/* unused harmony export geometry */
/* harmony export (immutable) */ __webpack_exports__["a"] = point;
/* unused harmony export polygon */
/* unused harmony export lineString */
/* unused harmony export featureCollection */
/* unused harmony export multiLineString */
/* unused harmony export multiPoint */
/* unused harmony export multiPolygon */
/* unused harmony export geometryCollection */
/* unused harmony export round */
/* unused harmony export radiansToLength */
/* unused harmony export lengthToRadians */
/* unused harmony export lengthToDegrees */
/* unused harmony export bearingToAzimuth */
/* unused harmony export radiansToDegrees */
/* unused harmony export degreesToRadians */
/* unused harmony export convertLength */
/* unused harmony export convertArea */
/* unused harmony export isNumber */
/* unused harmony export isObject */
/* unused harmony export radians2degrees */
/* unused harmony export degrees2radians */
/* unused harmony export distanceToDegrees */
/* unused harmony export distanceToRadians */
/* unused harmony export radiansToDistance */
/* unused harmony export bearingToAngle */
/* unused harmony export convertDistance */
/**
 * Earth Radius used with the Harvesine formula and approximates using a spherical (non-ellipsoid) Earth.
 */
var earthRadius = 6371008.8;

/**
 * Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
 */
var factors = {
    meters: earthRadius,
    metres: earthRadius,
    millimeters: earthRadius * 1000,
    millimetres: earthRadius * 1000,
    centimeters: earthRadius * 100,
    centimetres: earthRadius * 100,
    kilometers: earthRadius / 1000,
    kilometres: earthRadius / 1000,
    miles: earthRadius / 1609.344,
    nauticalmiles: earthRadius / 1852,
    inches: earthRadius * 39.370,
    yards: earthRadius / 1.0936,
    feet: earthRadius * 3.28084,
    radians: 1,
    degrees: earthRadius / 111325,
};

/**
 * Units of measurement factors based on 1 meter.
 */
var unitsFactors = {
    meters: 1,
    metres: 1,
    millimeters: 1000,
    millimetres: 1000,
    centimeters: 100,
    centimetres: 100,
    kilometers: 1 / 1000,
    kilometres: 1 / 1000,
    miles: 1 / 1609.344,
    nauticalmiles: 1 / 1852,
    inches: 39.370,
    yards: 1 / 1.0936,
    feet: 3.28084,
    radians: 1 / earthRadius,
    degrees: 1 / 111325,
};

/**
 * Area of measurement factors based on 1 square meter.
 */
var areaFactors = {
    meters: 1,
    metres: 1,
    millimeters: 1000000,
    millimetres: 1000000,
    centimeters: 10000,
    centimetres: 10000,
    kilometers: 0.000001,
    kilometres: 0.000001,
    acres: 0.000247105,
    miles: 3.86e-7,
    yards: 1.195990046,
    feet: 10.763910417,
    inches: 1550.003100006
};

/**
 * Wraps a GeoJSON {@link Geometry} in a GeoJSON {@link Feature}.
 *
 * @name feature
 * @param {Geometry} geometry input geometry
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Array<number>} [bbox] BBox [west, south, east, north]
 * @param {string|number} [id] Identifier
 * @returns {Feature} a GeoJSON Feature
 * @example
 * var geometry = {
 *   "type": "Point",
 *   "coordinates": [110, 50]
 * };
 *
 * var feature = turf.feature(geometry);
 *
 * //=feature
 */
function feature(geometry, properties, bbox, id) {
    if (geometry === undefined) throw new Error('geometry is required');
    if (properties && properties.constructor !== Object) throw new Error('properties must be an Object');
    if (bbox) {
        if (!Array.isArray(bbox)) throw new Error('bbox must be an Array');
        if (bbox.length !== 4) throw new Error('bbox must be an Array of 4 numbers');
    }
    if (id && ['string', 'number'].indexOf(typeof id) === -1) throw new Error('id must be a number or a string');

    var feat = {type: 'Feature'};
    if (id) feat.id = id;
    if (bbox) feat.bbox = bbox;
    feat.properties = properties || {};
    feat.geometry = geometry;
    return feat;
}

/**
 * Creates a GeoJSON {@link Geometry} from a Geometry string type & coordinates.
 * For GeometryCollection type use `helpers.geometryCollection`
 *
 * @name geometry
 * @param {string} type Geometry Type
 * @param {Array<number>} coordinates Coordinates
 * @param {Array<number>} [bbox] BBox [west, south, east, north]
 * @returns {Geometry} a GeoJSON Geometry
 * @example
 * var type = 'Point';
 * var coordinates = [110, 50];
 *
 * var geometry = turf.geometry(type, coordinates);
 *
 * //=geometry
 */
function geometry(type, coordinates, bbox) {
    // Validation
    if (!type) throw new Error('type is required');
    if (!coordinates) throw new Error('coordinates is required');
    if (!Array.isArray(coordinates)) throw new Error('coordinates must be an Array');
    if (bbox && bbox.length !== 4) throw new Error('bbox must be an Array of 4 numbers');

    var geom;
    switch (type) {
    case 'Point': geom = point(coordinates).geometry; break;
    case 'LineString': geom = lineString(coordinates).geometry; break;
    case 'Polygon': geom = polygon(coordinates).geometry; break;
    case 'MultiPoint': geom = multiPoint(coordinates).geometry; break;
    case 'MultiLineString': geom = multiLineString(coordinates).geometry; break;
    case 'MultiPolygon': geom = multiPolygon(coordinates).geometry; break;
    default: throw new Error(type + ' is invalid');
    }
    if (bbox) geom.bbox = bbox;
    return geom;
}

/**
 * Takes coordinates and properties (optional) and returns a new {@link Point} feature.
 *
 * @name point
 * @param {Array<number>} coordinates longitude, latitude position (each in decimal degrees)
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Array<number>} [bbox] BBox [west, south, east, north]
 * @param {string|number} [id] Identifier
 * @returns {Feature<Point>} a Point feature
 * @example
 * var point = turf.point([-75.343, 39.984]);
 *
 * //=point
 */
function point(coordinates, properties, bbox, id) {
    if (!coordinates) throw new Error('No coordinates passed');
    if (!Array.isArray(coordinates)) throw new Error('Coordinates must be an Array');
    if (coordinates.length < 2) throw new Error('Coordinates must be at least 2 numbers long');
    if (!isNumber(coordinates[0]) || !isNumber(coordinates[1])) throw new Error('Coordinates must contain numbers');

    return feature({
        type: 'Point',
        coordinates: coordinates
    }, properties, bbox, id);
}

/**
 * Takes an array of LinearRings and optionally an {@link Object} with properties and returns a {@link Polygon} feature.
 *
 * @name polygon
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Array<number>} [bbox] BBox [west, south, east, north]
 * @param {string|number} [id] Identifier
 * @returns {Feature<Polygon>} a Polygon feature
 * @throws {Error} throw an error if a LinearRing of the polygon has too few positions
 * or if a LinearRing of the Polygon does not have matching Positions at the beginning & end.
 * @example
 * var polygon = turf.polygon([[
 *   [-2.275543, 53.464547],
 *   [-2.275543, 53.489271],
 *   [-2.215118, 53.489271],
 *   [-2.215118, 53.464547],
 *   [-2.275543, 53.464547]
 * ]], { name: 'poly1', population: 400});
 *
 * //=polygon
 */
function polygon(coordinates, properties, bbox, id) {
    if (!coordinates) throw new Error('No coordinates passed');

    for (var i = 0; i < coordinates.length; i++) {
        var ring = coordinates[i];
        if (ring.length < 4) {
            throw new Error('Each LinearRing of a Polygon must have 4 or more Positions.');
        }
        for (var j = 0; j < ring[ring.length - 1].length; j++) {
            // Check if first point of Polygon contains two numbers
            if (i === 0 && j === 0 && !isNumber(ring[0][0]) || !isNumber(ring[0][1])) throw new Error('Coordinates must contain numbers');
            if (ring[ring.length - 1][j] !== ring[0][j]) {
                throw new Error('First and last Position are not equivalent.');
            }
        }
    }

    return feature({
        type: 'Polygon',
        coordinates: coordinates
    }, properties, bbox, id);
}

/**
 * Creates a {@link LineString} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name lineString
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Array<number>} [bbox] BBox [west, south, east, north]
 * @param {string|number} [id] Identifier
 * @returns {Feature<LineString>} a LineString feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var linestring1 = turf.lineString([
 *   [-21.964416, 64.148203],
 *   [-21.956176, 64.141316],
 *   [-21.93901, 64.135924],
 *   [-21.927337, 64.136673]
 * ]);
 * var linestring2 = turf.lineString([
 *   [-21.929054, 64.127985],
 *   [-21.912918, 64.134726],
 *   [-21.916007, 64.141016],
 *   [-21.930084, 64.14446]
 * ], {name: 'line 1', distance: 145});
 *
 * //=linestring1
 *
 * //=linestring2
 */
function lineString(coordinates, properties, bbox, id) {
    if (!coordinates) throw new Error('No coordinates passed');
    if (coordinates.length < 2) throw new Error('Coordinates must be an array of two or more positions');
    // Check if first point of LineString contains two numbers
    if (!isNumber(coordinates[0][1]) || !isNumber(coordinates[0][1])) throw new Error('Coordinates must contain numbers');

    return feature({
        type: 'LineString',
        coordinates: coordinates
    }, properties, bbox, id);
}

/**
 * Takes one or more {@link Feature|Features} and creates a {@link FeatureCollection}.
 *
 * @name featureCollection
 * @param {Feature[]} features input features
 * @param {Array<number>} [bbox] BBox [west, south, east, north]
 * @param {string|number} [id] Identifier
 * @returns {FeatureCollection} a FeatureCollection of input features
 * @example
 * var features = [
 *  turf.point([-75.343, 39.984], {name: 'Location A'}),
 *  turf.point([-75.833, 39.284], {name: 'Location B'}),
 *  turf.point([-75.534, 39.123], {name: 'Location C'})
 * ];
 *
 * var collection = turf.featureCollection(features);
 *
 * //=collection
 */
function featureCollection(features, bbox, id) {
    if (!features) throw new Error('No features passed');
    if (!Array.isArray(features)) throw new Error('features must be an Array');
    if (bbox && bbox.length !== 4) throw new Error('bbox must be an Array of 4 numbers');
    if (id && ['string', 'number'].indexOf(typeof id) === -1) throw new Error('id must be a number or a string');

    var fc = {type: 'FeatureCollection'};
    if (id) fc.id = id;
    if (bbox) fc.bbox = bbox;
    fc.features = features;
    return fc;
}

/**
 * Creates a {@link Feature<MultiLineString>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiLineString
 * @param {Array<Array<Array<number>>>} coordinates an array of LineStrings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Array<number>} [bbox] BBox [west, south, east, north]
 * @param {string|number} [id] Identifier
 * @returns {Feature<MultiLineString>} a MultiLineString feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiLine = turf.multiLineString([[[0,0],[10,10]]]);
 *
 * //=multiLine
 */
function multiLineString(coordinates, properties, bbox, id) {
    if (!coordinates) throw new Error('No coordinates passed');

    return feature({
        type: 'MultiLineString',
        coordinates: coordinates
    }, properties, bbox, id);
}

/**
 * Creates a {@link Feature<MultiPoint>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPoint
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Array<number>} [bbox] BBox [west, south, east, north]
 * @param {string|number} [id] Identifier
 * @returns {Feature<MultiPoint>} a MultiPoint feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPt = turf.multiPoint([[0,0],[10,10]]);
 *
 * //=multiPt
 */
function multiPoint(coordinates, properties, bbox, id) {
    if (!coordinates) throw new Error('No coordinates passed');

    return feature({
        type: 'MultiPoint',
        coordinates: coordinates
    }, properties, bbox, id);
}

/**
 * Creates a {@link Feature<MultiPolygon>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPolygon
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygons
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Array<number>} [bbox] BBox [west, south, east, north]
 * @param {string|number} [id] Identifier
 * @returns {Feature<MultiPolygon>} a multipolygon feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPoly = turf.multiPolygon([[[[0,0],[0,10],[10,10],[10,0],[0,0]]]]);
 *
 * //=multiPoly
 *
 */
function multiPolygon(coordinates, properties, bbox, id) {
    if (!coordinates) throw new Error('No coordinates passed');

    return feature({
        type: 'MultiPolygon',
        coordinates: coordinates
    }, properties, bbox, id);
}

/**
 * Creates a {@link Feature<GeometryCollection>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name geometryCollection
 * @param {Array<Geometry>} geometries an array of GeoJSON Geometries
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Array<number>} [bbox] BBox [west, south, east, north]
 * @param {string|number} [id] Identifier
 * @returns {Feature<GeometryCollection>} a GeoJSON GeometryCollection Feature
 * @example
 * var pt = {
 *     "type": "Point",
 *       "coordinates": [100, 0]
 *     };
 * var line = {
 *     "type": "LineString",
 *     "coordinates": [ [101, 0], [102, 1] ]
 *   };
 * var collection = turf.geometryCollection([pt, line]);
 *
 * //=collection
 */
function geometryCollection(geometries, properties, bbox, id) {
    if (!geometries) throw new Error('geometries is required');
    if (!Array.isArray(geometries)) throw new Error('geometries must be an Array');

    return feature({
        type: 'GeometryCollection',
        geometries: geometries
    }, properties, bbox, id);
}

/**
 * Round number to precision
 *
 * @param {number} num Number
 * @param {number} [precision=0] Precision
 * @returns {number} rounded number
 * @example
 * turf.round(120.4321)
 * //=120
 *
 * turf.round(120.4321, 2)
 * //=120.43
 */
function round(num, precision) {
    if (num === undefined || num === null || isNaN(num)) throw new Error('num is required');
    if (precision && !(precision >= 0)) throw new Error('precision must be a positive number');
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(num * multiplier) / multiplier;
}

/**
 * Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name radiansToLength
 * @param {number} radians in radians across the sphere
 * @param {string} [units='kilometers'] can be degrees, radians, miles, or kilometers inches, yards, metres, meters, kilometres, kilometers.
 * @returns {number} distance
 */
function radiansToLength(radians, units) {
    if (radians === undefined || radians === null) throw new Error('radians is required');

    if (units && typeof units !== 'string') throw new Error('units must be a string');
    var factor = factors[units || 'kilometers'];
    if (!factor) throw new Error(units + ' units is invalid');
    return radians * factor;
}

/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into radians
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name lengthToRadians
 * @param {number} distance in real units
 * @param {string} [units='kilometers'] can be degrees, radians, miles, or kilometers inches, yards, metres, meters, kilometres, kilometers.
 * @returns {number} radians
 */
function lengthToRadians(distance, units) {
    if (distance === undefined || distance === null) throw new Error('distance is required');

    if (units && typeof units !== 'string') throw new Error('units must be a string');
    var factor = factors[units || 'kilometers'];
    if (!factor) throw new Error(units + ' units is invalid');
    return distance / factor;
}

/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into degrees
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, centimeters, kilometres, feet
 *
 * @name lengthToDegrees
 * @param {number} distance in real units
 * @param {string} [units='kilometers'] can be degrees, radians, miles, or kilometers inches, yards, metres, meters, kilometres, kilometers.
 * @returns {number} degrees
 */
function lengthToDegrees(distance, units) {
    return radiansToDegrees(lengthToRadians(distance, units));
}

/**
 * Converts any bearing angle from the north line direction (positive clockwise)
 * and returns an angle between 0-360 degrees (positive clockwise), 0 being the north line
 *
 * @name bearingToAzimuth
 * @param {number} bearing angle, between -180 and +180 degrees
 * @returns {number} angle between 0 and 360 degrees
 */
function bearingToAzimuth(bearing) {
    if (bearing === null || bearing === undefined) throw new Error('bearing is required');

    var angle = bearing % 360;
    if (angle < 0) angle += 360;
    return angle;
}

/**
 * Converts an angle in radians to degrees
 *
 * @name radiansToDegrees
 * @param {number} radians angle in radians
 * @returns {number} degrees between 0 and 360 degrees
 */
function radiansToDegrees(radians) {
    if (radians === null || radians === undefined) throw new Error('radians is required');

    var degrees = radians % (2 * Math.PI);
    return degrees * 180 / Math.PI;
}

/**
 * Converts an angle in degrees to radians
 *
 * @name degreesToradians
 * @param {number} degrees angle between 0 and 360 degrees
 * @returns {number} angle in radians
 */
function degreesToRadians(degrees) {
    if (degrees === null || degrees === undefined) throw new Error('degrees is required');

    var radians = degrees % 360;
    return radians * Math.PI / 180;
}

/**
 * Converts a length to the requested unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @param {number} length to be converted
 * @param {string} originalUnit of the length
 * @param {string} [finalUnit='kilometers'] returned unit
 * @returns {number} the converted length
 */
function convertLength(length, originalUnit, finalUnit) {
    if (length === null || length === undefined) throw new Error('length is required');
    if (!(length >= 0)) throw new Error('length must be a positive number');

    return radiansToLength(lengthToRadians(length, originalUnit), finalUnit || 'kilometers');
}

/**
 * Converts a area to the requested unit.
 * Valid units: kilometers, kilometres, meters, metres, centimetres, millimeter, acre, mile, yard, foot, inch
 * @param {number} area to be converted
 * @param {string} [originalUnit='meters'] of the distance
 * @param {string} [finalUnit='kilometers'] returned unit
 * @returns {number} the converted distance
 */
function convertArea(area, originalUnit, finalUnit) {
    if (area === null || area === undefined) throw new Error('area is required');
    if (!(area >= 0)) throw new Error('area must be a positive number');

    var startFactor = areaFactors[originalUnit || 'meters'];
    if (!startFactor) throw new Error('invalid original units');

    var finalFactor = areaFactors[finalUnit || 'kilometers'];
    if (!finalFactor) throw new Error('invalid final units');

    return (area / startFactor) * finalFactor;
}

/**
 * isNumber
 *
 * @param {*} num Number to validate
 * @returns {boolean} true/false
 * @example
 * turf.isNumber(123)
 * //=true
 * turf.isNumber('foo')
 * //=false
 */
function isNumber(num) {
    return !isNaN(num) && num !== null && !Array.isArray(num);
}

/**
 * isObject
 *
 * @param {*} input variable to validate
 * @returns {boolean} true/false
 * @example
 * turf.isObject({elevation: 10})
 * //=true
 * turf.isObject('foo')
 * //=false
 */
function isObject(input) {
    return (!!input) && (input.constructor === Object);
}

// Deprecated methods
function radians2degrees() {
    throw new Error('method has been renamed to `radiansToDegrees`');
}

function degrees2radians() {
    throw new Error('method has been renamed to `degreesToRadians`');
}

function distanceToDegrees() {
    throw new Error('method has been renamed to `lengthToDegrees`');
}

function distanceToRadians() {
    throw new Error('method has been renamed to `lengthToRadians`');
}

function radiansToDistance() {
    throw new Error('method has been renamed to `radiansToLength`');
}

function bearingToAngle() {
    throw new Error('method has been renamed to `bearingToAzimuth`');
}

function convertDistance() {
    throw new Error('method has been renamed to `convertLength`');
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Insert; });
/* unused harmony export Update */
/* unused harmony export Replace */
/* unused harmony export Delete */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Transaction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_geojson_to_gml_3__ = __webpack_require__(3);


/** @const {Object} xml */
const xml = {
  /**
   * Turns an object into a string of xml attribute key-value pairs.
   * @memberOf xml.
   * @function
   * @param {Object} attrs an object mapping attribute names to attribute values
   * @returns {string} a string of xml attribute key-value pairs
   */
  'attrs': function(attrs){
    return Object.keys(attrs)
      .map((a) => attrs[a] ? ` ${a}="${attrs[a]}"` : '')
      .join('');
  },
  /**
   * Creates a string xml tag.
   * @function 
   * @memberOf xml.
   * @param {string} ns the tag's xml namespace abbreviation.
   * @param {string} tagName the tag name.
   * @param {Object} attrs @see xml.attrs.
   * @param {string} inner inner xml.
   * @returns {string} an xml string.
   */
  'tag': function(ns, tagName, attrs, inner){ // TODO: self-closing
    let tag = (ns ? `${ns}:` : '') + tagName;
    if (tagName){
      return `<${tag}${this.attrs(attrs)}>${inner}</${tag}>`;   
    } else {
      throw new Error('no tag supplied ' + JSON.stringify(arguments));
    }
  }
};
/**
 * Shorthand for creating a wfs xml tag.
 * @param {string} tagName a valid wfs tag name.
 * @param {Object} attrs @see xml.attrs.
 * @param {string} inner @see xml.tag.
 */
const wfs = (tagName, attrs, inner) => xml.tag('wfs', tagName, attrs, inner);
/**
 * Ensures the result is an array.
 * @param {Array|Object} maybe a GeoJSON Feature or FeatureCollection object or an array thereof.
 */
const ensureArray = (...maybe)=> (maybe[0].features || [].concat(...maybe))
	.filter((f) => f);
/**
 * Ensures a layer.id format of an input id.
 * @param {string} lyr layer name
 * @param {string} id id, possibly already in correct layer.id format.
 * @returns {string} a correctly-formatted gml:id
 */
const ensureId = (lyr, id) => /\./.exec(id || '') ? id :`${lyr}.${id}`;
/**
 * returns a correctly-formatted typeName
 * @param {string} ns namespace
 * @param {string} layer layer name
 * @param {string} typeName typeName to check
 * @returns {string} a correctly-formatted typeName
 * @throws {Error} if typeName it cannot form a typeName from ns and layer
 */
const ensureTypeName = (ns, layer, typeName) =>{
  if (!typeName && !(ns && layer)){
    throw new Error(`no typename possible: ${JSON.stringify({typeName, ns, layer})}`);
  }
  return typeName || `${ns}:${layer}Type`;
};

/**
 * Stands in for other functions in swich statements, etc. Does nothing.
 * @function 
 */
const pass = () => '';

/**
 * Iterates over the key-value pairs, filtering by a whitelist if available.
 * @param {Array<string>} whitelist a whitelist of property names
 * @param {Object} properties an object mapping property names to values
 * @param {Function} cb a function to call on each (whitelisted key, value) pair
 */
const useWhitelistIfAvailable = (whitelist, properties, cb) =>{
  for (let prop of whitelist || Object.keys(properties)){
    properties[prop] ? cb(prop, properties[prop]) : pass();
  }
};
/**
 * Creates a fes:ResourceId filter from a layername and id
 * @param {string} lyr layer name of the filtered feature
 * @param {string} id feature id
 */
const idFilter = (lyr, id) => `<fes:ResourceId rid="${ensureId(lyr, id)}"/>`;

const unpack = (()=>{
  let featureMembers = new Set(['properties', 'geometry', 'id', 'layer']);
  /**
   * Resolves attributes from feature, then params unless they are normally
   * found in the feature
   * @param {Object} feature a geojson feature
   * @param {Object} params an object of backup / override parameters
   * @param {Array<string>} args parameter names to resolve from feature or params
   * @returns {Object} an object mapping each named parameter to its resolved value
   */
  return (feature, params, ...args) => {
    let results = {};
    for (let arg of args){
      if (arg === 'layer'){
	results[arg] = (params.layer || {}).id || params.layer
	  || (feature.layer||{}).id || feature.layer || '';
      } else if (!featureMembers.has(arg)){
        results[arg] = feature[arg] || params[arg] || '';
      } else {
        results[arg] = params[arg] || feature[arg]  || '';
      }
    }
    return results;
  };
})();

/**
 * Builds a filter from feature ids if one is not already input.
 * @function 
 * @param {string|undefined} filter a possible string filter
 * @param {Array<Object>} features an array of geojson feature objects
 * @param {Object} params an object of backup / override parameters
 * @returns {string} A filter, or the input filter if it was a string.
 */
function ensureFilter(filter, features, params){
  if (!filter){
    filter = '';
    for (let feature of features){
      let layer = unpack(feature, params);
      filter += idFilter(layer, feature.id);
    }
    return `<fes:Filter>${filter}</fes:Filter>`;
  } else {
    return filter;
  }
};
//http://docs.opengeospatial.org/is/09-025r2/09-025r2.html#286
/**
 * Checks the type of the input action
 * @function 
 * @param {string | undefined} action 
 * @returns {Boolean} whether the action is allowed
*/
const ensureAction = (()=>{
  const allowed = new Set(['replace', 'insertBefore', 'insertAfter', 'remove']);
  return (action) => allowed.has(action);
})();

/**
 * An object containing optional named parameters.
 * @typedef {Object} Params
 * @prop {string|undefined} ns an xml namespace alias.
 * @prop {string|Object|undefined} layer a string layer name or {id}, where id
 * is the layer name
 * @prop {string|undefined} geometry_name the name of the feature geometry field.
 * @prop {Object|undefined} properties an object mapping feature field names to feature properties
 * @prop {string|undefined} id a string feature id.
 * @prop {string[]|undefined} whitelist an array of string field names to 
 * use from @see Params.properties
 * @prop {string|undefined} inputFormat inputFormat, as specified at 
 * [OGC 09-025r2 § 7.6.5.4]{@link http://docs.opengeospatial.org/is/09-025r2/09-025r2.html#65}.
 * @prop {string|undefined} srsName srsName, as specified at 
 * [OGC 09-025r2 § 7.6.5.5]{@link http://docs.opengeospatial.org/is/09-025r2/09-025r2.html#66}.
 * if undefined, the gml3 module will default to 'EPSG:4326'.
 * @prop {string|undefined} handle handle parameter, as specified at
 * [OGC 09-025r2 § 7.6.2.6 ]{@link http://docs.opengeospatial.org/is/09-025r2/09-025r2.html#44}
 * @prop {string|undefined} filter a string fes:Filter.
 * @prop {string|undefined} typeName a string specifying the feature type within
 * its namespace. See [09-025r2 § 7.9.2.4.1]{@link http://docs.opengeospatial.org/is/09-025r2/09-025r2.html#90}.
 * @prop {Object|undefined} schemaLocations an object mapping uri to schemalocation
 * @prop {Object|undefined} nsAssignments an object mapping ns to uri
 */

/**
 * A GeoJSON feature with the following optional foreign members (see 
 * [rfc7965 § 6]{@link https://tools.ietf.org/html/rfc7946#section-6}).
 * or an object with some of the following members.
 * Members of Feature will be used over those in Params except for layer, id,
 * and properties.
 * @typedef {Object} Feature
 * @extends Params
 * @property {Object|undefined} geometry a GeoJSON geometry.
 * @property {string|undefined} type 'Feature'.
 * @example 
 * {'id':'tasmania_roads.1', 'typeName':'topp:tasmania_roadsType'} 
 * // can be passed to Delete
 */

/**
 * a GeoJSON FeatureCollection with optional foreign members as in Feature.
 * @typedef {Object} FeatureCollection
 * @extends Feature
 * @property {string} type 'FeatureCollection'.
 * @property {Feature[]} features an array of GeoJSON Features.
 */

/**
 * Turns an array of geojson features into gml:_feature strings describing them.
 * @function 
 * @param {Feature[]} features an array of features to translate to 
 * gml:_features.
 * @param {Params} params an object of backup / override parameters 
 * @returns {string} a gml:_feature string.
 */
function translateFeatures(features, params={}){
  let inner = '';
  let {srsName} = params;
  for (let feature of features){
    //TODO: add whitelist support
    let {ns, layer, geometry_name, properties, id, whitelist} = unpack(
      feature, params, 'ns', 'layer', 'geometry_name', 'properties', 'id', 'whitelist'
    );
    let fields = '';
    if (geometry_name){
      fields += xml.tag(
	ns, geometry_name, {}, Object(__WEBPACK_IMPORTED_MODULE_0_geojson_to_gml_3__["a" /* geomToGml */])(feature.geometry, '', {srsName})
      );
    }
    useWhitelistIfAvailable(
      whitelist, properties,
      (prop, val)=>fields += xml.tag(ns, prop, {}, properties[prop])
    );
    inner += xml.tag(ns, layer, {'gml:id': ensureId(layer, id)}, fields);
  }
  return inner;
}

/**
 * Returns a wfs:Insert tag wrapping a translated feature
 * @function 
 * @param {Feature[]|FeatureCollection|Feature} features Feature(s) to pass to @see translateFeatures
 * @param {Params} params to be passed to @see translateFeatures, with optional
 * inputFormat, srsName, handle for the wfs:Insert tag.
 * @returns {string} a wfs:Insert string.
 */
function Insert(features, params={}){
  features = ensureArray(features);
  let {inputFormat, srsName, handle} = params;
  if (!features.length){
    console.warn('no features supplied');
    return '';
  }
  let toInsert = translateFeatures(features, params);
  return xml.tag('wfs', 'Insert', {inputFormat, srsName, handle}, toInsert);
}

/**
 * Updates the input features in bulk with params.properties or by id.
 * @param {Feature[]|FeatureCollection} features features to update.  These may 
 * pass in geometry_name, properties, and layer (overruled by params) and 
 * ns, layer, srsName (overruling params).
 * @param {Params} params with optional properties, ns, layer, geometry_name,
 * filter, typeName, whitelist.
 * @returns {string} a string wfs:Upate action.
 */
function Update(features, params={}){
  features = ensureArray(features);
  /**
   * makes a wfs:Property string containg a wfs:ValueReference, wfs:Value pair.
   * @function 
   * @memberof Update~
   * @param {string} prop the field/property name
   * @param {string} val the field/property value 
   * @param {string} action one of 'insertBefore', 'insertAfter', 'remove',
   * 'replace'. See [OGC 09-025r2 § 15.2.5.2.1]{@link http://docs.opengeospatial.org/is/09-025r2/09-025r2.html#286}.
   * `action` would delete or modify the order of fields within the remote
   * feature. There is currently no way to input `action,` since wfs:Update's
   * default action, 'replace', is sufficient.
   */
  const makeKvp = (prop, val, action) => wfs(
    'Property', {},
    wfs('ValueReference', {action}, prop) +
      (val !== undefined ? wfs('Value', {}, val): '')
  );
  if (params.properties){
    let {handle, inputFormat, filter, typeName, whitelist} = params;
    let { srsName, ns, layer, geometry_name } = unpack(
      features[0] || {}, params, 'srsName', 'ns', 'layer', 'geometry_name');
    typeName = ensureTypeName(ns, layer, typeName);
    filter = ensureFilter(filter, features, params);
    if (!filter && !features.length){
      console.warn('neither features nor filter supplied');
      return '';
    }
    let fields = '';
    useWhitelistIfAvailable( // TODO: action attr
      whitelist, params.properties, (k, v) => fields += makeKvp(k,v)
    );
    if (geometry_name){
      fields +=  makeKvp(
          geometry_name, xml.tag(
              ns, geometry_name, {}, Object(__WEBPACK_IMPORTED_MODULE_0_geojson_to_gml_3__["a" /* geomToGml */])(params.geometry, '', {srsName})
          )
      );
    }
    return wfs('Update', {inputFormat, srsName, typeName}, fields + filter);
  } else {
    // encapsulate each update in its own Update tag
    return features.map(
      (f) => Update(
        f, Object.assign({}, params, {properties:f.properties})
      )
    ).join('');
  }
}

/**
 * Creates a wfs:Delete action, creating a filter and typeName from feature ids 
 * if none are supplied.
 * @param {Feature[]|FeatureCollection|Feature} features
 * @param {Params} params optional parameter overrides.
 * @param {string} [params.ns] @see Params.ns
 * @param {string|Object} [params.layer] @see Params.layer
 * @param {string} [params.typeName] @see Params.typeName. This will be inferred
 * from feature/params layer and ns if this is left undefined.
 * @param {filter} [params.filter] @see Params.filter.  This will be inferred
 * from feature ids and layer(s) if left undefined (@see ensureFilter).
 * @returns {string} a wfs:Delete string.
 */
function Delete(features, params={}){
  features = ensureArray(features);
  let {filter, typeName} = params; //TODO: recure & encapsulate by typeName
  let {ns, layer} = unpack(features[0] || {}, params, 'layer', 'ns');
  typeName = ensureTypeName(ns, layer, typeName);
  filter = ensureFilter(filter, features, params);
  return wfs('Delete', {typeName}, filter); 
}

/**
 * Returns a string wfs:Replace action.
 * @param {Feature[]|FeatureCollection|Feature} features feature(s) to replace
 * @param {Params} params with optional filter, inputFormat, srsName
 * @returns {string} a string wfs:Replace action.
 */
function Replace(features, params={}){
  features = ensureArray(features);
  let {filter, inputFormat, srsName} = unpack (
    features[0] || {}, params || {}, 'filter', 'inputFormat', 'srsName'
  );
  let replacements = translateFeatures(
    [features[0]].filter((f)=>f),
    params || {srsName}
  );
  filter = ensureFilter(filter, features, params);
  return wfs('Replace', {inputFormat, srsName}, replacements + filter);
}

/**
 * Wraps the input actions in a wfs:Transaction.
 * @param {Object|string[]|string} actions an object mapping {Insert, Update,
 * Delete} to feature(s) to pass to Insert, Update, Delete, or wfs:action 
 * string(s) to wrap in a transaction.
 * @param {Object} params optional srsName, lockId, releaseAction, handle,
 * inputFormat, version, and required nsAssignments, schemaLocations.
 * @returns {string} A wfs:transaction wrapping the input actions.
 * @throws {Error} if `actions` is not an array of strings, a string, or 
 * {@see Insert, @see Update, @see Delete}, where each action are valid inputs 
 * to the eponymous function.
 */
function Transaction(actions, params={}){
  let {
    srsName, lockId, releaseAction, handle, inputFormat, version, // optional
    nsAssignments, schemaLocations // required
  } = params;
  let converter = {Insert, Update, Delete};
  let {insert:toInsert, update:toUpdate, delete:toDelete} = actions || {};
  let finalActions = ''; // processedActions would be more accurate
  
  if (Array.isArray(actions) && actions.every((v) => typeof(v) == 'string')){
    finalActions += actions.join('');
  } else if (typeof(actions) == 'string') {
    finalActions = actions;
  }
    else if ([toInsert, toUpdate, toDelete].some((e) => e)){
    finalActions += Insert(toInsert, params) +
      Update(toUpdate, params) +
      Delete(toDelete, params);
  } else {
    throw new Error(`unexpected input: ${JSON.stringify(actions)}`);
  }
  // generate schemaLocation, xmlns's
  nsAssignments = nsAssignments || {};
  schemaLocations = schemaLocations || {};
  let attrs = generateNsAssignments(nsAssignments, actions);
  attrs['xsi:schemaLocation'] =  generateSchemaLines(params.schemaLocations);
  attrs['service'] = 'WFS';
  attrs['version'] = /2\.0\.\d+/.exec(version || '') ? version : '2.0.0';
  return wfs('Transaction', attrs, finalActions);
}

/**
 * Generates an object to be passed to @see xml.attrs xmlns:ns="uri" definitions for a wfs:Transaction
 * @param {Object} nsAssignments @see Params.nsAssignments
 * @param {string} xml arbitrary xml.
 * @returns {Object} an object mapping each ns to its URI as 'xmlns:ns' : 'URI'.
 * @throws {Error} if any namespace used within `xml` is missing a URI definition
 */
function generateNsAssignments(nsAssignments, xml){
  let attrs = {};
  const makeNsAssignment = (ns, uri) => attrs[`xmlns:${ns}`] = uri;
  for (let ns in nsAssignments){
    makeNsAssignment(ns, nsAssignments[ns]);
  }
  // check all ns's assigned 
  var re = /(<|typeName=")(\w+):/g;
  var arr;
  var allNamespaces = new Set();
  while ((arr = re.exec(xml)) !== null){
    allNamespaces.add(arr[2]);
  }
  if (allNamespaces.has('fes')){
    makeNsAssignment('fes', 'http://www.opengis.net/fes/2.0');
  };
  makeNsAssignment('xsi', 'http://www.w3.org/2001/XMLSchema-instance');
  makeNsAssignment('gml', 'http://www.opengis.net/gml/3.2');
  makeNsAssignment('wfs', 'http://www.opengis.net/wfs/2.0');

  for (let ns of allNamespaces){
    if (!attrs['xmlns:' + ns]){
      throw new Error(`unassigned namespace ${ns}`);
    }
  }
  return attrs;
}

/**
 * Returns a string alternating uri, whitespace, and the uri's schema's location.
 * @param {Object} schemaLocations an object mapping uri:schemalocation
 * @returns {string} a string that is a valid xsi:schemaLocation value.
 */
function generateSchemaLines(schemaLocations={}){
  //TODO: add ns assignment check
  schemaLocations['http://www.opengis.net/wfs/2.0'] = 
    'http://schemas.opengis.net/wfs/2.0/wfs.xsd';
  var schemaLines = [];
  for (let uri in schemaLocations){
    schemaLines.push(`${uri}\n${schemaLocations[uri]}`);
  }
  return schemaLines.join('\n');
}




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return geomToGml; });
/* unused harmony export converter */
/* unused harmony export Point */
/* unused harmony export LineString */
/* unused harmony export LinearRing */
/* unused harmony export Polygon */
/* unused harmony export MultiPoint */
/* unused harmony export MultiLineString */
/* unused harmony export MultiPolygon */
/* unused harmony export setCoordinateOrder */
/* eslint-disable no-console */
/* 
 Note this can only convert what geojson can store: simple feature types, not
 coverage, topology, etc.
 */

/** 
 * geojson coordinates are in longitude/easting, latitude/northing [,elevation]
 * order by [RFC-7946 § 3.1.1]{@link https://tools.ietf.org/html/rfc7946#section-3.1.1}.
 * however, you may use a CRS that follows a latitude/easting,
 * longitude/northing, [,elevation] order.
 */
var coordinateOrder = true;
const setCoordinateOrder = (order) => coordinateOrder = order;
function orderCoords(coords){
  if (coordinateOrder){
    return coords;
  } 
  if (coords[2]){
    return [coords[1], coords[0], coords[2]];
  } 
  return coords.reverse();
}



/** @private*/
function attrs(attrMappings){
  let results = '';
  for (let attrName in attrMappings){
    let value = attrMappings[attrName];
    results += (value ? ` ${attrName}="${value}"` : '');
  }
  return results;
}

/**
 * checks outer scope for gmlId argument/variable
 * @function 
 */
const enforceGmlId = (gmlId) =>{
  if (!gmlId){
    console.warn('No gmlId supplied');
  }
};

/**
 * A handler to compile geometries to multigeometries
 * @function
 * @param {string} name the name of the target multigeometry
 * @param {string} memberName the gml:tag of each multigeometry member.
 * @param {Object[]|Array} geom an array of geojson geometries
 * @param {string|number} gmlId the gml:id of the multigeometry
 * @param {Object} params optional parameters. Omit gmlIds at your own risk, however.
 * @param {string|undefined} params.srsName as string specifying SRS
 * @param {number[]|string[]} params.gmlIds an array of number/string gml:ids of the member geometries.
 * @param {number|string|undefined} params.srsDimension the dimensionality of each coordinate, i.e. 2 or 3.
 * @returns {string} a string containing gml describing the input multigeometry
 * @throws {Error} if a member geometry cannot be converted to gml
 */
function multi(name, memberName, membercb, geom, gmlId, params={}){
  enforceGmlId(gmlId);
  var {srsName, gmlIds} = params;
  let multi = `<gml:${name}${attrs({srsName, 'gml:id':gmlId})}>`;
  multi += `<gml:${memberName}>`;
  geom.forEach(function(member, i){
    let _gmlId = member.id || (gmlIds || [])[i] || '';
    if (name == 'MultiGeometry'){
      let memberType = member.type;
      member = member.coordinates;
      multi += membercb[memberType](member, _gmlId, params);
    } else {
      multi += membercb(member, _gmlId, params);
    }
  });
  multi += `</gml:${memberName}>`;
  return multi + `</gml:${name}>`;
}
/**
 * Converts an input geojson Point geometry to gml
 * @function 
 * @param {number[]} coords the coordinates member of the geojson geometry
 * @param {string|number} gmlId the gml:id
 * @param {Object} params optional parameters
 * @param {string|undefined} params.srsName as string specifying SRS
 * @param {number|string|undefined} params.srsDimension the dimensionality of each coordinate, i.e. 2 or 3.
 * @returns {string} a string containing gml representing the input geometry
 */
function Point(coords, gmlId, params={}){
  enforceGmlId(gmlId);
  var {srsName:srsName, srsDimension:srsDimension} = params;
  return `<gml:Point${attrs({srsName:srsName, 'gml:id': gmlId})}>` +
    `<gml:pos${attrs({srsDimension})}>` +
    orderCoords(coords).join(' ') +
    '</gml:pos>' +
    '</gml:Point>';
}
/**
 * Converts an input geojson LineString geometry to gml
 * @function 
 * @param {number[][]} coords the coordinates member of the geojson geometry
 * @param {string|number} gmlId the gml:id
 * @param {Object} params optional parameters
 * @param {string|undefined} params.srsName as string specifying SRS
 * @param {number|string|undefined} params.srsDimension the dimensionality of each coordinate, i.e. 2 or 3.
 * @returns {string} a string containing gml representing the input geometry
 */
function LineString(coords, gmlId, params={}){
  enforceGmlId(gmlId);
  var {srsName:srsName, srsDimension:srsDimension} = params;
  return `<gml:LineString${attrs({srsName, 'gml:id':gmlId})}>` +
    `<gml:posList${attrs({srsDimension})}>` +
    coords.map((e)=>orderCoords(e).join(' ')).join(' ') + 
    '</gml:posList>' +
    '</gml:LineString>';
}
/**
 * Converts an input geojson LinearRing member of a polygon geometry to gml
 * @function 
 * @param {number[][]} coords the coordinates member of the geojson geometry
 * @param {string|number} gmlId the gml:id
 * @param {Object} params optional parameters
 * @param {string|undefined} params.srsName as string specifying SRS
 * @param {number|string|undefined} params.srsDimension the dimensionality of each coordinate, i.e. 2 or 3.
 * @returns {string} a string containing gml representing the input geometry
 */
function LinearRing(coords, gmlId, params={}){
  enforceGmlId(gmlId);
  var {srsName:srsName, srsDimension:srsDimension} = params;
  return `<gml:LinearRing${attrs({'gml:id':gmlId, srsName})}>` +
    `<gml:posList${attrs({srsDimension})}>` +
    coords.map((e)=>orderCoords(e).join(' ')).join(' ') + 
    '</gml:posList>' + 
    '</gml:LinearRing>';
}
/**
 * Converts an input geojson Polygon geometry to gml
 * @function 
 * @param {number[][][]} coords the coordinates member of the geojson geometry
 * @param {string|number} gmlId the gml:id
 * @param {Object} params optional parameters
 * @param {string|undefined} params.srsName as string specifying SRS
 * @param {number|string|undefined} params.srsDimension the dimensionality of each coordinate, i.e. 2 or 3.
 * @returns {string} a string containing gml representing the input geometry
 */
function Polygon(coords, gmlId, params={}){
  enforceGmlId(gmlId);
  // geom.coordinates are arrays of LinearRings
  var {srsName} = params;
  let polygon = `<gml:Polygon${attrs({srsName, 'gml:id':gmlId})}>` +
        '<gml:exterior>' +
        LinearRing(coords[0]) +
        '</gml:exterior>';
  if (coords.length >= 2){
    for (let linearRing of coords.slice(1)){
      polygon += '<gml:interior>' +
        LinearRing(linearRing) + 
        '</gml:interior>';
    }
  }
  polygon += '</gml:Polygon>';
  return polygon;
}
/**
 * Converts an input geojson MultiPoint geometry to gml
 * @function
 * @param {number[][]} coords the coordinates member of the geojson geometry
 * @param {string|number} gmlId the gml:id
 * @param {Object} params optional parameters
 * @param {string|undefined} params.srsName as string specifying SRS
 * @param {number|string|undefined} params.srsDimension the dimensionality of each coordinate, i.e. 2 or 3.
 * @returns {string} a string containing gml representing the input geometry
 */
function MultiPoint(coords, gmlId, params={}){
  enforceGmlId(gmlId);
  return multi('MultiPoint', 'pointMembers', Point, coords, gmlId, params);
}

/**
 * Converts an input geojson MultiLineString geometry to gml
 * @function 
 * @param {number[][][]} coords the coordinates member of the geojson geometry
 * @param {string|number} gmlId the gml:id
 * @param {Object} params optional parameters
 * @param {string|undefined} params.srsName as string specifying SRS
 * @param {number|string|undefined} params.srsDimension the dimensionality of each coordinate, i.e. 2 or 3.
 * @returns {string} a string containing gml representing the input geometry
 */
function MultiLineString(coords, gmlId, params={}){
  return multi('MultiCurve', 'curveMembers', LineString, coords, gmlId, params);
}
/**
 * Converts an input geojson MultiPolygon geometry to gml
 * @function 
 * @param {number[][][][]} coords the coordinates member of the geojson geometry
 * @param {string|number} gmlId the gml:id
 * @param {Object} params optional parameters
 * @param {string|undefined} params.srsName as string specifying SRS
 * @param {number|string|undefined} params.srsDimension the dimensionality of each coordinate, i.e. 2 or 3.
 * @returns {string} a string containing gml representing the input geometry
 */
function MultiPolygon(coords, gmlId, params={}){
  return multi('MultiSurface', 'surfaceMembers', Polygon, coords, gmlId, params);
}
/** @const 
 * @desc a namespace to switch between geojson-handling functions by geojson.type
 */
const converter = {
  Point, LineString, LinearRing, Polygon, MultiPoint, MultiLineString,
  MultiPolygon, GeometryCollection
};
/**
 * Converts an input geojson GeometryCollection geometry to gml
 * @function 
 * @param {Object[]} coords the coordinates member of the geojson geometry
 * @param {string|number} gmlId the gml:id
 * @param {Object} params optional parameters
 * @param {string|undefined} params.srsName as string specifying SRS
 * @param {number|string|undefined} params.srsDimension the dimensionality of each coordinate, i.e. 2 or 3.
 * @returns {string} a string containing gml representing the input geometry
 */
function GeometryCollection(geoms, gmlId, params={}){
  return multi('MultiGeometry', 'geometryMembers', converter,
               geoms, gmlId, params);
}

/**
 * Translates any geojson geometry into GML 3.2.1
 * @public 
 * @function 
 * @param {Object} geom a geojson geometry object
 * @param {Array|undefined} geom.coordinates the nested array of coordinates forming the geometry
 * @param {Object[]|undefined} geom.geometries for a GeometryCollection only, the array of member geometry objects
 * @param {string|number} gmlId the gml:id of the geometry
 * @param {object} params optional parameters
 * @param {string|undefined} params.srsName a string specifying the SRS
 * @param {string|undefined} params.srsDimension the dimensionality of each coordinate, i.e. 2 or 3.
 * @param {number[]|string[]|undefined} gmlIds  an array of number/string gml:ids of the member geometries of a multigeometry.
 * @returns {string} a valid gml string describing the input geojson geometry
 */
function geomToGml(geom, gmlId, params){
  return converter[geom.type](
    geom.coordinates || geom.geometries,
    gmlId,
    params
  );
}




/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTA4MzRiNjNlNzYyMWVhNWMwODciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdHVyZi9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZW9qc29uLXRvLXdmcy10LTIvZ2VvanNvbi10by13ZnN0LTItZXM2LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZW9qc29uLXRvLWdtbC0zL2dlb21Ub0dtbC0zLjIuMS1lczYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFDQTtBQUNBO0FBQ2M7QUFDZDs7QUFFQTs7QUFFQSw4Q0FBOEMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxtQkFBbUIsWUFBWTtBQUM1RiwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLGdCQUFnQixvQ0FBb0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7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V0FBVyxPQUFPO0FBQ2xCLFdBQVcsaUJBQWlCO0FBQzVCLFdBQVcsaUJBQWlCO0FBQzVCLFdBQVcsNEJBQTRCO0FBQ3ZDLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1BIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDEwODM0YjYzZTc2MjFlYTVjMDg3IiwiLyogZ2xvYmFsIEwsIE1CX0FDQ0VTU19UT0tFTiwgTVpfQVBJX0tFWSAqL1xuLy8gc2V0IHVwIHRoZSBtYXBcbi8vIHN0YXRlIGFuZCBtYXAgd2lsbCBiZSBnbG9iYWxzIGZvciB0aGUgbW9tZW50IGZvciBlYXNlIG9mIGRldmVsb3BtZW50XG5pbXBvcnQge3BvaW50fSBmcm9tICdAdHVyZi9oZWxwZXJzJztcbmltcG9ydCAqIGFzIHdmc3QgZnJvbSAnZ2VvanNvbi10by13ZnMtdC0yJztcblxuY29uc3QgbWFwID0gbmV3IEwubWFwKCdtYXAnKS5zZXRWaWV3KFsgNDIuMzYsIC03MS4wNTg5XSwgMTMpO1xuXG5MLnRpbGVMYXllcignaHR0cHM6Ly9hcGkudGlsZXMubWFwYm94LmNvbS92NC97aWR9L3t6fS97eH0ve3l9LnBuZz9hY2Nlc3NfdG9rZW49e2FjY2Vzc1Rva2VufScsIHtcbiAgYXR0cmlidXRpb246ICdNYXAgZGF0YSAmY29weTsgPGEgaHJlZj1cImh0dHA6Ly9vcGVuc3RyZWV0bWFwLm9yZ1wiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycywgPGEgaHJlZj1cImh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzIuMC9cIj5DQy1CWS1TQTwvYT4sIEltYWdlcnkgwqkgPGEgaHJlZj1cImh0dHA6Ly9tYXBib3guY29tXCI+TWFwYm94PC9hPicsXG4gIG1heFpvb206IDE4LFxuICBpZDogJ21hcGJveC5zdHJlZXRzJyxcbiAgYWNjZXNzVG9rZW46IE1CX0FDQ0VTU19UT0tFTlxufSkuYWRkVG8obWFwKTtcblxuY29uc3QgZ2VvY29kZXIgPSBMLmNvbnRyb2wuZ2VvY29kZXIoTVpfQVBJX0tFWSwge1xuICBwbGFjZWhvbGRlcjogJ1NlYXJjaCB5b3VyIHBsYWNlIG9mIHJlc2lkZW5jZSdcbn0pLmFkZFRvKG1hcCk7XG5cbnZhciBjb29yZGluYXRlcztcbnZhciBtYXJrZXI7XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgcmVzcG9uc2UgY29vcmRpbmF0ZXM7XG4gKiBAcGFyYW0gIHtOdW1iZXJbXXxPYmplY3R9IHBvaW50IGEgd2dzODQgY29vcmRpbmF0ZSBhcnJheSBvciB7bG5nLCBsYXR9XG4gKiBAcmV0dXJuIHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiB1cGRhdGVDb29yZGluYXRlcyhwb2ludCl7XG4gIGNvb3JkaW5hdGVzID0gcG9pbnQ7XG4gIGlmICghbWFya2VyKXtcbiAgICBtYXJrZXIgPSBMLm1hcmtlcihjb29yZGluYXRlcykuYWRkVG8obWFwKTtcbiAgfSBlbHNlIHtcbiAgICBtYXJrZXIuc2V0TGF0TG5nKGNvb3JkaW5hdGVzKTtcbiAgfVxufVxuXG5jb25zdCBnZXRDb29yZGluYXRlcyA9ICgpPT5jb29yZGluYXRlcztcblxuXG5tYXAub24oJ2NsaWNrJywgZSA9PiB1cGRhdGVDb29yZGluYXRlcyhlLmxhdGxuZykpO1xuZ2VvY29kZXIub24oJ3NlbGVjdCcsIGUgPT4gdXBkYXRlQ29vcmRpbmF0ZXMoXG4gIGUuZmVhdHVyZS5nZW9tZXRyeS5jb29yZGluYXRlcy5yZXZlcnNlKClcbikpO1xuXG5jb25zdCBnZXRSZXNwb25zZSA9IChmdW5jdGlvbiBmb3JtTGlzdGVuQ2xvc3VyZSgpe1xuICBsZXQgcmVzcG9uc2UgPSAnJztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZT0+e1xuICAgIHJlc3BvbnNlID0gZS50YXJnZXQudmFsdWU7XG4gIH0pO1xuICByZXR1cm4gKCk9PiByZXNwb25zZTtcbn0pKCk7XG5cbmNvbnN0IHBvc3QgPSAoYm9keSkgPT4gZmV0Y2goR0VPU0VSVkVSX1VSTCwge1xuICBtZXRob2Q6J1BPU1QnLCBib2R5XG59KTsgLy8gbWlnaHQgbmVlZCBoZWFkZXJzXG5cbmZ1bmN0aW9uIHN1Ym1pdCgpe1xuICBjb25zdCByZXNwb25zZSA9IGdldFJlc3BvbnNlKCk7XG4gIGxldCBjb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzKCk7XG4gIGlmIChyZXNwb25zZSAmJiBjb29yZGluYXRlcyl7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNvb3JkaW5hdGVzKSl7XG4gICAgICBjb29yZGluYXRlcyA9IFtjb29yZGluYXRlcy5sbmcsIGNvb3JkaW5hdGVzLmxhdF07XG4gICAgfVxuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gd2ZzdC5UcmFuc2FjdGlvbihcbiAgICAgIHdmc3QuSW5zZXJ0KFxuICAgICAgICBwb2ludChjb29yZGluYXRlcywge3Jlc3BvbnNlfSlcbiAgICAgICksXG4gICAgICB7LyogbmFtZXNwYWNlKi99XG4gICAgKTtcbiAgICByZXR1cm4gcG9zdCh0cmFuc2FjdGlvbilcbiAgICAgIC50aGVuKCBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKSAvL1RPRE86IGNoZWNrIHRoZSByZXNwb25zZSBmb3IgaW5zZXJ0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3VjY2Vzcy5cbiAgICAgIC5jYXRjaChlcnI9PntcbiAgICAgICAgY29uc29sZS5lcnJvcigncG9zdCBmYWlsdXJlOiAnLCBlcnIpXG4gICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBhbGVydCgnUGxlYXNlIGVudGVyIGJvdGggY29vcmRpbmF0ZXMgYW5kIGEgcmVzcG9uc2UgdG8gc3VibWl0IHlvdXIgYW5zd2VyJyk7XG4gIH1cbn1cblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0KTtcbmJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogRWFydGggUmFkaXVzIHVzZWQgd2l0aCB0aGUgSGFydmVzaW5lIGZvcm11bGEgYW5kIGFwcHJveGltYXRlcyB1c2luZyBhIHNwaGVyaWNhbCAobm9uLWVsbGlwc29pZCkgRWFydGguXG4gKi9cbmV4cG9ydCB2YXIgZWFydGhSYWRpdXMgPSA2MzcxMDA4Ljg7XG5cbi8qKlxuICogVW5pdCBvZiBtZWFzdXJlbWVudCBmYWN0b3JzIHVzaW5nIGEgc3BoZXJpY2FsIChub24tZWxsaXBzb2lkKSBlYXJ0aCByYWRpdXMuXG4gKi9cbmV4cG9ydCB2YXIgZmFjdG9ycyA9IHtcbiAgICBtZXRlcnM6IGVhcnRoUmFkaXVzLFxuICAgIG1ldHJlczogZWFydGhSYWRpdXMsXG4gICAgbWlsbGltZXRlcnM6IGVhcnRoUmFkaXVzICogMTAwMCxcbiAgICBtaWxsaW1ldHJlczogZWFydGhSYWRpdXMgKiAxMDAwLFxuICAgIGNlbnRpbWV0ZXJzOiBlYXJ0aFJhZGl1cyAqIDEwMCxcbiAgICBjZW50aW1ldHJlczogZWFydGhSYWRpdXMgKiAxMDAsXG4gICAga2lsb21ldGVyczogZWFydGhSYWRpdXMgLyAxMDAwLFxuICAgIGtpbG9tZXRyZXM6IGVhcnRoUmFkaXVzIC8gMTAwMCxcbiAgICBtaWxlczogZWFydGhSYWRpdXMgLyAxNjA5LjM0NCxcbiAgICBuYXV0aWNhbG1pbGVzOiBlYXJ0aFJhZGl1cyAvIDE4NTIsXG4gICAgaW5jaGVzOiBlYXJ0aFJhZGl1cyAqIDM5LjM3MCxcbiAgICB5YXJkczogZWFydGhSYWRpdXMgLyAxLjA5MzYsXG4gICAgZmVldDogZWFydGhSYWRpdXMgKiAzLjI4MDg0LFxuICAgIHJhZGlhbnM6IDEsXG4gICAgZGVncmVlczogZWFydGhSYWRpdXMgLyAxMTEzMjUsXG59O1xuXG4vKipcbiAqIFVuaXRzIG9mIG1lYXN1cmVtZW50IGZhY3RvcnMgYmFzZWQgb24gMSBtZXRlci5cbiAqL1xuZXhwb3J0IHZhciB1bml0c0ZhY3RvcnMgPSB7XG4gICAgbWV0ZXJzOiAxLFxuICAgIG1ldHJlczogMSxcbiAgICBtaWxsaW1ldGVyczogMTAwMCxcbiAgICBtaWxsaW1ldHJlczogMTAwMCxcbiAgICBjZW50aW1ldGVyczogMTAwLFxuICAgIGNlbnRpbWV0cmVzOiAxMDAsXG4gICAga2lsb21ldGVyczogMSAvIDEwMDAsXG4gICAga2lsb21ldHJlczogMSAvIDEwMDAsXG4gICAgbWlsZXM6IDEgLyAxNjA5LjM0NCxcbiAgICBuYXV0aWNhbG1pbGVzOiAxIC8gMTg1MixcbiAgICBpbmNoZXM6IDM5LjM3MCxcbiAgICB5YXJkczogMSAvIDEuMDkzNixcbiAgICBmZWV0OiAzLjI4MDg0LFxuICAgIHJhZGlhbnM6IDEgLyBlYXJ0aFJhZGl1cyxcbiAgICBkZWdyZWVzOiAxIC8gMTExMzI1LFxufTtcblxuLyoqXG4gKiBBcmVhIG9mIG1lYXN1cmVtZW50IGZhY3RvcnMgYmFzZWQgb24gMSBzcXVhcmUgbWV0ZXIuXG4gKi9cbmV4cG9ydCB2YXIgYXJlYUZhY3RvcnMgPSB7XG4gICAgbWV0ZXJzOiAxLFxuICAgIG1ldHJlczogMSxcbiAgICBtaWxsaW1ldGVyczogMTAwMDAwMCxcbiAgICBtaWxsaW1ldHJlczogMTAwMDAwMCxcbiAgICBjZW50aW1ldGVyczogMTAwMDAsXG4gICAgY2VudGltZXRyZXM6IDEwMDAwLFxuICAgIGtpbG9tZXRlcnM6IDAuMDAwMDAxLFxuICAgIGtpbG9tZXRyZXM6IDAuMDAwMDAxLFxuICAgIGFjcmVzOiAwLjAwMDI0NzEwNSxcbiAgICBtaWxlczogMy44NmUtNyxcbiAgICB5YXJkczogMS4xOTU5OTAwNDYsXG4gICAgZmVldDogMTAuNzYzOTEwNDE3LFxuICAgIGluY2hlczogMTU1MC4wMDMxMDAwMDZcbn07XG5cbi8qKlxuICogV3JhcHMgYSBHZW9KU09OIHtAbGluayBHZW9tZXRyeX0gaW4gYSBHZW9KU09OIHtAbGluayBGZWF0dXJlfS5cbiAqXG4gKiBAbmFtZSBmZWF0dXJlXG4gKiBAcGFyYW0ge0dlb21ldHJ5fSBnZW9tZXRyeSBpbnB1dCBnZW9tZXRyeVxuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBhbiBPYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFkZCBhcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtiYm94XSBCQm94IFt3ZXN0LCBzb3V0aCwgZWFzdCwgbm9ydGhdXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtpZF0gSWRlbnRpZmllclxuICogQHJldHVybnMge0ZlYXR1cmV9IGEgR2VvSlNPTiBGZWF0dXJlXG4gKiBAZXhhbXBsZVxuICogdmFyIGdlb21ldHJ5ID0ge1xuICogICBcInR5cGVcIjogXCJQb2ludFwiLFxuICogICBcImNvb3JkaW5hdGVzXCI6IFsxMTAsIDUwXVxuICogfTtcbiAqXG4gKiB2YXIgZmVhdHVyZSA9IHR1cmYuZmVhdHVyZShnZW9tZXRyeSk7XG4gKlxuICogLy89ZmVhdHVyZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmVhdHVyZShnZW9tZXRyeSwgcHJvcGVydGllcywgYmJveCwgaWQpIHtcbiAgICBpZiAoZ2VvbWV0cnkgPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKCdnZW9tZXRyeSBpcyByZXF1aXJlZCcpO1xuICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMuY29uc3RydWN0b3IgIT09IE9iamVjdCkgdGhyb3cgbmV3IEVycm9yKCdwcm9wZXJ0aWVzIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG4gICAgaWYgKGJib3gpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGJib3gpKSB0aHJvdyBuZXcgRXJyb3IoJ2Jib3ggbXVzdCBiZSBhbiBBcnJheScpO1xuICAgICAgICBpZiAoYmJveC5sZW5ndGggIT09IDQpIHRocm93IG5ldyBFcnJvcignYmJveCBtdXN0IGJlIGFuIEFycmF5IG9mIDQgbnVtYmVycycpO1xuICAgIH1cbiAgICBpZiAoaWQgJiYgWydzdHJpbmcnLCAnbnVtYmVyJ10uaW5kZXhPZih0eXBlb2YgaWQpID09PSAtMSkgdGhyb3cgbmV3IEVycm9yKCdpZCBtdXN0IGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nJyk7XG5cbiAgICB2YXIgZmVhdCA9IHt0eXBlOiAnRmVhdHVyZSd9O1xuICAgIGlmIChpZCkgZmVhdC5pZCA9IGlkO1xuICAgIGlmIChiYm94KSBmZWF0LmJib3ggPSBiYm94O1xuICAgIGZlYXQucHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307XG4gICAgZmVhdC5nZW9tZXRyeSA9IGdlb21ldHJ5O1xuICAgIHJldHVybiBmZWF0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBHZW9KU09OIHtAbGluayBHZW9tZXRyeX0gZnJvbSBhIEdlb21ldHJ5IHN0cmluZyB0eXBlICYgY29vcmRpbmF0ZXMuXG4gKiBGb3IgR2VvbWV0cnlDb2xsZWN0aW9uIHR5cGUgdXNlIGBoZWxwZXJzLmdlb21ldHJ5Q29sbGVjdGlvbmBcbiAqXG4gKiBAbmFtZSBnZW9tZXRyeVxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgR2VvbWV0cnkgVHlwZVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjb29yZGluYXRlcyBDb29yZGluYXRlc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbYmJveF0gQkJveCBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXVxuICogQHJldHVybnMge0dlb21ldHJ5fSBhIEdlb0pTT04gR2VvbWV0cnlcbiAqIEBleGFtcGxlXG4gKiB2YXIgdHlwZSA9ICdQb2ludCc7XG4gKiB2YXIgY29vcmRpbmF0ZXMgPSBbMTEwLCA1MF07XG4gKlxuICogdmFyIGdlb21ldHJ5ID0gdHVyZi5nZW9tZXRyeSh0eXBlLCBjb29yZGluYXRlcyk7XG4gKlxuICogLy89Z2VvbWV0cnlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlb21ldHJ5KHR5cGUsIGNvb3JkaW5hdGVzLCBiYm94KSB7XG4gICAgLy8gVmFsaWRhdGlvblxuICAgIGlmICghdHlwZSkgdGhyb3cgbmV3IEVycm9yKCd0eXBlIGlzIHJlcXVpcmVkJyk7XG4gICAgaWYgKCFjb29yZGluYXRlcykgdGhyb3cgbmV3IEVycm9yKCdjb29yZGluYXRlcyBpcyByZXF1aXJlZCcpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjb29yZGluYXRlcykpIHRocm93IG5ldyBFcnJvcignY29vcmRpbmF0ZXMgbXVzdCBiZSBhbiBBcnJheScpO1xuICAgIGlmIChiYm94ICYmIGJib3gubGVuZ3RoICE9PSA0KSB0aHJvdyBuZXcgRXJyb3IoJ2Jib3ggbXVzdCBiZSBhbiBBcnJheSBvZiA0IG51bWJlcnMnKTtcblxuICAgIHZhciBnZW9tO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ1BvaW50JzogZ2VvbSA9IHBvaW50KGNvb3JkaW5hdGVzKS5nZW9tZXRyeTsgYnJlYWs7XG4gICAgY2FzZSAnTGluZVN0cmluZyc6IGdlb20gPSBsaW5lU3RyaW5nKGNvb3JkaW5hdGVzKS5nZW9tZXRyeTsgYnJlYWs7XG4gICAgY2FzZSAnUG9seWdvbic6IGdlb20gPSBwb2x5Z29uKGNvb3JkaW5hdGVzKS5nZW9tZXRyeTsgYnJlYWs7XG4gICAgY2FzZSAnTXVsdGlQb2ludCc6IGdlb20gPSBtdWx0aVBvaW50KGNvb3JkaW5hdGVzKS5nZW9tZXRyeTsgYnJlYWs7XG4gICAgY2FzZSAnTXVsdGlMaW5lU3RyaW5nJzogZ2VvbSA9IG11bHRpTGluZVN0cmluZyhjb29yZGluYXRlcykuZ2VvbWV0cnk7IGJyZWFrO1xuICAgIGNhc2UgJ011bHRpUG9seWdvbic6IGdlb20gPSBtdWx0aVBvbHlnb24oY29vcmRpbmF0ZXMpLmdlb21ldHJ5OyBicmVhaztcbiAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IodHlwZSArICcgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgICBpZiAoYmJveCkgZ2VvbS5iYm94ID0gYmJveDtcbiAgICByZXR1cm4gZ2VvbTtcbn1cblxuLyoqXG4gKiBUYWtlcyBjb29yZGluYXRlcyBhbmQgcHJvcGVydGllcyAob3B0aW9uYWwpIGFuZCByZXR1cm5zIGEgbmV3IHtAbGluayBQb2ludH0gZmVhdHVyZS5cbiAqXG4gKiBAbmFtZSBwb2ludFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjb29yZGluYXRlcyBsb25naXR1ZGUsIGxhdGl0dWRlIHBvc2l0aW9uIChlYWNoIGluIGRlY2ltYWwgZGVncmVlcylcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcHJvcGVydGllcz17fV0gYW4gT2JqZWN0IG9mIGtleS12YWx1ZSBwYWlycyB0byBhZGQgYXMgcHJvcGVydGllc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbYmJveF0gQkJveCBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbaWRdIElkZW50aWZpZXJcbiAqIEByZXR1cm5zIHtGZWF0dXJlPFBvaW50Pn0gYSBQb2ludCBmZWF0dXJlXG4gKiBAZXhhbXBsZVxuICogdmFyIHBvaW50ID0gdHVyZi5wb2ludChbLTc1LjM0MywgMzkuOTg0XSk7XG4gKlxuICogLy89cG9pbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvaW50KGNvb3JkaW5hdGVzLCBwcm9wZXJ0aWVzLCBiYm94LCBpZCkge1xuICAgIGlmICghY29vcmRpbmF0ZXMpIHRocm93IG5ldyBFcnJvcignTm8gY29vcmRpbmF0ZXMgcGFzc2VkJyk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNvb3JkaW5hdGVzKSkgdGhyb3cgbmV3IEVycm9yKCdDb29yZGluYXRlcyBtdXN0IGJlIGFuIEFycmF5Jyk7XG4gICAgaWYgKGNvb3JkaW5hdGVzLmxlbmd0aCA8IDIpIHRocm93IG5ldyBFcnJvcignQ29vcmRpbmF0ZXMgbXVzdCBiZSBhdCBsZWFzdCAyIG51bWJlcnMgbG9uZycpO1xuICAgIGlmICghaXNOdW1iZXIoY29vcmRpbmF0ZXNbMF0pIHx8ICFpc051bWJlcihjb29yZGluYXRlc1sxXSkpIHRocm93IG5ldyBFcnJvcignQ29vcmRpbmF0ZXMgbXVzdCBjb250YWluIG51bWJlcnMnKTtcblxuICAgIHJldHVybiBmZWF0dXJlKHtcbiAgICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzXG4gICAgfSwgcHJvcGVydGllcywgYmJveCwgaWQpO1xufVxuXG4vKipcbiAqIFRha2VzIGFuIGFycmF5IG9mIExpbmVhclJpbmdzIGFuZCBvcHRpb25hbGx5IGFuIHtAbGluayBPYmplY3R9IHdpdGggcHJvcGVydGllcyBhbmQgcmV0dXJucyBhIHtAbGluayBQb2x5Z29ufSBmZWF0dXJlLlxuICpcbiAqIEBuYW1lIHBvbHlnb25cbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8QXJyYXk8bnVtYmVyPj4+fSBjb29yZGluYXRlcyBhbiBhcnJheSBvZiBMaW5lYXJSaW5nc1xuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBhbiBPYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFkZCBhcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtiYm94XSBCQm94IFt3ZXN0LCBzb3V0aCwgZWFzdCwgbm9ydGhdXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtpZF0gSWRlbnRpZmllclxuICogQHJldHVybnMge0ZlYXR1cmU8UG9seWdvbj59IGEgUG9seWdvbiBmZWF0dXJlXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgYSBMaW5lYXJSaW5nIG9mIHRoZSBwb2x5Z29uIGhhcyB0b28gZmV3IHBvc2l0aW9uc1xuICogb3IgaWYgYSBMaW5lYXJSaW5nIG9mIHRoZSBQb2x5Z29uIGRvZXMgbm90IGhhdmUgbWF0Y2hpbmcgUG9zaXRpb25zIGF0IHRoZSBiZWdpbm5pbmcgJiBlbmQuXG4gKiBAZXhhbXBsZVxuICogdmFyIHBvbHlnb24gPSB0dXJmLnBvbHlnb24oW1tcbiAqICAgWy0yLjI3NTU0MywgNTMuNDY0NTQ3XSxcbiAqICAgWy0yLjI3NTU0MywgNTMuNDg5MjcxXSxcbiAqICAgWy0yLjIxNTExOCwgNTMuNDg5MjcxXSxcbiAqICAgWy0yLjIxNTExOCwgNTMuNDY0NTQ3XSxcbiAqICAgWy0yLjI3NTU0MywgNTMuNDY0NTQ3XVxuICogXV0sIHsgbmFtZTogJ3BvbHkxJywgcG9wdWxhdGlvbjogNDAwfSk7XG4gKlxuICogLy89cG9seWdvblxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9seWdvbihjb29yZGluYXRlcywgcHJvcGVydGllcywgYmJveCwgaWQpIHtcbiAgICBpZiAoIWNvb3JkaW5hdGVzKSB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvb3JkaW5hdGVzIHBhc3NlZCcpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcmluZyA9IGNvb3JkaW5hdGVzW2ldO1xuICAgICAgICBpZiAocmluZy5sZW5ndGggPCA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VhY2ggTGluZWFyUmluZyBvZiBhIFBvbHlnb24gbXVzdCBoYXZlIDQgb3IgbW9yZSBQb3NpdGlvbnMuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByaW5nW3JpbmcubGVuZ3RoIC0gMV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGZpcnN0IHBvaW50IG9mIFBvbHlnb24gY29udGFpbnMgdHdvIG51bWJlcnNcbiAgICAgICAgICAgIGlmIChpID09PSAwICYmIGogPT09IDAgJiYgIWlzTnVtYmVyKHJpbmdbMF1bMF0pIHx8ICFpc051bWJlcihyaW5nWzBdWzFdKSkgdGhyb3cgbmV3IEVycm9yKCdDb29yZGluYXRlcyBtdXN0IGNvbnRhaW4gbnVtYmVycycpO1xuICAgICAgICAgICAgaWYgKHJpbmdbcmluZy5sZW5ndGggLSAxXVtqXSAhPT0gcmluZ1swXVtqXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmlyc3QgYW5kIGxhc3QgUG9zaXRpb24gYXJlIG5vdCBlcXVpdmFsZW50LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZlYXR1cmUoe1xuICAgICAgICB0eXBlOiAnUG9seWdvbicsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBjb29yZGluYXRlc1xuICAgIH0sIHByb3BlcnRpZXMsIGJib3gsIGlkKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEge0BsaW5rIExpbmVTdHJpbmd9IGJhc2VkIG9uIGFcbiAqIGNvb3JkaW5hdGUgYXJyYXkuIFByb3BlcnRpZXMgY2FuIGJlIGFkZGVkIG9wdGlvbmFsbHkuXG4gKlxuICogQG5hbWUgbGluZVN0cmluZ1xuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gY29vcmRpbmF0ZXMgYW4gYXJyYXkgb2YgUG9zaXRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gW3Byb3BlcnRpZXM9e31dIGFuIE9iamVjdCBvZiBrZXktdmFsdWUgcGFpcnMgdG8gYWRkIGFzIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2Jib3hdIEJCb3ggW3dlc3QsIHNvdXRoLCBlYXN0LCBub3J0aF1cbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2lkXSBJZGVudGlmaWVyXG4gKiBAcmV0dXJucyB7RmVhdHVyZTxMaW5lU3RyaW5nPn0gYSBMaW5lU3RyaW5nIGZlYXR1cmVcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiBubyBjb29yZGluYXRlcyBhcmUgcGFzc2VkXG4gKiBAZXhhbXBsZVxuICogdmFyIGxpbmVzdHJpbmcxID0gdHVyZi5saW5lU3RyaW5nKFtcbiAqICAgWy0yMS45NjQ0MTYsIDY0LjE0ODIwM10sXG4gKiAgIFstMjEuOTU2MTc2LCA2NC4xNDEzMTZdLFxuICogICBbLTIxLjkzOTAxLCA2NC4xMzU5MjRdLFxuICogICBbLTIxLjkyNzMzNywgNjQuMTM2NjczXVxuICogXSk7XG4gKiB2YXIgbGluZXN0cmluZzIgPSB0dXJmLmxpbmVTdHJpbmcoW1xuICogICBbLTIxLjkyOTA1NCwgNjQuMTI3OTg1XSxcbiAqICAgWy0yMS45MTI5MTgsIDY0LjEzNDcyNl0sXG4gKiAgIFstMjEuOTE2MDA3LCA2NC4xNDEwMTZdLFxuICogICBbLTIxLjkzMDA4NCwgNjQuMTQ0NDZdXG4gKiBdLCB7bmFtZTogJ2xpbmUgMScsIGRpc3RhbmNlOiAxNDV9KTtcbiAqXG4gKiAvLz1saW5lc3RyaW5nMVxuICpcbiAqIC8vPWxpbmVzdHJpbmcyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW5lU3RyaW5nKGNvb3JkaW5hdGVzLCBwcm9wZXJ0aWVzLCBiYm94LCBpZCkge1xuICAgIGlmICghY29vcmRpbmF0ZXMpIHRocm93IG5ldyBFcnJvcignTm8gY29vcmRpbmF0ZXMgcGFzc2VkJyk7XG4gICAgaWYgKGNvb3JkaW5hdGVzLmxlbmd0aCA8IDIpIHRocm93IG5ldyBFcnJvcignQ29vcmRpbmF0ZXMgbXVzdCBiZSBhbiBhcnJheSBvZiB0d28gb3IgbW9yZSBwb3NpdGlvbnMnKTtcbiAgICAvLyBDaGVjayBpZiBmaXJzdCBwb2ludCBvZiBMaW5lU3RyaW5nIGNvbnRhaW5zIHR3byBudW1iZXJzXG4gICAgaWYgKCFpc051bWJlcihjb29yZGluYXRlc1swXVsxXSkgfHwgIWlzTnVtYmVyKGNvb3JkaW5hdGVzWzBdWzFdKSkgdGhyb3cgbmV3IEVycm9yKCdDb29yZGluYXRlcyBtdXN0IGNvbnRhaW4gbnVtYmVycycpO1xuXG4gICAgcmV0dXJuIGZlYXR1cmUoe1xuICAgICAgICB0eXBlOiAnTGluZVN0cmluZycsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBjb29yZGluYXRlc1xuICAgIH0sIHByb3BlcnRpZXMsIGJib3gsIGlkKTtcbn1cblxuLyoqXG4gKiBUYWtlcyBvbmUgb3IgbW9yZSB7QGxpbmsgRmVhdHVyZXxGZWF0dXJlc30gYW5kIGNyZWF0ZXMgYSB7QGxpbmsgRmVhdHVyZUNvbGxlY3Rpb259LlxuICpcbiAqIEBuYW1lIGZlYXR1cmVDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0ZlYXR1cmVbXX0gZmVhdHVyZXMgaW5wdXQgZmVhdHVyZXNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2Jib3hdIEJCb3ggW3dlc3QsIHNvdXRoLCBlYXN0LCBub3J0aF1cbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2lkXSBJZGVudGlmaWVyXG4gKiBAcmV0dXJucyB7RmVhdHVyZUNvbGxlY3Rpb259IGEgRmVhdHVyZUNvbGxlY3Rpb24gb2YgaW5wdXQgZmVhdHVyZXNcbiAqIEBleGFtcGxlXG4gKiB2YXIgZmVhdHVyZXMgPSBbXG4gKiAgdHVyZi5wb2ludChbLTc1LjM0MywgMzkuOTg0XSwge25hbWU6ICdMb2NhdGlvbiBBJ30pLFxuICogIHR1cmYucG9pbnQoWy03NS44MzMsIDM5LjI4NF0sIHtuYW1lOiAnTG9jYXRpb24gQid9KSxcbiAqICB0dXJmLnBvaW50KFstNzUuNTM0LCAzOS4xMjNdLCB7bmFtZTogJ0xvY2F0aW9uIEMnfSlcbiAqIF07XG4gKlxuICogdmFyIGNvbGxlY3Rpb24gPSB0dXJmLmZlYXR1cmVDb2xsZWN0aW9uKGZlYXR1cmVzKTtcbiAqXG4gKiAvLz1jb2xsZWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmZWF0dXJlQ29sbGVjdGlvbihmZWF0dXJlcywgYmJveCwgaWQpIHtcbiAgICBpZiAoIWZlYXR1cmVzKSB0aHJvdyBuZXcgRXJyb3IoJ05vIGZlYXR1cmVzIHBhc3NlZCcpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShmZWF0dXJlcykpIHRocm93IG5ldyBFcnJvcignZmVhdHVyZXMgbXVzdCBiZSBhbiBBcnJheScpO1xuICAgIGlmIChiYm94ICYmIGJib3gubGVuZ3RoICE9PSA0KSB0aHJvdyBuZXcgRXJyb3IoJ2Jib3ggbXVzdCBiZSBhbiBBcnJheSBvZiA0IG51bWJlcnMnKTtcbiAgICBpZiAoaWQgJiYgWydzdHJpbmcnLCAnbnVtYmVyJ10uaW5kZXhPZih0eXBlb2YgaWQpID09PSAtMSkgdGhyb3cgbmV3IEVycm9yKCdpZCBtdXN0IGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nJyk7XG5cbiAgICB2YXIgZmMgPSB7dHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJ307XG4gICAgaWYgKGlkKSBmYy5pZCA9IGlkO1xuICAgIGlmIChiYm94KSBmYy5iYm94ID0gYmJveDtcbiAgICBmYy5mZWF0dXJlcyA9IGZlYXR1cmVzO1xuICAgIHJldHVybiBmYztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEge0BsaW5rIEZlYXR1cmU8TXVsdGlMaW5lU3RyaW5nPn0gYmFzZWQgb24gYVxuICogY29vcmRpbmF0ZSBhcnJheS4gUHJvcGVydGllcyBjYW4gYmUgYWRkZWQgb3B0aW9uYWxseS5cbiAqXG4gKiBAbmFtZSBtdWx0aUxpbmVTdHJpbmdcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8QXJyYXk8bnVtYmVyPj4+fSBjb29yZGluYXRlcyBhbiBhcnJheSBvZiBMaW5lU3RyaW5nc1xuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBhbiBPYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFkZCBhcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtiYm94XSBCQm94IFt3ZXN0LCBzb3V0aCwgZWFzdCwgbm9ydGhdXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtpZF0gSWRlbnRpZmllclxuICogQHJldHVybnMge0ZlYXR1cmU8TXVsdGlMaW5lU3RyaW5nPn0gYSBNdWx0aUxpbmVTdHJpbmcgZmVhdHVyZVxuICogQHRocm93cyB7RXJyb3J9IGlmIG5vIGNvb3JkaW5hdGVzIGFyZSBwYXNzZWRcbiAqIEBleGFtcGxlXG4gKiB2YXIgbXVsdGlMaW5lID0gdHVyZi5tdWx0aUxpbmVTdHJpbmcoW1tbMCwwXSxbMTAsMTBdXV0pO1xuICpcbiAqIC8vPW11bHRpTGluZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlMaW5lU3RyaW5nKGNvb3JkaW5hdGVzLCBwcm9wZXJ0aWVzLCBiYm94LCBpZCkge1xuICAgIGlmICghY29vcmRpbmF0ZXMpIHRocm93IG5ldyBFcnJvcignTm8gY29vcmRpbmF0ZXMgcGFzc2VkJyk7XG5cbiAgICByZXR1cm4gZmVhdHVyZSh7XG4gICAgICAgIHR5cGU6ICdNdWx0aUxpbmVTdHJpbmcnLFxuICAgICAgICBjb29yZGluYXRlczogY29vcmRpbmF0ZXNcbiAgICB9LCBwcm9wZXJ0aWVzLCBiYm94LCBpZCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHtAbGluayBGZWF0dXJlPE11bHRpUG9pbnQ+fSBiYXNlZCBvbiBhXG4gKiBjb29yZGluYXRlIGFycmF5LiBQcm9wZXJ0aWVzIGNhbiBiZSBhZGRlZCBvcHRpb25hbGx5LlxuICpcbiAqIEBuYW1lIG11bHRpUG9pbnRcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGNvb3JkaW5hdGVzIGFuIGFycmF5IG9mIFBvc2l0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBhbiBPYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFkZCBhcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtiYm94XSBCQm94IFt3ZXN0LCBzb3V0aCwgZWFzdCwgbm9ydGhdXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtpZF0gSWRlbnRpZmllclxuICogQHJldHVybnMge0ZlYXR1cmU8TXVsdGlQb2ludD59IGEgTXVsdGlQb2ludCBmZWF0dXJlXG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgbm8gY29vcmRpbmF0ZXMgYXJlIHBhc3NlZFxuICogQGV4YW1wbGVcbiAqIHZhciBtdWx0aVB0ID0gdHVyZi5tdWx0aVBvaW50KFtbMCwwXSxbMTAsMTBdXSk7XG4gKlxuICogLy89bXVsdGlQdFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlQb2ludChjb29yZGluYXRlcywgcHJvcGVydGllcywgYmJveCwgaWQpIHtcbiAgICBpZiAoIWNvb3JkaW5hdGVzKSB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvb3JkaW5hdGVzIHBhc3NlZCcpO1xuXG4gICAgcmV0dXJuIGZlYXR1cmUoe1xuICAgICAgICB0eXBlOiAnTXVsdGlQb2ludCcsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBjb29yZGluYXRlc1xuICAgIH0sIHByb3BlcnRpZXMsIGJib3gsIGlkKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEge0BsaW5rIEZlYXR1cmU8TXVsdGlQb2x5Z29uPn0gYmFzZWQgb24gYVxuICogY29vcmRpbmF0ZSBhcnJheS4gUHJvcGVydGllcyBjYW4gYmUgYWRkZWQgb3B0aW9uYWxseS5cbiAqXG4gKiBAbmFtZSBtdWx0aVBvbHlnb25cbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8QXJyYXk8QXJyYXk8bnVtYmVyPj4+Pn0gY29vcmRpbmF0ZXMgYW4gYXJyYXkgb2YgUG9seWdvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcHJvcGVydGllcz17fV0gYW4gT2JqZWN0IG9mIGtleS12YWx1ZSBwYWlycyB0byBhZGQgYXMgcHJvcGVydGllc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbYmJveF0gQkJveCBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbaWRdIElkZW50aWZpZXJcbiAqIEByZXR1cm5zIHtGZWF0dXJlPE11bHRpUG9seWdvbj59IGEgbXVsdGlwb2x5Z29uIGZlYXR1cmVcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiBubyBjb29yZGluYXRlcyBhcmUgcGFzc2VkXG4gKiBAZXhhbXBsZVxuICogdmFyIG11bHRpUG9seSA9IHR1cmYubXVsdGlQb2x5Z29uKFtbW1swLDBdLFswLDEwXSxbMTAsMTBdLFsxMCwwXSxbMCwwXV1dXSk7XG4gKlxuICogLy89bXVsdGlQb2x5XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlQb2x5Z29uKGNvb3JkaW5hdGVzLCBwcm9wZXJ0aWVzLCBiYm94LCBpZCkge1xuICAgIGlmICghY29vcmRpbmF0ZXMpIHRocm93IG5ldyBFcnJvcignTm8gY29vcmRpbmF0ZXMgcGFzc2VkJyk7XG5cbiAgICByZXR1cm4gZmVhdHVyZSh7XG4gICAgICAgIHR5cGU6ICdNdWx0aVBvbHlnb24nLFxuICAgICAgICBjb29yZGluYXRlczogY29vcmRpbmF0ZXNcbiAgICB9LCBwcm9wZXJ0aWVzLCBiYm94LCBpZCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHtAbGluayBGZWF0dXJlPEdlb21ldHJ5Q29sbGVjdGlvbj59IGJhc2VkIG9uIGFcbiAqIGNvb3JkaW5hdGUgYXJyYXkuIFByb3BlcnRpZXMgY2FuIGJlIGFkZGVkIG9wdGlvbmFsbHkuXG4gKlxuICogQG5hbWUgZ2VvbWV0cnlDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5PEdlb21ldHJ5Pn0gZ2VvbWV0cmllcyBhbiBhcnJheSBvZiBHZW9KU09OIEdlb21ldHJpZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcHJvcGVydGllcz17fV0gYW4gT2JqZWN0IG9mIGtleS12YWx1ZSBwYWlycyB0byBhZGQgYXMgcHJvcGVydGllc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbYmJveF0gQkJveCBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbaWRdIElkZW50aWZpZXJcbiAqIEByZXR1cm5zIHtGZWF0dXJlPEdlb21ldHJ5Q29sbGVjdGlvbj59IGEgR2VvSlNPTiBHZW9tZXRyeUNvbGxlY3Rpb24gRmVhdHVyZVxuICogQGV4YW1wbGVcbiAqIHZhciBwdCA9IHtcbiAqICAgICBcInR5cGVcIjogXCJQb2ludFwiLFxuICogICAgICAgXCJjb29yZGluYXRlc1wiOiBbMTAwLCAwXVxuICogICAgIH07XG4gKiB2YXIgbGluZSA9IHtcbiAqICAgICBcInR5cGVcIjogXCJMaW5lU3RyaW5nXCIsXG4gKiAgICAgXCJjb29yZGluYXRlc1wiOiBbIFsxMDEsIDBdLCBbMTAyLCAxXSBdXG4gKiAgIH07XG4gKiB2YXIgY29sbGVjdGlvbiA9IHR1cmYuZ2VvbWV0cnlDb2xsZWN0aW9uKFtwdCwgbGluZV0pO1xuICpcbiAqIC8vPWNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlb21ldHJ5Q29sbGVjdGlvbihnZW9tZXRyaWVzLCBwcm9wZXJ0aWVzLCBiYm94LCBpZCkge1xuICAgIGlmICghZ2VvbWV0cmllcykgdGhyb3cgbmV3IEVycm9yKCdnZW9tZXRyaWVzIGlzIHJlcXVpcmVkJyk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGdlb21ldHJpZXMpKSB0aHJvdyBuZXcgRXJyb3IoJ2dlb21ldHJpZXMgbXVzdCBiZSBhbiBBcnJheScpO1xuXG4gICAgcmV0dXJuIGZlYXR1cmUoe1xuICAgICAgICB0eXBlOiAnR2VvbWV0cnlDb2xsZWN0aW9uJyxcbiAgICAgICAgZ2VvbWV0cmllczogZ2VvbWV0cmllc1xuICAgIH0sIHByb3BlcnRpZXMsIGJib3gsIGlkKTtcbn1cblxuLyoqXG4gKiBSb3VuZCBudW1iZXIgdG8gcHJlY2lzaW9uXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG51bSBOdW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcHJlY2lzaW9uPTBdIFByZWNpc2lvblxuICogQHJldHVybnMge251bWJlcn0gcm91bmRlZCBudW1iZXJcbiAqIEBleGFtcGxlXG4gKiB0dXJmLnJvdW5kKDEyMC40MzIxKVxuICogLy89MTIwXG4gKlxuICogdHVyZi5yb3VuZCgxMjAuNDMyMSwgMilcbiAqIC8vPTEyMC40M1xuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmQobnVtLCBwcmVjaXNpb24pIHtcbiAgICBpZiAobnVtID09PSB1bmRlZmluZWQgfHwgbnVtID09PSBudWxsIHx8IGlzTmFOKG51bSkpIHRocm93IG5ldyBFcnJvcignbnVtIGlzIHJlcXVpcmVkJyk7XG4gICAgaWYgKHByZWNpc2lvbiAmJiAhKHByZWNpc2lvbiA+PSAwKSkgdGhyb3cgbmV3IEVycm9yKCdwcmVjaXNpb24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICAgIHZhciBtdWx0aXBsaWVyID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbiB8fCAwKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBtdWx0aXBsaWVyKSAvIG11bHRpcGxpZXI7XG59XG5cbi8qKlxuICogQ29udmVydCBhIGRpc3RhbmNlIG1lYXN1cmVtZW50IChhc3N1bWluZyBhIHNwaGVyaWNhbCBFYXJ0aCkgZnJvbSByYWRpYW5zIHRvIGEgbW9yZSBmcmllbmRseSB1bml0LlxuICogVmFsaWQgdW5pdHM6IG1pbGVzLCBuYXV0aWNhbG1pbGVzLCBpbmNoZXMsIHlhcmRzLCBtZXRlcnMsIG1ldHJlcywga2lsb21ldGVycywgY2VudGltZXRlcnMsIGZlZXRcbiAqXG4gKiBAbmFtZSByYWRpYW5zVG9MZW5ndGhcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYW5zIGluIHJhZGlhbnMgYWNyb3NzIHRoZSBzcGhlcmVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdW5pdHM9J2tpbG9tZXRlcnMnXSBjYW4gYmUgZGVncmVlcywgcmFkaWFucywgbWlsZXMsIG9yIGtpbG9tZXRlcnMgaW5jaGVzLCB5YXJkcywgbWV0cmVzLCBtZXRlcnMsIGtpbG9tZXRyZXMsIGtpbG9tZXRlcnMuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBkaXN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFkaWFuc1RvTGVuZ3RoKHJhZGlhbnMsIHVuaXRzKSB7XG4gICAgaWYgKHJhZGlhbnMgPT09IHVuZGVmaW5lZCB8fCByYWRpYW5zID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoJ3JhZGlhbnMgaXMgcmVxdWlyZWQnKTtcblxuICAgIGlmICh1bml0cyAmJiB0eXBlb2YgdW5pdHMgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgRXJyb3IoJ3VuaXRzIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICB2YXIgZmFjdG9yID0gZmFjdG9yc1t1bml0cyB8fCAna2lsb21ldGVycyddO1xuICAgIGlmICghZmFjdG9yKSB0aHJvdyBuZXcgRXJyb3IodW5pdHMgKyAnIHVuaXRzIGlzIGludmFsaWQnKTtcbiAgICByZXR1cm4gcmFkaWFucyAqIGZhY3Rvcjtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgZGlzdGFuY2UgbWVhc3VyZW1lbnQgKGFzc3VtaW5nIGEgc3BoZXJpY2FsIEVhcnRoKSBmcm9tIGEgcmVhbC13b3JsZCB1bml0IGludG8gcmFkaWFuc1xuICogVmFsaWQgdW5pdHM6IG1pbGVzLCBuYXV0aWNhbG1pbGVzLCBpbmNoZXMsIHlhcmRzLCBtZXRlcnMsIG1ldHJlcywga2lsb21ldGVycywgY2VudGltZXRlcnMsIGZlZXRcbiAqXG4gKiBAbmFtZSBsZW5ndGhUb1JhZGlhbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBkaXN0YW5jZSBpbiByZWFsIHVuaXRzXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VuaXRzPSdraWxvbWV0ZXJzJ10gY2FuIGJlIGRlZ3JlZXMsIHJhZGlhbnMsIG1pbGVzLCBvciBraWxvbWV0ZXJzIGluY2hlcywgeWFyZHMsIG1ldHJlcywgbWV0ZXJzLCBraWxvbWV0cmVzLCBraWxvbWV0ZXJzLlxuICogQHJldHVybnMge251bWJlcn0gcmFkaWFuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoVG9SYWRpYW5zKGRpc3RhbmNlLCB1bml0cykge1xuICAgIGlmIChkaXN0YW5jZSA9PT0gdW5kZWZpbmVkIHx8IGRpc3RhbmNlID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoJ2Rpc3RhbmNlIGlzIHJlcXVpcmVkJyk7XG5cbiAgICBpZiAodW5pdHMgJiYgdHlwZW9mIHVuaXRzICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IEVycm9yKCd1bml0cyBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgdmFyIGZhY3RvciA9IGZhY3RvcnNbdW5pdHMgfHwgJ2tpbG9tZXRlcnMnXTtcbiAgICBpZiAoIWZhY3RvcikgdGhyb3cgbmV3IEVycm9yKHVuaXRzICsgJyB1bml0cyBpcyBpbnZhbGlkJyk7XG4gICAgcmV0dXJuIGRpc3RhbmNlIC8gZmFjdG9yO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSBkaXN0YW5jZSBtZWFzdXJlbWVudCAoYXNzdW1pbmcgYSBzcGhlcmljYWwgRWFydGgpIGZyb20gYSByZWFsLXdvcmxkIHVuaXQgaW50byBkZWdyZWVzXG4gKiBWYWxpZCB1bml0czogbWlsZXMsIG5hdXRpY2FsbWlsZXMsIGluY2hlcywgeWFyZHMsIG1ldGVycywgbWV0cmVzLCBjZW50aW1ldGVycywga2lsb21ldHJlcywgZmVldFxuICpcbiAqIEBuYW1lIGxlbmd0aFRvRGVncmVlc1xuICogQHBhcmFtIHtudW1iZXJ9IGRpc3RhbmNlIGluIHJlYWwgdW5pdHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdW5pdHM9J2tpbG9tZXRlcnMnXSBjYW4gYmUgZGVncmVlcywgcmFkaWFucywgbWlsZXMsIG9yIGtpbG9tZXRlcnMgaW5jaGVzLCB5YXJkcywgbWV0cmVzLCBtZXRlcnMsIGtpbG9tZXRyZXMsIGtpbG9tZXRlcnMuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBkZWdyZWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGhUb0RlZ3JlZXMoZGlzdGFuY2UsIHVuaXRzKSB7XG4gICAgcmV0dXJuIHJhZGlhbnNUb0RlZ3JlZXMobGVuZ3RoVG9SYWRpYW5zKGRpc3RhbmNlLCB1bml0cykpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGFueSBiZWFyaW5nIGFuZ2xlIGZyb20gdGhlIG5vcnRoIGxpbmUgZGlyZWN0aW9uIChwb3NpdGl2ZSBjbG9ja3dpc2UpXG4gKiBhbmQgcmV0dXJucyBhbiBhbmdsZSBiZXR3ZWVuIDAtMzYwIGRlZ3JlZXMgKHBvc2l0aXZlIGNsb2Nrd2lzZSksIDAgYmVpbmcgdGhlIG5vcnRoIGxpbmVcbiAqXG4gKiBAbmFtZSBiZWFyaW5nVG9BemltdXRoXG4gKiBAcGFyYW0ge251bWJlcn0gYmVhcmluZyBhbmdsZSwgYmV0d2VlbiAtMTgwIGFuZCArMTgwIGRlZ3JlZXNcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGFuZ2xlIGJldHdlZW4gMCBhbmQgMzYwIGRlZ3JlZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJlYXJpbmdUb0F6aW11dGgoYmVhcmluZykge1xuICAgIGlmIChiZWFyaW5nID09PSBudWxsIHx8IGJlYXJpbmcgPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKCdiZWFyaW5nIGlzIHJlcXVpcmVkJyk7XG5cbiAgICB2YXIgYW5nbGUgPSBiZWFyaW5nICUgMzYwO1xuICAgIGlmIChhbmdsZSA8IDApIGFuZ2xlICs9IDM2MDtcbiAgICByZXR1cm4gYW5nbGU7XG59XG5cbi8qKlxuICogQ29udmVydHMgYW4gYW5nbGUgaW4gcmFkaWFucyB0byBkZWdyZWVzXG4gKlxuICogQG5hbWUgcmFkaWFuc1RvRGVncmVlc1xuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbnMgYW5nbGUgaW4gcmFkaWFuc1xuICogQHJldHVybnMge251bWJlcn0gZGVncmVlcyBiZXR3ZWVuIDAgYW5kIDM2MCBkZWdyZWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYWRpYW5zVG9EZWdyZWVzKHJhZGlhbnMpIHtcbiAgICBpZiAocmFkaWFucyA9PT0gbnVsbCB8fCByYWRpYW5zID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcigncmFkaWFucyBpcyByZXF1aXJlZCcpO1xuXG4gICAgdmFyIGRlZ3JlZXMgPSByYWRpYW5zICUgKDIgKiBNYXRoLlBJKTtcbiAgICByZXR1cm4gZGVncmVlcyAqIDE4MCAvIE1hdGguUEk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYW4gYW5nbGUgaW4gZGVncmVlcyB0byByYWRpYW5zXG4gKlxuICogQG5hbWUgZGVncmVlc1RvcmFkaWFuc1xuICogQHBhcmFtIHtudW1iZXJ9IGRlZ3JlZXMgYW5nbGUgYmV0d2VlbiAwIGFuZCAzNjAgZGVncmVlc1xuICogQHJldHVybnMge251bWJlcn0gYW5nbGUgaW4gcmFkaWFuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGVncmVlc1RvUmFkaWFucyhkZWdyZWVzKSB7XG4gICAgaWYgKGRlZ3JlZXMgPT09IG51bGwgfHwgZGVncmVlcyA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoJ2RlZ3JlZXMgaXMgcmVxdWlyZWQnKTtcblxuICAgIHZhciByYWRpYW5zID0gZGVncmVlcyAlIDM2MDtcbiAgICByZXR1cm4gcmFkaWFucyAqIE1hdGguUEkgLyAxODA7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBsZW5ndGggdG8gdGhlIHJlcXVlc3RlZCB1bml0LlxuICogVmFsaWQgdW5pdHM6IG1pbGVzLCBuYXV0aWNhbG1pbGVzLCBpbmNoZXMsIHlhcmRzLCBtZXRlcnMsIG1ldHJlcywga2lsb21ldGVycywgY2VudGltZXRlcnMsIGZlZXRcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIHRvIGJlIGNvbnZlcnRlZFxuICogQHBhcmFtIHtzdHJpbmd9IG9yaWdpbmFsVW5pdCBvZiB0aGUgbGVuZ3RoXG4gKiBAcGFyYW0ge3N0cmluZ30gW2ZpbmFsVW5pdD0na2lsb21ldGVycyddIHJldHVybmVkIHVuaXRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBjb252ZXJ0ZWQgbGVuZ3RoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TGVuZ3RoKGxlbmd0aCwgb3JpZ2luYWxVbml0LCBmaW5hbFVuaXQpIHtcbiAgICBpZiAobGVuZ3RoID09PSBudWxsIHx8IGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoJ2xlbmd0aCBpcyByZXF1aXJlZCcpO1xuICAgIGlmICghKGxlbmd0aCA+PSAwKSkgdGhyb3cgbmV3IEVycm9yKCdsZW5ndGggbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuXG4gICAgcmV0dXJuIHJhZGlhbnNUb0xlbmd0aChsZW5ndGhUb1JhZGlhbnMobGVuZ3RoLCBvcmlnaW5hbFVuaXQpLCBmaW5hbFVuaXQgfHwgJ2tpbG9tZXRlcnMnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGFyZWEgdG8gdGhlIHJlcXVlc3RlZCB1bml0LlxuICogVmFsaWQgdW5pdHM6IGtpbG9tZXRlcnMsIGtpbG9tZXRyZXMsIG1ldGVycywgbWV0cmVzLCBjZW50aW1ldHJlcywgbWlsbGltZXRlciwgYWNyZSwgbWlsZSwgeWFyZCwgZm9vdCwgaW5jaFxuICogQHBhcmFtIHtudW1iZXJ9IGFyZWEgdG8gYmUgY29udmVydGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gW29yaWdpbmFsVW5pdD0nbWV0ZXJzJ10gb2YgdGhlIGRpc3RhbmNlXG4gKiBAcGFyYW0ge3N0cmluZ30gW2ZpbmFsVW5pdD0na2lsb21ldGVycyddIHJldHVybmVkIHVuaXRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBjb252ZXJ0ZWQgZGlzdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRBcmVhKGFyZWEsIG9yaWdpbmFsVW5pdCwgZmluYWxVbml0KSB7XG4gICAgaWYgKGFyZWEgPT09IG51bGwgfHwgYXJlYSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoJ2FyZWEgaXMgcmVxdWlyZWQnKTtcbiAgICBpZiAoIShhcmVhID49IDApKSB0aHJvdyBuZXcgRXJyb3IoJ2FyZWEgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuXG4gICAgdmFyIHN0YXJ0RmFjdG9yID0gYXJlYUZhY3RvcnNbb3JpZ2luYWxVbml0IHx8ICdtZXRlcnMnXTtcbiAgICBpZiAoIXN0YXJ0RmFjdG9yKSB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgb3JpZ2luYWwgdW5pdHMnKTtcblxuICAgIHZhciBmaW5hbEZhY3RvciA9IGFyZWFGYWN0b3JzW2ZpbmFsVW5pdCB8fCAna2lsb21ldGVycyddO1xuICAgIGlmICghZmluYWxGYWN0b3IpIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBmaW5hbCB1bml0cycpO1xuXG4gICAgcmV0dXJuIChhcmVhIC8gc3RhcnRGYWN0b3IpICogZmluYWxGYWN0b3I7XG59XG5cbi8qKlxuICogaXNOdW1iZXJcbiAqXG4gKiBAcGFyYW0geyp9IG51bSBOdW1iZXIgdG8gdmFsaWRhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlL2ZhbHNlXG4gKiBAZXhhbXBsZVxuICogdHVyZi5pc051bWJlcigxMjMpXG4gKiAvLz10cnVlXG4gKiB0dXJmLmlzTnVtYmVyKCdmb28nKVxuICogLy89ZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKG51bSkge1xuICAgIHJldHVybiAhaXNOYU4obnVtKSAmJiBudW0gIT09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkobnVtKTtcbn1cblxuLyoqXG4gKiBpc09iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gaW5wdXQgdmFyaWFibGUgdG8gdmFsaWRhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlL2ZhbHNlXG4gKiBAZXhhbXBsZVxuICogdHVyZi5pc09iamVjdCh7ZWxldmF0aW9uOiAxMH0pXG4gKiAvLz10cnVlXG4gKiB0dXJmLmlzT2JqZWN0KCdmb28nKVxuICogLy89ZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KGlucHV0KSB7XG4gICAgcmV0dXJuICghIWlucHV0KSAmJiAoaW5wdXQuY29uc3RydWN0b3IgPT09IE9iamVjdCk7XG59XG5cbi8vIERlcHJlY2F0ZWQgbWV0aG9kc1xuZXhwb3J0IGZ1bmN0aW9uIHJhZGlhbnMyZGVncmVlcygpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21ldGhvZCBoYXMgYmVlbiByZW5hbWVkIHRvIGByYWRpYW5zVG9EZWdyZWVzYCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVncmVlczJyYWRpYW5zKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWV0aG9kIGhhcyBiZWVuIHJlbmFtZWQgdG8gYGRlZ3JlZXNUb1JhZGlhbnNgJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZVRvRGVncmVlcygpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21ldGhvZCBoYXMgYmVlbiByZW5hbWVkIHRvIGBsZW5ndGhUb0RlZ3JlZXNgJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZVRvUmFkaWFucygpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21ldGhvZCBoYXMgYmVlbiByZW5hbWVkIHRvIGBsZW5ndGhUb1JhZGlhbnNgJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYWRpYW5zVG9EaXN0YW5jZSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21ldGhvZCBoYXMgYmVlbiByZW5hbWVkIHRvIGByYWRpYW5zVG9MZW5ndGhgJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiZWFyaW5nVG9BbmdsZSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21ldGhvZCBoYXMgYmVlbiByZW5hbWVkIHRvIGBiZWFyaW5nVG9BemltdXRoYCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERpc3RhbmNlKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWV0aG9kIGhhcyBiZWVuIHJlbmFtZWQgdG8gYGNvbnZlcnRMZW5ndGhgJyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AdHVyZi9oZWxwZXJzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvbVRvR21sIGFzIGdtbDN9IGZyb20gJ2dlb2pzb24tdG8tZ21sLTMnO1xuXG4vKiogQGNvbnN0IHtPYmplY3R9IHhtbCAqL1xuY29uc3QgeG1sID0ge1xuICAvKipcbiAgICogVHVybnMgYW4gb2JqZWN0IGludG8gYSBzdHJpbmcgb2YgeG1sIGF0dHJpYnV0ZSBrZXktdmFsdWUgcGFpcnMuXG4gICAqIEBtZW1iZXJPZiB4bWwuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gYXR0cnMgYW4gb2JqZWN0IG1hcHBpbmcgYXR0cmlidXRlIG5hbWVzIHRvIGF0dHJpYnV0ZSB2YWx1ZXNcbiAgICogQHJldHVybnMge3N0cmluZ30gYSBzdHJpbmcgb2YgeG1sIGF0dHJpYnV0ZSBrZXktdmFsdWUgcGFpcnNcbiAgICovXG4gICdhdHRycyc6IGZ1bmN0aW9uKGF0dHJzKXtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cnMpXG4gICAgICAubWFwKChhKSA9PiBhdHRyc1thXSA/IGAgJHthfT1cIiR7YXR0cnNbYV19XCJgIDogJycpXG4gICAgICAuam9pbignJyk7XG4gIH0sXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgc3RyaW5nIHhtbCB0YWcuXG4gICAqIEBmdW5jdGlvbiBcbiAgICogQG1lbWJlck9mIHhtbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5zIHRoZSB0YWcncyB4bWwgbmFtZXNwYWNlIGFiYnJldmlhdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgdGhlIHRhZyBuYW1lLlxuICAgKiBAcGFyYW0ge09iamVjdH0gYXR0cnMgQHNlZSB4bWwuYXR0cnMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbm5lciBpbm5lciB4bWwuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGFuIHhtbCBzdHJpbmcuXG4gICAqL1xuICAndGFnJzogZnVuY3Rpb24obnMsIHRhZ05hbWUsIGF0dHJzLCBpbm5lcil7IC8vIFRPRE86IHNlbGYtY2xvc2luZ1xuICAgIGxldCB0YWcgPSAobnMgPyBgJHtuc306YCA6ICcnKSArIHRhZ05hbWU7XG4gICAgaWYgKHRhZ05hbWUpe1xuICAgICAgcmV0dXJuIGA8JHt0YWd9JHt0aGlzLmF0dHJzKGF0dHJzKX0+JHtpbm5lcn08LyR7dGFnfT5gOyAgIFxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIHRhZyBzdXBwbGllZCAnICsgSlNPTi5zdHJpbmdpZnkoYXJndW1lbnRzKSk7XG4gICAgfVxuICB9XG59O1xuLyoqXG4gKiBTaG9ydGhhbmQgZm9yIGNyZWF0aW5nIGEgd2ZzIHhtbCB0YWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSBhIHZhbGlkIHdmcyB0YWcgbmFtZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRycyBAc2VlIHhtbC5hdHRycy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpbm5lciBAc2VlIHhtbC50YWcuXG4gKi9cbmNvbnN0IHdmcyA9ICh0YWdOYW1lLCBhdHRycywgaW5uZXIpID0+IHhtbC50YWcoJ3dmcycsIHRhZ05hbWUsIGF0dHJzLCBpbm5lcik7XG4vKipcbiAqIEVuc3VyZXMgdGhlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBtYXliZSBhIEdlb0pTT04gRmVhdHVyZSBvciBGZWF0dXJlQ29sbGVjdGlvbiBvYmplY3Qgb3IgYW4gYXJyYXkgdGhlcmVvZi5cbiAqL1xuY29uc3QgZW5zdXJlQXJyYXkgPSAoLi4ubWF5YmUpPT4gKG1heWJlWzBdLmZlYXR1cmVzIHx8IFtdLmNvbmNhdCguLi5tYXliZSkpXG5cdC5maWx0ZXIoKGYpID0+IGYpO1xuLyoqXG4gKiBFbnN1cmVzIGEgbGF5ZXIuaWQgZm9ybWF0IG9mIGFuIGlucHV0IGlkLlxuICogQHBhcmFtIHtzdHJpbmd9IGx5ciBsYXllciBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgaWQsIHBvc3NpYmx5IGFscmVhZHkgaW4gY29ycmVjdCBsYXllci5pZCBmb3JtYXQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhIGNvcnJlY3RseS1mb3JtYXR0ZWQgZ21sOmlkXG4gKi9cbmNvbnN0IGVuc3VyZUlkID0gKGx5ciwgaWQpID0+IC9cXC4vLmV4ZWMoaWQgfHwgJycpID8gaWQgOmAke2x5cn0uJHtpZH1gO1xuLyoqXG4gKiByZXR1cm5zIGEgY29ycmVjdGx5LWZvcm1hdHRlZCB0eXBlTmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IG5zIG5hbWVzcGFjZVxuICogQHBhcmFtIHtzdHJpbmd9IGxheWVyIGxheWVyIG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlTmFtZSB0eXBlTmFtZSB0byBjaGVja1xuICogQHJldHVybnMge3N0cmluZ30gYSBjb3JyZWN0bHktZm9ybWF0dGVkIHR5cGVOYW1lXG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgdHlwZU5hbWUgaXQgY2Fubm90IGZvcm0gYSB0eXBlTmFtZSBmcm9tIG5zIGFuZCBsYXllclxuICovXG5jb25zdCBlbnN1cmVUeXBlTmFtZSA9IChucywgbGF5ZXIsIHR5cGVOYW1lKSA9PntcbiAgaWYgKCF0eXBlTmFtZSAmJiAhKG5zICYmIGxheWVyKSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBubyB0eXBlbmFtZSBwb3NzaWJsZTogJHtKU09OLnN0cmluZ2lmeSh7dHlwZU5hbWUsIG5zLCBsYXllcn0pfWApO1xuICB9XG4gIHJldHVybiB0eXBlTmFtZSB8fCBgJHtuc306JHtsYXllcn1UeXBlYDtcbn07XG5cbi8qKlxuICogU3RhbmRzIGluIGZvciBvdGhlciBmdW5jdGlvbnMgaW4gc3dpY2ggc3RhdGVtZW50cywgZXRjLiBEb2VzIG5vdGhpbmcuXG4gKiBAZnVuY3Rpb24gXG4gKi9cbmNvbnN0IHBhc3MgPSAoKSA9PiAnJztcblxuLyoqXG4gKiBJdGVyYXRlcyBvdmVyIHRoZSBrZXktdmFsdWUgcGFpcnMsIGZpbHRlcmluZyBieSBhIHdoaXRlbGlzdCBpZiBhdmFpbGFibGUuXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHdoaXRlbGlzdCBhIHdoaXRlbGlzdCBvZiBwcm9wZXJ0eSBuYW1lc1xuICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgYW4gb2JqZWN0IG1hcHBpbmcgcHJvcGVydHkgbmFtZXMgdG8gdmFsdWVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBhIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCAod2hpdGVsaXN0ZWQga2V5LCB2YWx1ZSkgcGFpclxuICovXG5jb25zdCB1c2VXaGl0ZWxpc3RJZkF2YWlsYWJsZSA9ICh3aGl0ZWxpc3QsIHByb3BlcnRpZXMsIGNiKSA9PntcbiAgZm9yIChsZXQgcHJvcCBvZiB3aGl0ZWxpc3QgfHwgT2JqZWN0LmtleXMocHJvcGVydGllcykpe1xuICAgIHByb3BlcnRpZXNbcHJvcF0gPyBjYihwcm9wLCBwcm9wZXJ0aWVzW3Byb3BdKSA6IHBhc3MoKTtcbiAgfVxufTtcbi8qKlxuICogQ3JlYXRlcyBhIGZlczpSZXNvdXJjZUlkIGZpbHRlciBmcm9tIGEgbGF5ZXJuYW1lIGFuZCBpZFxuICogQHBhcmFtIHtzdHJpbmd9IGx5ciBsYXllciBuYW1lIG9mIHRoZSBmaWx0ZXJlZCBmZWF0dXJlXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgZmVhdHVyZSBpZFxuICovXG5jb25zdCBpZEZpbHRlciA9IChseXIsIGlkKSA9PiBgPGZlczpSZXNvdXJjZUlkIHJpZD1cIiR7ZW5zdXJlSWQobHlyLCBpZCl9XCIvPmA7XG5cbmNvbnN0IHVucGFjayA9ICgoKT0+e1xuICBsZXQgZmVhdHVyZU1lbWJlcnMgPSBuZXcgU2V0KFsncHJvcGVydGllcycsICdnZW9tZXRyeScsICdpZCcsICdsYXllciddKTtcbiAgLyoqXG4gICAqIFJlc29sdmVzIGF0dHJpYnV0ZXMgZnJvbSBmZWF0dXJlLCB0aGVuIHBhcmFtcyB1bmxlc3MgdGhleSBhcmUgbm9ybWFsbHlcbiAgICogZm91bmQgaW4gdGhlIGZlYXR1cmVcbiAgICogQHBhcmFtIHtPYmplY3R9IGZlYXR1cmUgYSBnZW9qc29uIGZlYXR1cmVcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBhbiBvYmplY3Qgb2YgYmFja3VwIC8gb3ZlcnJpZGUgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGFyZ3MgcGFyYW1ldGVyIG5hbWVzIHRvIHJlc29sdmUgZnJvbSBmZWF0dXJlIG9yIHBhcmFtc1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBhbiBvYmplY3QgbWFwcGluZyBlYWNoIG5hbWVkIHBhcmFtZXRlciB0byBpdHMgcmVzb2x2ZWQgdmFsdWVcbiAgICovXG4gIHJldHVybiAoZmVhdHVyZSwgcGFyYW1zLCAuLi5hcmdzKSA9PiB7XG4gICAgbGV0IHJlc3VsdHMgPSB7fTtcbiAgICBmb3IgKGxldCBhcmcgb2YgYXJncyl7XG4gICAgICBpZiAoYXJnID09PSAnbGF5ZXInKXtcblx0cmVzdWx0c1thcmddID0gKHBhcmFtcy5sYXllciB8fCB7fSkuaWQgfHwgcGFyYW1zLmxheWVyXG5cdCAgfHwgKGZlYXR1cmUubGF5ZXJ8fHt9KS5pZCB8fCBmZWF0dXJlLmxheWVyIHx8ICcnO1xuICAgICAgfSBlbHNlIGlmICghZmVhdHVyZU1lbWJlcnMuaGFzKGFyZykpe1xuICAgICAgICByZXN1bHRzW2FyZ10gPSBmZWF0dXJlW2FyZ10gfHwgcGFyYW1zW2FyZ10gfHwgJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzW2FyZ10gPSBwYXJhbXNbYXJnXSB8fCBmZWF0dXJlW2FyZ10gIHx8ICcnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcbn0pKCk7XG5cbi8qKlxuICogQnVpbGRzIGEgZmlsdGVyIGZyb20gZmVhdHVyZSBpZHMgaWYgb25lIGlzIG5vdCBhbHJlYWR5IGlucHV0LlxuICogQGZ1bmN0aW9uIFxuICogQHBhcmFtIHtzdHJpbmd8dW5kZWZpbmVkfSBmaWx0ZXIgYSBwb3NzaWJsZSBzdHJpbmcgZmlsdGVyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZlYXR1cmVzIGFuIGFycmF5IG9mIGdlb2pzb24gZmVhdHVyZSBvYmplY3RzXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIGFuIG9iamVjdCBvZiBiYWNrdXAgLyBvdmVycmlkZSBwYXJhbWV0ZXJzXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIGZpbHRlciwgb3IgdGhlIGlucHV0IGZpbHRlciBpZiBpdCB3YXMgYSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZUZpbHRlcihmaWx0ZXIsIGZlYXR1cmVzLCBwYXJhbXMpe1xuICBpZiAoIWZpbHRlcil7XG4gICAgZmlsdGVyID0gJyc7XG4gICAgZm9yIChsZXQgZmVhdHVyZSBvZiBmZWF0dXJlcyl7XG4gICAgICBsZXQgbGF5ZXIgPSB1bnBhY2soZmVhdHVyZSwgcGFyYW1zKTtcbiAgICAgIGZpbHRlciArPSBpZEZpbHRlcihsYXllciwgZmVhdHVyZS5pZCk7XG4gICAgfVxuICAgIHJldHVybiBgPGZlczpGaWx0ZXI+JHtmaWx0ZXJ9PC9mZXM6RmlsdGVyPmA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZpbHRlcjtcbiAgfVxufTtcbi8vaHR0cDovL2RvY3Mub3Blbmdlb3NwYXRpYWwub3JnL2lzLzA5LTAyNXIyLzA5LTAyNXIyLmh0bWwjMjg2XG4vKipcbiAqIENoZWNrcyB0aGUgdHlwZSBvZiB0aGUgaW5wdXQgYWN0aW9uXG4gKiBAZnVuY3Rpb24gXG4gKiBAcGFyYW0ge3N0cmluZyB8IHVuZGVmaW5lZH0gYWN0aW9uIFxuICogQHJldHVybnMge0Jvb2xlYW59IHdoZXRoZXIgdGhlIGFjdGlvbiBpcyBhbGxvd2VkXG4qL1xuY29uc3QgZW5zdXJlQWN0aW9uID0gKCgpPT57XG4gIGNvbnN0IGFsbG93ZWQgPSBuZXcgU2V0KFsncmVwbGFjZScsICdpbnNlcnRCZWZvcmUnLCAnaW5zZXJ0QWZ0ZXInLCAncmVtb3ZlJ10pO1xuICByZXR1cm4gKGFjdGlvbikgPT4gYWxsb3dlZC5oYXMoYWN0aW9uKTtcbn0pKCk7XG5cbi8qKlxuICogQW4gb2JqZWN0IGNvbnRhaW5pbmcgb3B0aW9uYWwgbmFtZWQgcGFyYW1ldGVycy5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBhcmFtc1xuICogQHByb3Age3N0cmluZ3x1bmRlZmluZWR9IG5zIGFuIHhtbCBuYW1lc3BhY2UgYWxpYXMuXG4gKiBAcHJvcCB7c3RyaW5nfE9iamVjdHx1bmRlZmluZWR9IGxheWVyIGEgc3RyaW5nIGxheWVyIG5hbWUgb3Ige2lkfSwgd2hlcmUgaWRcbiAqIGlzIHRoZSBsYXllciBuYW1lXG4gKiBAcHJvcCB7c3RyaW5nfHVuZGVmaW5lZH0gZ2VvbWV0cnlfbmFtZSB0aGUgbmFtZSBvZiB0aGUgZmVhdHVyZSBnZW9tZXRyeSBmaWVsZC5cbiAqIEBwcm9wIHtPYmplY3R8dW5kZWZpbmVkfSBwcm9wZXJ0aWVzIGFuIG9iamVjdCBtYXBwaW5nIGZlYXR1cmUgZmllbGQgbmFtZXMgdG8gZmVhdHVyZSBwcm9wZXJ0aWVzXG4gKiBAcHJvcCB7c3RyaW5nfHVuZGVmaW5lZH0gaWQgYSBzdHJpbmcgZmVhdHVyZSBpZC5cbiAqIEBwcm9wIHtzdHJpbmdbXXx1bmRlZmluZWR9IHdoaXRlbGlzdCBhbiBhcnJheSBvZiBzdHJpbmcgZmllbGQgbmFtZXMgdG8gXG4gKiB1c2UgZnJvbSBAc2VlIFBhcmFtcy5wcm9wZXJ0aWVzXG4gKiBAcHJvcCB7c3RyaW5nfHVuZGVmaW5lZH0gaW5wdXRGb3JtYXQgaW5wdXRGb3JtYXQsIGFzIHNwZWNpZmllZCBhdCBcbiAqIFtPR0MgMDktMDI1cjIgwqcgNy42LjUuNF17QGxpbmsgaHR0cDovL2RvY3Mub3Blbmdlb3NwYXRpYWwub3JnL2lzLzA5LTAyNXIyLzA5LTAyNXIyLmh0bWwjNjV9LlxuICogQHByb3Age3N0cmluZ3x1bmRlZmluZWR9IHNyc05hbWUgc3JzTmFtZSwgYXMgc3BlY2lmaWVkIGF0IFxuICogW09HQyAwOS0wMjVyMiDCpyA3LjYuNS41XXtAbGluayBodHRwOi8vZG9jcy5vcGVuZ2Vvc3BhdGlhbC5vcmcvaXMvMDktMDI1cjIvMDktMDI1cjIuaHRtbCM2Nn0uXG4gKiBpZiB1bmRlZmluZWQsIHRoZSBnbWwzIG1vZHVsZSB3aWxsIGRlZmF1bHQgdG8gJ0VQU0c6NDMyNicuXG4gKiBAcHJvcCB7c3RyaW5nfHVuZGVmaW5lZH0gaGFuZGxlIGhhbmRsZSBwYXJhbWV0ZXIsIGFzIHNwZWNpZmllZCBhdFxuICogW09HQyAwOS0wMjVyMiDCpyA3LjYuMi42IF17QGxpbmsgaHR0cDovL2RvY3Mub3Blbmdlb3NwYXRpYWwub3JnL2lzLzA5LTAyNXIyLzA5LTAyNXIyLmh0bWwjNDR9XG4gKiBAcHJvcCB7c3RyaW5nfHVuZGVmaW5lZH0gZmlsdGVyIGEgc3RyaW5nIGZlczpGaWx0ZXIuXG4gKiBAcHJvcCB7c3RyaW5nfHVuZGVmaW5lZH0gdHlwZU5hbWUgYSBzdHJpbmcgc3BlY2lmeWluZyB0aGUgZmVhdHVyZSB0eXBlIHdpdGhpblxuICogaXRzIG5hbWVzcGFjZS4gU2VlIFswOS0wMjVyMiDCpyA3LjkuMi40LjFde0BsaW5rIGh0dHA6Ly9kb2NzLm9wZW5nZW9zcGF0aWFsLm9yZy9pcy8wOS0wMjVyMi8wOS0wMjVyMi5odG1sIzkwfS5cbiAqIEBwcm9wIHtPYmplY3R8dW5kZWZpbmVkfSBzY2hlbWFMb2NhdGlvbnMgYW4gb2JqZWN0IG1hcHBpbmcgdXJpIHRvIHNjaGVtYWxvY2F0aW9uXG4gKiBAcHJvcCB7T2JqZWN0fHVuZGVmaW5lZH0gbnNBc3NpZ25tZW50cyBhbiBvYmplY3QgbWFwcGluZyBucyB0byB1cmlcbiAqL1xuXG4vKipcbiAqIEEgR2VvSlNPTiBmZWF0dXJlIHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25hbCBmb3JlaWduIG1lbWJlcnMgKHNlZSBcbiAqIFtyZmM3OTY1IMKnIDZde0BsaW5rIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3OTQ2I3NlY3Rpb24tNn0pLlxuICogb3IgYW4gb2JqZWN0IHdpdGggc29tZSBvZiB0aGUgZm9sbG93aW5nIG1lbWJlcnMuXG4gKiBNZW1iZXJzIG9mIEZlYXR1cmUgd2lsbCBiZSB1c2VkIG92ZXIgdGhvc2UgaW4gUGFyYW1zIGV4Y2VwdCBmb3IgbGF5ZXIsIGlkLFxuICogYW5kIHByb3BlcnRpZXMuXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBGZWF0dXJlXG4gKiBAZXh0ZW5kcyBQYXJhbXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fHVuZGVmaW5lZH0gZ2VvbWV0cnkgYSBHZW9KU09OIGdlb21ldHJ5LlxuICogQHByb3BlcnR5IHtzdHJpbmd8dW5kZWZpbmVkfSB0eXBlICdGZWF0dXJlJy5cbiAqIEBleGFtcGxlIFxuICogeydpZCc6J3Rhc21hbmlhX3JvYWRzLjEnLCAndHlwZU5hbWUnOid0b3BwOnRhc21hbmlhX3JvYWRzVHlwZSd9IFxuICogLy8gY2FuIGJlIHBhc3NlZCB0byBEZWxldGVcbiAqL1xuXG4vKipcbiAqIGEgR2VvSlNPTiBGZWF0dXJlQ29sbGVjdGlvbiB3aXRoIG9wdGlvbmFsIGZvcmVpZ24gbWVtYmVycyBhcyBpbiBGZWF0dXJlLlxuICogQHR5cGVkZWYge09iamVjdH0gRmVhdHVyZUNvbGxlY3Rpb25cbiAqIEBleHRlbmRzIEZlYXR1cmVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlICdGZWF0dXJlQ29sbGVjdGlvbicuXG4gKiBAcHJvcGVydHkge0ZlYXR1cmVbXX0gZmVhdHVyZXMgYW4gYXJyYXkgb2YgR2VvSlNPTiBGZWF0dXJlcy5cbiAqL1xuXG4vKipcbiAqIFR1cm5zIGFuIGFycmF5IG9mIGdlb2pzb24gZmVhdHVyZXMgaW50byBnbWw6X2ZlYXR1cmUgc3RyaW5ncyBkZXNjcmliaW5nIHRoZW0uXG4gKiBAZnVuY3Rpb24gXG4gKiBAcGFyYW0ge0ZlYXR1cmVbXX0gZmVhdHVyZXMgYW4gYXJyYXkgb2YgZmVhdHVyZXMgdG8gdHJhbnNsYXRlIHRvIFxuICogZ21sOl9mZWF0dXJlcy5cbiAqIEBwYXJhbSB7UGFyYW1zfSBwYXJhbXMgYW4gb2JqZWN0IG9mIGJhY2t1cCAvIG92ZXJyaWRlIHBhcmFtZXRlcnMgXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhIGdtbDpfZmVhdHVyZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZUZlYXR1cmVzKGZlYXR1cmVzLCBwYXJhbXM9e30pe1xuICBsZXQgaW5uZXIgPSAnJztcbiAgbGV0IHtzcnNOYW1lfSA9IHBhcmFtcztcbiAgZm9yIChsZXQgZmVhdHVyZSBvZiBmZWF0dXJlcyl7XG4gICAgLy9UT0RPOiBhZGQgd2hpdGVsaXN0IHN1cHBvcnRcbiAgICBsZXQge25zLCBsYXllciwgZ2VvbWV0cnlfbmFtZSwgcHJvcGVydGllcywgaWQsIHdoaXRlbGlzdH0gPSB1bnBhY2soXG4gICAgICBmZWF0dXJlLCBwYXJhbXMsICducycsICdsYXllcicsICdnZW9tZXRyeV9uYW1lJywgJ3Byb3BlcnRpZXMnLCAnaWQnLCAnd2hpdGVsaXN0J1xuICAgICk7XG4gICAgbGV0IGZpZWxkcyA9ICcnO1xuICAgIGlmIChnZW9tZXRyeV9uYW1lKXtcbiAgICAgIGZpZWxkcyArPSB4bWwudGFnKFxuXHRucywgZ2VvbWV0cnlfbmFtZSwge30sIGdtbDMoZmVhdHVyZS5nZW9tZXRyeSwgJycsIHtzcnNOYW1lfSlcbiAgICAgICk7XG4gICAgfVxuICAgIHVzZVdoaXRlbGlzdElmQXZhaWxhYmxlKFxuICAgICAgd2hpdGVsaXN0LCBwcm9wZXJ0aWVzLFxuICAgICAgKHByb3AsIHZhbCk9PmZpZWxkcyArPSB4bWwudGFnKG5zLCBwcm9wLCB7fSwgcHJvcGVydGllc1twcm9wXSlcbiAgICApO1xuICAgIGlubmVyICs9IHhtbC50YWcobnMsIGxheWVyLCB7J2dtbDppZCc6IGVuc3VyZUlkKGxheWVyLCBpZCl9LCBmaWVsZHMpO1xuICB9XG4gIHJldHVybiBpbm5lcjtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgd2ZzOkluc2VydCB0YWcgd3JhcHBpbmcgYSB0cmFuc2xhdGVkIGZlYXR1cmVcbiAqIEBmdW5jdGlvbiBcbiAqIEBwYXJhbSB7RmVhdHVyZVtdfEZlYXR1cmVDb2xsZWN0aW9ufEZlYXR1cmV9IGZlYXR1cmVzIEZlYXR1cmUocykgdG8gcGFzcyB0byBAc2VlIHRyYW5zbGF0ZUZlYXR1cmVzXG4gKiBAcGFyYW0ge1BhcmFtc30gcGFyYW1zIHRvIGJlIHBhc3NlZCB0byBAc2VlIHRyYW5zbGF0ZUZlYXR1cmVzLCB3aXRoIG9wdGlvbmFsXG4gKiBpbnB1dEZvcm1hdCwgc3JzTmFtZSwgaGFuZGxlIGZvciB0aGUgd2ZzOkluc2VydCB0YWcuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhIHdmczpJbnNlcnQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBJbnNlcnQoZmVhdHVyZXMsIHBhcmFtcz17fSl7XG4gIGZlYXR1cmVzID0gZW5zdXJlQXJyYXkoZmVhdHVyZXMpO1xuICBsZXQge2lucHV0Rm9ybWF0LCBzcnNOYW1lLCBoYW5kbGV9ID0gcGFyYW1zO1xuICBpZiAoIWZlYXR1cmVzLmxlbmd0aCl7XG4gICAgY29uc29sZS53YXJuKCdubyBmZWF0dXJlcyBzdXBwbGllZCcpO1xuICAgIHJldHVybiAnJztcbiAgfVxuICBsZXQgdG9JbnNlcnQgPSB0cmFuc2xhdGVGZWF0dXJlcyhmZWF0dXJlcywgcGFyYW1zKTtcbiAgcmV0dXJuIHhtbC50YWcoJ3dmcycsICdJbnNlcnQnLCB7aW5wdXRGb3JtYXQsIHNyc05hbWUsIGhhbmRsZX0sIHRvSW5zZXJ0KTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBpbnB1dCBmZWF0dXJlcyBpbiBidWxrIHdpdGggcGFyYW1zLnByb3BlcnRpZXMgb3IgYnkgaWQuXG4gKiBAcGFyYW0ge0ZlYXR1cmVbXXxGZWF0dXJlQ29sbGVjdGlvbn0gZmVhdHVyZXMgZmVhdHVyZXMgdG8gdXBkYXRlLiAgVGhlc2UgbWF5IFxuICogcGFzcyBpbiBnZW9tZXRyeV9uYW1lLCBwcm9wZXJ0aWVzLCBhbmQgbGF5ZXIgKG92ZXJydWxlZCBieSBwYXJhbXMpIGFuZCBcbiAqIG5zLCBsYXllciwgc3JzTmFtZSAob3ZlcnJ1bGluZyBwYXJhbXMpLlxuICogQHBhcmFtIHtQYXJhbXN9IHBhcmFtcyB3aXRoIG9wdGlvbmFsIHByb3BlcnRpZXMsIG5zLCBsYXllciwgZ2VvbWV0cnlfbmFtZSxcbiAqIGZpbHRlciwgdHlwZU5hbWUsIHdoaXRlbGlzdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IGEgc3RyaW5nIHdmczpVcGF0ZSBhY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIFVwZGF0ZShmZWF0dXJlcywgcGFyYW1zPXt9KXtcbiAgZmVhdHVyZXMgPSBlbnN1cmVBcnJheShmZWF0dXJlcyk7XG4gIC8qKlxuICAgKiBtYWtlcyBhIHdmczpQcm9wZXJ0eSBzdHJpbmcgY29udGFpbmcgYSB3ZnM6VmFsdWVSZWZlcmVuY2UsIHdmczpWYWx1ZSBwYWlyLlxuICAgKiBAZnVuY3Rpb24gXG4gICAqIEBtZW1iZXJvZiBVcGRhdGV+XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIHRoZSBmaWVsZC9wcm9wZXJ0eSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWwgdGhlIGZpZWxkL3Byb3BlcnR5IHZhbHVlIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIG9uZSBvZiAnaW5zZXJ0QmVmb3JlJywgJ2luc2VydEFmdGVyJywgJ3JlbW92ZScsXG4gICAqICdyZXBsYWNlJy4gU2VlIFtPR0MgMDktMDI1cjIgwqcgMTUuMi41LjIuMV17QGxpbmsgaHR0cDovL2RvY3Mub3Blbmdlb3NwYXRpYWwub3JnL2lzLzA5LTAyNXIyLzA5LTAyNXIyLmh0bWwjMjg2fS5cbiAgICogYGFjdGlvbmAgd291bGQgZGVsZXRlIG9yIG1vZGlmeSB0aGUgb3JkZXIgb2YgZmllbGRzIHdpdGhpbiB0aGUgcmVtb3RlXG4gICAqIGZlYXR1cmUuIFRoZXJlIGlzIGN1cnJlbnRseSBubyB3YXkgdG8gaW5wdXQgYGFjdGlvbixgIHNpbmNlIHdmczpVcGRhdGUnc1xuICAgKiBkZWZhdWx0IGFjdGlvbiwgJ3JlcGxhY2UnLCBpcyBzdWZmaWNpZW50LlxuICAgKi9cbiAgY29uc3QgbWFrZUt2cCA9IChwcm9wLCB2YWwsIGFjdGlvbikgPT4gd2ZzKFxuICAgICdQcm9wZXJ0eScsIHt9LFxuICAgIHdmcygnVmFsdWVSZWZlcmVuY2UnLCB7YWN0aW9ufSwgcHJvcCkgK1xuICAgICAgKHZhbCAhPT0gdW5kZWZpbmVkID8gd2ZzKCdWYWx1ZScsIHt9LCB2YWwpOiAnJylcbiAgKTtcbiAgaWYgKHBhcmFtcy5wcm9wZXJ0aWVzKXtcbiAgICBsZXQge2hhbmRsZSwgaW5wdXRGb3JtYXQsIGZpbHRlciwgdHlwZU5hbWUsIHdoaXRlbGlzdH0gPSBwYXJhbXM7XG4gICAgbGV0IHsgc3JzTmFtZSwgbnMsIGxheWVyLCBnZW9tZXRyeV9uYW1lIH0gPSB1bnBhY2soXG4gICAgICBmZWF0dXJlc1swXSB8fCB7fSwgcGFyYW1zLCAnc3JzTmFtZScsICducycsICdsYXllcicsICdnZW9tZXRyeV9uYW1lJyk7XG4gICAgdHlwZU5hbWUgPSBlbnN1cmVUeXBlTmFtZShucywgbGF5ZXIsIHR5cGVOYW1lKTtcbiAgICBmaWx0ZXIgPSBlbnN1cmVGaWx0ZXIoZmlsdGVyLCBmZWF0dXJlcywgcGFyYW1zKTtcbiAgICBpZiAoIWZpbHRlciAmJiAhZmVhdHVyZXMubGVuZ3RoKXtcbiAgICAgIGNvbnNvbGUud2FybignbmVpdGhlciBmZWF0dXJlcyBub3IgZmlsdGVyIHN1cHBsaWVkJyk7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGxldCBmaWVsZHMgPSAnJztcbiAgICB1c2VXaGl0ZWxpc3RJZkF2YWlsYWJsZSggLy8gVE9ETzogYWN0aW9uIGF0dHJcbiAgICAgIHdoaXRlbGlzdCwgcGFyYW1zLnByb3BlcnRpZXMsIChrLCB2KSA9PiBmaWVsZHMgKz0gbWFrZUt2cChrLHYpXG4gICAgKTtcbiAgICBpZiAoZ2VvbWV0cnlfbmFtZSl7XG4gICAgICBmaWVsZHMgKz0gIG1ha2VLdnAoXG4gICAgICAgICAgZ2VvbWV0cnlfbmFtZSwgeG1sLnRhZyhcbiAgICAgICAgICAgICAgbnMsIGdlb21ldHJ5X25hbWUsIHt9LCBnbWwzKHBhcmFtcy5nZW9tZXRyeSwgJycsIHtzcnNOYW1lfSlcbiAgICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gd2ZzKCdVcGRhdGUnLCB7aW5wdXRGb3JtYXQsIHNyc05hbWUsIHR5cGVOYW1lfSwgZmllbGRzICsgZmlsdGVyKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBlbmNhcHN1bGF0ZSBlYWNoIHVwZGF0ZSBpbiBpdHMgb3duIFVwZGF0ZSB0YWdcbiAgICByZXR1cm4gZmVhdHVyZXMubWFwKFxuICAgICAgKGYpID0+IFVwZGF0ZShcbiAgICAgICAgZiwgT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zLCB7cHJvcGVydGllczpmLnByb3BlcnRpZXN9KVxuICAgICAgKVxuICAgICkuam9pbignJyk7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgd2ZzOkRlbGV0ZSBhY3Rpb24sIGNyZWF0aW5nIGEgZmlsdGVyIGFuZCB0eXBlTmFtZSBmcm9tIGZlYXR1cmUgaWRzIFxuICogaWYgbm9uZSBhcmUgc3VwcGxpZWQuXG4gKiBAcGFyYW0ge0ZlYXR1cmVbXXxGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfSBmZWF0dXJlc1xuICogQHBhcmFtIHtQYXJhbXN9IHBhcmFtcyBvcHRpb25hbCBwYXJhbWV0ZXIgb3ZlcnJpZGVzLlxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbXMubnNdIEBzZWUgUGFyYW1zLm5zXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IFtwYXJhbXMubGF5ZXJdIEBzZWUgUGFyYW1zLmxheWVyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy50eXBlTmFtZV0gQHNlZSBQYXJhbXMudHlwZU5hbWUuIFRoaXMgd2lsbCBiZSBpbmZlcnJlZFxuICogZnJvbSBmZWF0dXJlL3BhcmFtcyBsYXllciBhbmQgbnMgaWYgdGhpcyBpcyBsZWZ0IHVuZGVmaW5lZC5cbiAqIEBwYXJhbSB7ZmlsdGVyfSBbcGFyYW1zLmZpbHRlcl0gQHNlZSBQYXJhbXMuZmlsdGVyLiAgVGhpcyB3aWxsIGJlIGluZmVycmVkXG4gKiBmcm9tIGZlYXR1cmUgaWRzIGFuZCBsYXllcihzKSBpZiBsZWZ0IHVuZGVmaW5lZCAoQHNlZSBlbnN1cmVGaWx0ZXIpLlxuICogQHJldHVybnMge3N0cmluZ30gYSB3ZnM6RGVsZXRlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gRGVsZXRlKGZlYXR1cmVzLCBwYXJhbXM9e30pe1xuICBmZWF0dXJlcyA9IGVuc3VyZUFycmF5KGZlYXR1cmVzKTtcbiAgbGV0IHtmaWx0ZXIsIHR5cGVOYW1lfSA9IHBhcmFtczsgLy9UT0RPOiByZWN1cmUgJiBlbmNhcHN1bGF0ZSBieSB0eXBlTmFtZVxuICBsZXQge25zLCBsYXllcn0gPSB1bnBhY2soZmVhdHVyZXNbMF0gfHwge30sIHBhcmFtcywgJ2xheWVyJywgJ25zJyk7XG4gIHR5cGVOYW1lID0gZW5zdXJlVHlwZU5hbWUobnMsIGxheWVyLCB0eXBlTmFtZSk7XG4gIGZpbHRlciA9IGVuc3VyZUZpbHRlcihmaWx0ZXIsIGZlYXR1cmVzLCBwYXJhbXMpO1xuICByZXR1cm4gd2ZzKCdEZWxldGUnLCB7dHlwZU5hbWV9LCBmaWx0ZXIpOyBcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHdmczpSZXBsYWNlIGFjdGlvbi5cbiAqIEBwYXJhbSB7RmVhdHVyZVtdfEZlYXR1cmVDb2xsZWN0aW9ufEZlYXR1cmV9IGZlYXR1cmVzIGZlYXR1cmUocykgdG8gcmVwbGFjZVxuICogQHBhcmFtIHtQYXJhbXN9IHBhcmFtcyB3aXRoIG9wdGlvbmFsIGZpbHRlciwgaW5wdXRGb3JtYXQsIHNyc05hbWVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGEgc3RyaW5nIHdmczpSZXBsYWNlIGFjdGlvbi5cbiAqL1xuZnVuY3Rpb24gUmVwbGFjZShmZWF0dXJlcywgcGFyYW1zPXt9KXtcbiAgZmVhdHVyZXMgPSBlbnN1cmVBcnJheShmZWF0dXJlcyk7XG4gIGxldCB7ZmlsdGVyLCBpbnB1dEZvcm1hdCwgc3JzTmFtZX0gPSB1bnBhY2sgKFxuICAgIGZlYXR1cmVzWzBdIHx8IHt9LCBwYXJhbXMgfHwge30sICdmaWx0ZXInLCAnaW5wdXRGb3JtYXQnLCAnc3JzTmFtZSdcbiAgKTtcbiAgbGV0IHJlcGxhY2VtZW50cyA9IHRyYW5zbGF0ZUZlYXR1cmVzKFxuICAgIFtmZWF0dXJlc1swXV0uZmlsdGVyKChmKT0+ZiksXG4gICAgcGFyYW1zIHx8IHtzcnNOYW1lfVxuICApO1xuICBmaWx0ZXIgPSBlbnN1cmVGaWx0ZXIoZmlsdGVyLCBmZWF0dXJlcywgcGFyYW1zKTtcbiAgcmV0dXJuIHdmcygnUmVwbGFjZScsIHtpbnB1dEZvcm1hdCwgc3JzTmFtZX0sIHJlcGxhY2VtZW50cyArIGZpbHRlcik7XG59XG5cbi8qKlxuICogV3JhcHMgdGhlIGlucHV0IGFjdGlvbnMgaW4gYSB3ZnM6VHJhbnNhY3Rpb24uXG4gKiBAcGFyYW0ge09iamVjdHxzdHJpbmdbXXxzdHJpbmd9IGFjdGlvbnMgYW4gb2JqZWN0IG1hcHBpbmcge0luc2VydCwgVXBkYXRlLFxuICogRGVsZXRlfSB0byBmZWF0dXJlKHMpIHRvIHBhc3MgdG8gSW5zZXJ0LCBVcGRhdGUsIERlbGV0ZSwgb3Igd2ZzOmFjdGlvbiBcbiAqIHN0cmluZyhzKSB0byB3cmFwIGluIGEgdHJhbnNhY3Rpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIG9wdGlvbmFsIHNyc05hbWUsIGxvY2tJZCwgcmVsZWFzZUFjdGlvbiwgaGFuZGxlLFxuICogaW5wdXRGb3JtYXQsIHZlcnNpb24sIGFuZCByZXF1aXJlZCBuc0Fzc2lnbm1lbnRzLCBzY2hlbWFMb2NhdGlvbnMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIHdmczp0cmFuc2FjdGlvbiB3cmFwcGluZyB0aGUgaW5wdXQgYWN0aW9ucy5cbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiBgYWN0aW9uc2AgaXMgbm90IGFuIGFycmF5IG9mIHN0cmluZ3MsIGEgc3RyaW5nLCBvciBcbiAqIHtAc2VlIEluc2VydCwgQHNlZSBVcGRhdGUsIEBzZWUgRGVsZXRlfSwgd2hlcmUgZWFjaCBhY3Rpb24gYXJlIHZhbGlkIGlucHV0cyBcbiAqIHRvIHRoZSBlcG9ueW1vdXMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIFRyYW5zYWN0aW9uKGFjdGlvbnMsIHBhcmFtcz17fSl7XG4gIGxldCB7XG4gICAgc3JzTmFtZSwgbG9ja0lkLCByZWxlYXNlQWN0aW9uLCBoYW5kbGUsIGlucHV0Rm9ybWF0LCB2ZXJzaW9uLCAvLyBvcHRpb25hbFxuICAgIG5zQXNzaWdubWVudHMsIHNjaGVtYUxvY2F0aW9ucyAvLyByZXF1aXJlZFxuICB9ID0gcGFyYW1zO1xuICBsZXQgY29udmVydGVyID0ge0luc2VydCwgVXBkYXRlLCBEZWxldGV9O1xuICBsZXQge2luc2VydDp0b0luc2VydCwgdXBkYXRlOnRvVXBkYXRlLCBkZWxldGU6dG9EZWxldGV9ID0gYWN0aW9ucyB8fCB7fTtcbiAgbGV0IGZpbmFsQWN0aW9ucyA9ICcnOyAvLyBwcm9jZXNzZWRBY3Rpb25zIHdvdWxkIGJlIG1vcmUgYWNjdXJhdGVcbiAgXG4gIGlmIChBcnJheS5pc0FycmF5KGFjdGlvbnMpICYmIGFjdGlvbnMuZXZlcnkoKHYpID0+IHR5cGVvZih2KSA9PSAnc3RyaW5nJykpe1xuICAgIGZpbmFsQWN0aW9ucyArPSBhY3Rpb25zLmpvaW4oJycpO1xuICB9IGVsc2UgaWYgKHR5cGVvZihhY3Rpb25zKSA9PSAnc3RyaW5nJykge1xuICAgIGZpbmFsQWN0aW9ucyA9IGFjdGlvbnM7XG4gIH1cbiAgICBlbHNlIGlmIChbdG9JbnNlcnQsIHRvVXBkYXRlLCB0b0RlbGV0ZV0uc29tZSgoZSkgPT4gZSkpe1xuICAgIGZpbmFsQWN0aW9ucyArPSBJbnNlcnQodG9JbnNlcnQsIHBhcmFtcykgK1xuICAgICAgVXBkYXRlKHRvVXBkYXRlLCBwYXJhbXMpICtcbiAgICAgIERlbGV0ZSh0b0RlbGV0ZSwgcGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHVuZXhwZWN0ZWQgaW5wdXQ6ICR7SlNPTi5zdHJpbmdpZnkoYWN0aW9ucyl9YCk7XG4gIH1cbiAgLy8gZ2VuZXJhdGUgc2NoZW1hTG9jYXRpb24sIHhtbG5zJ3NcbiAgbnNBc3NpZ25tZW50cyA9IG5zQXNzaWdubWVudHMgfHwge307XG4gIHNjaGVtYUxvY2F0aW9ucyA9IHNjaGVtYUxvY2F0aW9ucyB8fCB7fTtcbiAgbGV0IGF0dHJzID0gZ2VuZXJhdGVOc0Fzc2lnbm1lbnRzKG5zQXNzaWdubWVudHMsIGFjdGlvbnMpO1xuICBhdHRyc1sneHNpOnNjaGVtYUxvY2F0aW9uJ10gPSAgZ2VuZXJhdGVTY2hlbWFMaW5lcyhwYXJhbXMuc2NoZW1hTG9jYXRpb25zKTtcbiAgYXR0cnNbJ3NlcnZpY2UnXSA9ICdXRlMnO1xuICBhdHRyc1sndmVyc2lvbiddID0gLzJcXC4wXFwuXFxkKy8uZXhlYyh2ZXJzaW9uIHx8ICcnKSA/IHZlcnNpb24gOiAnMi4wLjAnO1xuICByZXR1cm4gd2ZzKCdUcmFuc2FjdGlvbicsIGF0dHJzLCBmaW5hbEFjdGlvbnMpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhbiBvYmplY3QgdG8gYmUgcGFzc2VkIHRvIEBzZWUgeG1sLmF0dHJzIHhtbG5zOm5zPVwidXJpXCIgZGVmaW5pdGlvbnMgZm9yIGEgd2ZzOlRyYW5zYWN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gbnNBc3NpZ25tZW50cyBAc2VlIFBhcmFtcy5uc0Fzc2lnbm1lbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30geG1sIGFyYml0cmFyeSB4bWwuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBhbiBvYmplY3QgbWFwcGluZyBlYWNoIG5zIHRvIGl0cyBVUkkgYXMgJ3htbG5zOm5zJyA6ICdVUkknLlxuICogQHRocm93cyB7RXJyb3J9IGlmIGFueSBuYW1lc3BhY2UgdXNlZCB3aXRoaW4gYHhtbGAgaXMgbWlzc2luZyBhIFVSSSBkZWZpbml0aW9uXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlTnNBc3NpZ25tZW50cyhuc0Fzc2lnbm1lbnRzLCB4bWwpe1xuICBsZXQgYXR0cnMgPSB7fTtcbiAgY29uc3QgbWFrZU5zQXNzaWdubWVudCA9IChucywgdXJpKSA9PiBhdHRyc1tgeG1sbnM6JHtuc31gXSA9IHVyaTtcbiAgZm9yIChsZXQgbnMgaW4gbnNBc3NpZ25tZW50cyl7XG4gICAgbWFrZU5zQXNzaWdubWVudChucywgbnNBc3NpZ25tZW50c1tuc10pO1xuICB9XG4gIC8vIGNoZWNrIGFsbCBucydzIGFzc2lnbmVkIFxuICB2YXIgcmUgPSAvKDx8dHlwZU5hbWU9XCIpKFxcdyspOi9nO1xuICB2YXIgYXJyO1xuICB2YXIgYWxsTmFtZXNwYWNlcyA9IG5ldyBTZXQoKTtcbiAgd2hpbGUgKChhcnIgPSByZS5leGVjKHhtbCkpICE9PSBudWxsKXtcbiAgICBhbGxOYW1lc3BhY2VzLmFkZChhcnJbMl0pO1xuICB9XG4gIGlmIChhbGxOYW1lc3BhY2VzLmhhcygnZmVzJykpe1xuICAgIG1ha2VOc0Fzc2lnbm1lbnQoJ2ZlcycsICdodHRwOi8vd3d3Lm9wZW5naXMubmV0L2Zlcy8yLjAnKTtcbiAgfTtcbiAgbWFrZU5zQXNzaWdubWVudCgneHNpJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlJyk7XG4gIG1ha2VOc0Fzc2lnbm1lbnQoJ2dtbCcsICdodHRwOi8vd3d3Lm9wZW5naXMubmV0L2dtbC8zLjInKTtcbiAgbWFrZU5zQXNzaWdubWVudCgnd2ZzJywgJ2h0dHA6Ly93d3cub3Blbmdpcy5uZXQvd2ZzLzIuMCcpO1xuXG4gIGZvciAobGV0IG5zIG9mIGFsbE5hbWVzcGFjZXMpe1xuICAgIGlmICghYXR0cnNbJ3htbG5zOicgKyBuc10pe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bmFzc2lnbmVkIG5hbWVzcGFjZSAke25zfWApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXR0cnM7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyBhbHRlcm5hdGluZyB1cmksIHdoaXRlc3BhY2UsIGFuZCB0aGUgdXJpJ3Mgc2NoZW1hJ3MgbG9jYXRpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hTG9jYXRpb25zIGFuIG9iamVjdCBtYXBwaW5nIHVyaTpzY2hlbWFsb2NhdGlvblxuICogQHJldHVybnMge3N0cmluZ30gYSBzdHJpbmcgdGhhdCBpcyBhIHZhbGlkIHhzaTpzY2hlbWFMb2NhdGlvbiB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVTY2hlbWFMaW5lcyhzY2hlbWFMb2NhdGlvbnM9e30pe1xuICAvL1RPRE86IGFkZCBucyBhc3NpZ25tZW50IGNoZWNrXG4gIHNjaGVtYUxvY2F0aW9uc1snaHR0cDovL3d3dy5vcGVuZ2lzLm5ldC93ZnMvMi4wJ10gPSBcbiAgICAnaHR0cDovL3NjaGVtYXMub3Blbmdpcy5uZXQvd2ZzLzIuMC93ZnMueHNkJztcbiAgdmFyIHNjaGVtYUxpbmVzID0gW107XG4gIGZvciAobGV0IHVyaSBpbiBzY2hlbWFMb2NhdGlvbnMpe1xuICAgIHNjaGVtYUxpbmVzLnB1c2goYCR7dXJpfVxcbiR7c2NoZW1hTG9jYXRpb25zW3VyaV19YCk7XG4gIH1cbiAgcmV0dXJuIHNjaGVtYUxpbmVzLmpvaW4oJ1xcbicpO1xufVxuXG5leHBvcnQge0luc2VydCwgVXBkYXRlLCBSZXBsYWNlLCBEZWxldGUsIFRyYW5zYWN0aW9ufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlb2pzb24tdG8td2ZzLXQtMi9nZW9qc29uLXRvLXdmc3QtMi1lczYuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogXG4gTm90ZSB0aGlzIGNhbiBvbmx5IGNvbnZlcnQgd2hhdCBnZW9qc29uIGNhbiBzdG9yZTogc2ltcGxlIGZlYXR1cmUgdHlwZXMsIG5vdFxuIGNvdmVyYWdlLCB0b3BvbG9neSwgZXRjLlxuICovXG5cbi8qKiBcbiAqIGdlb2pzb24gY29vcmRpbmF0ZXMgYXJlIGluIGxvbmdpdHVkZS9lYXN0aW5nLCBsYXRpdHVkZS9ub3J0aGluZyBbLGVsZXZhdGlvbl1cbiAqIG9yZGVyIGJ5IFtSRkMtNzk0NiDCpyAzLjEuMV17QGxpbmsgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzc5NDYjc2VjdGlvbi0zLjEuMX0uXG4gKiBob3dldmVyLCB5b3UgbWF5IHVzZSBhIENSUyB0aGF0IGZvbGxvd3MgYSBsYXRpdHVkZS9lYXN0aW5nLFxuICogbG9uZ2l0dWRlL25vcnRoaW5nLCBbLGVsZXZhdGlvbl0gb3JkZXIuXG4gKi9cbnZhciBjb29yZGluYXRlT3JkZXIgPSB0cnVlO1xuY29uc3Qgc2V0Q29vcmRpbmF0ZU9yZGVyID0gKG9yZGVyKSA9PiBjb29yZGluYXRlT3JkZXIgPSBvcmRlcjtcbmZ1bmN0aW9uIG9yZGVyQ29vcmRzKGNvb3Jkcyl7XG4gIGlmIChjb29yZGluYXRlT3JkZXIpe1xuICAgIHJldHVybiBjb29yZHM7XG4gIH0gXG4gIGlmIChjb29yZHNbMl0pe1xuICAgIHJldHVybiBbY29vcmRzWzFdLCBjb29yZHNbMF0sIGNvb3Jkc1syXV07XG4gIH0gXG4gIHJldHVybiBjb29yZHMucmV2ZXJzZSgpO1xufVxuXG5cblxuLyoqIEBwcml2YXRlKi9cbmZ1bmN0aW9uIGF0dHJzKGF0dHJNYXBwaW5ncyl7XG4gIGxldCByZXN1bHRzID0gJyc7XG4gIGZvciAobGV0IGF0dHJOYW1lIGluIGF0dHJNYXBwaW5ncyl7XG4gICAgbGV0IHZhbHVlID0gYXR0ck1hcHBpbmdzW2F0dHJOYW1lXTtcbiAgICByZXN1bHRzICs9ICh2YWx1ZSA/IGAgJHthdHRyTmFtZX09XCIke3ZhbHVlfVwiYCA6ICcnKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cztcbn1cblxuLyoqXG4gKiBjaGVja3Mgb3V0ZXIgc2NvcGUgZm9yIGdtbElkIGFyZ3VtZW50L3ZhcmlhYmxlXG4gKiBAZnVuY3Rpb24gXG4gKi9cbmNvbnN0IGVuZm9yY2VHbWxJZCA9IChnbWxJZCkgPT57XG4gIGlmICghZ21sSWQpe1xuICAgIGNvbnNvbGUud2FybignTm8gZ21sSWQgc3VwcGxpZWQnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBIGhhbmRsZXIgdG8gY29tcGlsZSBnZW9tZXRyaWVzIHRvIG11bHRpZ2VvbWV0cmllc1xuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSB0aGUgbmFtZSBvZiB0aGUgdGFyZ2V0IG11bHRpZ2VvbWV0cnlcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZW1iZXJOYW1lIHRoZSBnbWw6dGFnIG9mIGVhY2ggbXVsdGlnZW9tZXRyeSBtZW1iZXIuXG4gKiBAcGFyYW0ge09iamVjdFtdfEFycmF5fSBnZW9tIGFuIGFycmF5IG9mIGdlb2pzb24gZ2VvbWV0cmllc1xuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBnbWxJZCB0aGUgZ21sOmlkIG9mIHRoZSBtdWx0aWdlb21ldHJ5XG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIG9wdGlvbmFsIHBhcmFtZXRlcnMuIE9taXQgZ21sSWRzIGF0IHlvdXIgb3duIHJpc2ssIGhvd2V2ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IHBhcmFtcy5zcnNOYW1lIGFzIHN0cmluZyBzcGVjaWZ5aW5nIFNSU1xuICogQHBhcmFtIHtudW1iZXJbXXxzdHJpbmdbXX0gcGFyYW1zLmdtbElkcyBhbiBhcnJheSBvZiBudW1iZXIvc3RyaW5nIGdtbDppZHMgb2YgdGhlIG1lbWJlciBnZW9tZXRyaWVzLlxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfHVuZGVmaW5lZH0gcGFyYW1zLnNyc0RpbWVuc2lvbiB0aGUgZGltZW5zaW9uYWxpdHkgb2YgZWFjaCBjb29yZGluYXRlLCBpLmUuIDIgb3IgMy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IGEgc3RyaW5nIGNvbnRhaW5pbmcgZ21sIGRlc2NyaWJpbmcgdGhlIGlucHV0IG11bHRpZ2VvbWV0cnlcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiBhIG1lbWJlciBnZW9tZXRyeSBjYW5ub3QgYmUgY29udmVydGVkIHRvIGdtbFxuICovXG5mdW5jdGlvbiBtdWx0aShuYW1lLCBtZW1iZXJOYW1lLCBtZW1iZXJjYiwgZ2VvbSwgZ21sSWQsIHBhcmFtcz17fSl7XG4gIGVuZm9yY2VHbWxJZChnbWxJZCk7XG4gIHZhciB7c3JzTmFtZSwgZ21sSWRzfSA9IHBhcmFtcztcbiAgbGV0IG11bHRpID0gYDxnbWw6JHtuYW1lfSR7YXR0cnMoe3Nyc05hbWUsICdnbWw6aWQnOmdtbElkfSl9PmA7XG4gIG11bHRpICs9IGA8Z21sOiR7bWVtYmVyTmFtZX0+YDtcbiAgZ2VvbS5mb3JFYWNoKGZ1bmN0aW9uKG1lbWJlciwgaSl7XG4gICAgbGV0IF9nbWxJZCA9IG1lbWJlci5pZCB8fCAoZ21sSWRzIHx8IFtdKVtpXSB8fCAnJztcbiAgICBpZiAobmFtZSA9PSAnTXVsdGlHZW9tZXRyeScpe1xuICAgICAgbGV0IG1lbWJlclR5cGUgPSBtZW1iZXIudHlwZTtcbiAgICAgIG1lbWJlciA9IG1lbWJlci5jb29yZGluYXRlcztcbiAgICAgIG11bHRpICs9IG1lbWJlcmNiW21lbWJlclR5cGVdKG1lbWJlciwgX2dtbElkLCBwYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtdWx0aSArPSBtZW1iZXJjYihtZW1iZXIsIF9nbWxJZCwgcGFyYW1zKTtcbiAgICB9XG4gIH0pO1xuICBtdWx0aSArPSBgPC9nbWw6JHttZW1iZXJOYW1lfT5gO1xuICByZXR1cm4gbXVsdGkgKyBgPC9nbWw6JHtuYW1lfT5gO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhbiBpbnB1dCBnZW9qc29uIFBvaW50IGdlb21ldHJ5IHRvIGdtbFxuICogQGZ1bmN0aW9uIFxuICogQHBhcmFtIHtudW1iZXJbXX0gY29vcmRzIHRoZSBjb29yZGluYXRlcyBtZW1iZXIgb2YgdGhlIGdlb2pzb24gZ2VvbWV0cnlcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gZ21sSWQgdGhlIGdtbDppZFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IHBhcmFtcy5zcnNOYW1lIGFzIHN0cmluZyBzcGVjaWZ5aW5nIFNSU1xuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfHVuZGVmaW5lZH0gcGFyYW1zLnNyc0RpbWVuc2lvbiB0aGUgZGltZW5zaW9uYWxpdHkgb2YgZWFjaCBjb29yZGluYXRlLCBpLmUuIDIgb3IgMy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IGEgc3RyaW5nIGNvbnRhaW5pbmcgZ21sIHJlcHJlc2VudGluZyB0aGUgaW5wdXQgZ2VvbWV0cnlcbiAqL1xuZnVuY3Rpb24gUG9pbnQoY29vcmRzLCBnbWxJZCwgcGFyYW1zPXt9KXtcbiAgZW5mb3JjZUdtbElkKGdtbElkKTtcbiAgdmFyIHtzcnNOYW1lOnNyc05hbWUsIHNyc0RpbWVuc2lvbjpzcnNEaW1lbnNpb259ID0gcGFyYW1zO1xuICByZXR1cm4gYDxnbWw6UG9pbnQke2F0dHJzKHtzcnNOYW1lOnNyc05hbWUsICdnbWw6aWQnOiBnbWxJZH0pfT5gICtcbiAgICBgPGdtbDpwb3Mke2F0dHJzKHtzcnNEaW1lbnNpb259KX0+YCArXG4gICAgb3JkZXJDb29yZHMoY29vcmRzKS5qb2luKCcgJykgK1xuICAgICc8L2dtbDpwb3M+JyArXG4gICAgJzwvZ21sOlBvaW50Pic7XG59XG4vKipcbiAqIENvbnZlcnRzIGFuIGlucHV0IGdlb2pzb24gTGluZVN0cmluZyBnZW9tZXRyeSB0byBnbWxcbiAqIEBmdW5jdGlvbiBcbiAqIEBwYXJhbSB7bnVtYmVyW11bXX0gY29vcmRzIHRoZSBjb29yZGluYXRlcyBtZW1iZXIgb2YgdGhlIGdlb2pzb24gZ2VvbWV0cnlcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gZ21sSWQgdGhlIGdtbDppZFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IHBhcmFtcy5zcnNOYW1lIGFzIHN0cmluZyBzcGVjaWZ5aW5nIFNSU1xuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfHVuZGVmaW5lZH0gcGFyYW1zLnNyc0RpbWVuc2lvbiB0aGUgZGltZW5zaW9uYWxpdHkgb2YgZWFjaCBjb29yZGluYXRlLCBpLmUuIDIgb3IgMy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IGEgc3RyaW5nIGNvbnRhaW5pbmcgZ21sIHJlcHJlc2VudGluZyB0aGUgaW5wdXQgZ2VvbWV0cnlcbiAqL1xuZnVuY3Rpb24gTGluZVN0cmluZyhjb29yZHMsIGdtbElkLCBwYXJhbXM9e30pe1xuICBlbmZvcmNlR21sSWQoZ21sSWQpO1xuICB2YXIge3Nyc05hbWU6c3JzTmFtZSwgc3JzRGltZW5zaW9uOnNyc0RpbWVuc2lvbn0gPSBwYXJhbXM7XG4gIHJldHVybiBgPGdtbDpMaW5lU3RyaW5nJHthdHRycyh7c3JzTmFtZSwgJ2dtbDppZCc6Z21sSWR9KX0+YCArXG4gICAgYDxnbWw6cG9zTGlzdCR7YXR0cnMoe3Nyc0RpbWVuc2lvbn0pfT5gICtcbiAgICBjb29yZHMubWFwKChlKT0+b3JkZXJDb29yZHMoZSkuam9pbignICcpKS5qb2luKCcgJykgKyBcbiAgICAnPC9nbWw6cG9zTGlzdD4nICtcbiAgICAnPC9nbWw6TGluZVN0cmluZz4nO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhbiBpbnB1dCBnZW9qc29uIExpbmVhclJpbmcgbWVtYmVyIG9mIGEgcG9seWdvbiBnZW9tZXRyeSB0byBnbWxcbiAqIEBmdW5jdGlvbiBcbiAqIEBwYXJhbSB7bnVtYmVyW11bXX0gY29vcmRzIHRoZSBjb29yZGluYXRlcyBtZW1iZXIgb2YgdGhlIGdlb2pzb24gZ2VvbWV0cnlcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gZ21sSWQgdGhlIGdtbDppZFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IHBhcmFtcy5zcnNOYW1lIGFzIHN0cmluZyBzcGVjaWZ5aW5nIFNSU1xuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfHVuZGVmaW5lZH0gcGFyYW1zLnNyc0RpbWVuc2lvbiB0aGUgZGltZW5zaW9uYWxpdHkgb2YgZWFjaCBjb29yZGluYXRlLCBpLmUuIDIgb3IgMy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IGEgc3RyaW5nIGNvbnRhaW5pbmcgZ21sIHJlcHJlc2VudGluZyB0aGUgaW5wdXQgZ2VvbWV0cnlcbiAqL1xuZnVuY3Rpb24gTGluZWFyUmluZyhjb29yZHMsIGdtbElkLCBwYXJhbXM9e30pe1xuICBlbmZvcmNlR21sSWQoZ21sSWQpO1xuICB2YXIge3Nyc05hbWU6c3JzTmFtZSwgc3JzRGltZW5zaW9uOnNyc0RpbWVuc2lvbn0gPSBwYXJhbXM7XG4gIHJldHVybiBgPGdtbDpMaW5lYXJSaW5nJHthdHRycyh7J2dtbDppZCc6Z21sSWQsIHNyc05hbWV9KX0+YCArXG4gICAgYDxnbWw6cG9zTGlzdCR7YXR0cnMoe3Nyc0RpbWVuc2lvbn0pfT5gICtcbiAgICBjb29yZHMubWFwKChlKT0+b3JkZXJDb29yZHMoZSkuam9pbignICcpKS5qb2luKCcgJykgKyBcbiAgICAnPC9nbWw6cG9zTGlzdD4nICsgXG4gICAgJzwvZ21sOkxpbmVhclJpbmc+Jztcbn1cbi8qKlxuICogQ29udmVydHMgYW4gaW5wdXQgZ2VvanNvbiBQb2x5Z29uIGdlb21ldHJ5IHRvIGdtbFxuICogQGZ1bmN0aW9uIFxuICogQHBhcmFtIHtudW1iZXJbXVtdW119IGNvb3JkcyB0aGUgY29vcmRpbmF0ZXMgbWVtYmVyIG9mIHRoZSBnZW9qc29uIGdlb21ldHJ5XG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGdtbElkIHRoZSBnbWw6aWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgb3B0aW9uYWwgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtzdHJpbmd8dW5kZWZpbmVkfSBwYXJhbXMuc3JzTmFtZSBhcyBzdHJpbmcgc3BlY2lmeWluZyBTUlNcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3x1bmRlZmluZWR9IHBhcmFtcy5zcnNEaW1lbnNpb24gdGhlIGRpbWVuc2lvbmFsaXR5IG9mIGVhY2ggY29vcmRpbmF0ZSwgaS5lLiAyIG9yIDMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhIHN0cmluZyBjb250YWluaW5nIGdtbCByZXByZXNlbnRpbmcgdGhlIGlucHV0IGdlb21ldHJ5XG4gKi9cbmZ1bmN0aW9uIFBvbHlnb24oY29vcmRzLCBnbWxJZCwgcGFyYW1zPXt9KXtcbiAgZW5mb3JjZUdtbElkKGdtbElkKTtcbiAgLy8gZ2VvbS5jb29yZGluYXRlcyBhcmUgYXJyYXlzIG9mIExpbmVhclJpbmdzXG4gIHZhciB7c3JzTmFtZX0gPSBwYXJhbXM7XG4gIGxldCBwb2x5Z29uID0gYDxnbWw6UG9seWdvbiR7YXR0cnMoe3Nyc05hbWUsICdnbWw6aWQnOmdtbElkfSl9PmAgK1xuICAgICAgICAnPGdtbDpleHRlcmlvcj4nICtcbiAgICAgICAgTGluZWFyUmluZyhjb29yZHNbMF0pICtcbiAgICAgICAgJzwvZ21sOmV4dGVyaW9yPic7XG4gIGlmIChjb29yZHMubGVuZ3RoID49IDIpe1xuICAgIGZvciAobGV0IGxpbmVhclJpbmcgb2YgY29vcmRzLnNsaWNlKDEpKXtcbiAgICAgIHBvbHlnb24gKz0gJzxnbWw6aW50ZXJpb3I+JyArXG4gICAgICAgIExpbmVhclJpbmcobGluZWFyUmluZykgKyBcbiAgICAgICAgJzwvZ21sOmludGVyaW9yPic7XG4gICAgfVxuICB9XG4gIHBvbHlnb24gKz0gJzwvZ21sOlBvbHlnb24+JztcbiAgcmV0dXJuIHBvbHlnb247XG59XG4vKipcbiAqIENvbnZlcnRzIGFuIGlucHV0IGdlb2pzb24gTXVsdGlQb2ludCBnZW9tZXRyeSB0byBnbWxcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtudW1iZXJbXVtdfSBjb29yZHMgdGhlIGNvb3JkaW5hdGVzIG1lbWJlciBvZiB0aGUgZ2VvanNvbiBnZW9tZXRyeVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBnbWxJZCB0aGUgZ21sOmlkXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gcGFyYW1zLnNyc05hbWUgYXMgc3RyaW5nIHNwZWNpZnlpbmcgU1JTXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8dW5kZWZpbmVkfSBwYXJhbXMuc3JzRGltZW5zaW9uIHRoZSBkaW1lbnNpb25hbGl0eSBvZiBlYWNoIGNvb3JkaW5hdGUsIGkuZS4gMiBvciAzLlxuICogQHJldHVybnMge3N0cmluZ30gYSBzdHJpbmcgY29udGFpbmluZyBnbWwgcmVwcmVzZW50aW5nIHRoZSBpbnB1dCBnZW9tZXRyeVxuICovXG5mdW5jdGlvbiBNdWx0aVBvaW50KGNvb3JkcywgZ21sSWQsIHBhcmFtcz17fSl7XG4gIGVuZm9yY2VHbWxJZChnbWxJZCk7XG4gIHJldHVybiBtdWx0aSgnTXVsdGlQb2ludCcsICdwb2ludE1lbWJlcnMnLCBQb2ludCwgY29vcmRzLCBnbWxJZCwgcGFyYW1zKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBpbnB1dCBnZW9qc29uIE11bHRpTGluZVN0cmluZyBnZW9tZXRyeSB0byBnbWxcbiAqIEBmdW5jdGlvbiBcbiAqIEBwYXJhbSB7bnVtYmVyW11bXVtdfSBjb29yZHMgdGhlIGNvb3JkaW5hdGVzIG1lbWJlciBvZiB0aGUgZ2VvanNvbiBnZW9tZXRyeVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBnbWxJZCB0aGUgZ21sOmlkXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gcGFyYW1zLnNyc05hbWUgYXMgc3RyaW5nIHNwZWNpZnlpbmcgU1JTXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8dW5kZWZpbmVkfSBwYXJhbXMuc3JzRGltZW5zaW9uIHRoZSBkaW1lbnNpb25hbGl0eSBvZiBlYWNoIGNvb3JkaW5hdGUsIGkuZS4gMiBvciAzLlxuICogQHJldHVybnMge3N0cmluZ30gYSBzdHJpbmcgY29udGFpbmluZyBnbWwgcmVwcmVzZW50aW5nIHRoZSBpbnB1dCBnZW9tZXRyeVxuICovXG5mdW5jdGlvbiBNdWx0aUxpbmVTdHJpbmcoY29vcmRzLCBnbWxJZCwgcGFyYW1zPXt9KXtcbiAgcmV0dXJuIG11bHRpKCdNdWx0aUN1cnZlJywgJ2N1cnZlTWVtYmVycycsIExpbmVTdHJpbmcsIGNvb3JkcywgZ21sSWQsIHBhcmFtcyk7XG59XG4vKipcbiAqIENvbnZlcnRzIGFuIGlucHV0IGdlb2pzb24gTXVsdGlQb2x5Z29uIGdlb21ldHJ5IHRvIGdtbFxuICogQGZ1bmN0aW9uIFxuICogQHBhcmFtIHtudW1iZXJbXVtdW11bXX0gY29vcmRzIHRoZSBjb29yZGluYXRlcyBtZW1iZXIgb2YgdGhlIGdlb2pzb24gZ2VvbWV0cnlcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gZ21sSWQgdGhlIGdtbDppZFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IHBhcmFtcy5zcnNOYW1lIGFzIHN0cmluZyBzcGVjaWZ5aW5nIFNSU1xuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfHVuZGVmaW5lZH0gcGFyYW1zLnNyc0RpbWVuc2lvbiB0aGUgZGltZW5zaW9uYWxpdHkgb2YgZWFjaCBjb29yZGluYXRlLCBpLmUuIDIgb3IgMy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IGEgc3RyaW5nIGNvbnRhaW5pbmcgZ21sIHJlcHJlc2VudGluZyB0aGUgaW5wdXQgZ2VvbWV0cnlcbiAqL1xuZnVuY3Rpb24gTXVsdGlQb2x5Z29uKGNvb3JkcywgZ21sSWQsIHBhcmFtcz17fSl7XG4gIHJldHVybiBtdWx0aSgnTXVsdGlTdXJmYWNlJywgJ3N1cmZhY2VNZW1iZXJzJywgUG9seWdvbiwgY29vcmRzLCBnbWxJZCwgcGFyYW1zKTtcbn1cbi8qKiBAY29uc3QgXG4gKiBAZGVzYyBhIG5hbWVzcGFjZSB0byBzd2l0Y2ggYmV0d2VlbiBnZW9qc29uLWhhbmRsaW5nIGZ1bmN0aW9ucyBieSBnZW9qc29uLnR5cGVcbiAqL1xuY29uc3QgY29udmVydGVyID0ge1xuICBQb2ludCwgTGluZVN0cmluZywgTGluZWFyUmluZywgUG9seWdvbiwgTXVsdGlQb2ludCwgTXVsdGlMaW5lU3RyaW5nLFxuICBNdWx0aVBvbHlnb24sIEdlb21ldHJ5Q29sbGVjdGlvblxufTtcbi8qKlxuICogQ29udmVydHMgYW4gaW5wdXQgZ2VvanNvbiBHZW9tZXRyeUNvbGxlY3Rpb24gZ2VvbWV0cnkgdG8gZ21sXG4gKiBAZnVuY3Rpb24gXG4gKiBAcGFyYW0ge09iamVjdFtdfSBjb29yZHMgdGhlIGNvb3JkaW5hdGVzIG1lbWJlciBvZiB0aGUgZ2VvanNvbiBnZW9tZXRyeVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBnbWxJZCB0aGUgZ21sOmlkXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gcGFyYW1zLnNyc05hbWUgYXMgc3RyaW5nIHNwZWNpZnlpbmcgU1JTXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8dW5kZWZpbmVkfSBwYXJhbXMuc3JzRGltZW5zaW9uIHRoZSBkaW1lbnNpb25hbGl0eSBvZiBlYWNoIGNvb3JkaW5hdGUsIGkuZS4gMiBvciAzLlxuICogQHJldHVybnMge3N0cmluZ30gYSBzdHJpbmcgY29udGFpbmluZyBnbWwgcmVwcmVzZW50aW5nIHRoZSBpbnB1dCBnZW9tZXRyeVxuICovXG5mdW5jdGlvbiBHZW9tZXRyeUNvbGxlY3Rpb24oZ2VvbXMsIGdtbElkLCBwYXJhbXM9e30pe1xuICByZXR1cm4gbXVsdGkoJ011bHRpR2VvbWV0cnknLCAnZ2VvbWV0cnlNZW1iZXJzJywgY29udmVydGVyLFxuICAgICAgICAgICAgICAgZ2VvbXMsIGdtbElkLCBwYXJhbXMpO1xufVxuXG4vKipcbiAqIFRyYW5zbGF0ZXMgYW55IGdlb2pzb24gZ2VvbWV0cnkgaW50byBHTUwgMy4yLjFcbiAqIEBwdWJsaWMgXG4gKiBAZnVuY3Rpb24gXG4gKiBAcGFyYW0ge09iamVjdH0gZ2VvbSBhIGdlb2pzb24gZ2VvbWV0cnkgb2JqZWN0XG4gKiBAcGFyYW0ge0FycmF5fHVuZGVmaW5lZH0gZ2VvbS5jb29yZGluYXRlcyB0aGUgbmVzdGVkIGFycmF5IG9mIGNvb3JkaW5hdGVzIGZvcm1pbmcgdGhlIGdlb21ldHJ5XG4gKiBAcGFyYW0ge09iamVjdFtdfHVuZGVmaW5lZH0gZ2VvbS5nZW9tZXRyaWVzIGZvciBhIEdlb21ldHJ5Q29sbGVjdGlvbiBvbmx5LCB0aGUgYXJyYXkgb2YgbWVtYmVyIGdlb21ldHJ5IG9iamVjdHNcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gZ21sSWQgdGhlIGdtbDppZCBvZiB0aGUgZ2VvbWV0cnlcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgb3B0aW9uYWwgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtzdHJpbmd8dW5kZWZpbmVkfSBwYXJhbXMuc3JzTmFtZSBhIHN0cmluZyBzcGVjaWZ5aW5nIHRoZSBTUlNcbiAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gcGFyYW1zLnNyc0RpbWVuc2lvbiB0aGUgZGltZW5zaW9uYWxpdHkgb2YgZWFjaCBjb29yZGluYXRlLCBpLmUuIDIgb3IgMy5cbiAqIEBwYXJhbSB7bnVtYmVyW118c3RyaW5nW118dW5kZWZpbmVkfSBnbWxJZHMgIGFuIGFycmF5IG9mIG51bWJlci9zdHJpbmcgZ21sOmlkcyBvZiB0aGUgbWVtYmVyIGdlb21ldHJpZXMgb2YgYSBtdWx0aWdlb21ldHJ5LlxuICogQHJldHVybnMge3N0cmluZ30gYSB2YWxpZCBnbWwgc3RyaW5nIGRlc2NyaWJpbmcgdGhlIGlucHV0IGdlb2pzb24gZ2VvbWV0cnlcbiAqL1xuZnVuY3Rpb24gZ2VvbVRvR21sKGdlb20sIGdtbElkLCBwYXJhbXMpe1xuICByZXR1cm4gY29udmVydGVyW2dlb20udHlwZV0oXG4gICAgZ2VvbS5jb29yZGluYXRlcyB8fCBnZW9tLmdlb21ldHJpZXMsXG4gICAgZ21sSWQsXG4gICAgcGFyYW1zXG4gICk7XG59XG5cbmV4cG9ydCB7XG4gIGdlb21Ub0dtbCwgY29udmVydGVyLCBQb2ludCwgTGluZVN0cmluZywgTGluZWFyUmluZyxcbiAgUG9seWdvbiwgTXVsdGlQb2ludCwgTXVsdGlMaW5lU3RyaW5nLCBNdWx0aVBvbHlnb24sXG4gIHNldENvb3JkaW5hdGVPcmRlclxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlb2pzb24tdG8tZ21sLTMvZ2VvbVRvR21sLTMuMi4xLWVzNi5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9