import { zfd } from "zod-form-data";

export const signupSchema = zfd.formData({
    firstName: zfd.text(),
    lastName: zfd.text(),
    phone: zfd.text(),
    birthdate: zfd.text(),
    residenceStreet: zfd.text(),
    residenceStreetNumber: zfd.text(),
    residenceZipCode: zfd.text(),
    residenceCity: zfd.text(),
    residenceCountry: zfd.text(),
    billingStreet: zfd.text(),
    billingStreetNumber: zfd.text(),
    billingZipCode: zfd.text(),
    billingCity: zfd.text(),
    billingCountry: zfd.text(),
});