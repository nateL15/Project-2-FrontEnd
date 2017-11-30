'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signinSuccess)
    .catch(ui.signinFailure)
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onSaveNote = function (event) {
  event.preventDefault()
  api.saveNote()
    .then(ui.saveNoteSuccess)
    .catch(ui.saveNoteFailure)
}

const addHandlers = function () {
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#save-note').on('submit', onSaveNote)
}

module.exports = {
  addHandlers,
  onChangePassword,
  onSignOut,
  onSignIn,
  getFormFields,
  onSaveNote,
  onSignUp
}
