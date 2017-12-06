/*global Feature, Scenario*/
Feature('Locate self');

Scenario('Selecting a location by clicking', (I) => {
  I.amOnPage('poll');
  I.seeElement('#map');
  I.moveCursorTo('#map', 5, 5);
  I.click('#map');
  I.checkCoordinatesAre([0,0]); // TODO;
});

Scenario('Geocoding a location by searching', (I)=>{
  I.amOnPage('poll');
  I.seeElement('.geocoder');
  I.click('.geocoder');
  I.fillForm('.geocoder', '99 sand hill rd, Shutesbury, MA');
  I.pressKey('enter');
  I.checkCoordinatesAre([0,0]); // TODO
});
