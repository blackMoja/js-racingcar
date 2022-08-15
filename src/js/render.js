import { state } from './state.js'
import CONSTANTS from '../utils/constants.js'

const $carListForm = document.querySelector('#carListForm')
const $gameCountForm = document.querySelector('#gameCountForm')
const $gameBoard = document.querySelector('#gameBoard')
const $racingList = document.querySelector('#racingList')

const $move = '<div class="forward-icon mt-2">⬇️</div>'
const $loading = `
  <div class="d-flex justify-center mt-3">
    <div class="relative spinner-container">
      <span class="material spinner"></span>
    </div>
  </div>`

const activateCarListForm = () => {
  const [$input, $button] = $carListForm.querySelectorAll(':scope input,button')

  if (state.step === CONSTANTS.GAME_PREPARE_CAR) {
    $input.setAttribute('disabled', false)
    $button.setAttribute('disabled', false)
  } else {
    $input.setAttribute('disabled', true)
    $button.setAttribute('disabled', true)
  }
}

const activateGameCountForm = () => {
  const [$input, $button] = $gameCountForm.querySelectorAll(
    ':scope input,button'
  )

  if (state.step === CONSTANTS.GAME_PREPARE_CAR) {
    $gameCountForm.classList.remove('show')
    $gameCountForm.classList.add('hide')
  } else {
    $gameCountForm.classList.remove('hide')
    $gameCountForm.classList.add('show')
  }

  const isDisabled = !(state.step === CONSTANTS.GAME_PREPARE_COUNT)

  if (isDisabled) {
    $input.setAttribute('disabled', isDisabled)
    $button.setAttribute('disabled', isDisabled)
  }
}

const renderGameBoard = async () => {
  if (state.step === CONSTANTS.GAME_START) {
    $gameBoard.classList.remove('hide')
    $gameBoard.classList.add('show')
  } else {
    $gameBoard.classList.remove('show')
    $gameBoard.classList.add('hide')
  }
}

const renderCars = () => {
  if (state.step !== CONSTANTS.GAME_START) {
    return
  }

  let dom = ''

  state.cars.forEach((car) => {
    dom += `
      <div class="mr-2">
        <div class="car-player">${car.name}</div>
        ${$move.repeat(car.position)}
        ${state.gameCount > 0 ? $loading : ''}
      </div>
    `
  })

  $racingList.innerHTML = dom
}

const render = () => {
  activateCarListForm()
  activateGameCountForm()
  renderGameBoard()
  renderCars()
}

export default render
