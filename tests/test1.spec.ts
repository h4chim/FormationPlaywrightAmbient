import { test, expect } from '@playwright/test';
import {Contact} from '../pages/contact'

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('test formulaire 1', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('link', { name: 'Elements' }).click();
  await page.getByRole('link', { name: 'Text Box' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Hachim CA');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('TEST123@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Paris');
  await page.locator('#permanentAddress').fill('Le plessis');
  await page.getByRole('button', { name: 'Submit' }).click();
});

test('test upload', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('link', { name: 'Elements' }).click();
  await page.getByRole('link', { name: 'Upload and Download' }).click();
  await page.locator('#uploadFile').click();
  await page.setInputFiles('#uploadFile', 'C:\\Users\\hchakira\\test1.txt');
  await expect(page.locator('#uploadedFilePath')).toContainText('test1.txt');
});

test('test formulaire 2', async ({ page }) => {
  await page.goto('https://test-automation-demo-reva.bolt.host/');
  await page.getByTestId('cta-contact').click();
  await page.getByTestId('name-input').fill('Hachim CA');
  await page.getByTestId('email-input').fill('testhac01@gmail.com');
  await page.getByTestId('phone-input').fill('+33666212121');
  await page.getByTestId('subject-select').selectOption('feedback');
  await page.getByTestId('message-textarea').fill('Un message de test XYWZ');
  await page.getByTestId('terms-checkbox').check();
  await page.getByTestId('contact-submit-button').click();
  await expect(page.getByTestId('contact-notification')).toContainText('Message sent successfully! We will get back to you soon.');
});

test.only('test formulaire 3 - with POM', async ({ page }) => {
  const contactP = new Contact(page);
  await page.goto('https://test-automation-demo-reva.bolt.host/');
  await page.getByTestId('cta-contact').click();
  await contactP.fillContactForm();

  
});
