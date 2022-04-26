import { useEffect, useState } from 'react';

export interface ValidationType {
  isEmpty: boolean;
  minLengthError: boolean;
  maxLengthError: boolean;
  emailError: boolean;
  phoneError: boolean;
  webSiteError: boolean;
  inputValid: boolean;
}
export const userValidation = (value: any, validations: any): ValidationType => {
  const [inputValid, setInputValid] = useState(false);
  const [isEmpty, setEmpty] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [webSiteError, setWebSiteError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case 'maxLength':
          value.length < validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
          break;
        case 'isEmail': {
          const regEx =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          regEx.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
          break;
        }
        case 'isPhone': {
          const regEx = /\d+/;
          const result = regEx.test(value);
          regEx.test(value) ? setPhoneError(false) : setPhoneError(true);
          console.log(result);

          break;
        }
        case 'isWebSite': {
          const regEx = /^(?:(ftp|http|https):\/\/)?(?:[\w-]+\.)+[a-z]{3,6}$/;
          regEx.test(String(value).toLowerCase()) ? setWebSiteError(false) : setWebSiteError(true);
          break;
        }
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError || maxLengthError || emailError || phoneError || webSiteError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, maxLengthError, emailError, phoneError, webSiteError]);

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    phoneError,
    webSiteError,
    inputValid,
  };
};
