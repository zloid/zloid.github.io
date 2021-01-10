'use strict'

function addAvatarFromGitHub() {
  const avatarFromGitHubField = document.getElementById('avatarFromGitHubField')
  const avatarImg = new Image(50, 50)
  avatarImg.style.borderRadius = '50px'
  avatarImg.style.border = '2px'

  fetch('https://api.github.com/users/zloid')
    .then((response) => response.json())
    .then(({ avatar_url }) => {
      avatarImg.src = avatar_url
      avatarFromGitHubField.appendChild(avatarImg)
    })
}

addAvatarFromGitHub()
