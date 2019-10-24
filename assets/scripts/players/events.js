const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onAddPlayer = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.addPlayer(formData)
    .then(ui.onAddPlayerSuccess)
    .catch(ui.onAddPlayerFailure)
}

const onAllPlayers = function (event) {
  event.preventDefault()
  api.allPlayers()
    .then(ui.onShowAllPLayersSuccess)
    .catch(ui.onShowAllPlayersFailure)
}

const onHidePlayers = function (event) {
  event.preventDefault()
  ui.onHidePlayersSuccess()
}

const onDeletePlayer = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.deletePlayer(formData)
    .then(ui.onDeletePlayerSuccess)
    .catch(ui.onDeletePlayerFailure)
}

const onUpdatePlayer = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.updatePlayer(formData)
    .then(ui.onUpdatePlayerSuccess)
    .catch(ui.onUpdatePlayerFailure)
}

module.exports = {
  onAddPlayer,
  onDeletePlayer,
  onUpdatePlayer,
  onAllPlayers,
  onHidePlayers
}
