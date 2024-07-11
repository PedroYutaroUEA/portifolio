function getProfilePic() {
  const url = fetch("https://api.github.com/users/YUT4R0");
  url
    .then((response) => response.json())
    .then((data) => {
      const profilePic = data.avatar_url;
      document.getElementById("profile-pic").src = profilePic;
    })
}

getProfilePic();