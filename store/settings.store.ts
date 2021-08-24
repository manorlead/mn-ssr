import { action, observable } from 'mobx'

class SettingsStore {
  @observable mobileMenuOpen$ = false

  @action setMobileMenuState$ = (state: boolean) => {
    this.mobileMenuOpen$ = state
  }

  @observable accessBlockOpen$ = false

  @action setAccessBlockState$ = (state: boolean) => {
    this.accessBlockOpen$ = state
  }
}

export default SettingsStore
