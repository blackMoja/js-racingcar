import { state, setState } from '../js/state.js'
import sleep from '../utils/sleep.js'
import randomNumber from './randomNumber.js'

const move = async () => {
  let gameCount = state.gameCount

  while (gameCount > 0) {
    gameCount = gameCount - 1
    await sleep(1000)
    doMove(gameCount)
  }
}

let result = []
const doMove = (gameCount) => {
  state.cars.forEach((car, index) => {
    const getMove = randomNumber()
    const { name, position } = car

    let _position = position

    if (getMove >= 4) {
      result[index] = { name, position: (_position = _position + 1) }
    } else {
      result[index] = { name, position: (_position = _position) }
    }
  })

  setState({
    gameCount,
    cars: result,
  })
}

export default move