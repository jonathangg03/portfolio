const $form = document.querySelector('#form')
const $message = document.querySelector('.sendedMessage')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const formData = new FormData(this)
  const response = await fetch(this.action, {
    method: 'post',
    body: formData,
    headers: {
      Accept: 'application/json'
    }
  })
  if (response.ok) {
    this.reset()
    $message.classList.add('show')
    setTimeout(() => {
      $message.classList.remove('show')
    }, 5000)
  }
}
