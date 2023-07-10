import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { useState } from "react";
import { initializeUsers } from "../reducers/usersReducer";
import { initUser } from "../reducers/userReducer";
import { initializeFriends } from "../reducers/friendReducer";
import { initializePublicationsOfFriends } from "../reducers/publicationReducer";

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

export const useInitialization = () => {
  const dispatch: AppDispatch = useDispatch()

  return ()  => {
    dispatch(initializeUsers())
    dispatch(initUser())
  }
}

export const useInitializeFriendsAndPublications = () => {
  const dispatch: AppDispatch = useDispatch()

  return () => {
    dispatch(initializeFriends())
    dispatch(initializePublicationsOfFriends)
  }
}
