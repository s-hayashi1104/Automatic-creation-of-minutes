export default {
  signUp: ({ name, password }) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: {
        'content-type': 'application/json'
      }
    }
    return fetch(`/signup`, options)
      .then(response => response.json());
  },
  signIn: ({ name, password }) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: {
        'content-type': 'application/json'
      }
    }
    return fetch(`/signin`, options)
      .then(response => response.json());
  },
  getMinutes: () => {
    const options = {
      method: 'GET'
    }
    return fetch(`/user/${userId}/minutes`, options)
      .then(response => response.json());
  },
  createMinute: ({ name, content }) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ name, content }),
      headers: {
        'content-type': 'application/json'
      }
    }
    return fetch(`/user/${userId}/minutes`, options)
      .then(response => response.json());
  },
  editMinute: ({ name, content }) => {
    const options = {
      method: 'PUT',
      body: JSON.stringify({ name, content }),
      headers: {
        'content-type': 'application/json'
      }
    }
    return fetch(`/user/${userId}/minutes`, options)
      .then(response => response.json());
  },
  deleteMinute: ({ name, content }) => {
    const options = {
      method: 'DELETE',
      body: JSON.stringify({ name, content }),
      headers: {
        'content-type': 'application/json'
      }
    }
    return fetch(`/user/${userId}/minutes`, options)
      .then(response => response.json());
  }
};
