import HomeReducer, { IAction, actionMaps } from './index'

const reducer = (state = { ...HomeReducer.state }, action: IAction) => {
  const newState = JSON.parse(JSON.stringify(state))

  if (actionMaps[action.type]) {
    HomeReducer.actions[action.type](newState, action);
    return newState
  } else {
    return state
  }
}

export default reducer