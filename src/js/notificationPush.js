'use strict'

const notificationPush = {
  countCommonProjects(nodeList) {
    return document.querySelectorAll(nodeList).length - 1
  },
  insertChildToParent(child, parent) {
    document.querySelector(parent).innerHTML = child
  },
  countAllProjects(...theArgs) {
    let arrAfterMap = theArgs.map(element => this.countCommonProjects(element))
    return arrAfterMap.reduce((accum, current) => accum + current)
  },
}

const { countCommonProjects, insertChildToParent } = notificationPush

insertChildToParent(countCommonProjects('.htmlcssjs'), '.htmlcssjs-span')
insertChildToParent(countCommonProjects('.wordpress'), '.wordpress-span')
insertChildToParent(countCommonProjects('.pureJs'), '.pureJsSpan')
insertChildToParent(countCommonProjects('.react'), '.reactSpan')
insertChildToParent(
  notificationPush.countAllProjects(
    '.htmlcssjs',
    '.wordpress',
    '.pureJs',
    '.react'
  ),
  '.all-span'
)

