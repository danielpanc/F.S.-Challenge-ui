import config from '../config'

const METHODS = {
  POST: 'POST',
  GET: 'GET'
}

const getHeaders = (token) => {
  if (token) {
    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  }
}

const call = (endPoint, payload, token, method) => {
  return new Promise((resolve, reject) => {
    const headers = getHeaders(token)
    const url = `${config.api}${endPoint}`

    const content = {
      ...headers,
      method,
      body: JSON.stringify(payload)
    }

    fetch(url, content).then((response) => {
      resolve(response)
    })
  })
}

const ApiService = {
  post: (endPoint, payload, token) => {
    return  call(endPoint, payload, token, METHODS.POST)
  },
  get: (endPoint, payload, token) => {
    return  call(endPoint, payload, token, METHODS.GET)
  }
}

export default ApiService