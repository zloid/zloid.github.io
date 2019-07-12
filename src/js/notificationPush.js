'use strict'

const notificationPush = {
  projectsCounter(nodeList) {
    return document.querySelectorAll(nodeList).length - 1
  },
  pushTo(child, parent) {
    document.querySelector(parent).innerHTML = child
  },
  allProjects(...theArgs) {
    let arrAfterMap = theArgs.map(element => this.projectsCounter(element))
    return arrAfterMap.reduce((accum, current) => accum + current)
  },
}

notificationPush.pushTo(
  notificationPush.projectsCounter('.htmlcssjs'),
  '.htmlcssjs-span'
)
notificationPush.pushTo(
  notificationPush.projectsCounter('.wordpress'),
  '.wordpress-span'
)
notificationPush.pushTo(
  notificationPush.projectsCounter('.pureJs'),
  '.pureJsSpan'
)
notificationPush.pushTo(
  notificationPush.projectsCounter('.react'),
  '.reactSpan'
)
notificationPush.pushTo(
  notificationPush.allProjects('.htmlcssjs', '.wordpress', '.pureJs', '.react'),
  '.all-span'
)
