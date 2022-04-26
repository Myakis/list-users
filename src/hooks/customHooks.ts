import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';

import { AppDispatch, RootState } from '../redux/store';
import { userValidation } from './useValidation';

//Типизированные хуки useDispatch и useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface useInputType {
  value: string;
  isDirty: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEventHandler<HTMLInputElement>) => void;
  valid: ValidityState;
}

//Хук для полей управляемых компонент
export const useInput = (InitialValue: string | undefined, validations: any) => {
  const [value, setValue] = useState(InitialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = userValidation(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = (e: React.FocusEventHandler<HTMLInputElement>) => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};
