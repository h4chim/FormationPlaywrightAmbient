import {test as base} from '@playwright/test';
import {Contact} from '../pages/contact';


type Fixtures = {
    contactForm: Contact;
};

const test = base.extend<Fixtures>({
    contactForm: async ({page}, use) => {
        await use(new Contact(page));
    }
})

const expect = base.expect;
export{test,expect};
