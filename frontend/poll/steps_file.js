/* global actor */
'use strict';
// in this file you can append custom step methods to 'I' object
const assert = require('chai').assert;
// change these functions as the code changes!
module.exports = function() {
  return actor({
    checkFormValueIs(expected){
      this.grabValueFromForm('[name="question1"]').then(
        value => assert.equal(
          value, expected, `value not updated to ${expected}`
        )
      );
    },
    checkCoordinatesAre(expected){
      // this uses an eval statement
      this.executeScript(()=>coordinates).then(
        coordinates => assert.deepEqual(
          coordinates, expected, `${coordinates} are not ${expected}`
        )
      );
    }

    // this.clickMapAtCoordinates()
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
};
