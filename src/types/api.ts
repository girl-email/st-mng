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
  projectName?: string;
  projectDesc?: string;
  id: string;
}