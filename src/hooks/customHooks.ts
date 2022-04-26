import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';

import { AppDispatch, RootState } from '../redux/store';

//Типизированные хуки useDispatch и useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//Хук для полей упровляемых компонент
export const useInput = (InitialValue: string) => {
  const [value, setValue] = useState(InitialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};
