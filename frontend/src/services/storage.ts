import { UserOutputAttributes } from '../types/users'

const KEY = 'appUser'

// the user is set to what is returned by the loginService which is a User object
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