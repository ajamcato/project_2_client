const config = require('../config.js')
const store = require('../store.js')

const addPlayer = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/players',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const allPlayers = function (formData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/players/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePlayer = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/players/' + formData.player.id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

const updatePlayer = (formData) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/players/' + formData.player.id,
    // contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },

    data: formData
  })
}

module.exports = {
  addPlayer,
  deletePlayer,
  updatePlayer,
  allPlayers
}
