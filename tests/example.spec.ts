import { test, expect } from '@playwright/test';

test('Test add employee', async ({ page }) => {
    await page.goto('/');
    const addBtn = await page.getByTestId('addBtn');
    await addBtn.click();

    await expect(page).toHaveURL('/employees/add');
    const employeeForm = await page.getByTestId('employee-form');
    await employeeForm.isVisible();

    const nameInput = await page.getByTestId('nameInput');
    await nameInput.fill('Test');
    await expect(nameInput).toHaveValue('Test');

    const phoneInput = await page.getByTestId('phoneInput');
    await phoneInput.fill('9999999999');
    await expect(phoneInput).toHaveValue('+7 (999) 999-9999');

    const birthdayInput = await page.getByTestId('birthdayInput');
    await birthdayInput.fill('17122001');
    await expect(birthdayInput).toHaveValue('17.12.2001');

    const roleSelect = await page.getByTestId('roleSelect');
    await roleSelect.fill('cook');
    await expect(roleSelect).toHaveValue('cook');

    const archiveCheckbox = await page.getByTestId('archiveCheckbox');
    await expect(archiveCheckbox).toBeChecked({ checked: false });
    await archiveCheckbox.setChecked(true);
    await expect(archiveCheckbox).toBeChecked({ checked: true });

    const createBtn = await page.getByTestId('createBtn');
    await createBtn.click();
    await expect(nameInput).toHaveValue('');
    await expect(phoneInput).toHaveValue('');
    await expect(birthdayInput).toHaveValue('');
});
