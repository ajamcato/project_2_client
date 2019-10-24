'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const playersEvents = require('./players/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#add-player').hide()
  $('#all-players').hide()
  $('#update-player').hide()
  $('#delete-player').hide()
  $('#change-password').hide()
  $('#hide-players').hide()
  $('#sign-out').hide()
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#add-player').on('submit', playersEvents.onAddPlayer)
  $('#all-players').on('submit', playersEvents.onAllPlayers)
  $('#update-player').on('submit', playersEvents.onUpdatePlayer)
  $('#delete-player').on('submit', playersEvents.onDeletePlayer)
  $('#hide-players').on('click', playersEvents.onHidePlayers)
})
