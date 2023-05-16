import { zfd } from "zod-form-data";

export const signupSchema = zfd.formData({
    firstName: zfd.text(),
    lastName: zfd.text(),
    phone: zfd.text(),
    birthdate: zfd.text(),

    // billingStreet: zfd.text(),
    // billingStreetNumber: zfd.text(),
    // billingZipCode: zfd.text(),
    // billingCity: zfd.text(),
    // billingCountry: zfd..text(),
});

export const addressSchema = zfd.formData({
    street: zfd.text(),
    streetNumber: zfd.text(),
    zipCode: zfd.text(),
    city: zfd.text(),
    country: zfd.text()
});