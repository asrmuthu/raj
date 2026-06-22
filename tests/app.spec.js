import { test, expect } from '@playwright/test';

test('verify heading text', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const heading = page.locator('h1');

  await expect(heading).toHaveText('Hello, World!');
});