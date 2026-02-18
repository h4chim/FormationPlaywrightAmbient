import {test, expect} from '../pages/fixture';


test('test with POM & Fixture', {tag: ['@Fixture']}, async ({ page, contactForm }) => {
  await page.goto(process.env.URL!);
  await page.getByTestId('cta-contact').click();
  await contactForm.fillContactForm();
});
