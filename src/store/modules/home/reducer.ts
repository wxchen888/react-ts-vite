import HomeReducer, { IHomeState, reducers } from './index'

export type IHomeReducer = (state: IHomeState, action: {
  type: string,
  value: string
}) => IHomeState

const reducer: IHomeReducer = (state = { ...HomeReducer.state }, action: {
  type: string,
  value: string
}) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (reducers[action.type]) {
    HomeReducer.actions[action.type](newState, action);
    return newState
  } else {
    return state
  }
}

export default reducer