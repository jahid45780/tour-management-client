import config from '@/config';

import axios from 'axios'

 export const axiosInstance = axios.create({
  baseURL: config.baseUrl,
  withCredentials: true,
});


// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  // function (response) {
  //   // Any status code that lie within the range of 2xx cause this function to trigger
  //   // Do something with response data
  //   return response;
  // },
  // function (error) {
  //   // Any status codes that falls outside the range of 2xx cause this function to trigger
  //   // Do something with response error
  //   return Promise.reject(error);
  // }

  (response) => {
       return response;
  }, async (error) => {
      if (error.response.status === 500 &&
       error.response.data.message === 'jwt expired' ) {
            console.log('your token has expired')

            try {
               const res  = await axiosInstance.post('/auth/refresh-token')
               console.log('new  token arrived', res)
            } catch (error){
              console.error(error)
            }

       }

      //  for Everything else, 

       return Promise.reject(error)
  }

);

