
export type ILoginState = typeof state

type IAction = {
  type: string,
  value: string
}

const state = {
  username: '',
  password: '',
}

const actions: {
  [key: string]: (newState: ILoginState, action: IAction) => void
} = {
  changeUserName(newState: ILoginState, action: IAction) {
    newState.username = action.value
  },
  changePassword(newState: ILoginState, action: IAction) {
    newState.password = action.value
  }
}

export const reducers: {
  [key: string]: string
} = {
  changeUserName: 'changeUserName',
  changePassword: 'changePassword'
}


export default {
  state,
  actions,
  reducers
}