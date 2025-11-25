import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
    await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('first');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
    await expect(page.getByTestId('todo-title')).toBeVisible();
    await expect(page.getByTestId('todo-title')).toContainText('first');
    await expect(page.getByRole('textbox', { name: 'What needs to be done?' })).toBeEmpty();
    await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
    await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('aaaaa');
    await expect(page.getByRole('textbox', { name: 'What needs to be done?' })).toHaveValue('aaaaa');
    await expect(page.locator('body')).toMatchAriaSnapshot(`
    - text: This is just a demo of TodoMVC for testing, not the
    - link "real TodoMVC app.":
      - /url: https://todomvc.com/
    - heading "todos" [level=1]
    - textbox "What needs to be done?"
    - checkbox "❯Mark all as complete"
    - text: ❯Mark all as complete
    - list:
      - listitem:
        - checkbox "Toggle Todo"
        - text: first
    - strong: "1"
    - text: item left
    - list:
      - listitem:
        - link "All":
          - /url: "#/"
      - listitem:
        - link "Active":
          - /url: "#/active"
      - listitem:
        - link "Completed":
          - /url: "#/completed"
    - contentinfo:
      - paragraph: Double-click to edit a todo
      - paragraph:
        - text: Created by
        - link "Remo H. Jansen":
          - /url: http://github.com/remojansen/
      - paragraph:
        - text: Part of
        - link "TodoMVC":
          - /url: http://todomvc.com
    `);
});

test('test2', async ({ page }) => {
    await page.goto('https://qauto.forstudy.space/');
    await page.getByRole('button', { name: 'Guest log in' }).click();
    await page.getByRole('button', { name: 'Add car' }).click();
    await page.getByRole('button', { name: 'Close' }).click();
    await page.getByRole('button', { name: 'Add car' }).click();
    await page.getByLabel('Brand').selectOption('1: 2');
    await page.getByRole('spinbutton', { name: 'Mileage' }).click();
    await page.getByRole('spinbutton', { name: 'Mileage' }).fill('222');
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByLabel('Model').selectOption('6: 7');
    await page.getByText('Mileagekm').click();
    await page.getByRole('spinbutton', { name: 'Mileage' }).click();
    await page.getByLabel('Model').selectOption('7: 8');
    await page.getByLabel('Brand').selectOption('0: 1');
    await page.getByLabel('Brand').selectOption('3: 4');
    await page.getByRole('button', { name: 'Add' }).click();
});