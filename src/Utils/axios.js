import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { devEnv } from '../Config/env';


const headers = {};
const AxiosInstance = axios.create({
    baseURL: 'http://ec2-3-8-234-225.eu-west-2.compute.amazonaws.com:4242',
    headers
});

AxiosInstance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('userToken');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
);

export default AxiosInstance;




