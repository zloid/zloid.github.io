'use strict'

function resizeElementsAdaptively(landmarkOfWidth) {
  let currentWidthOfSomeElement = document.querySelector(landmarkOfWidth).offsetWidth
  let nodeList = document.querySelectorAll(landmarkOfWidth)
  let imgAllObg = document.querySelectorAll('.img-fluid')
  let nodeListL = nodeList.length
  let imgAllObgL = imgAllObg.length

  for (let i = 0; i < nodeListL; i++) {
    nodeList[i].style.height = currentWidthOfSomeElement + 'px'
  }
  for (let i = 0; i < imgAllObgL; i++) {
    imgAllObg[i].style.height = currentWidthOfSomeElement + 'px'
  }
}

window.onload = resizeElementsAdaptively('.post')
window.addEventListener('resize', () => {
  resizeElementsAdaptively('.post')
})
