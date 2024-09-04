const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const newGood = state.good + 1
      const newStateGood = {good: newGood, ok: state.ok, bad: state.bad}
      state = newStateGood
      return state
    case 'OK':
      const newOk = state.ok + 1
      const newStateOk = {good: state.good, ok: newOk, bad: state.bad}
      state = newStateOk
      return state
    case 'BAD':
      const newBad = state.bad + 1
      const newStateBad = {good: state.good, ok: state.ok, bad: newBad}
      state = newStateBad
      return state
    case 'ZERO':
      const newStateZero = {good:0, ok:0, bad:0}
      state = newStateZero
      return state
    default: return state
  }
  
}

export default counterReducer
