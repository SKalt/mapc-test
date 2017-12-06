/*global Feature, Scenario*/

Feature('Fill form');

Scenario('Selecting an answer', (I) => {
  I.amOnPage('poll');
  I.see('form > input[name="question1"]');
  I.click('#yes');
  I.checkFormValueIs('yes');
});
