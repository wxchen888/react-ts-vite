
export type IHomeState = {
  testArr: string[]
}
export type IAction = {
  type: string,
  value: string
}

const state: IHomeState = {
  testArr: []
}

const actions: {
  [key: string]: (newState: IHomeState, action: IAction) => void
} = {
  pushTestArr(newState: IHomeState, action: IAction) {
    newState.testArr.push(action.value)
  }
}

export const reducers: {
  [key: string]: string
} = {
  pushTestArr: 'pushTestArr'
}


export default {
  state,
  actions,
  reducers
}