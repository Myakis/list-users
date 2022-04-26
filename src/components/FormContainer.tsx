import React, { FC } from 'react';
import { useInput } from '../hooks/customHooks';
import Form from './Form';

interface FormContainerType {
  disabled?: boolean;
  setEdit: (edit: boolean) => void;
}
const FormContainer: FC<FormContainerType> = ({ setEdit, disabled }) => {
  const name = useInput('Leanne Graham', { isEmpty: true });
  const userName = useInput('Leanne Graham', { isEmpty: true });
  const eMail = useInput('Sincere@april.biz', { isEmpty: true, isEmail: true });
  const street = useInput('Kulas Light', { isEmpty: true });
  const city = useInput('Gwenborough', { isEmpty: true });
  const zipCode = useInput('92998-3874', { isEmpty: true, minLength: 6 });
  const phone = useInput('010-692-6593 09125', { isEmpty: true, isPhone: true });
  const webSite = useInput('anastasia.net', { isEmpty: true, isWebSite: true });
  const comment = useInput('', {});

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEdit(false);
    const dataForm = {
      name: name.value,
      userName: userName.value,
      eMail: eMail.value,
      street: street.value,
      city: city.value,
      zipCode: zipCode.value,
      phone: phone.value,
      webSite: webSite.value,
      comment: comment.value,
    };
    console.log(dataForm);
  };

  const inputValid =
    name.inputValid &&
    userName.inputValid &&
    eMail.inputValid &&
    street.inputValid &&
    city.inputValid &&
    zipCode.inputValid &&
    phone.inputValid &&
    webSite.inputValid;

  return (
    <Form
      setEdit={setEdit}
      inputValid={inputValid}
      onSubmit={onSubmit}
      disabled={disabled}
      name={name}
      userName={userName}
      eMail={eMail}
      street={street}
      city={city}
      zipCode={zipCode}
      phone={phone}
      webSite={webSite}
      comment={comment}></Form>
  );
};

export default FormContainer;
