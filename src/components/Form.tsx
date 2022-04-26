import React, { FC } from 'react';
import { FormType } from '../types/componentsType';
import { FormUI, Input, Label, Textarea } from './UI/formComponents';
import { Box, Button } from './UI/mainComponents';

const Form: FC<FormType> = ({
  disabled,
  onSubmit,
  name,
  userName,
  eMail,
  street,
  city,
  zipCode,
  phone,
  webSite,
  comment,
  inputValid,
}) => {
  return (
    <div>
      <FormUI>
        <Box className='Form__wrapper'>
          <Label>
            <span>Name</span>
            <Input error={name.isDirty && name.isEmpty} disabled={disabled} type='text' {...name} />
          </Label>
          <Label>
            <span>User name</span>
            <Input
              error={userName.isDirty && userName.isEmpty}
              disabled={disabled}
              type='text'
              {...userName}
            />
          </Label>
          <Label>
            <span>E-mail</span>
            <Input
              error={(eMail.isDirty && eMail.isEmpty) || (eMail.isDirty && eMail.emailError)}
              disabled={disabled}
              type='text'
              {...eMail}
            />
          </Label>
          <Label>
            <span>Street</span>
            <Input
              error={street.isDirty && street.isEmpty}
              disabled={disabled}
              type='text'
              {...street}
            />
          </Label>
          <Label>
            <span>City</span>
            <Input error={city.isDirty && city.isEmpty} disabled={disabled} type='text' {...city} />
          </Label>
          <Label>
            <span>Zip code</span>
            <Input
              error={
                (zipCode.isDirty && zipCode.isEmpty) || (zipCode.isDirty && zipCode.minLengthError)
              }
              disabled={disabled}
              type='text'
              {...zipCode}
            />
          </Label>
          <Label>
            <span>Phone</span>
            <Input
              error={(phone.isDirty && phone.isEmpty) || (phone.isDirty && phone.phoneError)}
              disabled={disabled}
              type='text'
              {...phone}
            />
          </Label>
          <Label>
            <span>Website</span>
            <Input
              error={
                (webSite.isDirty && webSite.isEmpty) || (webSite.isDirty && webSite.webSiteError)
              }
              disabled={disabled}
              type='text'
              {...webSite}
            />
          </Label>
          <Label>
            <span>Comment</span>
            <Textarea disabled={disabled} type='text' {...comment} />
          </Label>
        </Box>
        <Box className='form__button'>
          <Button disabled={!inputValid || disabled} variant={'submit'} onClick={onSubmit}>
            Отправить
          </Button>
        </Box>
      </FormUI>
    </div>
  );
};

export default Form;
