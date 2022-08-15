const addEvent = (type, selector, handler) => {
  const $target = document.querySelector(selector)
  $target.addEventListener(type, handler)
}

export default addEvent
