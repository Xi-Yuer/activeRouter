import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'http://localhost:3000'
function getUserRoutes(uid) {
  return axios({
    method: 'POST',
    url: '/user_router_auth',
    header: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify({ uid }),
  })
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

export { getUserRoutes }
