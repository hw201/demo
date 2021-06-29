import axios from "axios"


export function request(config) {

  const instace = axios.create({
    baseUrl: 'http://localhost',
    timeout: 5000,
  })
  return instace(config)
}


