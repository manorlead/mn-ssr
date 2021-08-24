export interface AuthRes {
  cognitoJWT: {
    id_token: string
    access_token: string
    refresh_token: string
    expires_in: number
    tokenT_type: string
  }
  userProfile: UserPofile
}

export interface UserPofile {
  admin: boolean
  firstName: string
  lastName: string
  phone: string
  email: string
  profilePictureUrl: string
}
