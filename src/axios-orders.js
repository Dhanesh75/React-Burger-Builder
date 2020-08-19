import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://react-my-burger-c8345.firebaseio.com/'
});

export default instance;