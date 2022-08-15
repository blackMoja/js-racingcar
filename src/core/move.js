import { state, setState } from '../js/state.js'
import sleep from '../utils/sleep.js'
import getRandomNumber from '../utils/getRandomNumber.js'

const move = async () => {
  // TODO while과 동일한 프로세스를 적용해볼 수 있도록 수정하기 @blackmoja
  // const interval = setInterval(async () => {
  //   if (gameCount > 0) {
  //     gameCount = gameCount - 1
  //     await sleep(1000)
  //     runProcess(gameCount)
  //   } else {
  //     clearInterval(interval)
  //   }
  // }, 1000)

  while (state.gameCount > 0) {
    await sleep(1000)
    runProcess(state.gameCount)
    setState({ gameCount: state.gameCount - 1 })
  }
}

let result = []
const runProcess = (gameCount) => {
  state.cars.forEach((car, index) => {
    const getMove = getRandomNumber()
    let { name, position: _position } = car

    if (getMove < 4) {
      result[index] = { name, position: _position }
      return
    }

    result[index] = { name, position: (_position = _position + 1) }
  })

  setState({
    gameCount,
    cars: result,
  })
}

export default move
