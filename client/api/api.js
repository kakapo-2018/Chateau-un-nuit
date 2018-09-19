import request from 'superagent'

export function getAllRooms () {
    return request.get('/v1/home')
      .then(res => {
        console.log(res)
        const home = res.body
        return home
      })
      .catch(() => {
        throw Error('You need to implement an API route for /v1/home')
      })
  }

  export function getRoom (id) {
    return request.get(`/v1/home/${id}`)
      .then(res => {
          console.log(res.body)
          
        const home = res.body
        return home
      })
      .catch(() => {
        throw Error('You need to implement an API route for /v1/home')
      })
  }

  /*   register route   export function register () {
    return request.get('v1/auth/register/${id}')
    .then(res =>  {
        console.log(res.body)

        const home = res.body
        return book  
    })
    .catch(()  => {
      throw Error('You need to implement an API route for /v1/home')  
    })
  }*/





