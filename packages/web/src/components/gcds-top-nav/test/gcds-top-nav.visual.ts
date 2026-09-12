import { expect } from '@playwright/test';
import { test, testMobile } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-top-nav.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-top-nav', () => {
  test('default', async ({ page }) => {
    // Screenshot just the component, not the surrounding preview chrome
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('alignment-end', async ({ page }) => {
    await expect(
      page.locator('[data-variant="alignment-end"] .preview-component'),
    ).toHaveScreenshot('alignment-end.png');
  });

  testMobile('mobile - closed', async ({ page }) => {
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('mobile-closed.png');
  });

  testMobile('mobile - open', async ({ page }) => {
    const element = page.locator('[data-variant="default"] .preview-component');
    await element.locator('.gcds-trigger--expandable').click();

    await expect(element).toHaveScreenshot('mobile-open.png');
  });
});
