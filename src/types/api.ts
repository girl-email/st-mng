export interface LoginRes {
  username: string
  realname: string
}

export interface ResUserInfo<T = any> {
  code: number
  data?: T
  message?: string
  success: boolean
}