const $headerActivator = document.getElementById('header__activator')
const $headerCloser = document.querySelector('.header__closer')
const $header = document.getElementById('nav')
const $headerImage = document.querySelector('.header__image--bg')
const $navList = document.querySelector('.nav-responsive__list')

$headerActivator.addEventListener('click', (e) => {
  $header.classList.toggle('activate__nav')
  $headerActivator.classList.toggle('active__activator')
})

$headerCloser.addEventListener('click', (e) => {
  $header.classList.remove('activate__nav')
  $headerActivator.classList.add('header__activators')
})

window.addEventListener('load', (e) => {
  $headerImage.classList.add('opacity-img')
})

$navList.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    $header.classList.remove('activate__nav')
    $headerActivator.classList.add('header__activators')
  }
})
