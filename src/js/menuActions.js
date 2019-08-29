'use strict'

function animationForDiv(nodeList, speed = 0.5) {
  nodeList.forEach(e => {
    e.style.transform = 'scale(0,0)'
    setTimeout(() => {
      e.style.transition = `${speed}s ease-in-out`
      e.style.transform = 'scale(1,1)'
    }, 1)
  })
}

function menuActionsViaImgs() {
  let hidden = document.querySelector('.hidden')
  hidden.style.display = 'none'
  let allButtons = document.querySelectorAll('#filter > button')
  let allPosts = document.querySelectorAll('.post')
  let postsDiv = document.querySelector('#posts')

  allButtons.forEach(e => {
    e.addEventListener('click', () => {
      let filter = e.className

      if (filter !== 'lall') {
        allPosts.forEach(e => {
          hidden.appendChild(e)
        })

        let hiddenIn = document.querySelectorAll('.hidden > div')

        hiddenIn.forEach(e => {
          postsDiv.appendChild(e)
        })

        animationForDiv(allPosts, 0.5)

        allPosts.forEach(e => {
          !e.classList.contains(filter) && hidden.appendChild(e)
        })
      } else {
        let hiddenIn = document.querySelectorAll('.hidden > div')

        hiddenIn.forEach(e => {
          // console.log(e.getElementsByTagName('img')[0].src)
          postsDiv.appendChild(e)
        })

        animationForDiv(allPosts, 0.65)
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
