'use strict'

/**
 * Get avatar from GitHub and insert at portfolio menu
 *
 * @function addAvatarFromGitHub
 * @param {string} url - GitHub api of some user
 * @param {string} id - DOM element id
 * @return {void}
 */
function addAvatarFromGitHub(url, id) {
  const avatarFromGitHubField = document.getElementById(id)
  const avatarImg = new Image(50, 50)
  avatarImg.style.borderRadius = '50px'

  fetch(url)
    .then((response) => response.json())
    .then(({ avatar_url }) => {
      avatarImg.src = avatar_url
      avatarFromGitHubField.appendChild(avatarImg)
    })
}

addAvatarFromGitHub(
  'https://api.github.com/users/zloid',
  'avatarFromGitHubField'
)
