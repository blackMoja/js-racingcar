import { state } from './state.js'
import CONSTANTS from '../utils/constants.js'

const activateCarListForm = () => {
  const $carListFormInput = document.querySelector('#carListForm input')
  const $carListFormButton = document.querySelector('#carListForm button')

  if (state.step === CONSTANTS.GAME_PREPARE_CAR) {
    $carListFormInput.setAttribute('disabled', false)
    $carListFormButton.setAttribute('disabled', false)
  } else {
    $carListFormInput.setAttribute('disabled', true)
    $carListFormButton.setAttribute('disabled', true)
  }
}

const activateGameCountForm = () => {
  const $gameCountForm = document.querySelector('#gameCountForm')
  const $gameCountFormInput = document.querySelector('#gameCountForm input')
  const $gameCountFormButton = document.querySelector('#gameCountForm button')

  if (state.step === CONSTANTS.GAME_PREPARE_CAR) {
    $gameCountForm.style.visibility = 'hidden'
  } else {
    $gameCountForm.style.visibility = 'visible'
  }

  if (state.step === CONSTANTS.GAME_START) {
    $gameCountFormInput.setAttribute('disabled', true)
    $gameCountFormButton.setAttribute('disabled', true)
  }
}

const renderGameBoard = async () => {
  const $gameBoard = document.querySelector('#gameBoard')

  if (state.step === CONSTANTS.GAME_START) {
    $gameBoard.style.visibility = 'visible'
  } else {
    $gameBoard.style.visibility = 'none'
  }
}

const renderCars = () => {
  if (state.step !== CONSTANTS.GAME_START) {
    return
  }

  const $racingList = document.querySelector('#racingList')
  const $move = '<div class="forward-icon mt-2">⬇️</div>'

  let dom = ''

  state.cars.forEach((car) => {
    dom += `<div class="mr-2">`
    dom += `<div class="car-player">${car.name}</div>`
    dom += `${$move.repeat(car.position)}`
    dom += `${state.gameCount > 0 ? renderLoading() : ''}`
    dom += `</div>`
  })

  $racingList.innerHTML = dom
}

const renderLoading = () => {
  return `
    <div class="d-flex justify-center mt-3">
      <div class="relative spinner-container">
        <span class="material spinner"></span>
      </div>
    </div>`
}

const render = () => {
  activateCarListForm()
  activateGameCountForm()
  renderGameBoard()
  renderCars()
}

export default render
