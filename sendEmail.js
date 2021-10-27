const $form = document.querySelector('#form')
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
    alert(
      'Mensaje enviado. Gracias por tomarme en cuenta, te estare contactando pronto.'
    )
  }
}
