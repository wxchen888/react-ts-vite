import LoginReducer, { ILoginState, reducers } from './index'

export type ILoginReducer = (state: ILoginState, action: {
  type: string,
  value: string
}) => ILoginState

const reducer: ILoginReducer = (state = { ...LoginReducer.state }, action: {
  type: string,
  value: string
}) => {
  const newState = JSON.parse(JSON.stringify(state))

  if (reducers[action.type]) {
    LoginReducer.actions[action.type](newState, action);
    return newState
  } else {
    return state
  }
}

export default reducer