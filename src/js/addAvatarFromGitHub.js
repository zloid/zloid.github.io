'use strict'

/**
 * Get avatar from GitHub and insert at portfolio menu
 *
 * @function addAvatarFromGitHub
 * @param {string} url - GitHub api of some user
 * @param {string} id - DOM element id
 * @return {void}
 */
async function addAvatarFromGitHub(url, id) {
  try {
    const avatarFromGitHubField = document.getElementById(id)
    const response = await fetch(url)
    const githubApiObj = await response.json()

    avatarFromGitHubField.addEventListener('mouseover', () => {
      avatarFromGitHubField.src = githubApiObj.avatar_url
    })
  } catch (error) {
    console.log('avatar_url: ' + error)
  }
}

addAvatarFromGitHub(
  'https://api.github.com/users/zloid',
  'avatarFromGitHubField'
)
