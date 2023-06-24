import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { useState } from "react";

type fieldType = 'text' | 'password'

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useField = (type: fieldType) => {
  const [value, setValue] = useState('')

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  const reset = () => {
    setValue('')
  }

  return {
    reset, 
      fields: {
      type,
      value,
      onChange
    },
  }
}