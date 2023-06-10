import LoginReducer, { actionMaps, IAction } from './index'

const reducer = (state = { ...LoginReducer.state }, action: IAction) => {
  const newState = JSON.parse(JSON.stringify(state))

  if (actionMaps[action.type]) {
    LoginReducer.actions[action.type](newState, action);
    return newState
  } else {
    return state
  }
}

export default reducer