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
  const avatarFromGitHubField = document.getElementById(id)
  const avatarImg = new Image(50, 50)
  avatarImg.style.borderRadius = '50px'
  avatarImg.src = 'images/beard-avatar.jpg'
  avatarFromGitHubField.appendChild(avatarImg)

  try {
    const response = await fetch(url)
    const githubApiObj = await response.json()

    avatarImg.src = githubApiObj.avatar_url
    avatarFromGitHubField.appendChild(avatarImg)
  } catch (error) {
    console.log('avatar_url: ' + error)
  }
}

addAvatarFromGitHub(
  'https://api.github.com/users/zloid',
  'avatarFromGitHubField'
)
