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

export interface ReqProject {
  projectName?: string
  projectDesc?: string
  id: string
}

export interface Login {
  mobile: string
  pwd: string
}

export interface LoginRes {
  _id: string,
  userName: string
  avatarUrl: string
  openId: string
  mobile: string
  __v: number
  pwd: string
}

export interface UserInfoRes {
  _id: string,
  userName: string
  avatarUrl: string
  openId: string
  mobile: string
  __v: number
  pwd: string
  createTime: string
}