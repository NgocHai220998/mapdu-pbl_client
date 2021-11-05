export const jsonHeader = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

export const parseJSON = response => {
  let res = response.json()
  return res
}

export const jsonHeaderAuth = () => {
  let user = null
  if (user)
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.jwt}`
    }

  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
}

export const requestWithToken = token => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}

export const postMethod = {
  method: 'POST',
}

export const getMethod = {
  method: 'GET'
}

export const deleteMethod = {
  method: 'DELTE',
}

export const putMethod = {
  method: 'PUT'
}