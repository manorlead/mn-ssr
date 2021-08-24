import { message, notification } from 'antd'
import { action, observable } from 'mobx'
import { getUserProfile, signIn, signOut } from '../requests/auth'
import { setToken } from '../requests/client'
import { UserPofile } from '../types/auth.types'

class UserStore {
  @observable user$: UserPofile | null = null

  @action login$ = (payload: { email: string; password: string }) => {
    signIn(payload).then((res) => {
      if (res) {
        if (res.userProfile.admin) {
          setToken(res.cognitoJWT.access_token)
          this.user$ = res.userProfile
        } else {
          notification.error({
            message: 'Unauthorized',
            description: 'Not an Admin!'
          })
        }
      }
    })
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
