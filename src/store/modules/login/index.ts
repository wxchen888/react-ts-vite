
type IState = typeof state

type IAction = {
  type: string,
  value: string
}

const state = {
  username: '',
  password: '',
}

const actions = {
  changeUserName(state: IState, action: IAction) {
    state.username = action.value
  },
  changePassword(state: IState, action: IAction) {
    state.password = action.value
  }
}


export default {
  state,
  actions
}