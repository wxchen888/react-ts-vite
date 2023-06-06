//reduce文件就是来管理数据的
//reducer文件中的数据是不能直接修改的，只能通过action来修改
import { LoginReducer } from './modules/index'

const defaultState = {
  ...(LoginReducer.default.state),
}

const reducer = (state = defaultState, action: {
  type: string,
  value: string
}) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'changeUserName':
      LoginReducer.default.actions.changeUserName(newState, action);
      return newState
    case 'changePassword':
      LoginReducer.default.actions.changePassword(newState, action);
      return newState
    default:
      return state
  }
}

export default reducer