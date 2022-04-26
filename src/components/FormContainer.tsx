import React, { FC } from 'react';
import { useAppSelector, useInput } from '../hooks/customHooks';
import Form from './Form';

interface FormContainerType {
  disabled?: boolean;
  setEdit: (edit: boolean) => void;
}
const FormContainer: FC<FormContainerType> = ({ setEdit, disabled }) => {
  const userData = useAppSelector(state => state.users.userProfile);
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
    alert('Данные с формы отправлены в консоль');
    console.log(dataForm);
  };

  //Валидация и управление input
  const name = useInput(userData!.name, { isEmpty: true });
  const userName = useInput(userData!.username, { isEmpty: true });
  const eMail = useInput(userData!.email, { isEmpty: true, isEmail: true });
  const street = useInput(userData!.address.street, { isEmpty: true });
  const city = useInput(userData!.address.city, { isEmpty: true });
  const zipCode = useInput(userData!.address.zipcode, { isEmpty: true, minLength: 4 });
  const phone = useInput(userData!.phone, { isEmpty: true, isPhone: true });
  const webSite = useInput(userData!.website, { isEmpty: true, isWebSite: true });
  const comment = useInput('', {});

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
      comment={comment}
    />
  );
};

export default FormContainer;
