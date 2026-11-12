import { test, expect } from '@playwright/test';

test('login button is visible on Leaftaps login page', async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");

    // Option 1: CSS class locator
    //await expect(page.locator('input.decorativeSubmit')).toBeVisible();

    // Option 2: Role-based locator
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});