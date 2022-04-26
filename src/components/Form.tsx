import React, { FC } from 'react';
import { useInput } from '../hooks/customHooks';
import { FormUI, Input, Label, Textarea } from './UI/formComponents';
import { Box, Button } from './UI/mainComponents';

interface FormType {
  disabled?: boolean;
  setEdit: (edit: boolean) => void;
}

const Form: FC<FormType> = ({ disabled, setEdit }) => {
  const name = useInput('Иван');
  const userName = useInput('Ivan');
  const eMail = useInput('dgsdghsdgs@gdsgd.rs');
  const street = useInput('sss');
  const city = useInput('sss');
  const zipCode = useInput('');
  const phone = useInput('');
  const webSite = useInput('');
  const comment = useInput('ffff');

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
    const blurHundler = (e: React.FocusEventHandler<HTMLInputElement>) => {};
    console.log(dataForm);
  };

  return (
    <div>
      <FormUI>
        <Box className='Form__wrapper'>
          <Label>
            <span>Name</span>
            <Input disabled={disabled} type='text' {...name} />
          </Label>
          <Label>
            <span>User name</span>
            <Input disabled={disabled} type='text' {...userName} />
          </Label>
          <Label>
            <span>E-mail</span>
            <Input disabled={disabled} type='text' {...eMail} />
          </Label>
          <Label>
            <span>Street</span>
            <Input disabled={disabled} type='text' {...street} />
          </Label>
          <Label>
            <span>City</span>
            <Input disabled={disabled} type='text' {...city} />
          </Label>
          <Label>
            <span>Zip code</span>
            <Input disabled={disabled} type='text' {...zipCode} />
          </Label>
          <Label>
            <span>Phone</span>
            <Input disabled={disabled} type='text' {...phone} />
          </Label>
          <Label>
            <span>Website</span>
            <Input disabled={disabled} type='text' {...webSite} />
          </Label>
          <Label>
            <span>Comment</span>
            <Textarea disabled={disabled} type='text' {...comment} />
          </Label>
        </Box>
        <Box className='form__button'>
          <Button disabled={disabled} variant={'submit'} onClick={onSubmit}>
            Отправить
          </Button>
        </Box>
      </FormUI>
    </div>
  );
};

export default Form;
