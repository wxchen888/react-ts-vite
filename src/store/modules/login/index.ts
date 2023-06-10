
export type ILoginState = typeof state
type ILoginAction = {
  username: string,
  password: string,
  token: string
}
export type IAction = {
  type: string,
  value: string | ILoginAction
}
type IActions = {
  loginIn: (newState: ILoginState, action: IAction) => void,
  loginOut: (newState: ILoginState, action: IAction) => void,
  [key: string]: (newState: ILoginState, action: IAction) => void
}

const state = {
  username: '',
  password: '',
  token: localStorage.getItem('token') || ''
}
// 唯一的缺点：就是每次添加actions时，需要手动添加新action的类型
const actions: IActions = {
  loginIn(newState, action) {
    const val = action.value as ILoginAction
    localStorage.setItem('token', val.token)
    newState.username = val.username
    newState.password = val.password
    newState.token = val.token
  },
  loginOut(newState) {
    newState.password = ''
    newState.username = ''
    newState.token = ''
    localStorage.getItem('token') && localStorage.removeItem('token')
  }
}

type IActionMaps = {
  [K in keyof typeof actions]: K
}
const getActionMaps: () => IActionMaps = () => {
  const res = {} as IActionMaps
  for (const k in actions) {
    res[k] = k
  }
  return res
}
export const actionMaps: IActionMaps = getActionMaps()

export default {
  state,
  actions,
  actionMaps
}