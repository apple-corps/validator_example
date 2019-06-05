require("@babel/register");

import { parsePhoneNumberFromString } from 'libphonenumber-js'

export function validation(nationalNumber, iso2) {
      const phoneNumber = parsePhoneNumberFromString(nationalNumber, iso2);
      return phoneNumber.isValid() && phoneNumber.country === iso2
    }
