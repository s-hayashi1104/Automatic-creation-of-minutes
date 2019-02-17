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
  getMinutes: (userId) => {
    const options = {
      method: 'GET',
      headers: {
        'x-access-token': localStorage.getItem('idToken')
      }
    }
    return fetch(`/api/user/minutes`, options)
      .then(response => response.json())
  },
  createMinute: (userId, { name, content }) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ name, content }),
      headers: {
        'content-type': 'application/json',
        'x-access-token': localStorage.getItem('idToken')
      }
    }
    return fetch(`/api/user/minutes`, options)
      .then(response => response.json())
  },
  editMinute: (userId, { name, content }) => {
    const options = {
      method: 'PUT',
      body: JSON.stringify({ name, content }),
      headers: {
        'content-type': 'application/json',
        'x-access-token': localStorage.getItem('idToken')
      }
    }
    return fetch(`/api/user/minutes`, options)
      .then(response => response.json())
  },
  deleteMinute: (userId, { name, content }) => {
    const options = {
      method: 'DELETE',
      body: JSON.stringify({ name, content }),
      headers: {
        'content-type': 'application/json',
        'x-access-token': localStorage.getItem('idToken')
      }
    }
    return fetch(`/api/user/minutes`, options)
      .then(response => response.json())
  }
}
