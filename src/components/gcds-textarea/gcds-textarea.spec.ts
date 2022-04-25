import { newSpecPage } from '@stencil/core/testing';
import { GcdsTextarea} from './gcds-textarea';

describe('gcds-textarea', () => {
  it('renders with minimum required properties', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-renders" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-renders">
        <fieldset>
          <gcds-label label-for="textarea-renders" label="Label" lang="en"></gcds-label>
          <textarea
            id="textarea-renders"
            name="textarea-renders"
            aria-labelledby="label-for-textarea-renders"
            aria-describedby="  "
            aria-invalid="false"
            rows="5"
          ></textarea>
        </fieldset>
      </gcds-textarea>
    `);
  });

  /**
    * Disabled test
    */
  it('renders disabled', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-disabled" disabled />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-disabled" disabled="">
        <fieldset class="disabled">
          <gcds-label label-for="textarea-disabled" label="Label" lang="en"></gcds-label>
          <textarea
            id="textarea-disabled"
            name="textarea-disabled"
            aria-labelledby="label-for-textarea-disabled"
            aria-describedby="  "
            aria-invalid="false"
            rows="5"
            disabled=""
          ></textarea>
        </fieldset>
      </gcds-textarea>
    `);
  });

  /**
    * Error message test
    */
  it('renders error message', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-with-error" error-message="This is an error message." />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-with-error" error-message="This is an error message.">
        <fieldset class="error">
          <gcds-label label-for="textarea-with-error" label="Label" lang="en"></gcds-label>
          <gcds-error-message message-id="textarea-with-error" message="This is an error message."></gcds-error-message>
          <textarea
            id="textarea-with-error"
            class="error"
            name="textarea-with-error"
            aria-labelledby="label-for-textarea-with-error"
            aria-describedby=" error-message-textarea-with-error "
            aria-invalid="true"
            rows="5"
          ></textarea>
        </fieldset>
      </gcds-textarea>
    `);
  });

  /**
    * Hide label
    */
  it('renders with label hidden', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-label-hidden" hide-label />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-label-hidden" hide-label>
        <fieldset>
          <gcds-label label-for="textarea-label-hidden" label="Label" hide-label lang="en"></gcds-label>
          <textarea
            id="textarea-label-hidden"
            name="textarea-label-hidden"
            aria-labelledby="label-for-textarea-label-hidden"
            aria-describedby="  "
            aria-invalid="false"
            rows="5"
          ></textarea>
        </fieldset>
      </gcds-textarea>
    `);
  });

  /**
    * Label test
    */
  it('renders label', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-renders-label" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-renders-label">
        <fieldset>
          <gcds-label label-for="textarea-renders-label" label="Label" lang="en"></gcds-label>
          <textarea
            id="textarea-renders-label"
            name="textarea-renders-label"
            aria-labelledby="label-for-textarea-renders-label"
            aria-describedby="  "
            aria-invalid="false"
            rows="5"
          ></textarea>
        </fieldset>
      </gcds-textarea>
    `);
  });

  /**
    * Required test
    */
  it('renders required', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-required" required />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-required" required>
        <fieldset>
          <gcds-label label-for="textarea-required" label="Label" required lang="en"></gcds-label>
          <textarea
            id="textarea-required"
            name="textarea-required"
            aria-labelledby="label-for-textarea-required"
            aria-describedby="  "
            aria-invalid="false"
            rows="5"
            required
          ></textarea>
        </fieldset>
      </gcds-textarea>
    `);
  });

  /**
    * Textarea character count
    */
  it('renders textarea character count with no value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="character-count-no-value" textarea-character-count="10" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="character-count-no-value" textarea-character-count="10">
        <fieldset>
          <gcds-label label-for="character-count-no-value" label="Label" lang="en"></gcds-label>
          <textarea
            id="character-count-no-value"
            name="character-count-no-value"
            aria-labelledby="label-for-character-count-no-value"
            aria-describedby="  count-character-count-no-value"
            aria-invalid="false"
            rows="5"
            maxlength="10"
          ></textarea>
          <p id="count-character-count-no-value" aria-live="polite">10 characters allowed</p>
        </fieldset>
      </gcds-textarea>
    `);
  });

  it('renders textarea character count with value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="character-count-value" value="Value Test" textarea-character-count="22" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="character-count-value" value="Value Test" textarea-character-count="22">
        <fieldset>
          <gcds-label label-for="character-count-value" label="Label" lang="en"></gcds-label>
          <textarea
            id="character-count-value"
            name="character-count-value"
            aria-labelledby="label-for-character-count-value"
            aria-describedby="  count-character-count-value"
            aria-invalid="false"
            rows="5"
            maxlength="22"
          >Value Test</textarea>
          <p id="count-character-count-value" aria-live="polite">12 characters left</p>
        </fieldset>
      </gcds-textarea>
    `);
  });

  /**
    * Textarea cols test
    */
  it('renders textarea cols', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-cols" cols="10" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-cols" cols="10">
        <fieldset>
          <gcds-label label-for="textarea-cols" label="Label" lang="en"></gcds-label>
          <textarea
            id="textarea-cols"
            name="textarea-cols"
            aria-labelledby="label-for-textarea-cols"
            aria-describedby="  "
            aria-invalid="false"
            cols="10"
            rows="5"
          ></textarea>
        </fieldset>
      </gcds-textarea>
    `);
  });

  /**
    * Textarea hint test
    */
  it('renders textarea hint', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-with-hint" hint="This is a textarea hint." />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-with-hint" hint="This is a textarea hint.">
        <fieldset>
          <gcds-label label-for="textarea-with-hint" label="Label" lang="en"></gcds-label>
          <gcds-hint hint="This is a textarea hint." hint-id="textarea-with-hint"></gcds-hint>
          <textarea
            id="textarea-with-hint"
            name="textarea-with-hint"
            aria-labelledby="label-for-textarea-with-hint"
            aria-describedby="hint-textarea-with-hint  "
            aria-invalid="false"
            rows="5"
          ></textarea>
        </fieldset>
      </gcds-textarea>
    `);
  });

  /**
    * Textarea ID test
    */
  it('renders textarea id', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-renders-id" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-renders-id">
        <fieldset>
          <gcds-label label-for="textarea-renders-id" label="Label" lang="en"></gcds-label>
          <textarea
            id="textarea-renders-id"
            name="textarea-renders-id"
            aria-labelledby="label-for-textarea-renders-id"
            aria-describedby="  "
            aria-invalid="false"
            rows="5"
          ></textarea>
        </fieldset>
      </gcds-textarea>
    `);
  });

  /**
    * Textarea rows test
    */
  it('renders textarea rows', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-rows" rows="2" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-rows" rows="2">
        <fieldset>
          <gcds-label label-for="textarea-rows" label="Label" lang="en"></gcds-label>
          <textarea
            id="textarea-rows"
            name="textarea-rows"
            aria-labelledby="label-for-textarea-rows"
            aria-describedby="  "
            aria-invalid="false"
            rows="2"
          ></textarea>
        </fieldset>
      </gcds-textarea>
    `);
  });

  /**
    * Textarea value test
    */
  it('renders textarea value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-with-value" value="Textarea value" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-with-value" value="Textarea value">
        <fieldset>
          <gcds-label label-for="textarea-with-value" label="Label" lang="en"></gcds-label>
          <textarea
            id="textarea-with-value"
            name="textarea-with-value"
            aria-labelledby="label-for-textarea-with-value"
            aria-describedby="  "
            aria-invalid="false"
            rows="5"
          >Textarea value</textarea>
        </fieldset>
      </gcds-textarea>
    `);
  });
});