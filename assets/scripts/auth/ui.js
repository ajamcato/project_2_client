'use strict'
const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').show(500)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  // $('#message').fadeOut(1000)
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').addClass('failure')
  $('#message').removeClass('success')
  $('form').trigger('reset')
}

const onSignUpSuccess = () => {
  successMessage('Signed up Successfully!')
  $('#message').css('color', 'green')
  $('#sign-up').addClass('hide')
}

const onSignUpFailure = () => {
  failureMessage('Signed up Failed')
  $('#message').css('color', 'red')
}
const onSignInSuccess = (responseData) => {
  successMessage('Signed in Successfully')
  store.user = responseData.user
  $('#message').css('color', 'green')
  $('#sign-up, #sign-in').hide()
  $('#change-password').show() // change to show
  $('#sign-out').show()
  $('#add-player').show()
  $('#all-players').show()
  $('#update-player').show()
  $('#delete-player').show()
  $('#player-display').show()
  $('.box-one').hide()
  $('#hide-players').show()
}

const onSignInFailure = function () {
  $('#message').css('color', 'red')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully')
  $('#message').css('color', 'green')
}

const onChangePasswordFailure = function () {
  $('#message').css('color', 'red')
  failureMessage('Changed password Failed')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully')
  $('#sign-up, #sign-in').show()
  $('#player-display').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#add-player').hide()
  $('#update-player').hide()
  $('#all-players').hide()
  $('#delete-player').hide()
  $('#player-display').html('')
  $('.box-one').show()
  $('#hide-players').hide()
}

const onSignOutFailure = function () {
  failureMessage('Signed out failed')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
