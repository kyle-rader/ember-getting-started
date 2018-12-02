import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | rental-listing', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.rental = {
      image: 'fake.png',
      title: 'A House',
      owner: 'some guy',
      type: 'single family',
      city: 'Faketown',
      bedrooms: 3,
    };
  });

  test('should displays rental details', async function(assert) {
    await render(hbs`{{rental-listing rental=rental}}`);
    assert.equal(this.element.querySelector('.listing h3').textContent.trim(), 'A House', 'Has title');
    assert.equal(this.element.querySelector('.listing .owner').textContent.trim(), 'Owner: some guy', 'Has owner');
  });

  test('should toggle wide class on click', async function(assert) {
    await render(hbs`{{rental-listing rental=rental}}`);
    assert.notOk(this.element.querySelector('.image.wide'), 'Initially rendered small');

    // First Click - go large
    await click('a.image');
    assert.ok(this.element.querySelector('.image.wide'), 'rendered wide after click');

    // Second Click - go small
    await click('a.image');
    assert.notOk(this.element.querySelector('.image.wide'), 'rendered small again');
  });
});
