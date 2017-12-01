const store = require('../store')
const config = require('../config')

const saveNote = function (info) {
  return $.ajax({
    url: config.apiOrigin + '/notes/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: { note: info }
  })
}

const updateNote = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/note/' + data.note.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
module.exports = {
  saveNote,
  updateNote
}
