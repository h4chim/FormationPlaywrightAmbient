import { Locator, Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import testData from '../datasets/category.json';

export class Contact {
  contactNameInput: Locator;
  contactEmailForm: Locator;
  contactPhoneForm: Locator;
  contactSujetDropDownForm: Locator;
  contactTextAreaForm: Locator;
  contactCheckBoxForm: Locator;
  contactSubmitForm: Locator;
  contactConfirmMessage: Locator;

    constructor (page: Page )
    {
      this.contactNameInput = page.getByTestId('name-input');
      this.contactEmailForm = page.getByTestId('email-input');
      this.contactPhoneForm = page.getByTestId('phone-input');
      this.contactSujetDropDownForm = page.getByTestId('subject-select');
      this.contactTextAreaForm = page.getByTestId('message-textarea');
      this.contactCheckBoxForm = page.getByTestId('terms-checkbox');
      this.contactSubmitForm = page.getByTestId('contact-submit-button');
      this.contactConfirmMessage = page.getByTestId('contact-notification');
    }

    async fillContactForm(){
      await this.contactNameInput.fill(testData.fishes.Angelfish);
      await this.contactEmailForm.fill(faker.internet.email());
      await this.contactPhoneForm.fill(faker.phone.number());
      await this.contactSujetDropDownForm.selectOption('feedback');
      await this.contactTextAreaForm.fill(faker.lorem.paragraph());
      await this.contactCheckBoxForm.check();
      await this.contactSubmitForm.click();
      await expect(this.contactConfirmMessage).toContainText('Message sent successfully! We will get back to you soon.');  
    }


}