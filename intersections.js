const $hero = document.querySelector('.header__hero')
const $headerElement = document.querySelector('.header')
const $headerTop = document.querySelector('.header__top')
const $aboutMeDescription = document.querySelector('.aboutme__description')
const $aboutMeObjectives = document.querySelector('.aboutme__objectives')
const $habiitiesContainer = document.querySelector('.habilities__container')
const $habiitiesItems = document.querySelectorAll('.habilities__item')
const $projectsItems = document.querySelectorAll('.projects__item')

const intersections = () => {
  const loadElements = (enters) => {
    enters.forEach((enter) => {
      if (enter.isIntersecting) {
        if (enter.target.className === 'header') {
          $hero.classList.add('moveHero')
          $headerTop.classList.add('moveHeaderTop')
        }

        if (
          enter.target.className === 'aboutme__description' ||
          enter.target.className === 'aboutme__objectives'
        ) {
          enter.target.classList.add('moveAboutme')
        }

        if (enter.target.className === 'habilities__container') {
          $habiitiesItems.forEach((hability) => {
            hability.classList.add('moveHability')
          })
        }

        if (enter.target.className === 'projects__item') {
          enter.target.classList.add('moveProject')
        }
      }
    })
  }

  const observer = new IntersectionObserver(loadElements, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.3
  })

  observer.observe($headerElement)
  observer.observe($aboutMeDescription)
  observer.observe($aboutMeObjectives)
  observer.observe($habiitiesContainer)
  $projectsItems.forEach((item) => {
    observer.observe(item)
  })
}

window.addEventListener('load', intersections)
