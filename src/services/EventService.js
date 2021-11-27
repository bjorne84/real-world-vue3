import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'http://my-json-server.typicode.com/bjorne84/fakeapicall/events',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  
export default {
    getEvents() {
      return apiClient.get('/')
    },
    getEvent(id) {
      return apiClient.get('/' + id)
    }
  }