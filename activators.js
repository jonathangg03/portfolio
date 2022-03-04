const $headerActivator = document.getElementById('header__activator')
const $headerCloser = document.querySelector('.header__closer')
const $header = document.getElementById('nav')
const $headerImage = document.querySelector('.header__image--bg')
const $navList = document.querySelector('.nav__list')

$headerActivator.addEventListener('click', (e) => {
  $header.classList.add('activate__header')
  $headerActivator.classList.remove('header__activators')
})

$headerCloser.addEventListener('click', (e) => {
  $header.classList.remove('activate__header')
  $headerActivator.classList.add('header__activators')
})

window.addEventListener('load', (e) => {
  console.log($headerImage)
  $headerImage.classList.add('opacity-img')
})

$navList.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    $header.classList.remove('activate__header')
    $headerActivator.classList.add('header__activators')
  }
})
