
export type ILoginState = typeof state
export type IAction = {
  type: string,
  value: string
}
type IActions = {
  changeUserName: (newState: ILoginState, action: IAction) => void,
  changePassword: (newState: ILoginState, action: IAction) => void,
  [key: string]: (newState: ILoginState, action: IAction) => void
}

const state = {
  username: '',
  password: '',
}
// 唯一的缺点：就是每次添加actions时，需要手动添加新action的类型
const actions: IActions = {
  changeUserName(newState, action) {
    newState.username = action.value
  },
  changePassword(newState, action) {
    newState.password = action.value
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