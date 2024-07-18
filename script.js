async function getProfilePic() {
  try {
    const response = await fetch("https://api.github.com/users/YUT4R0");
    if (!response.ok) throw new Error("Network response was not ok.");
    const data = await response.json();
    const profilePic = data.avatar_url;
    document.getElementById("profile-pic").src = profilePic;
  } catch (error) {
    console.error("Error fetching profile picture:", error);
  }
}

const button = document.getElementById("presentation-button")

function showPrompt() {
  let name = window.prompt("set your name");
  let age = window.prompt("set your age");

  const newH1 = document.createElement("h1");
  parseInt(age) >= 18
  ? newH1.textContent = `Hello my budy ${name}!`
  : newH1.textContent = `salve my kiddo ${name}!`
  
  button.parentNode.insertBefore(newH1, button);
}

function setUser() {
  showPrompt();
  const imagePath = "../images/image_for_portifolio.jpg"
  const newImage = document.createElement("img");
  newImage.src = imagePath;
  button.parentNode.insertBefore(newImage, button);
}

getProfilePic();