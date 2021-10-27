const $hero = document.querySelector('.header__hero')
const $headerElement = document.querySelector('.header')
const $aboutMeDescription = document.querySelector('.aboutme__description')
const $aboutMeObjectives = document.querySelector('.aboutme__objectives')

const intersections = () => {
  const loadElements = (enters) => {
    enters.forEach((enter) => {
      if (enter.isIntersecting) {
        if (enter.target.className === 'header') {
          $hero.classList.add('moveHero')
        }

        if (enter.target.className === 'aboutme__description') {
          enter.target.classList.add('moveAboutme')
        }

        if (enter.target.className === 'aboutme__objectives') {
          console.log('entro')
          enter.target.classList.add('moveAboutme')
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
}

window.addEventListener('load', intersections)
