const youtubeImage = document.getElementById('youtube');
const facebookImage = document.getElementById('facebook');
const spotifyImage = document.getElementById('spotify');

const changeImageSource = (event) => {
  if (event.currentTarget == youtubeImage) {
    event.currentTarget.setAttribute('src', 'assets/images/youtube-hover.svg');
  } else if (event.currentTarget == facebookImage) {
    event.currentTarget.setAttribute('src', 'assets/images/facebook-hover.svg');
  } else if (event.currentTarget == spotifyImage) {
    event.currentTarget.setAttribute('src', 'assets/images/spotify-hover.svg');
  }
};

const resetImageSource = (event) => {
  if (event.currentTarget == youtubeImage) {
    event.currentTarget.setAttribute('src', 'assets/images/youtube.svg');
  } else if (event.currentTarget == facebookImage) {
    event.currentTarget.setAttribute('src', 'assets/images/facebook.svg');
  } else if (event.currentTarget == spotifyImage) {
    event.currentTarget.setAttribute('src', 'assets/images/spotify.svg');
  }
}

const bindImageToHover = (image) => {
  image.addEventListener('mouseover', changeImageSource);
  image.addEventListener('mouseout', resetImageSource);

};

const changeImageOnHover = () => {
  bindImageToHover(youtubeImage);
  bindImageToHover(facebookImage);
  bindImageToHover(spotifyImage);
};

export { changeImageOnHover };
