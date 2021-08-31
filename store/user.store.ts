import { message, notification } from 'antd'
import { action, observable } from 'mobx'
import { getUserProfile, signIn, signOut } from '../requests/auth'
import { setToken } from '../requests/client'
import { UserPofile } from '../types/auth.types'

class UserStore {
  @observable user$: UserPofile | null = null

  @observable loginInLoading$ = false
  @action login$ = async (payload: { email: string; password: string }) => {
    this.loginInLoading$ = true
    const res = await signIn(payload).finally(() => {
      this.loginInLoading$ = false
    })
    if (res) {
      setToken(res.cognitoJWT.access_token)
      this.user$ = res.userProfile
    }
  }

  @observable loginPopupState$ = false
  @action setLoginPopupState$ = (state: boolean) => {
    this.loginPopupState$ = state
  }

  @observable signupPopupState$ = false
  @action setSignupPopupState$ = (state: boolean) => {
    this.signupPopupState$ = state
  }

  @observable verificationPopupState$ = false
  @action setVerificationPopupState$ = (state: boolean) => {
    this.verificationPopupState$ = state
  }

  @action logout$ = () => {
    this.user$ = null
    setToken('')
  }

  @action restoreUser$ = () => {
    getUserProfile().then((res) => {
      this.user$ = res.userProfile
    })
  }
}

export default UserStore
