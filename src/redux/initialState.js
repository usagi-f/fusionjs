// @flow

type initialStateType = {
  count: number
}

const initialState: Function = (ctx: any): initialStateType => ({
  count: 0
})

export default initialState
