'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
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

const hideLoggedInForms = function () {
  $('#change-password').hide()
  $('#sign-out').hide()
}

hideLoggedInForms()

const clearAuthForms = function () {
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#change-password').trigger('reset')
  $('#signout').trigger('reset')
}

const hideNoteForms = function () {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#save-note').hide()
  $('#get-note').hide()
  $('#delete-note').hide()
  $('#update-note').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#message').empty()
}

const addHandlers = function (event) {
  $('#sign-out').on('submit', hideNoteForms)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-out').on('submit', onSignOut)
  $('#sign-out').on('submit', hideLoggedInForms)
  $('#sign-out').on('submit', clearAuthForms)
  $('#change-password').on('submit', onChangePassword)
  $('#change-password').on('submit', clearAuthForms)
}

module.exports = {
  addHandlers,
  onChangePassword,
  clearAuthForms,
  onSignOut,
  onSignIn,
  getFormFields,
  onSignUp
}
