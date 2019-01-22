export default {
  signUp: ({ name, password }) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: {
        'content-type': 'application/json'
      }
    }
    return fetch('/signup', options)
      .then(response => response.json())
  },
  signIn: ({ name, password }) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: {
        'content-type': 'application/json'
      }
    }
    return fetch('/signin', options)
      .then(response => response.json())
  },
  getMinutes: (userId) => {
    const options = {
      method: 'GET'
    }
    return fetch(`/user/${userId}/minutes`, options)
      .then(response => response.json())
  },
  createMinute: (userId, { name, content }) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ name, content }),
      headers: {
        'content-type': 'application/json'
      }
    }
    return fetch(`/user/${userId}/minutes`, options)
      .then(response => response.json())
  },
  editMinute: (userId, { name, content }) => {
    const options = {
      method: 'PUT',
      body: JSON.stringify({ name, content }),
      headers: {
        'content-type': 'application/json'
      }
    }
    return fetch(`/user/${userId}/minutes`, options)
      .then(response => response.json())
  },
  deleteMinute: (userId, { name, content }) => {
    const options = {
      method: 'DELETE',
      body: JSON.stringify({ name, content }),
      headers: {
        'content-type': 'application/json'
      }
    }
    return fetch(`/user/${userId}/minutes`, options)
      .then(response => response.json())
  }
}
