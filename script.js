'use strict'

const image = document.querySelector('#myImage');
const text = document.querySelector('h2');
const buttonOne = document.querySelector('#one');
const buttonTwo = document.querySelector('#two');

buttonOne.addEventListener('click', mrBig);
buttonTwo.addEventListener('click', aidan);

function mrBig() {
  image.setAttribute('src', 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2017_37/1282735/sex-and-the-city-noth-parker-today-170915.jpg');
  text.textContent = 'Will they marry?';
  buttonOne.textContent = 'Yes, but not so soon';
  buttonTwo.textContent = 'Never';

  buttonOne.addEventListener('click', wedding);
  buttonTwo.addEventListener('click', neverMarried);
}

function wedding() {
  image.setAttribute('src', 'https://pyxis.nymag.com/v1/imgs/a66/4bc/d532de328599d55be840c1285ac44b3f96-big-and-just-like-that.jpg');
  text.textContent = 'They will marry and live happily together, but they will not have children';
  buttonOne.style = 'display: none';
  buttonTwo.style = 'display: none';
};

function neverMarried() {
  image.setAttribute('src', 'https://media.glamour.com/photos/5695b09316d0dc3747ed6e53/master/w_1600%2Cc_limit/sex-love-life-2014-10-SATC-1-main.jpg');
  text.textContent = 'He will leave her at the altar';
  buttonOne.style = 'display: none';
  buttonTwo.style = 'display: none';
}

function aidan() {
  image.setAttribute('src', 'https://preview.redd.it/ocotn1a3isi71.png?auto=webp&s=87bb4d915232053c52ca2653bb45478397ff0725');
  text.textContent = 'Will they be happy?';
  buttonOne.textContent = 'Yes';
  buttonTwo.textContent = 'No';

  buttonOne.addEventListener('click', happy);
  buttonTwo.addEventListener('click', unhappy);
}

function happy() {
  image.setAttribute('src', 'https://image-ie.s3.eu-west-1.amazonaws.com/uploads/2021/04/16111841/satc-aidan-baby-1528237373.png');
  text.textContent = 'Yes, and they will have a child';
  buttonOne.style = 'display: none';
  buttonTwo.style = 'display: none';
}

function unhappy() {
  image.setAttribute('src', 'https://i0.wp.com/28.media.tumblr.com/tumblr_m0bvcvMl5P1qmi5uao1_500.png');
  text.textContent = `No, they will break up because of Carry's affair`;
  buttonOne.style = 'display: none';
  buttonTwo.style = 'display: none';
}

