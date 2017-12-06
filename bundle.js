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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__updateCoordinates_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__updateCoordinates_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__updateCoordinates_js__);
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
});

map.on('click', e => Object(__WEBPACK_IMPORTED_MODULE_2__updateCoordinates_js__["updateCoordinates"])(e.lnglat));
geocoder.on('select', e => Object(__WEBPACK_IMPORTED_MODULE_2__updateCoordinates_js__["updateCoordinates"])(e.feature.geometry.coordinates));

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
  const coordinates = Object(__WEBPACK_IMPORTED_MODULE_2__updateCoordinates_js__["getCoordinates"])();
  if (response && coordinates){
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




/***/ }),
/* 4 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTZjNzFmNjYwNjUxOWVhNGU3ZjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdHVyZi9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZW9qc29uLXRvLXdmcy10LTIvZ2VvanNvbi10by13ZnN0LTItZXM2LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZW9qc29uLXRvLWdtbC0zL2dlb21Ub0dtbC0zLjIuMS1lczYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ2M7QUFDZDtBQUMwQzs7QUFFMUM7O0FBRUEsOENBQThDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLFlBQVk7QUFDNUYsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUMsRUFBRTs7QUFFSDtB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O0FBTUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTZjNzFmNjYwNjUxOWVhNGU3ZjEiLCIvKiBnbG9iYWwgTCwgTUJfQUNDRVNTX1RPS0VOLCBNWl9BUElfS0VZICovXG4vLyBzZXQgdXAgdGhlIG1hcFxuLy8gc3RhdGUgYW5kIG1hcCB3aWxsIGJlIGdsb2JhbHMgZm9yIHRoZSBtb21lbnQgZm9yIGVhc2Ugb2YgZGV2ZWxvcG1lbnRcbmltcG9ydCB7cG9pbnR9IGZyb20gJ0B0dXJmL2hlbHBlcnMnO1xuaW1wb3J0ICogYXMgd2ZzdCBmcm9tICdnZW9qc29uLXRvLXdmcy10LTInO1xuaW1wb3J0IHtnZXRDb29yZGluYXRlcywgdXBkYXRlQ29vcmRpbmF0ZXN9IGZyb20gJy4vdXBkYXRlQ29vcmRpbmF0ZXMuanMnO1xuXG5jb25zdCBtYXAgPSBuZXcgTC5tYXAoJ21hcCcpLnNldFZpZXcoWyA0Mi4zNiwgLTcxLjA1ODldLCAxMyk7XG5cbkwudGlsZUxheWVyKCdodHRwczovL2FwaS50aWxlcy5tYXBib3guY29tL3Y0L3tpZH0ve3p9L3t4fS97eX0ucG5nP2FjY2Vzc190b2tlbj17YWNjZXNzVG9rZW59Jywge1xuICBhdHRyaWJ1dGlvbjogJ01hcCBkYXRhICZjb3B5OyA8YSBocmVmPVwiaHR0cDovL29wZW5zdHJlZXRtYXAub3JnXCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzLCA8YSBocmVmPVwiaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMi4wL1wiPkNDLUJZLVNBPC9hPiwgSW1hZ2VyeSDCqSA8YSBocmVmPVwiaHR0cDovL21hcGJveC5jb21cIj5NYXBib3g8L2E+JyxcbiAgbWF4Wm9vbTogMTgsXG4gIGlkOiAnbWFwYm94LnN0cmVldHMnLFxuICBhY2Nlc3NUb2tlbjogTUJfQUNDRVNTX1RPS0VOXG59KS5hZGRUbyhtYXApO1xuXG5jb25zdCBnZW9jb2RlciA9IEwuY29udHJvbC5nZW9jb2RlcihNWl9BUElfS0VZLCB7XG4gIHBsYWNlaG9sZGVyOiAnU2VhcmNoIHlvdXIgcGxhY2Ugb2YgcmVzaWRlbmNlJ1xufSk7XG5cbm1hcC5vbignY2xpY2snLCBlID0+IHVwZGF0ZUNvb3JkaW5hdGVzKGUubG5nbGF0KSk7XG5nZW9jb2Rlci5vbignc2VsZWN0JywgZSA9PiB1cGRhdGVDb29yZGluYXRlcyhlLmZlYXR1cmUuZ2VvbWV0cnkuY29vcmRpbmF0ZXMpKTtcblxuY29uc3QgZ2V0UmVzcG9uc2UgPSAoZnVuY3Rpb24gZm9ybUxpc3RlbkNsb3N1cmUoKXtcbiAgbGV0IHJlc3BvbnNlID0gJyc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGU9PntcbiAgICByZXNwb25zZSA9IGUudGFyZ2V0LnZhbHVlO1xuICB9KTtcbiAgcmV0dXJuICgpPT4gcmVzcG9uc2U7XG59KSgpO1xuXG5jb25zdCBwb3N0ID0gKGJvZHkpID0+IGZldGNoKEdFT1NFUlZFUl9VUkwsIHtcbiAgbWV0aG9kOidQT1NUJywgYm9keVxufSk7IC8vIG1pZ2h0IG5lZWQgaGVhZGVyc1xuXG5mdW5jdGlvbiBzdWJtaXQoKXtcbiAgY29uc3QgcmVzcG9uc2UgPSBnZXRSZXNwb25zZSgpO1xuICBjb25zdCBjb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzKCk7XG4gIGlmIChyZXNwb25zZSAmJiBjb29yZGluYXRlcyl7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSB3ZnN0LlRyYW5zYWN0aW9uKFxuICAgICAgd2ZzdC5JbnNlcnQoXG4gICAgICAgIHBvaW50KGNvb3JkaW5hdGVzLCB7cmVzcG9uc2V9KVxuICAgICAgKSxcbiAgICAgIHsvKiBuYW1lc3BhY2UqL31cbiAgICApO1xuICAgIHJldHVybiBwb3N0KHRyYW5zYWN0aW9uKVxuICAgICAgLnRoZW4oIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpIC8vVE9ETzogY2hlY2sgdGhlIHJlc3BvbnNlIGZvciBpbnNlcnRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdWNjZXNzLlxuICAgICAgLmNhdGNoKGVycj0+e1xuICAgICAgICBjb25zb2xlLmVycm9yKCdwb3N0IGZhaWx1cmU6ICcsIGVycilcbiAgICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYm90aCBjb29yZGluYXRlcyBhbmQgYSByZXNwb25zZSB0byBzdWJtaXQgeW91ciBhbnN3ZXInKTtcbiAgfVxufVxuXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Jyk7XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXQpO1xuYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBFYXJ0aCBSYWRpdXMgdXNlZCB3aXRoIHRoZSBIYXJ2ZXNpbmUgZm9ybXVsYSBhbmQgYXBwcm94aW1hdGVzIHVzaW5nIGEgc3BoZXJpY2FsIChub24tZWxsaXBzb2lkKSBFYXJ0aC5cbiAqL1xuZXhwb3J0IHZhciBlYXJ0aFJhZGl1cyA9IDYzNzEwMDguODtcblxuLyoqXG4gKiBVbml0IG9mIG1lYXN1cmVtZW50IGZhY3RvcnMgdXNpbmcgYSBzcGhlcmljYWwgKG5vbi1lbGxpcHNvaWQpIGVhcnRoIHJhZGl1cy5cbiAqL1xuZXhwb3J0IHZhciBmYWN0b3JzID0ge1xuICAgIG1ldGVyczogZWFydGhSYWRpdXMsXG4gICAgbWV0cmVzOiBlYXJ0aFJhZGl1cyxcbiAgICBtaWxsaW1ldGVyczogZWFydGhSYWRpdXMgKiAxMDAwLFxuICAgIG1pbGxpbWV0cmVzOiBlYXJ0aFJhZGl1cyAqIDEwMDAsXG4gICAgY2VudGltZXRlcnM6IGVhcnRoUmFkaXVzICogMTAwLFxuICAgIGNlbnRpbWV0cmVzOiBlYXJ0aFJhZGl1cyAqIDEwMCxcbiAgICBraWxvbWV0ZXJzOiBlYXJ0aFJhZGl1cyAvIDEwMDAsXG4gICAga2lsb21ldHJlczogZWFydGhSYWRpdXMgLyAxMDAwLFxuICAgIG1pbGVzOiBlYXJ0aFJhZGl1cyAvIDE2MDkuMzQ0LFxuICAgIG5hdXRpY2FsbWlsZXM6IGVhcnRoUmFkaXVzIC8gMTg1MixcbiAgICBpbmNoZXM6IGVhcnRoUmFkaXVzICogMzkuMzcwLFxuICAgIHlhcmRzOiBlYXJ0aFJhZGl1cyAvIDEuMDkzNixcbiAgICBmZWV0OiBlYXJ0aFJhZGl1cyAqIDMuMjgwODQsXG4gICAgcmFkaWFuczogMSxcbiAgICBkZWdyZWVzOiBlYXJ0aFJhZGl1cyAvIDExMTMyNSxcbn07XG5cbi8qKlxuICogVW5pdHMgb2YgbWVhc3VyZW1lbnQgZmFjdG9ycyBiYXNlZCBvbiAxIG1ldGVyLlxuICovXG5leHBvcnQgdmFyIHVuaXRzRmFjdG9ycyA9IHtcbiAgICBtZXRlcnM6IDEsXG4gICAgbWV0cmVzOiAxLFxuICAgIG1pbGxpbWV0ZXJzOiAxMDAwLFxuICAgIG1pbGxpbWV0cmVzOiAxMDAwLFxuICAgIGNlbnRpbWV0ZXJzOiAxMDAsXG4gICAgY2VudGltZXRyZXM6IDEwMCxcbiAgICBraWxvbWV0ZXJzOiAxIC8gMTAwMCxcbiAgICBraWxvbWV0cmVzOiAxIC8gMTAwMCxcbiAgICBtaWxlczogMSAvIDE2MDkuMzQ0LFxuICAgIG5hdXRpY2FsbWlsZXM6IDEgLyAxODUyLFxuICAgIGluY2hlczogMzkuMzcwLFxuICAgIHlhcmRzOiAxIC8gMS4wOTM2LFxuICAgIGZlZXQ6IDMuMjgwODQsXG4gICAgcmFkaWFuczogMSAvIGVhcnRoUmFkaXVzLFxuICAgIGRlZ3JlZXM6IDEgLyAxMTEzMjUsXG59O1xuXG4vKipcbiAqIEFyZWEgb2YgbWVhc3VyZW1lbnQgZmFjdG9ycyBiYXNlZCBvbiAxIHNxdWFyZSBtZXRlci5cbiAqL1xuZXhwb3J0IHZhciBhcmVhRmFjdG9ycyA9IHtcbiAgICBtZXRlcnM6IDEsXG4gICAgbWV0cmVzOiAxLFxuICAgIG1pbGxpbWV0ZXJzOiAxMDAwMDAwLFxuICAgIG1pbGxpbWV0cmVzOiAxMDAwMDAwLFxuICAgIGNlbnRpbWV0ZXJzOiAxMDAwMCxcbiAgICBjZW50aW1ldHJlczogMTAwMDAsXG4gICAga2lsb21ldGVyczogMC4wMDAwMDEsXG4gICAga2lsb21ldHJlczogMC4wMDAwMDEsXG4gICAgYWNyZXM6IDAuMDAwMjQ3MTA1LFxuICAgIG1pbGVzOiAzLjg2ZS03LFxuICAgIHlhcmRzOiAxLjE5NTk5MDA0NixcbiAgICBmZWV0OiAxMC43NjM5MTA0MTcsXG4gICAgaW5jaGVzOiAxNTUwLjAwMzEwMDAwNlxufTtcblxuLyoqXG4gKiBXcmFwcyBhIEdlb0pTT04ge0BsaW5rIEdlb21ldHJ5fSBpbiBhIEdlb0pTT04ge0BsaW5rIEZlYXR1cmV9LlxuICpcbiAqIEBuYW1lIGZlYXR1cmVcbiAqIEBwYXJhbSB7R2VvbWV0cnl9IGdlb21ldHJ5IGlucHV0IGdlb21ldHJ5XG4gKiBAcGFyYW0ge09iamVjdH0gW3Byb3BlcnRpZXM9e31dIGFuIE9iamVjdCBvZiBrZXktdmFsdWUgcGFpcnMgdG8gYWRkIGFzIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2Jib3hdIEJCb3ggW3dlc3QsIHNvdXRoLCBlYXN0LCBub3J0aF1cbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2lkXSBJZGVudGlmaWVyXG4gKiBAcmV0dXJucyB7RmVhdHVyZX0gYSBHZW9KU09OIEZlYXR1cmVcbiAqIEBleGFtcGxlXG4gKiB2YXIgZ2VvbWV0cnkgPSB7XG4gKiAgIFwidHlwZVwiOiBcIlBvaW50XCIsXG4gKiAgIFwiY29vcmRpbmF0ZXNcIjogWzExMCwgNTBdXG4gKiB9O1xuICpcbiAqIHZhciBmZWF0dXJlID0gdHVyZi5mZWF0dXJlKGdlb21ldHJ5KTtcbiAqXG4gKiAvLz1mZWF0dXJlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmZWF0dXJlKGdlb21ldHJ5LCBwcm9wZXJ0aWVzLCBiYm94LCBpZCkge1xuICAgIGlmIChnZW9tZXRyeSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoJ2dlb21ldHJ5IGlzIHJlcXVpcmVkJyk7XG4gICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5jb25zdHJ1Y3RvciAhPT0gT2JqZWN0KSB0aHJvdyBuZXcgRXJyb3IoJ3Byb3BlcnRpZXMgbXVzdCBiZSBhbiBPYmplY3QnKTtcbiAgICBpZiAoYmJveCkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYmJveCkpIHRocm93IG5ldyBFcnJvcignYmJveCBtdXN0IGJlIGFuIEFycmF5Jyk7XG4gICAgICAgIGlmIChiYm94Lmxlbmd0aCAhPT0gNCkgdGhyb3cgbmV3IEVycm9yKCdiYm94IG11c3QgYmUgYW4gQXJyYXkgb2YgNCBudW1iZXJzJyk7XG4gICAgfVxuICAgIGlmIChpZCAmJiBbJ3N0cmluZycsICdudW1iZXInXS5pbmRleE9mKHR5cGVvZiBpZCkgPT09IC0xKSB0aHJvdyBuZXcgRXJyb3IoJ2lkIG11c3QgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcnKTtcblxuICAgIHZhciBmZWF0ID0ge3R5cGU6ICdGZWF0dXJlJ307XG4gICAgaWYgKGlkKSBmZWF0LmlkID0gaWQ7XG4gICAgaWYgKGJib3gpIGZlYXQuYmJveCA9IGJib3g7XG4gICAgZmVhdC5wcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTtcbiAgICBmZWF0Lmdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgcmV0dXJuIGZlYXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIEdlb0pTT04ge0BsaW5rIEdlb21ldHJ5fSBmcm9tIGEgR2VvbWV0cnkgc3RyaW5nIHR5cGUgJiBjb29yZGluYXRlcy5cbiAqIEZvciBHZW9tZXRyeUNvbGxlY3Rpb24gdHlwZSB1c2UgYGhlbHBlcnMuZ2VvbWV0cnlDb2xsZWN0aW9uYFxuICpcbiAqIEBuYW1lIGdlb21ldHJ5XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBHZW9tZXRyeSBUeXBlXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGNvb3JkaW5hdGVzIENvb3JkaW5hdGVzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtiYm94XSBCQm94IFt3ZXN0LCBzb3V0aCwgZWFzdCwgbm9ydGhdXG4gKiBAcmV0dXJucyB7R2VvbWV0cnl9IGEgR2VvSlNPTiBHZW9tZXRyeVxuICogQGV4YW1wbGVcbiAqIHZhciB0eXBlID0gJ1BvaW50JztcbiAqIHZhciBjb29yZGluYXRlcyA9IFsxMTAsIDUwXTtcbiAqXG4gKiB2YXIgZ2VvbWV0cnkgPSB0dXJmLmdlb21ldHJ5KHR5cGUsIGNvb3JkaW5hdGVzKTtcbiAqXG4gKiAvLz1nZW9tZXRyeVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VvbWV0cnkodHlwZSwgY29vcmRpbmF0ZXMsIGJib3gpIHtcbiAgICAvLyBWYWxpZGF0aW9uXG4gICAgaWYgKCF0eXBlKSB0aHJvdyBuZXcgRXJyb3IoJ3R5cGUgaXMgcmVxdWlyZWQnKTtcbiAgICBpZiAoIWNvb3JkaW5hdGVzKSB0aHJvdyBuZXcgRXJyb3IoJ2Nvb3JkaW5hdGVzIGlzIHJlcXVpcmVkJyk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNvb3JkaW5hdGVzKSkgdGhyb3cgbmV3IEVycm9yKCdjb29yZGluYXRlcyBtdXN0IGJlIGFuIEFycmF5Jyk7XG4gICAgaWYgKGJib3ggJiYgYmJveC5sZW5ndGggIT09IDQpIHRocm93IG5ldyBFcnJvcignYmJveCBtdXN0IGJlIGFuIEFycmF5IG9mIDQgbnVtYmVycycpO1xuXG4gICAgdmFyIGdlb207XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnUG9pbnQnOiBnZW9tID0gcG9pbnQoY29vcmRpbmF0ZXMpLmdlb21ldHJ5OyBicmVhaztcbiAgICBjYXNlICdMaW5lU3RyaW5nJzogZ2VvbSA9IGxpbmVTdHJpbmcoY29vcmRpbmF0ZXMpLmdlb21ldHJ5OyBicmVhaztcbiAgICBjYXNlICdQb2x5Z29uJzogZ2VvbSA9IHBvbHlnb24oY29vcmRpbmF0ZXMpLmdlb21ldHJ5OyBicmVhaztcbiAgICBjYXNlICdNdWx0aVBvaW50JzogZ2VvbSA9IG11bHRpUG9pbnQoY29vcmRpbmF0ZXMpLmdlb21ldHJ5OyBicmVhaztcbiAgICBjYXNlICdNdWx0aUxpbmVTdHJpbmcnOiBnZW9tID0gbXVsdGlMaW5lU3RyaW5nKGNvb3JkaW5hdGVzKS5nZW9tZXRyeTsgYnJlYWs7XG4gICAgY2FzZSAnTXVsdGlQb2x5Z29uJzogZ2VvbSA9IG11bHRpUG9seWdvbihjb29yZGluYXRlcykuZ2VvbWV0cnk7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcih0eXBlICsgJyBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIGlmIChiYm94KSBnZW9tLmJib3ggPSBiYm94O1xuICAgIHJldHVybiBnZW9tO1xufVxuXG4vKipcbiAqIFRha2VzIGNvb3JkaW5hdGVzIGFuZCBwcm9wZXJ0aWVzIChvcHRpb25hbCkgYW5kIHJldHVybnMgYSBuZXcge0BsaW5rIFBvaW50fSBmZWF0dXJlLlxuICpcbiAqIEBuYW1lIHBvaW50XG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGNvb3JkaW5hdGVzIGxvbmdpdHVkZSwgbGF0aXR1ZGUgcG9zaXRpb24gKGVhY2ggaW4gZGVjaW1hbCBkZWdyZWVzKVxuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBhbiBPYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFkZCBhcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtiYm94XSBCQm94IFt3ZXN0LCBzb3V0aCwgZWFzdCwgbm9ydGhdXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtpZF0gSWRlbnRpZmllclxuICogQHJldHVybnMge0ZlYXR1cmU8UG9pbnQ+fSBhIFBvaW50IGZlYXR1cmVcbiAqIEBleGFtcGxlXG4gKiB2YXIgcG9pbnQgPSB0dXJmLnBvaW50KFstNzUuMzQzLCAzOS45ODRdKTtcbiAqXG4gKiAvLz1wb2ludFxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9pbnQoY29vcmRpbmF0ZXMsIHByb3BlcnRpZXMsIGJib3gsIGlkKSB7XG4gICAgaWYgKCFjb29yZGluYXRlcykgdGhyb3cgbmV3IEVycm9yKCdObyBjb29yZGluYXRlcyBwYXNzZWQnKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY29vcmRpbmF0ZXMpKSB0aHJvdyBuZXcgRXJyb3IoJ0Nvb3JkaW5hdGVzIG11c3QgYmUgYW4gQXJyYXknKTtcbiAgICBpZiAoY29vcmRpbmF0ZXMubGVuZ3RoIDwgMikgdGhyb3cgbmV3IEVycm9yKCdDb29yZGluYXRlcyBtdXN0IGJlIGF0IGxlYXN0IDIgbnVtYmVycyBsb25nJyk7XG4gICAgaWYgKCFpc051bWJlcihjb29yZGluYXRlc1swXSkgfHwgIWlzTnVtYmVyKGNvb3JkaW5hdGVzWzFdKSkgdGhyb3cgbmV3IEVycm9yKCdDb29yZGluYXRlcyBtdXN0IGNvbnRhaW4gbnVtYmVycycpO1xuXG4gICAgcmV0dXJuIGZlYXR1cmUoe1xuICAgICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgICBjb29yZGluYXRlczogY29vcmRpbmF0ZXNcbiAgICB9LCBwcm9wZXJ0aWVzLCBiYm94LCBpZCk7XG59XG5cbi8qKlxuICogVGFrZXMgYW4gYXJyYXkgb2YgTGluZWFyUmluZ3MgYW5kIG9wdGlvbmFsbHkgYW4ge0BsaW5rIE9iamVjdH0gd2l0aCBwcm9wZXJ0aWVzIGFuZCByZXR1cm5zIGEge0BsaW5rIFBvbHlnb259IGZlYXR1cmUuXG4gKlxuICogQG5hbWUgcG9seWdvblxuICogQHBhcmFtIHtBcnJheTxBcnJheTxBcnJheTxudW1iZXI+Pj59IGNvb3JkaW5hdGVzIGFuIGFycmF5IG9mIExpbmVhclJpbmdzXG4gKiBAcGFyYW0ge09iamVjdH0gW3Byb3BlcnRpZXM9e31dIGFuIE9iamVjdCBvZiBrZXktdmFsdWUgcGFpcnMgdG8gYWRkIGFzIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2Jib3hdIEJCb3ggW3dlc3QsIHNvdXRoLCBlYXN0LCBub3J0aF1cbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2lkXSBJZGVudGlmaWVyXG4gKiBAcmV0dXJucyB7RmVhdHVyZTxQb2x5Z29uPn0gYSBQb2x5Z29uIGZlYXR1cmVcbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiBhIExpbmVhclJpbmcgb2YgdGhlIHBvbHlnb24gaGFzIHRvbyBmZXcgcG9zaXRpb25zXG4gKiBvciBpZiBhIExpbmVhclJpbmcgb2YgdGhlIFBvbHlnb24gZG9lcyBub3QgaGF2ZSBtYXRjaGluZyBQb3NpdGlvbnMgYXQgdGhlIGJlZ2lubmluZyAmIGVuZC5cbiAqIEBleGFtcGxlXG4gKiB2YXIgcG9seWdvbiA9IHR1cmYucG9seWdvbihbW1xuICogICBbLTIuMjc1NTQzLCA1My40NjQ1NDddLFxuICogICBbLTIuMjc1NTQzLCA1My40ODkyNzFdLFxuICogICBbLTIuMjE1MTE4LCA1My40ODkyNzFdLFxuICogICBbLTIuMjE1MTE4LCA1My40NjQ1NDddLFxuICogICBbLTIuMjc1NTQzLCA1My40NjQ1NDddXG4gKiBdXSwgeyBuYW1lOiAncG9seTEnLCBwb3B1bGF0aW9uOiA0MDB9KTtcbiAqXG4gKiAvLz1wb2x5Z29uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uKGNvb3JkaW5hdGVzLCBwcm9wZXJ0aWVzLCBiYm94LCBpZCkge1xuICAgIGlmICghY29vcmRpbmF0ZXMpIHRocm93IG5ldyBFcnJvcignTm8gY29vcmRpbmF0ZXMgcGFzc2VkJyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciByaW5nID0gY29vcmRpbmF0ZXNbaV07XG4gICAgICAgIGlmIChyaW5nLmxlbmd0aCA8IDQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRWFjaCBMaW5lYXJSaW5nIG9mIGEgUG9seWdvbiBtdXN0IGhhdmUgNCBvciBtb3JlIFBvc2l0aW9ucy4nKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJpbmdbcmluZy5sZW5ndGggLSAxXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZmlyc3QgcG9pbnQgb2YgUG9seWdvbiBjb250YWlucyB0d28gbnVtYmVyc1xuICAgICAgICAgICAgaWYgKGkgPT09IDAgJiYgaiA9PT0gMCAmJiAhaXNOdW1iZXIocmluZ1swXVswXSkgfHwgIWlzTnVtYmVyKHJpbmdbMF1bMV0pKSB0aHJvdyBuZXcgRXJyb3IoJ0Nvb3JkaW5hdGVzIG11c3QgY29udGFpbiBudW1iZXJzJyk7XG4gICAgICAgICAgICBpZiAocmluZ1tyaW5nLmxlbmd0aCAtIDFdW2pdICE9PSByaW5nWzBdW2pdKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaXJzdCBhbmQgbGFzdCBQb3NpdGlvbiBhcmUgbm90IGVxdWl2YWxlbnQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmVhdHVyZSh7XG4gICAgICAgIHR5cGU6ICdQb2x5Z29uJyxcbiAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzXG4gICAgfSwgcHJvcGVydGllcywgYmJveCwgaWQpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB7QGxpbmsgTGluZVN0cmluZ30gYmFzZWQgb24gYVxuICogY29vcmRpbmF0ZSBhcnJheS4gUHJvcGVydGllcyBjYW4gYmUgYWRkZWQgb3B0aW9uYWxseS5cbiAqXG4gKiBAbmFtZSBsaW5lU3RyaW5nXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBjb29yZGluYXRlcyBhbiBhcnJheSBvZiBQb3NpdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcHJvcGVydGllcz17fV0gYW4gT2JqZWN0IG9mIGtleS12YWx1ZSBwYWlycyB0byBhZGQgYXMgcHJvcGVydGllc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbYmJveF0gQkJveCBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbaWRdIElkZW50aWZpZXJcbiAqIEByZXR1cm5zIHtGZWF0dXJlPExpbmVTdHJpbmc+fSBhIExpbmVTdHJpbmcgZmVhdHVyZVxuICogQHRocm93cyB7RXJyb3J9IGlmIG5vIGNvb3JkaW5hdGVzIGFyZSBwYXNzZWRcbiAqIEBleGFtcGxlXG4gKiB2YXIgbGluZXN0cmluZzEgPSB0dXJmLmxpbmVTdHJpbmcoW1xuICogICBbLTIxLjk2NDQxNiwgNjQuMTQ4MjAzXSxcbiAqICAgWy0yMS45NTYxNzYsIDY0LjE0MTMxNl0sXG4gKiAgIFstMjEuOTM5MDEsIDY0LjEzNTkyNF0sXG4gKiAgIFstMjEuOTI3MzM3LCA2NC4xMzY2NzNdXG4gKiBdKTtcbiAqIHZhciBsaW5lc3RyaW5nMiA9IHR1cmYubGluZVN0cmluZyhbXG4gKiAgIFstMjEuOTI5MDU0LCA2NC4xMjc5ODVdLFxuICogICBbLTIxLjkxMjkxOCwgNjQuMTM0NzI2XSxcbiAqICAgWy0yMS45MTYwMDcsIDY0LjE0MTAxNl0sXG4gKiAgIFstMjEuOTMwMDg0LCA2NC4xNDQ0Nl1cbiAqIF0sIHtuYW1lOiAnbGluZSAxJywgZGlzdGFuY2U6IDE0NX0pO1xuICpcbiAqIC8vPWxpbmVzdHJpbmcxXG4gKlxuICogLy89bGluZXN0cmluZzJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbmVTdHJpbmcoY29vcmRpbmF0ZXMsIHByb3BlcnRpZXMsIGJib3gsIGlkKSB7XG4gICAgaWYgKCFjb29yZGluYXRlcykgdGhyb3cgbmV3IEVycm9yKCdObyBjb29yZGluYXRlcyBwYXNzZWQnKTtcbiAgICBpZiAoY29vcmRpbmF0ZXMubGVuZ3RoIDwgMikgdGhyb3cgbmV3IEVycm9yKCdDb29yZGluYXRlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHR3byBvciBtb3JlIHBvc2l0aW9ucycpO1xuICAgIC8vIENoZWNrIGlmIGZpcnN0IHBvaW50IG9mIExpbmVTdHJpbmcgY29udGFpbnMgdHdvIG51bWJlcnNcbiAgICBpZiAoIWlzTnVtYmVyKGNvb3JkaW5hdGVzWzBdWzFdKSB8fCAhaXNOdW1iZXIoY29vcmRpbmF0ZXNbMF1bMV0pKSB0aHJvdyBuZXcgRXJyb3IoJ0Nvb3JkaW5hdGVzIG11c3QgY29udGFpbiBudW1iZXJzJyk7XG5cbiAgICByZXR1cm4gZmVhdHVyZSh7XG4gICAgICAgIHR5cGU6ICdMaW5lU3RyaW5nJyxcbiAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzXG4gICAgfSwgcHJvcGVydGllcywgYmJveCwgaWQpO1xufVxuXG4vKipcbiAqIFRha2VzIG9uZSBvciBtb3JlIHtAbGluayBGZWF0dXJlfEZlYXR1cmVzfSBhbmQgY3JlYXRlcyBhIHtAbGluayBGZWF0dXJlQ29sbGVjdGlvbn0uXG4gKlxuICogQG5hbWUgZmVhdHVyZUNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7RmVhdHVyZVtdfSBmZWF0dXJlcyBpbnB1dCBmZWF0dXJlc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbYmJveF0gQkJveCBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbaWRdIElkZW50aWZpZXJcbiAqIEByZXR1cm5zIHtGZWF0dXJlQ29sbGVjdGlvbn0gYSBGZWF0dXJlQ29sbGVjdGlvbiBvZiBpbnB1dCBmZWF0dXJlc1xuICogQGV4YW1wbGVcbiAqIHZhciBmZWF0dXJlcyA9IFtcbiAqICB0dXJmLnBvaW50KFstNzUuMzQzLCAzOS45ODRdLCB7bmFtZTogJ0xvY2F0aW9uIEEnfSksXG4gKiAgdHVyZi5wb2ludChbLTc1LjgzMywgMzkuMjg0XSwge25hbWU6ICdMb2NhdGlvbiBCJ30pLFxuICogIHR1cmYucG9pbnQoWy03NS41MzQsIDM5LjEyM10sIHtuYW1lOiAnTG9jYXRpb24gQyd9KVxuICogXTtcbiAqXG4gKiB2YXIgY29sbGVjdGlvbiA9IHR1cmYuZmVhdHVyZUNvbGxlY3Rpb24oZmVhdHVyZXMpO1xuICpcbiAqIC8vPWNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZlYXR1cmVDb2xsZWN0aW9uKGZlYXR1cmVzLCBiYm94LCBpZCkge1xuICAgIGlmICghZmVhdHVyZXMpIHRocm93IG5ldyBFcnJvcignTm8gZmVhdHVyZXMgcGFzc2VkJyk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGZlYXR1cmVzKSkgdGhyb3cgbmV3IEVycm9yKCdmZWF0dXJlcyBtdXN0IGJlIGFuIEFycmF5Jyk7XG4gICAgaWYgKGJib3ggJiYgYmJveC5sZW5ndGggIT09IDQpIHRocm93IG5ldyBFcnJvcignYmJveCBtdXN0IGJlIGFuIEFycmF5IG9mIDQgbnVtYmVycycpO1xuICAgIGlmIChpZCAmJiBbJ3N0cmluZycsICdudW1iZXInXS5pbmRleE9mKHR5cGVvZiBpZCkgPT09IC0xKSB0aHJvdyBuZXcgRXJyb3IoJ2lkIG11c3QgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcnKTtcblxuICAgIHZhciBmYyA9IHt0eXBlOiAnRmVhdHVyZUNvbGxlY3Rpb24nfTtcbiAgICBpZiAoaWQpIGZjLmlkID0gaWQ7XG4gICAgaWYgKGJib3gpIGZjLmJib3ggPSBiYm94O1xuICAgIGZjLmZlYXR1cmVzID0gZmVhdHVyZXM7XG4gICAgcmV0dXJuIGZjO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB7QGxpbmsgRmVhdHVyZTxNdWx0aUxpbmVTdHJpbmc+fSBiYXNlZCBvbiBhXG4gKiBjb29yZGluYXRlIGFycmF5LiBQcm9wZXJ0aWVzIGNhbiBiZSBhZGRlZCBvcHRpb25hbGx5LlxuICpcbiAqIEBuYW1lIG11bHRpTGluZVN0cmluZ1xuICogQHBhcmFtIHtBcnJheTxBcnJheTxBcnJheTxudW1iZXI+Pj59IGNvb3JkaW5hdGVzIGFuIGFycmF5IG9mIExpbmVTdHJpbmdzXG4gKiBAcGFyYW0ge09iamVjdH0gW3Byb3BlcnRpZXM9e31dIGFuIE9iamVjdCBvZiBrZXktdmFsdWUgcGFpcnMgdG8gYWRkIGFzIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2Jib3hdIEJCb3ggW3dlc3QsIHNvdXRoLCBlYXN0LCBub3J0aF1cbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2lkXSBJZGVudGlmaWVyXG4gKiBAcmV0dXJucyB7RmVhdHVyZTxNdWx0aUxpbmVTdHJpbmc+fSBhIE11bHRpTGluZVN0cmluZyBmZWF0dXJlXG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgbm8gY29vcmRpbmF0ZXMgYXJlIHBhc3NlZFxuICogQGV4YW1wbGVcbiAqIHZhciBtdWx0aUxpbmUgPSB0dXJmLm11bHRpTGluZVN0cmluZyhbW1swLDBdLFsxMCwxMF1dXSk7XG4gKlxuICogLy89bXVsdGlMaW5lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aUxpbmVTdHJpbmcoY29vcmRpbmF0ZXMsIHByb3BlcnRpZXMsIGJib3gsIGlkKSB7XG4gICAgaWYgKCFjb29yZGluYXRlcykgdGhyb3cgbmV3IEVycm9yKCdObyBjb29yZGluYXRlcyBwYXNzZWQnKTtcblxuICAgIHJldHVybiBmZWF0dXJlKHtcbiAgICAgICAgdHlwZTogJ011bHRpTGluZVN0cmluZycsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBjb29yZGluYXRlc1xuICAgIH0sIHByb3BlcnRpZXMsIGJib3gsIGlkKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEge0BsaW5rIEZlYXR1cmU8TXVsdGlQb2ludD59IGJhc2VkIG9uIGFcbiAqIGNvb3JkaW5hdGUgYXJyYXkuIFByb3BlcnRpZXMgY2FuIGJlIGFkZGVkIG9wdGlvbmFsbHkuXG4gKlxuICogQG5hbWUgbXVsdGlQb2ludFxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gY29vcmRpbmF0ZXMgYW4gYXJyYXkgb2YgUG9zaXRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gW3Byb3BlcnRpZXM9e31dIGFuIE9iamVjdCBvZiBrZXktdmFsdWUgcGFpcnMgdG8gYWRkIGFzIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2Jib3hdIEJCb3ggW3dlc3QsIHNvdXRoLCBlYXN0LCBub3J0aF1cbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2lkXSBJZGVudGlmaWVyXG4gKiBAcmV0dXJucyB7RmVhdHVyZTxNdWx0aVBvaW50Pn0gYSBNdWx0aVBvaW50IGZlYXR1cmVcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiBubyBjb29yZGluYXRlcyBhcmUgcGFzc2VkXG4gKiBAZXhhbXBsZVxuICogdmFyIG11bHRpUHQgPSB0dXJmLm11bHRpUG9pbnQoW1swLDBdLFsxMCwxMF1dKTtcbiAqXG4gKiAvLz1tdWx0aVB0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aVBvaW50KGNvb3JkaW5hdGVzLCBwcm9wZXJ0aWVzLCBiYm94LCBpZCkge1xuICAgIGlmICghY29vcmRpbmF0ZXMpIHRocm93IG5ldyBFcnJvcignTm8gY29vcmRpbmF0ZXMgcGFzc2VkJyk7XG5cbiAgICByZXR1cm4gZmVhdHVyZSh7XG4gICAgICAgIHR5cGU6ICdNdWx0aVBvaW50JyxcbiAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzXG4gICAgfSwgcHJvcGVydGllcywgYmJveCwgaWQpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB7QGxpbmsgRmVhdHVyZTxNdWx0aVBvbHlnb24+fSBiYXNlZCBvbiBhXG4gKiBjb29yZGluYXRlIGFycmF5LiBQcm9wZXJ0aWVzIGNhbiBiZSBhZGRlZCBvcHRpb25hbGx5LlxuICpcbiAqIEBuYW1lIG11bHRpUG9seWdvblxuICogQHBhcmFtIHtBcnJheTxBcnJheTxBcnJheTxBcnJheTxudW1iZXI+Pj4+fSBjb29yZGluYXRlcyBhbiBhcnJheSBvZiBQb2x5Z29uc1xuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBhbiBPYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFkZCBhcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtiYm94XSBCQm94IFt3ZXN0LCBzb3V0aCwgZWFzdCwgbm9ydGhdXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtpZF0gSWRlbnRpZmllclxuICogQHJldHVybnMge0ZlYXR1cmU8TXVsdGlQb2x5Z29uPn0gYSBtdWx0aXBvbHlnb24gZmVhdHVyZVxuICogQHRocm93cyB7RXJyb3J9IGlmIG5vIGNvb3JkaW5hdGVzIGFyZSBwYXNzZWRcbiAqIEBleGFtcGxlXG4gKiB2YXIgbXVsdGlQb2x5ID0gdHVyZi5tdWx0aVBvbHlnb24oW1tbWzAsMF0sWzAsMTBdLFsxMCwxMF0sWzEwLDBdLFswLDBdXV1dKTtcbiAqXG4gKiAvLz1tdWx0aVBvbHlcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aVBvbHlnb24oY29vcmRpbmF0ZXMsIHByb3BlcnRpZXMsIGJib3gsIGlkKSB7XG4gICAgaWYgKCFjb29yZGluYXRlcykgdGhyb3cgbmV3IEVycm9yKCdObyBjb29yZGluYXRlcyBwYXNzZWQnKTtcblxuICAgIHJldHVybiBmZWF0dXJlKHtcbiAgICAgICAgdHlwZTogJ011bHRpUG9seWdvbicsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBjb29yZGluYXRlc1xuICAgIH0sIHByb3BlcnRpZXMsIGJib3gsIGlkKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEge0BsaW5rIEZlYXR1cmU8R2VvbWV0cnlDb2xsZWN0aW9uPn0gYmFzZWQgb24gYVxuICogY29vcmRpbmF0ZSBhcnJheS4gUHJvcGVydGllcyBjYW4gYmUgYWRkZWQgb3B0aW9uYWxseS5cbiAqXG4gKiBAbmFtZSBnZW9tZXRyeUNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXk8R2VvbWV0cnk+fSBnZW9tZXRyaWVzIGFuIGFycmF5IG9mIEdlb0pTT04gR2VvbWV0cmllc1xuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBhbiBPYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFkZCBhcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtiYm94XSBCQm94IFt3ZXN0LCBzb3V0aCwgZWFzdCwgbm9ydGhdXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtpZF0gSWRlbnRpZmllclxuICogQHJldHVybnMge0ZlYXR1cmU8R2VvbWV0cnlDb2xsZWN0aW9uPn0gYSBHZW9KU09OIEdlb21ldHJ5Q29sbGVjdGlvbiBGZWF0dXJlXG4gKiBAZXhhbXBsZVxuICogdmFyIHB0ID0ge1xuICogICAgIFwidHlwZVwiOiBcIlBvaW50XCIsXG4gKiAgICAgICBcImNvb3JkaW5hdGVzXCI6IFsxMDAsIDBdXG4gKiAgICAgfTtcbiAqIHZhciBsaW5lID0ge1xuICogICAgIFwidHlwZVwiOiBcIkxpbmVTdHJpbmdcIixcbiAqICAgICBcImNvb3JkaW5hdGVzXCI6IFsgWzEwMSwgMF0sIFsxMDIsIDFdIF1cbiAqICAgfTtcbiAqIHZhciBjb2xsZWN0aW9uID0gdHVyZi5nZW9tZXRyeUNvbGxlY3Rpb24oW3B0LCBsaW5lXSk7XG4gKlxuICogLy89Y29sbGVjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VvbWV0cnlDb2xsZWN0aW9uKGdlb21ldHJpZXMsIHByb3BlcnRpZXMsIGJib3gsIGlkKSB7XG4gICAgaWYgKCFnZW9tZXRyaWVzKSB0aHJvdyBuZXcgRXJyb3IoJ2dlb21ldHJpZXMgaXMgcmVxdWlyZWQnKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZ2VvbWV0cmllcykpIHRocm93IG5ldyBFcnJvcignZ2VvbWV0cmllcyBtdXN0IGJlIGFuIEFycmF5Jyk7XG5cbiAgICByZXR1cm4gZmVhdHVyZSh7XG4gICAgICAgIHR5cGU6ICdHZW9tZXRyeUNvbGxlY3Rpb24nLFxuICAgICAgICBnZW9tZXRyaWVzOiBnZW9tZXRyaWVzXG4gICAgfSwgcHJvcGVydGllcywgYmJveCwgaWQpO1xufVxuXG4vKipcbiAqIFJvdW5kIG51bWJlciB0byBwcmVjaXNpb25cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtIE51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IFtwcmVjaXNpb249MF0gUHJlY2lzaW9uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSByb3VuZGVkIG51bWJlclxuICogQGV4YW1wbGVcbiAqIHR1cmYucm91bmQoMTIwLjQzMjEpXG4gKiAvLz0xMjBcbiAqXG4gKiB0dXJmLnJvdW5kKDEyMC40MzIxLCAyKVxuICogLy89MTIwLjQzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChudW0sIHByZWNpc2lvbikge1xuICAgIGlmIChudW0gPT09IHVuZGVmaW5lZCB8fCBudW0gPT09IG51bGwgfHwgaXNOYU4obnVtKSkgdGhyb3cgbmV3IEVycm9yKCdudW0gaXMgcmVxdWlyZWQnKTtcbiAgICBpZiAocHJlY2lzaW9uICYmICEocHJlY2lzaW9uID49IDApKSB0aHJvdyBuZXcgRXJyb3IoJ3ByZWNpc2lvbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gICAgdmFyIG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uIHx8IDApO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIG11bHRpcGxpZXIpIC8gbXVsdGlwbGllcjtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgZGlzdGFuY2UgbWVhc3VyZW1lbnQgKGFzc3VtaW5nIGEgc3BoZXJpY2FsIEVhcnRoKSBmcm9tIHJhZGlhbnMgdG8gYSBtb3JlIGZyaWVuZGx5IHVuaXQuXG4gKiBWYWxpZCB1bml0czogbWlsZXMsIG5hdXRpY2FsbWlsZXMsIGluY2hlcywgeWFyZHMsIG1ldGVycywgbWV0cmVzLCBraWxvbWV0ZXJzLCBjZW50aW1ldGVycywgZmVldFxuICpcbiAqIEBuYW1lIHJhZGlhbnNUb0xlbmd0aFxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbnMgaW4gcmFkaWFucyBhY3Jvc3MgdGhlIHNwaGVyZVxuICogQHBhcmFtIHtzdHJpbmd9IFt1bml0cz0na2lsb21ldGVycyddIGNhbiBiZSBkZWdyZWVzLCByYWRpYW5zLCBtaWxlcywgb3Iga2lsb21ldGVycyBpbmNoZXMsIHlhcmRzLCBtZXRyZXMsIG1ldGVycywga2lsb21ldHJlcywga2lsb21ldGVycy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IGRpc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYWRpYW5zVG9MZW5ndGgocmFkaWFucywgdW5pdHMpIHtcbiAgICBpZiAocmFkaWFucyA9PT0gdW5kZWZpbmVkIHx8IHJhZGlhbnMgPT09IG51bGwpIHRocm93IG5ldyBFcnJvcigncmFkaWFucyBpcyByZXF1aXJlZCcpO1xuXG4gICAgaWYgKHVuaXRzICYmIHR5cGVvZiB1bml0cyAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBFcnJvcigndW5pdHMgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgIHZhciBmYWN0b3IgPSBmYWN0b3JzW3VuaXRzIHx8ICdraWxvbWV0ZXJzJ107XG4gICAgaWYgKCFmYWN0b3IpIHRocm93IG5ldyBFcnJvcih1bml0cyArICcgdW5pdHMgaXMgaW52YWxpZCcpO1xuICAgIHJldHVybiByYWRpYW5zICogZmFjdG9yO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSBkaXN0YW5jZSBtZWFzdXJlbWVudCAoYXNzdW1pbmcgYSBzcGhlcmljYWwgRWFydGgpIGZyb20gYSByZWFsLXdvcmxkIHVuaXQgaW50byByYWRpYW5zXG4gKiBWYWxpZCB1bml0czogbWlsZXMsIG5hdXRpY2FsbWlsZXMsIGluY2hlcywgeWFyZHMsIG1ldGVycywgbWV0cmVzLCBraWxvbWV0ZXJzLCBjZW50aW1ldGVycywgZmVldFxuICpcbiAqIEBuYW1lIGxlbmd0aFRvUmFkaWFuc1xuICogQHBhcmFtIHtudW1iZXJ9IGRpc3RhbmNlIGluIHJlYWwgdW5pdHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdW5pdHM9J2tpbG9tZXRlcnMnXSBjYW4gYmUgZGVncmVlcywgcmFkaWFucywgbWlsZXMsIG9yIGtpbG9tZXRlcnMgaW5jaGVzLCB5YXJkcywgbWV0cmVzLCBtZXRlcnMsIGtpbG9tZXRyZXMsIGtpbG9tZXRlcnMuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSByYWRpYW5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGhUb1JhZGlhbnMoZGlzdGFuY2UsIHVuaXRzKSB7XG4gICAgaWYgKGRpc3RhbmNlID09PSB1bmRlZmluZWQgfHwgZGlzdGFuY2UgPT09IG51bGwpIHRocm93IG5ldyBFcnJvcignZGlzdGFuY2UgaXMgcmVxdWlyZWQnKTtcblxuICAgIGlmICh1bml0cyAmJiB0eXBlb2YgdW5pdHMgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgRXJyb3IoJ3VuaXRzIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICB2YXIgZmFjdG9yID0gZmFjdG9yc1t1bml0cyB8fCAna2lsb21ldGVycyddO1xuICAgIGlmICghZmFjdG9yKSB0aHJvdyBuZXcgRXJyb3IodW5pdHMgKyAnIHVuaXRzIGlzIGludmFsaWQnKTtcbiAgICByZXR1cm4gZGlzdGFuY2UgLyBmYWN0b3I7XG59XG5cbi8qKlxuICogQ29udmVydCBhIGRpc3RhbmNlIG1lYXN1cmVtZW50IChhc3N1bWluZyBhIHNwaGVyaWNhbCBFYXJ0aCkgZnJvbSBhIHJlYWwtd29ybGQgdW5pdCBpbnRvIGRlZ3JlZXNcbiAqIFZhbGlkIHVuaXRzOiBtaWxlcywgbmF1dGljYWxtaWxlcywgaW5jaGVzLCB5YXJkcywgbWV0ZXJzLCBtZXRyZXMsIGNlbnRpbWV0ZXJzLCBraWxvbWV0cmVzLCBmZWV0XG4gKlxuICogQG5hbWUgbGVuZ3RoVG9EZWdyZWVzXG4gKiBAcGFyYW0ge251bWJlcn0gZGlzdGFuY2UgaW4gcmVhbCB1bml0c1xuICogQHBhcmFtIHtzdHJpbmd9IFt1bml0cz0na2lsb21ldGVycyddIGNhbiBiZSBkZWdyZWVzLCByYWRpYW5zLCBtaWxlcywgb3Iga2lsb21ldGVycyBpbmNoZXMsIHlhcmRzLCBtZXRyZXMsIG1ldGVycywga2lsb21ldHJlcywga2lsb21ldGVycy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IGRlZ3JlZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aFRvRGVncmVlcyhkaXN0YW5jZSwgdW5pdHMpIHtcbiAgICByZXR1cm4gcmFkaWFuc1RvRGVncmVlcyhsZW5ndGhUb1JhZGlhbnMoZGlzdGFuY2UsIHVuaXRzKSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYW55IGJlYXJpbmcgYW5nbGUgZnJvbSB0aGUgbm9ydGggbGluZSBkaXJlY3Rpb24gKHBvc2l0aXZlIGNsb2Nrd2lzZSlcbiAqIGFuZCByZXR1cm5zIGFuIGFuZ2xlIGJldHdlZW4gMC0zNjAgZGVncmVlcyAocG9zaXRpdmUgY2xvY2t3aXNlKSwgMCBiZWluZyB0aGUgbm9ydGggbGluZVxuICpcbiAqIEBuYW1lIGJlYXJpbmdUb0F6aW11dGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBiZWFyaW5nIGFuZ2xlLCBiZXR3ZWVuIC0xODAgYW5kICsxODAgZGVncmVlc1xuICogQHJldHVybnMge251bWJlcn0gYW5nbGUgYmV0d2VlbiAwIGFuZCAzNjAgZGVncmVlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gYmVhcmluZ1RvQXppbXV0aChiZWFyaW5nKSB7XG4gICAgaWYgKGJlYXJpbmcgPT09IG51bGwgfHwgYmVhcmluZyA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoJ2JlYXJpbmcgaXMgcmVxdWlyZWQnKTtcblxuICAgIHZhciBhbmdsZSA9IGJlYXJpbmcgJSAzNjA7XG4gICAgaWYgKGFuZ2xlIDwgMCkgYW5nbGUgKz0gMzYwO1xuICAgIHJldHVybiBhbmdsZTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBhbmdsZSBpbiByYWRpYW5zIHRvIGRlZ3JlZXNcbiAqXG4gKiBAbmFtZSByYWRpYW5zVG9EZWdyZWVzXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFucyBhbmdsZSBpbiByYWRpYW5zXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBkZWdyZWVzIGJldHdlZW4gMCBhbmQgMzYwIGRlZ3JlZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhZGlhbnNUb0RlZ3JlZXMocmFkaWFucykge1xuICAgIGlmIChyYWRpYW5zID09PSBudWxsIHx8IHJhZGlhbnMgPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKCdyYWRpYW5zIGlzIHJlcXVpcmVkJyk7XG5cbiAgICB2YXIgZGVncmVlcyA9IHJhZGlhbnMgJSAoMiAqIE1hdGguUEkpO1xuICAgIHJldHVybiBkZWdyZWVzICogMTgwIC8gTWF0aC5QSTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBhbmdsZSBpbiBkZWdyZWVzIHRvIHJhZGlhbnNcbiAqXG4gKiBAbmFtZSBkZWdyZWVzVG9yYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gZGVncmVlcyBhbmdsZSBiZXR3ZWVuIDAgYW5kIDM2MCBkZWdyZWVzXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBhbmdsZSBpbiByYWRpYW5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWdyZWVzVG9SYWRpYW5zKGRlZ3JlZXMpIHtcbiAgICBpZiAoZGVncmVlcyA9PT0gbnVsbCB8fCBkZWdyZWVzID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcignZGVncmVlcyBpcyByZXF1aXJlZCcpO1xuXG4gICAgdmFyIHJhZGlhbnMgPSBkZWdyZWVzICUgMzYwO1xuICAgIHJldHVybiByYWRpYW5zICogTWF0aC5QSSAvIDE4MDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGxlbmd0aCB0byB0aGUgcmVxdWVzdGVkIHVuaXQuXG4gKiBWYWxpZCB1bml0czogbWlsZXMsIG5hdXRpY2FsbWlsZXMsIGluY2hlcywgeWFyZHMsIG1ldGVycywgbWV0cmVzLCBraWxvbWV0ZXJzLCBjZW50aW1ldGVycywgZmVldFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggdG8gYmUgY29udmVydGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gb3JpZ2luYWxVbml0IG9mIHRoZSBsZW5ndGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZmluYWxVbml0PSdraWxvbWV0ZXJzJ10gcmV0dXJuZWQgdW5pdFxuICogQHJldHVybnMge251bWJlcn0gdGhlIGNvbnZlcnRlZCBsZW5ndGhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRMZW5ndGgobGVuZ3RoLCBvcmlnaW5hbFVuaXQsIGZpbmFsVW5pdCkge1xuICAgIGlmIChsZW5ndGggPT09IG51bGwgfHwgbGVuZ3RoID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcignbGVuZ3RoIGlzIHJlcXVpcmVkJyk7XG4gICAgaWYgKCEobGVuZ3RoID49IDApKSB0aHJvdyBuZXcgRXJyb3IoJ2xlbmd0aCBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG5cbiAgICByZXR1cm4gcmFkaWFuc1RvTGVuZ3RoKGxlbmd0aFRvUmFkaWFucyhsZW5ndGgsIG9yaWdpbmFsVW5pdCksIGZpbmFsVW5pdCB8fCAna2lsb21ldGVycycpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgYXJlYSB0byB0aGUgcmVxdWVzdGVkIHVuaXQuXG4gKiBWYWxpZCB1bml0czoga2lsb21ldGVycywga2lsb21ldHJlcywgbWV0ZXJzLCBtZXRyZXMsIGNlbnRpbWV0cmVzLCBtaWxsaW1ldGVyLCBhY3JlLCBtaWxlLCB5YXJkLCBmb290LCBpbmNoXG4gKiBAcGFyYW0ge251bWJlcn0gYXJlYSB0byBiZSBjb252ZXJ0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3JpZ2luYWxVbml0PSdtZXRlcnMnXSBvZiB0aGUgZGlzdGFuY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZmluYWxVbml0PSdraWxvbWV0ZXJzJ10gcmV0dXJuZWQgdW5pdFxuICogQHJldHVybnMge251bWJlcn0gdGhlIGNvbnZlcnRlZCBkaXN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEFyZWEoYXJlYSwgb3JpZ2luYWxVbml0LCBmaW5hbFVuaXQpIHtcbiAgICBpZiAoYXJlYSA9PT0gbnVsbCB8fCBhcmVhID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcignYXJlYSBpcyByZXF1aXJlZCcpO1xuICAgIGlmICghKGFyZWEgPj0gMCkpIHRocm93IG5ldyBFcnJvcignYXJlYSBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG5cbiAgICB2YXIgc3RhcnRGYWN0b3IgPSBhcmVhRmFjdG9yc1tvcmlnaW5hbFVuaXQgfHwgJ21ldGVycyddO1xuICAgIGlmICghc3RhcnRGYWN0b3IpIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBvcmlnaW5hbCB1bml0cycpO1xuXG4gICAgdmFyIGZpbmFsRmFjdG9yID0gYXJlYUZhY3RvcnNbZmluYWxVbml0IHx8ICdraWxvbWV0ZXJzJ107XG4gICAgaWYgKCFmaW5hbEZhY3RvcikgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGZpbmFsIHVuaXRzJyk7XG5cbiAgICByZXR1cm4gKGFyZWEgLyBzdGFydEZhY3RvcikgKiBmaW5hbEZhY3Rvcjtcbn1cblxuLyoqXG4gKiBpc051bWJlclxuICpcbiAqIEBwYXJhbSB7Kn0gbnVtIE51bWJlciB0byB2YWxpZGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUvZmFsc2VcbiAqIEBleGFtcGxlXG4gKiB0dXJmLmlzTnVtYmVyKDEyMylcbiAqIC8vPXRydWVcbiAqIHR1cmYuaXNOdW1iZXIoJ2ZvbycpXG4gKiAvLz1mYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIobnVtKSB7XG4gICAgcmV0dXJuICFpc05hTihudW0pICYmIG51bSAhPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheShudW0pO1xufVxuXG4vKipcbiAqIGlzT2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSBpbnB1dCB2YXJpYWJsZSB0byB2YWxpZGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUvZmFsc2VcbiAqIEBleGFtcGxlXG4gKiB0dXJmLmlzT2JqZWN0KHtlbGV2YXRpb246IDEwfSlcbiAqIC8vPXRydWVcbiAqIHR1cmYuaXNPYmplY3QoJ2ZvbycpXG4gKiAvLz1mYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoaW5wdXQpIHtcbiAgICByZXR1cm4gKCEhaW5wdXQpICYmIChpbnB1dC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KTtcbn1cblxuLy8gRGVwcmVjYXRlZCBtZXRob2RzXG5leHBvcnQgZnVuY3Rpb24gcmFkaWFuczJkZWdyZWVzKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWV0aG9kIGhhcyBiZWVuIHJlbmFtZWQgdG8gYHJhZGlhbnNUb0RlZ3JlZXNgJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWdyZWVzMnJhZGlhbnMoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtZXRob2QgaGFzIGJlZW4gcmVuYW1lZCB0byBgZGVncmVlc1RvUmFkaWFuc2AnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlVG9EZWdyZWVzKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWV0aG9kIGhhcyBiZWVuIHJlbmFtZWQgdG8gYGxlbmd0aFRvRGVncmVlc2AnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlVG9SYWRpYW5zKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWV0aG9kIGhhcyBiZWVuIHJlbmFtZWQgdG8gYGxlbmd0aFRvUmFkaWFuc2AnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhZGlhbnNUb0Rpc3RhbmNlKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWV0aG9kIGhhcyBiZWVuIHJlbmFtZWQgdG8gYHJhZGlhbnNUb0xlbmd0aGAnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJlYXJpbmdUb0FuZ2xlKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWV0aG9kIGhhcyBiZWVuIHJlbmFtZWQgdG8gYGJlYXJpbmdUb0F6aW11dGhgJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGlzdGFuY2UoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtZXRob2QgaGFzIGJlZW4gcmVuYW1lZCB0byBgY29udmVydExlbmd0aGAnKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B0dXJmL2hlbHBlcnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9tVG9HbWwgYXMgZ21sM30gZnJvbSAnZ2VvanNvbi10by1nbWwtMyc7XG5cbi8qKiBAY29uc3Qge09iamVjdH0geG1sICovXG5jb25zdCB4bWwgPSB7XG4gIC8qKlxuICAgKiBUdXJucyBhbiBvYmplY3QgaW50byBhIHN0cmluZyBvZiB4bWwgYXR0cmlidXRlIGtleS12YWx1ZSBwYWlycy5cbiAgICogQG1lbWJlck9mIHhtbC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhdHRycyBhbiBvYmplY3QgbWFwcGluZyBhdHRyaWJ1dGUgbmFtZXMgdG8gYXR0cmlidXRlIHZhbHVlc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBhIHN0cmluZyBvZiB4bWwgYXR0cmlidXRlIGtleS12YWx1ZSBwYWlyc1xuICAgKi9cbiAgJ2F0dHJzJzogZnVuY3Rpb24oYXR0cnMpe1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhdHRycylcbiAgICAgIC5tYXAoKGEpID0+IGF0dHJzW2FdID8gYCAke2F9PVwiJHthdHRyc1thXX1cImAgOiAnJylcbiAgICAgIC5qb2luKCcnKTtcbiAgfSxcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBzdHJpbmcgeG1sIHRhZy5cbiAgICogQGZ1bmN0aW9uIFxuICAgKiBAbWVtYmVyT2YgeG1sLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbnMgdGhlIHRhZydzIHhtbCBuYW1lc3BhY2UgYWJicmV2aWF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSB0aGUgdGFnIG5hbWUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhdHRycyBAc2VlIHhtbC5hdHRycy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGlubmVyIGlubmVyIHhtbC5cbiAgICogQHJldHVybnMge3N0cmluZ30gYW4geG1sIHN0cmluZy5cbiAgICovXG4gICd0YWcnOiBmdW5jdGlvbihucywgdGFnTmFtZSwgYXR0cnMsIGlubmVyKXsgLy8gVE9ETzogc2VsZi1jbG9zaW5nXG4gICAgbGV0IHRhZyA9IChucyA/IGAke25zfTpgIDogJycpICsgdGFnTmFtZTtcbiAgICBpZiAodGFnTmFtZSl7XG4gICAgICByZXR1cm4gYDwke3RhZ30ke3RoaXMuYXR0cnMoYXR0cnMpfT4ke2lubmVyfTwvJHt0YWd9PmA7ICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm8gdGFnIHN1cHBsaWVkICcgKyBKU09OLnN0cmluZ2lmeShhcmd1bWVudHMpKTtcbiAgICB9XG4gIH1cbn07XG4vKipcbiAqIFNob3J0aGFuZCBmb3IgY3JlYXRpbmcgYSB3ZnMgeG1sIHRhZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIGEgdmFsaWQgd2ZzIHRhZyBuYW1lLlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzIEBzZWUgeG1sLmF0dHJzLlxuICogQHBhcmFtIHtzdHJpbmd9IGlubmVyIEBzZWUgeG1sLnRhZy5cbiAqL1xuY29uc3Qgd2ZzID0gKHRhZ05hbWUsIGF0dHJzLCBpbm5lcikgPT4geG1sLnRhZygnd2ZzJywgdGFnTmFtZSwgYXR0cnMsIGlubmVyKTtcbi8qKlxuICogRW5zdXJlcyB0aGUgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IG1heWJlIGEgR2VvSlNPTiBGZWF0dXJlIG9yIEZlYXR1cmVDb2xsZWN0aW9uIG9iamVjdCBvciBhbiBhcnJheSB0aGVyZW9mLlxuICovXG5jb25zdCBlbnN1cmVBcnJheSA9ICguLi5tYXliZSk9PiAobWF5YmVbMF0uZmVhdHVyZXMgfHwgW10uY29uY2F0KC4uLm1heWJlKSlcblx0LmZpbHRlcigoZikgPT4gZik7XG4vKipcbiAqIEVuc3VyZXMgYSBsYXllci5pZCBmb3JtYXQgb2YgYW4gaW5wdXQgaWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gbHlyIGxheWVyIG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCBpZCwgcG9zc2libHkgYWxyZWFkeSBpbiBjb3JyZWN0IGxheWVyLmlkIGZvcm1hdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IGEgY29ycmVjdGx5LWZvcm1hdHRlZCBnbWw6aWRcbiAqL1xuY29uc3QgZW5zdXJlSWQgPSAobHlyLCBpZCkgPT4gL1xcLi8uZXhlYyhpZCB8fCAnJykgPyBpZCA6YCR7bHlyfS4ke2lkfWA7XG4vKipcbiAqIHJldHVybnMgYSBjb3JyZWN0bHktZm9ybWF0dGVkIHR5cGVOYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gbnMgbmFtZXNwYWNlXG4gKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXIgbGF5ZXIgbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVOYW1lIHR5cGVOYW1lIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhIGNvcnJlY3RseS1mb3JtYXR0ZWQgdHlwZU5hbWVcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiB0eXBlTmFtZSBpdCBjYW5ub3QgZm9ybSBhIHR5cGVOYW1lIGZyb20gbnMgYW5kIGxheWVyXG4gKi9cbmNvbnN0IGVuc3VyZVR5cGVOYW1lID0gKG5zLCBsYXllciwgdHlwZU5hbWUpID0+e1xuICBpZiAoIXR5cGVOYW1lICYmICEobnMgJiYgbGF5ZXIpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYG5vIHR5cGVuYW1lIHBvc3NpYmxlOiAke0pTT04uc3RyaW5naWZ5KHt0eXBlTmFtZSwgbnMsIGxheWVyfSl9YCk7XG4gIH1cbiAgcmV0dXJuIHR5cGVOYW1lIHx8IGAke25zfToke2xheWVyfVR5cGVgO1xufTtcblxuLyoqXG4gKiBTdGFuZHMgaW4gZm9yIG90aGVyIGZ1bmN0aW9ucyBpbiBzd2ljaCBzdGF0ZW1lbnRzLCBldGMuIERvZXMgbm90aGluZy5cbiAqIEBmdW5jdGlvbiBcbiAqL1xuY29uc3QgcGFzcyA9ICgpID0+ICcnO1xuXG4vKipcbiAqIEl0ZXJhdGVzIG92ZXIgdGhlIGtleS12YWx1ZSBwYWlycywgZmlsdGVyaW5nIGJ5IGEgd2hpdGVsaXN0IGlmIGF2YWlsYWJsZS5cbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gd2hpdGVsaXN0IGEgd2hpdGVsaXN0IG9mIHByb3BlcnR5IG5hbWVzXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyBhbiBvYmplY3QgbWFwcGluZyBwcm9wZXJ0eSBuYW1lcyB0byB2YWx1ZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIGEgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoICh3aGl0ZWxpc3RlZCBrZXksIHZhbHVlKSBwYWlyXG4gKi9cbmNvbnN0IHVzZVdoaXRlbGlzdElmQXZhaWxhYmxlID0gKHdoaXRlbGlzdCwgcHJvcGVydGllcywgY2IpID0+e1xuICBmb3IgKGxldCBwcm9wIG9mIHdoaXRlbGlzdCB8fCBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSl7XG4gICAgcHJvcGVydGllc1twcm9wXSA/IGNiKHByb3AsIHByb3BlcnRpZXNbcHJvcF0pIDogcGFzcygpO1xuICB9XG59O1xuLyoqXG4gKiBDcmVhdGVzIGEgZmVzOlJlc291cmNlSWQgZmlsdGVyIGZyb20gYSBsYXllcm5hbWUgYW5kIGlkXG4gKiBAcGFyYW0ge3N0cmluZ30gbHlyIGxheWVyIG5hbWUgb2YgdGhlIGZpbHRlcmVkIGZlYXR1cmVcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCBmZWF0dXJlIGlkXG4gKi9cbmNvbnN0IGlkRmlsdGVyID0gKGx5ciwgaWQpID0+IGA8ZmVzOlJlc291cmNlSWQgcmlkPVwiJHtlbnN1cmVJZChseXIsIGlkKX1cIi8+YDtcblxuY29uc3QgdW5wYWNrID0gKCgpPT57XG4gIGxldCBmZWF0dXJlTWVtYmVycyA9IG5ldyBTZXQoWydwcm9wZXJ0aWVzJywgJ2dlb21ldHJ5JywgJ2lkJywgJ2xheWVyJ10pO1xuICAvKipcbiAgICogUmVzb2x2ZXMgYXR0cmlidXRlcyBmcm9tIGZlYXR1cmUsIHRoZW4gcGFyYW1zIHVubGVzcyB0aGV5IGFyZSBub3JtYWxseVxuICAgKiBmb3VuZCBpbiB0aGUgZmVhdHVyZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZmVhdHVyZSBhIGdlb2pzb24gZmVhdHVyZVxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIGFuIG9iamVjdCBvZiBiYWNrdXAgLyBvdmVycmlkZSBwYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gYXJncyBwYXJhbWV0ZXIgbmFtZXMgdG8gcmVzb2x2ZSBmcm9tIGZlYXR1cmUgb3IgcGFyYW1zXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGFuIG9iamVjdCBtYXBwaW5nIGVhY2ggbmFtZWQgcGFyYW1ldGVyIHRvIGl0cyByZXNvbHZlZCB2YWx1ZVxuICAgKi9cbiAgcmV0dXJuIChmZWF0dXJlLCBwYXJhbXMsIC4uLmFyZ3MpID0+IHtcbiAgICBsZXQgcmVzdWx0cyA9IHt9O1xuICAgIGZvciAobGV0IGFyZyBvZiBhcmdzKXtcbiAgICAgIGlmIChhcmcgPT09ICdsYXllcicpe1xuXHRyZXN1bHRzW2FyZ10gPSAocGFyYW1zLmxheWVyIHx8IHt9KS5pZCB8fCBwYXJhbXMubGF5ZXJcblx0ICB8fCAoZmVhdHVyZS5sYXllcnx8e30pLmlkIHx8IGZlYXR1cmUubGF5ZXIgfHwgJyc7XG4gICAgICB9IGVsc2UgaWYgKCFmZWF0dXJlTWVtYmVycy5oYXMoYXJnKSl7XG4gICAgICAgIHJlc3VsdHNbYXJnXSA9IGZlYXR1cmVbYXJnXSB8fCBwYXJhbXNbYXJnXSB8fCAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHNbYXJnXSA9IHBhcmFtc1thcmddIHx8IGZlYXR1cmVbYXJnXSAgfHwgJyc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xufSkoKTtcblxuLyoqXG4gKiBCdWlsZHMgYSBmaWx0ZXIgZnJvbSBmZWF0dXJlIGlkcyBpZiBvbmUgaXMgbm90IGFscmVhZHkgaW5wdXQuXG4gKiBAZnVuY3Rpb24gXG4gKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IGZpbHRlciBhIHBvc3NpYmxlIHN0cmluZyBmaWx0ZXJcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gZmVhdHVyZXMgYW4gYXJyYXkgb2YgZ2VvanNvbiBmZWF0dXJlIG9iamVjdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgYW4gb2JqZWN0IG9mIGJhY2t1cCAvIG92ZXJyaWRlIHBhcmFtZXRlcnNcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgZmlsdGVyLCBvciB0aGUgaW5wdXQgZmlsdGVyIGlmIGl0IHdhcyBhIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlRmlsdGVyKGZpbHRlciwgZmVhdHVyZXMsIHBhcmFtcyl7XG4gIGlmICghZmlsdGVyKXtcbiAgICBmaWx0ZXIgPSAnJztcbiAgICBmb3IgKGxldCBmZWF0dXJlIG9mIGZlYXR1cmVzKXtcbiAgICAgIGxldCBsYXllciA9IHVucGFjayhmZWF0dXJlLCBwYXJhbXMpO1xuICAgICAgZmlsdGVyICs9IGlkRmlsdGVyKGxheWVyLCBmZWF0dXJlLmlkKTtcbiAgICB9XG4gICAgcmV0dXJuIGA8ZmVzOkZpbHRlcj4ke2ZpbHRlcn08L2ZlczpGaWx0ZXI+YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmlsdGVyO1xuICB9XG59O1xuLy9odHRwOi8vZG9jcy5vcGVuZ2Vvc3BhdGlhbC5vcmcvaXMvMDktMDI1cjIvMDktMDI1cjIuaHRtbCMyODZcbi8qKlxuICogQ2hlY2tzIHRoZSB0eXBlIG9mIHRoZSBpbnB1dCBhY3Rpb25cbiAqIEBmdW5jdGlvbiBcbiAqIEBwYXJhbSB7c3RyaW5nIHwgdW5kZWZpbmVkfSBhY3Rpb24gXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gd2hldGhlciB0aGUgYWN0aW9uIGlzIGFsbG93ZWRcbiovXG5jb25zdCBlbnN1cmVBY3Rpb24gPSAoKCk9PntcbiAgY29uc3QgYWxsb3dlZCA9IG5ldyBTZXQoWydyZXBsYWNlJywgJ2luc2VydEJlZm9yZScsICdpbnNlcnRBZnRlcicsICdyZW1vdmUnXSk7XG4gIHJldHVybiAoYWN0aW9uKSA9PiBhbGxvd2VkLmhhcyhhY3Rpb24pO1xufSkoKTtcblxuLyoqXG4gKiBBbiBvYmplY3QgY29udGFpbmluZyBvcHRpb25hbCBuYW1lZCBwYXJhbWV0ZXJzLlxuICogQHR5cGVkZWYge09iamVjdH0gUGFyYW1zXG4gKiBAcHJvcCB7c3RyaW5nfHVuZGVmaW5lZH0gbnMgYW4geG1sIG5hbWVzcGFjZSBhbGlhcy5cbiAqIEBwcm9wIHtzdHJpbmd8T2JqZWN0fHVuZGVmaW5lZH0gbGF5ZXIgYSBzdHJpbmcgbGF5ZXIgbmFtZSBvciB7aWR9LCB3aGVyZSBpZFxuICogaXMgdGhlIGxheWVyIG5hbWVcbiAqIEBwcm9wIHtzdHJpbmd8dW5kZWZpbmVkfSBnZW9tZXRyeV9uYW1lIHRoZSBuYW1lIG9mIHRoZSBmZWF0dXJlIGdlb21ldHJ5IGZpZWxkLlxuICogQHByb3Age09iamVjdHx1bmRlZmluZWR9IHByb3BlcnRpZXMgYW4gb2JqZWN0IG1hcHBpbmcgZmVhdHVyZSBmaWVsZCBuYW1lcyB0byBmZWF0dXJlIHByb3BlcnRpZXNcbiAqIEBwcm9wIHtzdHJpbmd8dW5kZWZpbmVkfSBpZCBhIHN0cmluZyBmZWF0dXJlIGlkLlxuICogQHByb3Age3N0cmluZ1tdfHVuZGVmaW5lZH0gd2hpdGVsaXN0IGFuIGFycmF5IG9mIHN0cmluZyBmaWVsZCBuYW1lcyB0byBcbiAqIHVzZSBmcm9tIEBzZWUgUGFyYW1zLnByb3BlcnRpZXNcbiAqIEBwcm9wIHtzdHJpbmd8dW5kZWZpbmVkfSBpbnB1dEZvcm1hdCBpbnB1dEZvcm1hdCwgYXMgc3BlY2lmaWVkIGF0IFxuICogW09HQyAwOS0wMjVyMiDCpyA3LjYuNS40XXtAbGluayBodHRwOi8vZG9jcy5vcGVuZ2Vvc3BhdGlhbC5vcmcvaXMvMDktMDI1cjIvMDktMDI1cjIuaHRtbCM2NX0uXG4gKiBAcHJvcCB7c3RyaW5nfHVuZGVmaW5lZH0gc3JzTmFtZSBzcnNOYW1lLCBhcyBzcGVjaWZpZWQgYXQgXG4gKiBbT0dDIDA5LTAyNXIyIMKnIDcuNi41LjVde0BsaW5rIGh0dHA6Ly9kb2NzLm9wZW5nZW9zcGF0aWFsLm9yZy9pcy8wOS0wMjVyMi8wOS0wMjVyMi5odG1sIzY2fS5cbiAqIGlmIHVuZGVmaW5lZCwgdGhlIGdtbDMgbW9kdWxlIHdpbGwgZGVmYXVsdCB0byAnRVBTRzo0MzI2Jy5cbiAqIEBwcm9wIHtzdHJpbmd8dW5kZWZpbmVkfSBoYW5kbGUgaGFuZGxlIHBhcmFtZXRlciwgYXMgc3BlY2lmaWVkIGF0XG4gKiBbT0dDIDA5LTAyNXIyIMKnIDcuNi4yLjYgXXtAbGluayBodHRwOi8vZG9jcy5vcGVuZ2Vvc3BhdGlhbC5vcmcvaXMvMDktMDI1cjIvMDktMDI1cjIuaHRtbCM0NH1cbiAqIEBwcm9wIHtzdHJpbmd8dW5kZWZpbmVkfSBmaWx0ZXIgYSBzdHJpbmcgZmVzOkZpbHRlci5cbiAqIEBwcm9wIHtzdHJpbmd8dW5kZWZpbmVkfSB0eXBlTmFtZSBhIHN0cmluZyBzcGVjaWZ5aW5nIHRoZSBmZWF0dXJlIHR5cGUgd2l0aGluXG4gKiBpdHMgbmFtZXNwYWNlLiBTZWUgWzA5LTAyNXIyIMKnIDcuOS4yLjQuMV17QGxpbmsgaHR0cDovL2RvY3Mub3Blbmdlb3NwYXRpYWwub3JnL2lzLzA5LTAyNXIyLzA5LTAyNXIyLmh0bWwjOTB9LlxuICogQHByb3Age09iamVjdHx1bmRlZmluZWR9IHNjaGVtYUxvY2F0aW9ucyBhbiBvYmplY3QgbWFwcGluZyB1cmkgdG8gc2NoZW1hbG9jYXRpb25cbiAqIEBwcm9wIHtPYmplY3R8dW5kZWZpbmVkfSBuc0Fzc2lnbm1lbnRzIGFuIG9iamVjdCBtYXBwaW5nIG5zIHRvIHVyaVxuICovXG5cbi8qKlxuICogQSBHZW9KU09OIGZlYXR1cmUgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbmFsIGZvcmVpZ24gbWVtYmVycyAoc2VlIFxuICogW3JmYzc5NjUgwqcgNl17QGxpbmsgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzc5NDYjc2VjdGlvbi02fSkuXG4gKiBvciBhbiBvYmplY3Qgd2l0aCBzb21lIG9mIHRoZSBmb2xsb3dpbmcgbWVtYmVycy5cbiAqIE1lbWJlcnMgb2YgRmVhdHVyZSB3aWxsIGJlIHVzZWQgb3ZlciB0aG9zZSBpbiBQYXJhbXMgZXhjZXB0IGZvciBsYXllciwgaWQsXG4gKiBhbmQgcHJvcGVydGllcy5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IEZlYXR1cmVcbiAqIEBleHRlbmRzIFBhcmFtc1xuICogQHByb3BlcnR5IHtPYmplY3R8dW5kZWZpbmVkfSBnZW9tZXRyeSBhIEdlb0pTT04gZ2VvbWV0cnkuXG4gKiBAcHJvcGVydHkge3N0cmluZ3x1bmRlZmluZWR9IHR5cGUgJ0ZlYXR1cmUnLlxuICogQGV4YW1wbGUgXG4gKiB7J2lkJzondGFzbWFuaWFfcm9hZHMuMScsICd0eXBlTmFtZSc6J3RvcHA6dGFzbWFuaWFfcm9hZHNUeXBlJ30gXG4gKiAvLyBjYW4gYmUgcGFzc2VkIHRvIERlbGV0ZVxuICovXG5cbi8qKlxuICogYSBHZW9KU09OIEZlYXR1cmVDb2xsZWN0aW9uIHdpdGggb3B0aW9uYWwgZm9yZWlnbiBtZW1iZXJzIGFzIGluIEZlYXR1cmUuXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBGZWF0dXJlQ29sbGVjdGlvblxuICogQGV4dGVuZHMgRmVhdHVyZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgJ0ZlYXR1cmVDb2xsZWN0aW9uJy5cbiAqIEBwcm9wZXJ0eSB7RmVhdHVyZVtdfSBmZWF0dXJlcyBhbiBhcnJheSBvZiBHZW9KU09OIEZlYXR1cmVzLlxuICovXG5cbi8qKlxuICogVHVybnMgYW4gYXJyYXkgb2YgZ2VvanNvbiBmZWF0dXJlcyBpbnRvIGdtbDpfZmVhdHVyZSBzdHJpbmdzIGRlc2NyaWJpbmcgdGhlbS5cbiAqIEBmdW5jdGlvbiBcbiAqIEBwYXJhbSB7RmVhdHVyZVtdfSBmZWF0dXJlcyBhbiBhcnJheSBvZiBmZWF0dXJlcyB0byB0cmFuc2xhdGUgdG8gXG4gKiBnbWw6X2ZlYXR1cmVzLlxuICogQHBhcmFtIHtQYXJhbXN9IHBhcmFtcyBhbiBvYmplY3Qgb2YgYmFja3VwIC8gb3ZlcnJpZGUgcGFyYW1ldGVycyBcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGEgZ21sOl9mZWF0dXJlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gdHJhbnNsYXRlRmVhdHVyZXMoZmVhdHVyZXMsIHBhcmFtcz17fSl7XG4gIGxldCBpbm5lciA9ICcnO1xuICBsZXQge3Nyc05hbWV9ID0gcGFyYW1zO1xuICBmb3IgKGxldCBmZWF0dXJlIG9mIGZlYXR1cmVzKXtcbiAgICAvL1RPRE86IGFkZCB3aGl0ZWxpc3Qgc3VwcG9ydFxuICAgIGxldCB7bnMsIGxheWVyLCBnZW9tZXRyeV9uYW1lLCBwcm9wZXJ0aWVzLCBpZCwgd2hpdGVsaXN0fSA9IHVucGFjayhcbiAgICAgIGZlYXR1cmUsIHBhcmFtcywgJ25zJywgJ2xheWVyJywgJ2dlb21ldHJ5X25hbWUnLCAncHJvcGVydGllcycsICdpZCcsICd3aGl0ZWxpc3QnXG4gICAgKTtcbiAgICBsZXQgZmllbGRzID0gJyc7XG4gICAgaWYgKGdlb21ldHJ5X25hbWUpe1xuICAgICAgZmllbGRzICs9IHhtbC50YWcoXG5cdG5zLCBnZW9tZXRyeV9uYW1lLCB7fSwgZ21sMyhmZWF0dXJlLmdlb21ldHJ5LCAnJywge3Nyc05hbWV9KVxuICAgICAgKTtcbiAgICB9XG4gICAgdXNlV2hpdGVsaXN0SWZBdmFpbGFibGUoXG4gICAgICB3aGl0ZWxpc3QsIHByb3BlcnRpZXMsXG4gICAgICAocHJvcCwgdmFsKT0+ZmllbGRzICs9IHhtbC50YWcobnMsIHByb3AsIHt9LCBwcm9wZXJ0aWVzW3Byb3BdKVxuICAgICk7XG4gICAgaW5uZXIgKz0geG1sLnRhZyhucywgbGF5ZXIsIHsnZ21sOmlkJzogZW5zdXJlSWQobGF5ZXIsIGlkKX0sIGZpZWxkcyk7XG4gIH1cbiAgcmV0dXJuIGlubmVyO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSB3ZnM6SW5zZXJ0IHRhZyB3cmFwcGluZyBhIHRyYW5zbGF0ZWQgZmVhdHVyZVxuICogQGZ1bmN0aW9uIFxuICogQHBhcmFtIHtGZWF0dXJlW118RmVhdHVyZUNvbGxlY3Rpb258RmVhdHVyZX0gZmVhdHVyZXMgRmVhdHVyZShzKSB0byBwYXNzIHRvIEBzZWUgdHJhbnNsYXRlRmVhdHVyZXNcbiAqIEBwYXJhbSB7UGFyYW1zfSBwYXJhbXMgdG8gYmUgcGFzc2VkIHRvIEBzZWUgdHJhbnNsYXRlRmVhdHVyZXMsIHdpdGggb3B0aW9uYWxcbiAqIGlucHV0Rm9ybWF0LCBzcnNOYW1lLCBoYW5kbGUgZm9yIHRoZSB3ZnM6SW5zZXJ0IHRhZy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IGEgd2ZzOkluc2VydCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIEluc2VydChmZWF0dXJlcywgcGFyYW1zPXt9KXtcbiAgZmVhdHVyZXMgPSBlbnN1cmVBcnJheShmZWF0dXJlcyk7XG4gIGxldCB7aW5wdXRGb3JtYXQsIHNyc05hbWUsIGhhbmRsZX0gPSBwYXJhbXM7XG4gIGlmICghZmVhdHVyZXMubGVuZ3RoKXtcbiAgICBjb25zb2xlLndhcm4oJ25vIGZlYXR1cmVzIHN1cHBsaWVkJyk7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGxldCB0b0luc2VydCA9IHRyYW5zbGF0ZUZlYXR1cmVzKGZlYXR1cmVzLCBwYXJhbXMpO1xuICByZXR1cm4geG1sLnRhZygnd2ZzJywgJ0luc2VydCcsIHtpbnB1dEZvcm1hdCwgc3JzTmFtZSwgaGFuZGxlfSwgdG9JbnNlcnQpO1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIGlucHV0IGZlYXR1cmVzIGluIGJ1bGsgd2l0aCBwYXJhbXMucHJvcGVydGllcyBvciBieSBpZC5cbiAqIEBwYXJhbSB7RmVhdHVyZVtdfEZlYXR1cmVDb2xsZWN0aW9ufSBmZWF0dXJlcyBmZWF0dXJlcyB0byB1cGRhdGUuICBUaGVzZSBtYXkgXG4gKiBwYXNzIGluIGdlb21ldHJ5X25hbWUsIHByb3BlcnRpZXMsIGFuZCBsYXllciAob3ZlcnJ1bGVkIGJ5IHBhcmFtcykgYW5kIFxuICogbnMsIGxheWVyLCBzcnNOYW1lIChvdmVycnVsaW5nIHBhcmFtcykuXG4gKiBAcGFyYW0ge1BhcmFtc30gcGFyYW1zIHdpdGggb3B0aW9uYWwgcHJvcGVydGllcywgbnMsIGxheWVyLCBnZW9tZXRyeV9uYW1lLFxuICogZmlsdGVyLCB0eXBlTmFtZSwgd2hpdGVsaXN0LlxuICogQHJldHVybnMge3N0cmluZ30gYSBzdHJpbmcgd2ZzOlVwYXRlIGFjdGlvbi5cbiAqL1xuZnVuY3Rpb24gVXBkYXRlKGZlYXR1cmVzLCBwYXJhbXM9e30pe1xuICBmZWF0dXJlcyA9IGVuc3VyZUFycmF5KGZlYXR1cmVzKTtcbiAgLyoqXG4gICAqIG1ha2VzIGEgd2ZzOlByb3BlcnR5IHN0cmluZyBjb250YWluZyBhIHdmczpWYWx1ZVJlZmVyZW5jZSwgd2ZzOlZhbHVlIHBhaXIuXG4gICAqIEBmdW5jdGlvbiBcbiAgICogQG1lbWJlcm9mIFVwZGF0ZX5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3AgdGhlIGZpZWxkL3Byb3BlcnR5IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbCB0aGUgZmllbGQvcHJvcGVydHkgdmFsdWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gb25lIG9mICdpbnNlcnRCZWZvcmUnLCAnaW5zZXJ0QWZ0ZXInLCAncmVtb3ZlJyxcbiAgICogJ3JlcGxhY2UnLiBTZWUgW09HQyAwOS0wMjVyMiDCpyAxNS4yLjUuMi4xXXtAbGluayBodHRwOi8vZG9jcy5vcGVuZ2Vvc3BhdGlhbC5vcmcvaXMvMDktMDI1cjIvMDktMDI1cjIuaHRtbCMyODZ9LlxuICAgKiBgYWN0aW9uYCB3b3VsZCBkZWxldGUgb3IgbW9kaWZ5IHRoZSBvcmRlciBvZiBmaWVsZHMgd2l0aGluIHRoZSByZW1vdGVcbiAgICogZmVhdHVyZS4gVGhlcmUgaXMgY3VycmVudGx5IG5vIHdheSB0byBpbnB1dCBgYWN0aW9uLGAgc2luY2Ugd2ZzOlVwZGF0ZSdzXG4gICAqIGRlZmF1bHQgYWN0aW9uLCAncmVwbGFjZScsIGlzIHN1ZmZpY2llbnQuXG4gICAqL1xuICBjb25zdCBtYWtlS3ZwID0gKHByb3AsIHZhbCwgYWN0aW9uKSA9PiB3ZnMoXG4gICAgJ1Byb3BlcnR5Jywge30sXG4gICAgd2ZzKCdWYWx1ZVJlZmVyZW5jZScsIHthY3Rpb259LCBwcm9wKSArXG4gICAgICAodmFsICE9PSB1bmRlZmluZWQgPyB3ZnMoJ1ZhbHVlJywge30sIHZhbCk6ICcnKVxuICApO1xuICBpZiAocGFyYW1zLnByb3BlcnRpZXMpe1xuICAgIGxldCB7aGFuZGxlLCBpbnB1dEZvcm1hdCwgZmlsdGVyLCB0eXBlTmFtZSwgd2hpdGVsaXN0fSA9IHBhcmFtcztcbiAgICBsZXQgeyBzcnNOYW1lLCBucywgbGF5ZXIsIGdlb21ldHJ5X25hbWUgfSA9IHVucGFjayhcbiAgICAgIGZlYXR1cmVzWzBdIHx8IHt9LCBwYXJhbXMsICdzcnNOYW1lJywgJ25zJywgJ2xheWVyJywgJ2dlb21ldHJ5X25hbWUnKTtcbiAgICB0eXBlTmFtZSA9IGVuc3VyZVR5cGVOYW1lKG5zLCBsYXllciwgdHlwZU5hbWUpO1xuICAgIGZpbHRlciA9IGVuc3VyZUZpbHRlcihmaWx0ZXIsIGZlYXR1cmVzLCBwYXJhbXMpO1xuICAgIGlmICghZmlsdGVyICYmICFmZWF0dXJlcy5sZW5ndGgpe1xuICAgICAgY29uc29sZS53YXJuKCduZWl0aGVyIGZlYXR1cmVzIG5vciBmaWx0ZXIgc3VwcGxpZWQnKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgbGV0IGZpZWxkcyA9ICcnO1xuICAgIHVzZVdoaXRlbGlzdElmQXZhaWxhYmxlKCAvLyBUT0RPOiBhY3Rpb24gYXR0clxuICAgICAgd2hpdGVsaXN0LCBwYXJhbXMucHJvcGVydGllcywgKGssIHYpID0+IGZpZWxkcyArPSBtYWtlS3ZwKGssdilcbiAgICApO1xuICAgIGlmIChnZW9tZXRyeV9uYW1lKXtcbiAgICAgIGZpZWxkcyArPSAgbWFrZUt2cChcbiAgICAgICAgICBnZW9tZXRyeV9uYW1lLCB4bWwudGFnKFxuICAgICAgICAgICAgICBucywgZ2VvbWV0cnlfbmFtZSwge30sIGdtbDMocGFyYW1zLmdlb21ldHJ5LCAnJywge3Nyc05hbWV9KVxuICAgICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB3ZnMoJ1VwZGF0ZScsIHtpbnB1dEZvcm1hdCwgc3JzTmFtZSwgdHlwZU5hbWV9LCBmaWVsZHMgKyBmaWx0ZXIpO1xuICB9IGVsc2Uge1xuICAgIC8vIGVuY2Fwc3VsYXRlIGVhY2ggdXBkYXRlIGluIGl0cyBvd24gVXBkYXRlIHRhZ1xuICAgIHJldHVybiBmZWF0dXJlcy5tYXAoXG4gICAgICAoZikgPT4gVXBkYXRlKFxuICAgICAgICBmLCBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMsIHtwcm9wZXJ0aWVzOmYucHJvcGVydGllc30pXG4gICAgICApXG4gICAgKS5qb2luKCcnKTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB3ZnM6RGVsZXRlIGFjdGlvbiwgY3JlYXRpbmcgYSBmaWx0ZXIgYW5kIHR5cGVOYW1lIGZyb20gZmVhdHVyZSBpZHMgXG4gKiBpZiBub25lIGFyZSBzdXBwbGllZC5cbiAqIEBwYXJhbSB7RmVhdHVyZVtdfEZlYXR1cmVDb2xsZWN0aW9ufEZlYXR1cmV9IGZlYXR1cmVzXG4gKiBAcGFyYW0ge1BhcmFtc30gcGFyYW1zIG9wdGlvbmFsIHBhcmFtZXRlciBvdmVycmlkZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy5uc10gQHNlZSBQYXJhbXMubnNcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gW3BhcmFtcy5sYXllcl0gQHNlZSBQYXJhbXMubGF5ZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGFyYW1zLnR5cGVOYW1lXSBAc2VlIFBhcmFtcy50eXBlTmFtZS4gVGhpcyB3aWxsIGJlIGluZmVycmVkXG4gKiBmcm9tIGZlYXR1cmUvcGFyYW1zIGxheWVyIGFuZCBucyBpZiB0aGlzIGlzIGxlZnQgdW5kZWZpbmVkLlxuICogQHBhcmFtIHtmaWx0ZXJ9IFtwYXJhbXMuZmlsdGVyXSBAc2VlIFBhcmFtcy5maWx0ZXIuICBUaGlzIHdpbGwgYmUgaW5mZXJyZWRcbiAqIGZyb20gZmVhdHVyZSBpZHMgYW5kIGxheWVyKHMpIGlmIGxlZnQgdW5kZWZpbmVkIChAc2VlIGVuc3VyZUZpbHRlcikuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhIHdmczpEZWxldGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBEZWxldGUoZmVhdHVyZXMsIHBhcmFtcz17fSl7XG4gIGZlYXR1cmVzID0gZW5zdXJlQXJyYXkoZmVhdHVyZXMpO1xuICBsZXQge2ZpbHRlciwgdHlwZU5hbWV9ID0gcGFyYW1zOyAvL1RPRE86IHJlY3VyZSAmIGVuY2Fwc3VsYXRlIGJ5IHR5cGVOYW1lXG4gIGxldCB7bnMsIGxheWVyfSA9IHVucGFjayhmZWF0dXJlc1swXSB8fCB7fSwgcGFyYW1zLCAnbGF5ZXInLCAnbnMnKTtcbiAgdHlwZU5hbWUgPSBlbnN1cmVUeXBlTmFtZShucywgbGF5ZXIsIHR5cGVOYW1lKTtcbiAgZmlsdGVyID0gZW5zdXJlRmlsdGVyKGZpbHRlciwgZmVhdHVyZXMsIHBhcmFtcyk7XG4gIHJldHVybiB3ZnMoJ0RlbGV0ZScsIHt0eXBlTmFtZX0sIGZpbHRlcik7IFxufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgd2ZzOlJlcGxhY2UgYWN0aW9uLlxuICogQHBhcmFtIHtGZWF0dXJlW118RmVhdHVyZUNvbGxlY3Rpb258RmVhdHVyZX0gZmVhdHVyZXMgZmVhdHVyZShzKSB0byByZXBsYWNlXG4gKiBAcGFyYW0ge1BhcmFtc30gcGFyYW1zIHdpdGggb3B0aW9uYWwgZmlsdGVyLCBpbnB1dEZvcm1hdCwgc3JzTmFtZVxuICogQHJldHVybnMge3N0cmluZ30gYSBzdHJpbmcgd2ZzOlJlcGxhY2UgYWN0aW9uLlxuICovXG5mdW5jdGlvbiBSZXBsYWNlKGZlYXR1cmVzLCBwYXJhbXM9e30pe1xuICBmZWF0dXJlcyA9IGVuc3VyZUFycmF5KGZlYXR1cmVzKTtcbiAgbGV0IHtmaWx0ZXIsIGlucHV0Rm9ybWF0LCBzcnNOYW1lfSA9IHVucGFjayAoXG4gICAgZmVhdHVyZXNbMF0gfHwge30sIHBhcmFtcyB8fCB7fSwgJ2ZpbHRlcicsICdpbnB1dEZvcm1hdCcsICdzcnNOYW1lJ1xuICApO1xuICBsZXQgcmVwbGFjZW1lbnRzID0gdHJhbnNsYXRlRmVhdHVyZXMoXG4gICAgW2ZlYXR1cmVzWzBdXS5maWx0ZXIoKGYpPT5mKSxcbiAgICBwYXJhbXMgfHwge3Nyc05hbWV9XG4gICk7XG4gIGZpbHRlciA9IGVuc3VyZUZpbHRlcihmaWx0ZXIsIGZlYXR1cmVzLCBwYXJhbXMpO1xuICByZXR1cm4gd2ZzKCdSZXBsYWNlJywge2lucHV0Rm9ybWF0LCBzcnNOYW1lfSwgcmVwbGFjZW1lbnRzICsgZmlsdGVyKTtcbn1cblxuLyoqXG4gKiBXcmFwcyB0aGUgaW5wdXQgYWN0aW9ucyBpbiBhIHdmczpUcmFuc2FjdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fHN0cmluZ1tdfHN0cmluZ30gYWN0aW9ucyBhbiBvYmplY3QgbWFwcGluZyB7SW5zZXJ0LCBVcGRhdGUsXG4gKiBEZWxldGV9IHRvIGZlYXR1cmUocykgdG8gcGFzcyB0byBJbnNlcnQsIFVwZGF0ZSwgRGVsZXRlLCBvciB3ZnM6YWN0aW9uIFxuICogc3RyaW5nKHMpIHRvIHdyYXAgaW4gYSB0cmFuc2FjdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgb3B0aW9uYWwgc3JzTmFtZSwgbG9ja0lkLCByZWxlYXNlQWN0aW9uLCBoYW5kbGUsXG4gKiBpbnB1dEZvcm1hdCwgdmVyc2lvbiwgYW5kIHJlcXVpcmVkIG5zQXNzaWdubWVudHMsIHNjaGVtYUxvY2F0aW9ucy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgd2ZzOnRyYW5zYWN0aW9uIHdyYXBwaW5nIHRoZSBpbnB1dCBhY3Rpb25zLlxuICogQHRocm93cyB7RXJyb3J9IGlmIGBhY3Rpb25zYCBpcyBub3QgYW4gYXJyYXkgb2Ygc3RyaW5ncywgYSBzdHJpbmcsIG9yIFxuICoge0BzZWUgSW5zZXJ0LCBAc2VlIFVwZGF0ZSwgQHNlZSBEZWxldGV9LCB3aGVyZSBlYWNoIGFjdGlvbiBhcmUgdmFsaWQgaW5wdXRzIFxuICogdG8gdGhlIGVwb255bW91cyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gVHJhbnNhY3Rpb24oYWN0aW9ucywgcGFyYW1zPXt9KXtcbiAgbGV0IHtcbiAgICBzcnNOYW1lLCBsb2NrSWQsIHJlbGVhc2VBY3Rpb24sIGhhbmRsZSwgaW5wdXRGb3JtYXQsIHZlcnNpb24sIC8vIG9wdGlvbmFsXG4gICAgbnNBc3NpZ25tZW50cywgc2NoZW1hTG9jYXRpb25zIC8vIHJlcXVpcmVkXG4gIH0gPSBwYXJhbXM7XG4gIGxldCBjb252ZXJ0ZXIgPSB7SW5zZXJ0LCBVcGRhdGUsIERlbGV0ZX07XG4gIGxldCB7aW5zZXJ0OnRvSW5zZXJ0LCB1cGRhdGU6dG9VcGRhdGUsIGRlbGV0ZTp0b0RlbGV0ZX0gPSBhY3Rpb25zIHx8IHt9O1xuICBsZXQgZmluYWxBY3Rpb25zID0gJyc7IC8vIHByb2Nlc3NlZEFjdGlvbnMgd291bGQgYmUgbW9yZSBhY2N1cmF0ZVxuICBcbiAgaWYgKEFycmF5LmlzQXJyYXkoYWN0aW9ucykgJiYgYWN0aW9ucy5ldmVyeSgodikgPT4gdHlwZW9mKHYpID09ICdzdHJpbmcnKSl7XG4gICAgZmluYWxBY3Rpb25zICs9IGFjdGlvbnMuam9pbignJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mKGFjdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgZmluYWxBY3Rpb25zID0gYWN0aW9ucztcbiAgfVxuICAgIGVsc2UgaWYgKFt0b0luc2VydCwgdG9VcGRhdGUsIHRvRGVsZXRlXS5zb21lKChlKSA9PiBlKSl7XG4gICAgZmluYWxBY3Rpb25zICs9IEluc2VydCh0b0luc2VydCwgcGFyYW1zKSArXG4gICAgICBVcGRhdGUodG9VcGRhdGUsIHBhcmFtcykgK1xuICAgICAgRGVsZXRlKHRvRGVsZXRlLCBwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgdW5leHBlY3RlZCBpbnB1dDogJHtKU09OLnN0cmluZ2lmeShhY3Rpb25zKX1gKTtcbiAgfVxuICAvLyBnZW5lcmF0ZSBzY2hlbWFMb2NhdGlvbiwgeG1sbnMnc1xuICBuc0Fzc2lnbm1lbnRzID0gbnNBc3NpZ25tZW50cyB8fCB7fTtcbiAgc2NoZW1hTG9jYXRpb25zID0gc2NoZW1hTG9jYXRpb25zIHx8IHt9O1xuICBsZXQgYXR0cnMgPSBnZW5lcmF0ZU5zQXNzaWdubWVudHMobnNBc3NpZ25tZW50cywgYWN0aW9ucyk7XG4gIGF0dHJzWyd4c2k6c2NoZW1hTG9jYXRpb24nXSA9ICBnZW5lcmF0ZVNjaGVtYUxpbmVzKHBhcmFtcy5zY2hlbWFMb2NhdGlvbnMpO1xuICBhdHRyc1snc2VydmljZSddID0gJ1dGUyc7XG4gIGF0dHJzWyd2ZXJzaW9uJ10gPSAvMlxcLjBcXC5cXGQrLy5leGVjKHZlcnNpb24gfHwgJycpID8gdmVyc2lvbiA6ICcyLjAuMCc7XG4gIHJldHVybiB3ZnMoJ1RyYW5zYWN0aW9uJywgYXR0cnMsIGZpbmFsQWN0aW9ucyk7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGFuIG9iamVjdCB0byBiZSBwYXNzZWQgdG8gQHNlZSB4bWwuYXR0cnMgeG1sbnM6bnM9XCJ1cmlcIiBkZWZpbml0aW9ucyBmb3IgYSB3ZnM6VHJhbnNhY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBuc0Fzc2lnbm1lbnRzIEBzZWUgUGFyYW1zLm5zQXNzaWdubWVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB4bWwgYXJiaXRyYXJ5IHhtbC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IGFuIG9iamVjdCBtYXBwaW5nIGVhY2ggbnMgdG8gaXRzIFVSSSBhcyAneG1sbnM6bnMnIDogJ1VSSScuXG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgYW55IG5hbWVzcGFjZSB1c2VkIHdpdGhpbiBgeG1sYCBpcyBtaXNzaW5nIGEgVVJJIGRlZmluaXRpb25cbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVOc0Fzc2lnbm1lbnRzKG5zQXNzaWdubWVudHMsIHhtbCl7XG4gIGxldCBhdHRycyA9IHt9O1xuICBjb25zdCBtYWtlTnNBc3NpZ25tZW50ID0gKG5zLCB1cmkpID0+IGF0dHJzW2B4bWxuczoke25zfWBdID0gdXJpO1xuICBmb3IgKGxldCBucyBpbiBuc0Fzc2lnbm1lbnRzKXtcbiAgICBtYWtlTnNBc3NpZ25tZW50KG5zLCBuc0Fzc2lnbm1lbnRzW25zXSk7XG4gIH1cbiAgLy8gY2hlY2sgYWxsIG5zJ3MgYXNzaWduZWQgXG4gIHZhciByZSA9IC8oPHx0eXBlTmFtZT1cIikoXFx3Kyk6L2c7XG4gIHZhciBhcnI7XG4gIHZhciBhbGxOYW1lc3BhY2VzID0gbmV3IFNldCgpO1xuICB3aGlsZSAoKGFyciA9IHJlLmV4ZWMoeG1sKSkgIT09IG51bGwpe1xuICAgIGFsbE5hbWVzcGFjZXMuYWRkKGFyclsyXSk7XG4gIH1cbiAgaWYgKGFsbE5hbWVzcGFjZXMuaGFzKCdmZXMnKSl7XG4gICAgbWFrZU5zQXNzaWdubWVudCgnZmVzJywgJ2h0dHA6Ly93d3cub3Blbmdpcy5uZXQvZmVzLzIuMCcpO1xuICB9O1xuICBtYWtlTnNBc3NpZ25tZW50KCd4c2knLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UnKTtcbiAgbWFrZU5zQXNzaWdubWVudCgnZ21sJywgJ2h0dHA6Ly93d3cub3Blbmdpcy5uZXQvZ21sLzMuMicpO1xuICBtYWtlTnNBc3NpZ25tZW50KCd3ZnMnLCAnaHR0cDovL3d3dy5vcGVuZ2lzLm5ldC93ZnMvMi4wJyk7XG5cbiAgZm9yIChsZXQgbnMgb2YgYWxsTmFtZXNwYWNlcyl7XG4gICAgaWYgKCFhdHRyc1sneG1sbnM6JyArIG5zXSl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVuYXNzaWduZWQgbmFtZXNwYWNlICR7bnN9YCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhdHRycztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIGFsdGVybmF0aW5nIHVyaSwgd2hpdGVzcGFjZSwgYW5kIHRoZSB1cmkncyBzY2hlbWEncyBsb2NhdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWFMb2NhdGlvbnMgYW4gb2JqZWN0IG1hcHBpbmcgdXJpOnNjaGVtYWxvY2F0aW9uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhIHN0cmluZyB0aGF0IGlzIGEgdmFsaWQgeHNpOnNjaGVtYUxvY2F0aW9uIHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZVNjaGVtYUxpbmVzKHNjaGVtYUxvY2F0aW9ucz17fSl7XG4gIC8vVE9ETzogYWRkIG5zIGFzc2lnbm1lbnQgY2hlY2tcbiAgc2NoZW1hTG9jYXRpb25zWydodHRwOi8vd3d3Lm9wZW5naXMubmV0L3dmcy8yLjAnXSA9IFxuICAgICdodHRwOi8vc2NoZW1hcy5vcGVuZ2lzLm5ldC93ZnMvMi4wL3dmcy54c2QnO1xuICB2YXIgc2NoZW1hTGluZXMgPSBbXTtcbiAgZm9yIChsZXQgdXJpIGluIHNjaGVtYUxvY2F0aW9ucyl7XG4gICAgc2NoZW1hTGluZXMucHVzaChgJHt1cml9XFxuJHtzY2hlbWFMb2NhdGlvbnNbdXJpXX1gKTtcbiAgfVxuICByZXR1cm4gc2NoZW1hTGluZXMuam9pbignXFxuJyk7XG59XG5cbmV4cG9ydCB7SW5zZXJ0LCBVcGRhdGUsIFJlcGxhY2UsIERlbGV0ZSwgVHJhbnNhY3Rpb259O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VvanNvbi10by13ZnMtdC0yL2dlb2pzb24tdG8td2ZzdC0yLWVzNi5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBcbiBOb3RlIHRoaXMgY2FuIG9ubHkgY29udmVydCB3aGF0IGdlb2pzb24gY2FuIHN0b3JlOiBzaW1wbGUgZmVhdHVyZSB0eXBlcywgbm90XG4gY292ZXJhZ2UsIHRvcG9sb2d5LCBldGMuXG4gKi9cblxuLyoqIFxuICogZ2VvanNvbiBjb29yZGluYXRlcyBhcmUgaW4gbG9uZ2l0dWRlL2Vhc3RpbmcsIGxhdGl0dWRlL25vcnRoaW5nIFssZWxldmF0aW9uXVxuICogb3JkZXIgYnkgW1JGQy03OTQ2IMKnIDMuMS4xXXtAbGluayBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzk0NiNzZWN0aW9uLTMuMS4xfS5cbiAqIGhvd2V2ZXIsIHlvdSBtYXkgdXNlIGEgQ1JTIHRoYXQgZm9sbG93cyBhIGxhdGl0dWRlL2Vhc3RpbmcsXG4gKiBsb25naXR1ZGUvbm9ydGhpbmcsIFssZWxldmF0aW9uXSBvcmRlci5cbiAqL1xudmFyIGNvb3JkaW5hdGVPcmRlciA9IHRydWU7XG5jb25zdCBzZXRDb29yZGluYXRlT3JkZXIgPSAob3JkZXIpID0+IGNvb3JkaW5hdGVPcmRlciA9IG9yZGVyO1xuZnVuY3Rpb24gb3JkZXJDb29yZHMoY29vcmRzKXtcbiAgaWYgKGNvb3JkaW5hdGVPcmRlcil7XG4gICAgcmV0dXJuIGNvb3JkcztcbiAgfSBcbiAgaWYgKGNvb3Jkc1syXSl7XG4gICAgcmV0dXJuIFtjb29yZHNbMV0sIGNvb3Jkc1swXSwgY29vcmRzWzJdXTtcbiAgfSBcbiAgcmV0dXJuIGNvb3Jkcy5yZXZlcnNlKCk7XG59XG5cblxuXG4vKiogQHByaXZhdGUqL1xuZnVuY3Rpb24gYXR0cnMoYXR0ck1hcHBpbmdzKXtcbiAgbGV0IHJlc3VsdHMgPSAnJztcbiAgZm9yIChsZXQgYXR0ck5hbWUgaW4gYXR0ck1hcHBpbmdzKXtcbiAgICBsZXQgdmFsdWUgPSBhdHRyTWFwcGluZ3NbYXR0ck5hbWVdO1xuICAgIHJlc3VsdHMgKz0gKHZhbHVlID8gYCAke2F0dHJOYW1lfT1cIiR7dmFsdWV9XCJgIDogJycpO1xuICB9XG4gIHJldHVybiByZXN1bHRzO1xufVxuXG4vKipcbiAqIGNoZWNrcyBvdXRlciBzY29wZSBmb3IgZ21sSWQgYXJndW1lbnQvdmFyaWFibGVcbiAqIEBmdW5jdGlvbiBcbiAqL1xuY29uc3QgZW5mb3JjZUdtbElkID0gKGdtbElkKSA9PntcbiAgaWYgKCFnbWxJZCl7XG4gICAgY29uc29sZS53YXJuKCdObyBnbWxJZCBzdXBwbGllZCcpO1xuICB9XG59O1xuXG4vKipcbiAqIEEgaGFuZGxlciB0byBjb21waWxlIGdlb21ldHJpZXMgdG8gbXVsdGlnZW9tZXRyaWVzXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHRoZSBuYW1lIG9mIHRoZSB0YXJnZXQgbXVsdGlnZW9tZXRyeVxuICogQHBhcmFtIHtzdHJpbmd9IG1lbWJlck5hbWUgdGhlIGdtbDp0YWcgb2YgZWFjaCBtdWx0aWdlb21ldHJ5IG1lbWJlci5cbiAqIEBwYXJhbSB7T2JqZWN0W118QXJyYXl9IGdlb20gYW4gYXJyYXkgb2YgZ2VvanNvbiBnZW9tZXRyaWVzXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGdtbElkIHRoZSBnbWw6aWQgb2YgdGhlIG11bHRpZ2VvbWV0cnlcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgb3B0aW9uYWwgcGFyYW1ldGVycy4gT21pdCBnbWxJZHMgYXQgeW91ciBvd24gcmlzaywgaG93ZXZlci5cbiAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gcGFyYW1zLnNyc05hbWUgYXMgc3RyaW5nIHNwZWNpZnlpbmcgU1JTXG4gKiBAcGFyYW0ge251bWJlcltdfHN0cmluZ1tdfSBwYXJhbXMuZ21sSWRzIGFuIGFycmF5IG9mIG51bWJlci9zdHJpbmcgZ21sOmlkcyBvZiB0aGUgbWVtYmVyIGdlb21ldHJpZXMuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8dW5kZWZpbmVkfSBwYXJhbXMuc3JzRGltZW5zaW9uIHRoZSBkaW1lbnNpb25hbGl0eSBvZiBlYWNoIGNvb3JkaW5hdGUsIGkuZS4gMiBvciAzLlxuICogQHJldHVybnMge3N0cmluZ30gYSBzdHJpbmcgY29udGFpbmluZyBnbWwgZGVzY3JpYmluZyB0aGUgaW5wdXQgbXVsdGlnZW9tZXRyeVxuICogQHRocm93cyB7RXJyb3J9IGlmIGEgbWVtYmVyIGdlb21ldHJ5IGNhbm5vdCBiZSBjb252ZXJ0ZWQgdG8gZ21sXG4gKi9cbmZ1bmN0aW9uIG11bHRpKG5hbWUsIG1lbWJlck5hbWUsIG1lbWJlcmNiLCBnZW9tLCBnbWxJZCwgcGFyYW1zPXt9KXtcbiAgZW5mb3JjZUdtbElkKGdtbElkKTtcbiAgdmFyIHtzcnNOYW1lLCBnbWxJZHN9ID0gcGFyYW1zO1xuICBsZXQgbXVsdGkgPSBgPGdtbDoke25hbWV9JHthdHRycyh7c3JzTmFtZSwgJ2dtbDppZCc6Z21sSWR9KX0+YDtcbiAgbXVsdGkgKz0gYDxnbWw6JHttZW1iZXJOYW1lfT5gO1xuICBnZW9tLmZvckVhY2goZnVuY3Rpb24obWVtYmVyLCBpKXtcbiAgICBsZXQgX2dtbElkID0gbWVtYmVyLmlkIHx8IChnbWxJZHMgfHwgW10pW2ldIHx8ICcnO1xuICAgIGlmIChuYW1lID09ICdNdWx0aUdlb21ldHJ5Jyl7XG4gICAgICBsZXQgbWVtYmVyVHlwZSA9IG1lbWJlci50eXBlO1xuICAgICAgbWVtYmVyID0gbWVtYmVyLmNvb3JkaW5hdGVzO1xuICAgICAgbXVsdGkgKz0gbWVtYmVyY2JbbWVtYmVyVHlwZV0obWVtYmVyLCBfZ21sSWQsIHBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG11bHRpICs9IG1lbWJlcmNiKG1lbWJlciwgX2dtbElkLCBwYXJhbXMpO1xuICAgIH1cbiAgfSk7XG4gIG11bHRpICs9IGA8L2dtbDoke21lbWJlck5hbWV9PmA7XG4gIHJldHVybiBtdWx0aSArIGA8L2dtbDoke25hbWV9PmA7XG59XG4vKipcbiAqIENvbnZlcnRzIGFuIGlucHV0IGdlb2pzb24gUG9pbnQgZ2VvbWV0cnkgdG8gZ21sXG4gKiBAZnVuY3Rpb24gXG4gKiBAcGFyYW0ge251bWJlcltdfSBjb29yZHMgdGhlIGNvb3JkaW5hdGVzIG1lbWJlciBvZiB0aGUgZ2VvanNvbiBnZW9tZXRyeVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBnbWxJZCB0aGUgZ21sOmlkXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gcGFyYW1zLnNyc05hbWUgYXMgc3RyaW5nIHNwZWNpZnlpbmcgU1JTXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8dW5kZWZpbmVkfSBwYXJhbXMuc3JzRGltZW5zaW9uIHRoZSBkaW1lbnNpb25hbGl0eSBvZiBlYWNoIGNvb3JkaW5hdGUsIGkuZS4gMiBvciAzLlxuICogQHJldHVybnMge3N0cmluZ30gYSBzdHJpbmcgY29udGFpbmluZyBnbWwgcmVwcmVzZW50aW5nIHRoZSBpbnB1dCBnZW9tZXRyeVxuICovXG5mdW5jdGlvbiBQb2ludChjb29yZHMsIGdtbElkLCBwYXJhbXM9e30pe1xuICBlbmZvcmNlR21sSWQoZ21sSWQpO1xuICB2YXIge3Nyc05hbWU6c3JzTmFtZSwgc3JzRGltZW5zaW9uOnNyc0RpbWVuc2lvbn0gPSBwYXJhbXM7XG4gIHJldHVybiBgPGdtbDpQb2ludCR7YXR0cnMoe3Nyc05hbWU6c3JzTmFtZSwgJ2dtbDppZCc6IGdtbElkfSl9PmAgK1xuICAgIGA8Z21sOnBvcyR7YXR0cnMoe3Nyc0RpbWVuc2lvbn0pfT5gICtcbiAgICBvcmRlckNvb3Jkcyhjb29yZHMpLmpvaW4oJyAnKSArXG4gICAgJzwvZ21sOnBvcz4nICtcbiAgICAnPC9nbWw6UG9pbnQ+Jztcbn1cbi8qKlxuICogQ29udmVydHMgYW4gaW5wdXQgZ2VvanNvbiBMaW5lU3RyaW5nIGdlb21ldHJ5IHRvIGdtbFxuICogQGZ1bmN0aW9uIFxuICogQHBhcmFtIHtudW1iZXJbXVtdfSBjb29yZHMgdGhlIGNvb3JkaW5hdGVzIG1lbWJlciBvZiB0aGUgZ2VvanNvbiBnZW9tZXRyeVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBnbWxJZCB0aGUgZ21sOmlkXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gcGFyYW1zLnNyc05hbWUgYXMgc3RyaW5nIHNwZWNpZnlpbmcgU1JTXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8dW5kZWZpbmVkfSBwYXJhbXMuc3JzRGltZW5zaW9uIHRoZSBkaW1lbnNpb25hbGl0eSBvZiBlYWNoIGNvb3JkaW5hdGUsIGkuZS4gMiBvciAzLlxuICogQHJldHVybnMge3N0cmluZ30gYSBzdHJpbmcgY29udGFpbmluZyBnbWwgcmVwcmVzZW50aW5nIHRoZSBpbnB1dCBnZW9tZXRyeVxuICovXG5mdW5jdGlvbiBMaW5lU3RyaW5nKGNvb3JkcywgZ21sSWQsIHBhcmFtcz17fSl7XG4gIGVuZm9yY2VHbWxJZChnbWxJZCk7XG4gIHZhciB7c3JzTmFtZTpzcnNOYW1lLCBzcnNEaW1lbnNpb246c3JzRGltZW5zaW9ufSA9IHBhcmFtcztcbiAgcmV0dXJuIGA8Z21sOkxpbmVTdHJpbmcke2F0dHJzKHtzcnNOYW1lLCAnZ21sOmlkJzpnbWxJZH0pfT5gICtcbiAgICBgPGdtbDpwb3NMaXN0JHthdHRycyh7c3JzRGltZW5zaW9ufSl9PmAgK1xuICAgIGNvb3Jkcy5tYXAoKGUpPT5vcmRlckNvb3JkcyhlKS5qb2luKCcgJykpLmpvaW4oJyAnKSArIFxuICAgICc8L2dtbDpwb3NMaXN0PicgK1xuICAgICc8L2dtbDpMaW5lU3RyaW5nPic7XG59XG4vKipcbiAqIENvbnZlcnRzIGFuIGlucHV0IGdlb2pzb24gTGluZWFyUmluZyBtZW1iZXIgb2YgYSBwb2x5Z29uIGdlb21ldHJ5IHRvIGdtbFxuICogQGZ1bmN0aW9uIFxuICogQHBhcmFtIHtudW1iZXJbXVtdfSBjb29yZHMgdGhlIGNvb3JkaW5hdGVzIG1lbWJlciBvZiB0aGUgZ2VvanNvbiBnZW9tZXRyeVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBnbWxJZCB0aGUgZ21sOmlkXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gcGFyYW1zLnNyc05hbWUgYXMgc3RyaW5nIHNwZWNpZnlpbmcgU1JTXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8dW5kZWZpbmVkfSBwYXJhbXMuc3JzRGltZW5zaW9uIHRoZSBkaW1lbnNpb25hbGl0eSBvZiBlYWNoIGNvb3JkaW5hdGUsIGkuZS4gMiBvciAzLlxuICogQHJldHVybnMge3N0cmluZ30gYSBzdHJpbmcgY29udGFpbmluZyBnbWwgcmVwcmVzZW50aW5nIHRoZSBpbnB1dCBnZW9tZXRyeVxuICovXG5mdW5jdGlvbiBMaW5lYXJSaW5nKGNvb3JkcywgZ21sSWQsIHBhcmFtcz17fSl7XG4gIGVuZm9yY2VHbWxJZChnbWxJZCk7XG4gIHZhciB7c3JzTmFtZTpzcnNOYW1lLCBzcnNEaW1lbnNpb246c3JzRGltZW5zaW9ufSA9IHBhcmFtcztcbiAgcmV0dXJuIGA8Z21sOkxpbmVhclJpbmcke2F0dHJzKHsnZ21sOmlkJzpnbWxJZCwgc3JzTmFtZX0pfT5gICtcbiAgICBgPGdtbDpwb3NMaXN0JHthdHRycyh7c3JzRGltZW5zaW9ufSl9PmAgK1xuICAgIGNvb3Jkcy5tYXAoKGUpPT5vcmRlckNvb3JkcyhlKS5qb2luKCcgJykpLmpvaW4oJyAnKSArIFxuICAgICc8L2dtbDpwb3NMaXN0PicgKyBcbiAgICAnPC9nbWw6TGluZWFyUmluZz4nO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhbiBpbnB1dCBnZW9qc29uIFBvbHlnb24gZ2VvbWV0cnkgdG8gZ21sXG4gKiBAZnVuY3Rpb24gXG4gKiBAcGFyYW0ge251bWJlcltdW11bXX0gY29vcmRzIHRoZSBjb29yZGluYXRlcyBtZW1iZXIgb2YgdGhlIGdlb2pzb24gZ2VvbWV0cnlcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gZ21sSWQgdGhlIGdtbDppZFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IHBhcmFtcy5zcnNOYW1lIGFzIHN0cmluZyBzcGVjaWZ5aW5nIFNSU1xuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfHVuZGVmaW5lZH0gcGFyYW1zLnNyc0RpbWVuc2lvbiB0aGUgZGltZW5zaW9uYWxpdHkgb2YgZWFjaCBjb29yZGluYXRlLCBpLmUuIDIgb3IgMy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IGEgc3RyaW5nIGNvbnRhaW5pbmcgZ21sIHJlcHJlc2VudGluZyB0aGUgaW5wdXQgZ2VvbWV0cnlcbiAqL1xuZnVuY3Rpb24gUG9seWdvbihjb29yZHMsIGdtbElkLCBwYXJhbXM9e30pe1xuICBlbmZvcmNlR21sSWQoZ21sSWQpO1xuICAvLyBnZW9tLmNvb3JkaW5hdGVzIGFyZSBhcnJheXMgb2YgTGluZWFyUmluZ3NcbiAgdmFyIHtzcnNOYW1lfSA9IHBhcmFtcztcbiAgbGV0IHBvbHlnb24gPSBgPGdtbDpQb2x5Z29uJHthdHRycyh7c3JzTmFtZSwgJ2dtbDppZCc6Z21sSWR9KX0+YCArXG4gICAgICAgICc8Z21sOmV4dGVyaW9yPicgK1xuICAgICAgICBMaW5lYXJSaW5nKGNvb3Jkc1swXSkgK1xuICAgICAgICAnPC9nbWw6ZXh0ZXJpb3I+JztcbiAgaWYgKGNvb3Jkcy5sZW5ndGggPj0gMil7XG4gICAgZm9yIChsZXQgbGluZWFyUmluZyBvZiBjb29yZHMuc2xpY2UoMSkpe1xuICAgICAgcG9seWdvbiArPSAnPGdtbDppbnRlcmlvcj4nICtcbiAgICAgICAgTGluZWFyUmluZyhsaW5lYXJSaW5nKSArIFxuICAgICAgICAnPC9nbWw6aW50ZXJpb3I+JztcbiAgICB9XG4gIH1cbiAgcG9seWdvbiArPSAnPC9nbWw6UG9seWdvbj4nO1xuICByZXR1cm4gcG9seWdvbjtcbn1cbi8qKlxuICogQ29udmVydHMgYW4gaW5wdXQgZ2VvanNvbiBNdWx0aVBvaW50IGdlb21ldHJ5IHRvIGdtbFxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge251bWJlcltdW119IGNvb3JkcyB0aGUgY29vcmRpbmF0ZXMgbWVtYmVyIG9mIHRoZSBnZW9qc29uIGdlb21ldHJ5XG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGdtbElkIHRoZSBnbWw6aWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgb3B0aW9uYWwgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtzdHJpbmd8dW5kZWZpbmVkfSBwYXJhbXMuc3JzTmFtZSBhcyBzdHJpbmcgc3BlY2lmeWluZyBTUlNcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3x1bmRlZmluZWR9IHBhcmFtcy5zcnNEaW1lbnNpb24gdGhlIGRpbWVuc2lvbmFsaXR5IG9mIGVhY2ggY29vcmRpbmF0ZSwgaS5lLiAyIG9yIDMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhIHN0cmluZyBjb250YWluaW5nIGdtbCByZXByZXNlbnRpbmcgdGhlIGlucHV0IGdlb21ldHJ5XG4gKi9cbmZ1bmN0aW9uIE11bHRpUG9pbnQoY29vcmRzLCBnbWxJZCwgcGFyYW1zPXt9KXtcbiAgZW5mb3JjZUdtbElkKGdtbElkKTtcbiAgcmV0dXJuIG11bHRpKCdNdWx0aVBvaW50JywgJ3BvaW50TWVtYmVycycsIFBvaW50LCBjb29yZHMsIGdtbElkLCBwYXJhbXMpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGFuIGlucHV0IGdlb2pzb24gTXVsdGlMaW5lU3RyaW5nIGdlb21ldHJ5IHRvIGdtbFxuICogQGZ1bmN0aW9uIFxuICogQHBhcmFtIHtudW1iZXJbXVtdW119IGNvb3JkcyB0aGUgY29vcmRpbmF0ZXMgbWVtYmVyIG9mIHRoZSBnZW9qc29uIGdlb21ldHJ5XG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGdtbElkIHRoZSBnbWw6aWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgb3B0aW9uYWwgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtzdHJpbmd8dW5kZWZpbmVkfSBwYXJhbXMuc3JzTmFtZSBhcyBzdHJpbmcgc3BlY2lmeWluZyBTUlNcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3x1bmRlZmluZWR9IHBhcmFtcy5zcnNEaW1lbnNpb24gdGhlIGRpbWVuc2lvbmFsaXR5IG9mIGVhY2ggY29vcmRpbmF0ZSwgaS5lLiAyIG9yIDMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhIHN0cmluZyBjb250YWluaW5nIGdtbCByZXByZXNlbnRpbmcgdGhlIGlucHV0IGdlb21ldHJ5XG4gKi9cbmZ1bmN0aW9uIE11bHRpTGluZVN0cmluZyhjb29yZHMsIGdtbElkLCBwYXJhbXM9e30pe1xuICByZXR1cm4gbXVsdGkoJ011bHRpQ3VydmUnLCAnY3VydmVNZW1iZXJzJywgTGluZVN0cmluZywgY29vcmRzLCBnbWxJZCwgcGFyYW1zKTtcbn1cbi8qKlxuICogQ29udmVydHMgYW4gaW5wdXQgZ2VvanNvbiBNdWx0aVBvbHlnb24gZ2VvbWV0cnkgdG8gZ21sXG4gKiBAZnVuY3Rpb24gXG4gKiBAcGFyYW0ge251bWJlcltdW11bXVtdfSBjb29yZHMgdGhlIGNvb3JkaW5hdGVzIG1lbWJlciBvZiB0aGUgZ2VvanNvbiBnZW9tZXRyeVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBnbWxJZCB0aGUgZ21sOmlkXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gcGFyYW1zLnNyc05hbWUgYXMgc3RyaW5nIHNwZWNpZnlpbmcgU1JTXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8dW5kZWZpbmVkfSBwYXJhbXMuc3JzRGltZW5zaW9uIHRoZSBkaW1lbnNpb25hbGl0eSBvZiBlYWNoIGNvb3JkaW5hdGUsIGkuZS4gMiBvciAzLlxuICogQHJldHVybnMge3N0cmluZ30gYSBzdHJpbmcgY29udGFpbmluZyBnbWwgcmVwcmVzZW50aW5nIHRoZSBpbnB1dCBnZW9tZXRyeVxuICovXG5mdW5jdGlvbiBNdWx0aVBvbHlnb24oY29vcmRzLCBnbWxJZCwgcGFyYW1zPXt9KXtcbiAgcmV0dXJuIG11bHRpKCdNdWx0aVN1cmZhY2UnLCAnc3VyZmFjZU1lbWJlcnMnLCBQb2x5Z29uLCBjb29yZHMsIGdtbElkLCBwYXJhbXMpO1xufVxuLyoqIEBjb25zdCBcbiAqIEBkZXNjIGEgbmFtZXNwYWNlIHRvIHN3aXRjaCBiZXR3ZWVuIGdlb2pzb24taGFuZGxpbmcgZnVuY3Rpb25zIGJ5IGdlb2pzb24udHlwZVxuICovXG5jb25zdCBjb252ZXJ0ZXIgPSB7XG4gIFBvaW50LCBMaW5lU3RyaW5nLCBMaW5lYXJSaW5nLCBQb2x5Z29uLCBNdWx0aVBvaW50LCBNdWx0aUxpbmVTdHJpbmcsXG4gIE11bHRpUG9seWdvbiwgR2VvbWV0cnlDb2xsZWN0aW9uXG59O1xuLyoqXG4gKiBDb252ZXJ0cyBhbiBpbnB1dCBnZW9qc29uIEdlb21ldHJ5Q29sbGVjdGlvbiBnZW9tZXRyeSB0byBnbWxcbiAqIEBmdW5jdGlvbiBcbiAqIEBwYXJhbSB7T2JqZWN0W119IGNvb3JkcyB0aGUgY29vcmRpbmF0ZXMgbWVtYmVyIG9mIHRoZSBnZW9qc29uIGdlb21ldHJ5XG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGdtbElkIHRoZSBnbWw6aWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgb3B0aW9uYWwgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtzdHJpbmd8dW5kZWZpbmVkfSBwYXJhbXMuc3JzTmFtZSBhcyBzdHJpbmcgc3BlY2lmeWluZyBTUlNcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3x1bmRlZmluZWR9IHBhcmFtcy5zcnNEaW1lbnNpb24gdGhlIGRpbWVuc2lvbmFsaXR5IG9mIGVhY2ggY29vcmRpbmF0ZSwgaS5lLiAyIG9yIDMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhIHN0cmluZyBjb250YWluaW5nIGdtbCByZXByZXNlbnRpbmcgdGhlIGlucHV0IGdlb21ldHJ5XG4gKi9cbmZ1bmN0aW9uIEdlb21ldHJ5Q29sbGVjdGlvbihnZW9tcywgZ21sSWQsIHBhcmFtcz17fSl7XG4gIHJldHVybiBtdWx0aSgnTXVsdGlHZW9tZXRyeScsICdnZW9tZXRyeU1lbWJlcnMnLCBjb252ZXJ0ZXIsXG4gICAgICAgICAgICAgICBnZW9tcywgZ21sSWQsIHBhcmFtcyk7XG59XG5cbi8qKlxuICogVHJhbnNsYXRlcyBhbnkgZ2VvanNvbiBnZW9tZXRyeSBpbnRvIEdNTCAzLjIuMVxuICogQHB1YmxpYyBcbiAqIEBmdW5jdGlvbiBcbiAqIEBwYXJhbSB7T2JqZWN0fSBnZW9tIGEgZ2VvanNvbiBnZW9tZXRyeSBvYmplY3RcbiAqIEBwYXJhbSB7QXJyYXl8dW5kZWZpbmVkfSBnZW9tLmNvb3JkaW5hdGVzIHRoZSBuZXN0ZWQgYXJyYXkgb2YgY29vcmRpbmF0ZXMgZm9ybWluZyB0aGUgZ2VvbWV0cnlcbiAqIEBwYXJhbSB7T2JqZWN0W118dW5kZWZpbmVkfSBnZW9tLmdlb21ldHJpZXMgZm9yIGEgR2VvbWV0cnlDb2xsZWN0aW9uIG9ubHksIHRoZSBhcnJheSBvZiBtZW1iZXIgZ2VvbWV0cnkgb2JqZWN0c1xuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBnbWxJZCB0aGUgZ21sOmlkIG9mIHRoZSBnZW9tZXRyeVxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IHBhcmFtcy5zcnNOYW1lIGEgc3RyaW5nIHNwZWNpZnlpbmcgdGhlIFNSU1xuICogQHBhcmFtIHtzdHJpbmd8dW5kZWZpbmVkfSBwYXJhbXMuc3JzRGltZW5zaW9uIHRoZSBkaW1lbnNpb25hbGl0eSBvZiBlYWNoIGNvb3JkaW5hdGUsIGkuZS4gMiBvciAzLlxuICogQHBhcmFtIHtudW1iZXJbXXxzdHJpbmdbXXx1bmRlZmluZWR9IGdtbElkcyAgYW4gYXJyYXkgb2YgbnVtYmVyL3N0cmluZyBnbWw6aWRzIG9mIHRoZSBtZW1iZXIgZ2VvbWV0cmllcyBvZiBhIG11bHRpZ2VvbWV0cnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhIHZhbGlkIGdtbCBzdHJpbmcgZGVzY3JpYmluZyB0aGUgaW5wdXQgZ2VvanNvbiBnZW9tZXRyeVxuICovXG5mdW5jdGlvbiBnZW9tVG9HbWwoZ2VvbSwgZ21sSWQsIHBhcmFtcyl7XG4gIHJldHVybiBjb252ZXJ0ZXJbZ2VvbS50eXBlXShcbiAgICBnZW9tLmNvb3JkaW5hdGVzIHx8IGdlb20uZ2VvbWV0cmllcyxcbiAgICBnbWxJZCxcbiAgICBwYXJhbXNcbiAgKTtcbn1cblxuZXhwb3J0IHtcbiAgZ2VvbVRvR21sLCBjb252ZXJ0ZXIsIFBvaW50LCBMaW5lU3RyaW5nLCBMaW5lYXJSaW5nLFxuICBQb2x5Z29uLCBNdWx0aVBvaW50LCBNdWx0aUxpbmVTdHJpbmcsIE11bHRpUG9seWdvbixcbiAgc2V0Q29vcmRpbmF0ZU9yZGVyXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VvanNvbi10by1nbWwtMy9nZW9tVG9HbWwtMy4yLjEtZXM2LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=