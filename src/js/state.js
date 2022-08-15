import render from './render.js'
import CONSTANTS from '../utils/constants.js'

const state = {
  step: CONSTANTS.GAME_PREPARE_CAR,
  cars: [],
  gameCount: 0,
  gameResult: {},
}

const setState = (newState) => {
  Object.keys(state).forEach(
    (key) => (state[key] = newState[key] ?? state[key])
  )
  render()
}

export { state, setState }