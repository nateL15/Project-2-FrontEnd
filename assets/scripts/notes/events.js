const api = require('./api')
const ui = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)

const onSaveNote = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.saveNote(data)
    .then(ui.saveNoteSuccess)
    .catch(ui.saveNoteFailure)
}

const addHandlers = function (event) {
  $('#save-note').on('submit', onSaveNote)
}

module.exports = {
  addHandlers
}
