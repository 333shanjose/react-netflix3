import axios from 'axios'
import { BaseUrl } from './constants/constants'
const instance=axios.create({
   baseUrl:BaseUrl
})
export default instance