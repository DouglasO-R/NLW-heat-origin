const socialLinks = document.getElementById("social-links");
const linksSocialMedia = {
  github: "DouglasO-R",
  youtube: "douglasor",
  facebook: "douglasor",
  twitter: "douglasor",
  instagram: "douglasor",
};

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    let social = li.getAttribute("class");
    li.children[0].href = ` https://${social}.com/${linksSocialMedia[social]} `;
  }
}

changeSocialMedia();

function getGitHubProfileInfo() {
  const url = ` https://api.github.com/users/${linksSocialMedia.github} `;

  const userName = document.getElementById('user-name');
  const userBio = document.getElementById('user-bio');
  const userLink = document.getElementById('user-link');
  const userImage = document.getElementById('user-image');
  const userLogin = document.getElementById('user-login');

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    })
    .catch();
}

getGitHubProfileInfo();
