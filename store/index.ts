import { useStaticRendering } from 'mobx-react-lite'
import { createContext, useContext } from 'react'
import SettingsStore from './settings.store'
import UserStore from './user.store'

const isServer = typeof window === 'undefined'
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer)

export const Stores = {
  UserStore: new UserStore(),
  SettingsStore: new SettingsStore()
}

export const StoresContext = createContext(Stores)
export const useStores = () => useContext(StoresContext)
