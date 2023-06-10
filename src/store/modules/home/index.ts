
export type IHomeState = {
  testArr: string[],
  asyncStr: string
}
export type IAction = {
  type: string,
  value: string
}
type IActions = {
  pushTestArr: (newState: IHomeState, action: IAction) => void,
  changeAsyncStr: (newState: IHomeState, action: IAction) => void,
  [key: string]: (newState: IHomeState, action: IAction) => void
}

const state: IHomeState = {
  testArr: [],
  asyncStr: ''
}
const actions: IActions = {
  pushTestArr(newState: IHomeState, action: IAction) {
    newState.testArr.push(action.value)
  },
  changeAsyncStr(newState: IHomeState, action: IAction) {
    newState.asyncStr += action.value
  }
}
export const asyncActions = {
  testAsync: ({
    postId
  }: {
    postId: string
  }) => {
    return async (dispatch, getState) => {
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve('asyncStr_')
        }, 1000)
      })
      console.log('dispacth', postId, getState());
      dispatch({
        type: 'changeAsyncStr',
        value: res
      })
    }
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
  asyncActions,
  actionMaps
}