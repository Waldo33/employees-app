import { test } from '@playwright/test';

test('create employee', async ({ page }) => {
    await page.goto('/');

    await page.getByTestId('addBtn').click();

    const nameInput = await page.getByTestId('nameInput');
    await nameInput.click();
    await nameInput.fill('Тест');

    const phoneInput = await page.getByTestId('phoneInput');
    await phoneInput.click();
    await phoneInput.fill('+7 (999) 999-99999');

    const birthdayInput = await page.getByTestId('birthdayInput');
    await birthdayInput.click();
    await birthdayInput.fill('12.05.2002');

    await page.getByTestId('roleSelect').click();
    await page.getByRole('option', { name: 'Официант' }).click();

    await page.getByTestId('archiveFlag').check();

    await page.getByTestId('createBtn').click();
});

test('edit employee', async ({ page }) => {
    await page.goto('/employees/1');

    await page.getByRole('button', { name: 'Редактировать' }).click();

    await page.getByText('В архиве').click();

    await page.getByRole('button', { name: 'Должность' }).click();
    await page.getByRole('option', { name: 'Официант' }).click();

    const birthdayInput = await page.getByTestId('birthdayInput');
    await birthdayInput.click();
    await birthdayInput.fill('12.02.1981');

    const phoneInput = await page.getByTestId('phoneInput');
    await phoneInput.click();
    await phoneInput.fill('+7 (883) 508-3261');

    await page.getByRole('button', { name: 'Сохранить' }).click();
});

test('search employee', async ({ page }) => {
    await page.goto('/');

    const search = await page.getByTestId('Search');
    await search.click();
    await search.fill('тест');

    await page.locator('form').getByTestId('openModal').click();

    await page.getByTestId('sortType').click();
    await page.getByRole('option', { name: 'по дню рождения' }).click();

    await page.getByTestId('sortOrder').click();
    await page.getByRole('option', { name: 'по возрастанию' }).click();

    await page.getByTestId('roleSelect').click();
    await page.getByRole('option', { name: 'Повар' }).click();

    await page.getByTestId('archiveFlag').check();

    await page.getByRole('button', { name: 'Сбросить фильтры' }).click();
});
