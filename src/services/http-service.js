import Axios from 'axios';
import { httpConstants } from '../utils/constants'

class HTTPService {

    fetchUserInfo(username) {
        const endpoint = httpConstants.ENDPOINT;
        const method = httpConstants.GET_USER;
        const param = username;
        return Axios.get(endpoint + method + param);
    }

    updateUserInfo(username, field) {
        const endpoint = httpConstants.ENDPOINT;
        const method = httpConstants.UPDATE_USER;
        const param = username;
        const data = {
            params: { ...field }
        }
        return Axios.put(endpoint + method + param, data);
    }

    createUser(params) {
        const endpoint = httpConstants.ENDPOINT;
        const method = httpConstants.CREATE_USER;
        const data = {
            ...params
        }
        return Axios.post(endpoint + method, data);
    }
}

export default HTTPService;