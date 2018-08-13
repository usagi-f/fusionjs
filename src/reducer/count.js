// @flow

const count = (state: number = 0, action: { type: string }): number => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

export default count
