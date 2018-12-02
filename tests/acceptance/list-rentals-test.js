import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import {
  click,
  currentURL,
  visit
} from '@ember/test-helpers';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('should show rentals as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });

  test('should link to information about the company.', async function (assert) {
    await visit('/');
    await click('.menu-about');
    assert.equal(currentURL(), '/about', 'About menu button should navigate to about page');
  });

  test('should link to contact information.', async function (assert) {
    await visit('/');
    await click('.menu-contact', 'Contact menu button should navigate to contact page');
  });

  test('should list available rentals.', async function (assert) {
    await visit('/');
  });

  test('should filter the list of rentals by city.', async function (assert) {
    await visit('/');
  });

  test('should show details for a selected rental', async function (assert) {
    await visit('/');
  });
});