const api = require('./api')
const ui = require('./ui')

const onSaveNote = function (event) {
  event.preventDefault()
  api.saveNote()
    .then(ui.saveNoteSuccess)
    .catch(ui.saveNoteFailure)
}

const addHandlers = function (event) {
  $('#save-note').on('submit', onSaveNote)
}

module.exports = {
  addHandlers
}
