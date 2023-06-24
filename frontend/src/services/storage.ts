import { UserOutputAttributes } from '../types/users'

const KEY = 'appUser'

// Probably instad of having saveUser etc. you could have only
// save and load methods that could be used for any storage saving
// then the KEY would only be a string
// and the possible values that could be saved would be of type
// userOutputAttributes or smth else
// On the other hand, this creates an issue as you can basically
// set user to another key if you have a wrong combination of the key, output pair
// Hence, the types should be declared as a combination of object type and key

const saveUser = (user: UserOutputAttributes) => {
  localStorage.setItem(KEY, JSON.stringify(user))
}

const loadUser = (): UserOutputAttributes | null => {
  const storedUser = window.localStorage.getItem(KEY)
  return storedUser ? JSON.parse(storedUser) : null
}

const removeUser = () => {
  localStorage.removeItem(KEY)
}

const storageService = {
  saveUser,
  loadUser,
  removeUser
}

export default storageService