
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwghbYX5qHOm9TGL2egIibboHSibgpZ-djC9iCdtzJdjQSXODJUBKVkg_u8_G3GbXEknw/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })