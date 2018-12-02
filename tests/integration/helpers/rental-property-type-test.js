import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | rental-property-type', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  const communityTypes = ['Apartment', 'Townhouse', 'Condo'];

  communityTypes.forEach(category => {
    test(`${category} - renders as Community type property`, async function(assert) {
      this.set('category', category);

      await render(hbs`{{rental-property-type category}}`);

      assert.ok(this.element.textContent.trim().includes('Community'), ` ${category} Listed as Community type property`);
    });
  });

  test('Estate is a standalone property type', async function(assert) {
    this.set('category', 'Estate');
    await render(hbs`{{rental-property-type category}}`);
    assert.ok(this.element.textContent.includes('Standalone'), 'Estate is a standalone property');
  });
});
