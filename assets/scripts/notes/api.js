const store = require('../config')
const config = require('../store')

const saveNote = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/save-note/' + store.user.ud,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  saveNote
}
