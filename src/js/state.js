import render from './render.js'
import CONSTANTS from '../utils/constants.js'

const state = {
  // * 게임 스탭
  step: CONSTANTS.GAME_PREPARE_CAR,
  // * 레이싱 하는 자동차 리스트
  cars: [],
  // * 게임 카운트
  gameCount: 0,
  // * 게임 결과
  gameResult: {},
}

const setState = (newState) => {
  Object.keys(state).forEach(
    (key) => (state[key] = newState[key] ?? state[key])
  )
  render()
}

export { state, setState }
