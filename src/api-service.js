export default {
  signUp: (username, password) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'content-type': 'application/json'
      }
    }
    return fetch('/api/signup', options)
      .then(response => response.json())
  },
  signIn: (username, password) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'content-type': 'application/json'
      }
    }
    return fetch('/api/signin', options)
      .then(response => response.json())
  },
  getMinutes: (uId) => {
    const options = {
      method: 'GET',
      headers: {
        'x-access-token': localStorage.getItem('idToken')
      }
    }
    return fetch(`/api/user/${uId}/minutes`, options)
      .then(response => response.json())
  },
  createMinute: (uId, contents) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ contents }),
      headers: {
        'content-type': 'application/json',
        'x-access-token': localStorage.getItem('idToken')
      }
    }
    return fetch(`/api/user/${uId}/minutes`, options)
      .then(response => response.json())
  },
  editMinute: (uId, contents) => {
    const options = {
      method: 'PUT',
      body: JSON.stringify({ contents }),
      headers: {
        'content-type': 'application/json',
        'x-access-token': localStorage.getItem('idToken')
      }
    }
    return fetch(`/api/user/${uId}/minutes`, options)
      .then(response => response.json())
  },
  deleteMinute: (uId, contents) => {
    const options = {
      method: 'DELETE',
      body: JSON.stringify({ contents }),
      headers: {
        'content-type': 'application/json',
        'x-access-token': localStorage.getItem('idToken')
      }
    }
    return fetch(`/api/user/${uId}/minutes`, options)
      .then(response => response.json())
  }
}
