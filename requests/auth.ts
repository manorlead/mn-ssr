import { AuthRes, UserPofile } from '../types/auth.types'
import { client } from './client'
import { SignupForm } from './types/auth'

export const signIn = (payload: { email: string; password: string }) =>
  client.post<AuthRes>('/auth/signin', payload).then((res) => res.data)

export const signOut = () =>
  client.post<{ status: string }>('/auth/signout').then((res) => res.data)

export const getUserProfile = () =>
  client.get<{ userProfile: UserPofile }>('/profile').then((res) => res.data)

export const signUp = (form: SignupForm) =>
  client.post('/auth/signup', form).then((res) => res.data)
