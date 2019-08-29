'use strict'

function menuActionsViaImgs() {
  let hidden = document.querySelector('.hidden')
  hidden.style.display = 'none'

  let allButtons = document.querySelectorAll('#filter > button')
  //todo
  ////////////TODO/////////////
  allButtons.forEach(e => {
    e.addEventListener('click', () => {
      let filter = e.className

      if (filter === 'lall') {
        ////////////////////////++++
        $('.hidden')
          .contents()
          .appendTo('#posts')
          .hide()
          .show('slow')
        ////////////////////////
      } else {
        ////////////////////////++++

        $('.post').appendTo('.hidden')

        $('.hidden')
          .contents()
          .appendTo('#posts')
          .hide()
          .show('slow')

        $('.post:not(.' + filter + ')')
          .appendTo('.hidden')
          .hide('slow')
        ////////////////////////
      }
    })
  })
}

function menuToggleActive() {
  let allButtons = document.querySelectorAll('#filter > button')

  allButtons.forEach(e => {
    e.addEventListener('click', () => {
      allButtons.forEach(e => {
        e.classList.remove('active')
        e.removeAttribute('disabled')
      })

      e.setAttribute('disabled', 'disabled')
      e.classList.add('active')
    })
  })
}

;(window.onload = menuActionsViaImgs()), menuToggleActive()
