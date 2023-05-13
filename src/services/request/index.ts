import { LOCAL_STORAGE_TOKEN } from '@/constants';
import { Service, http } from '@nxglabs-lib/request';

http.interceptors.request.use(
  (config: any) => {
    // 在请求发出之前进行拦截
    // 可以在这里添加一些公共的请求头或者参数
    const { headers } = config;
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
    if (headers) {
      headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: any) => {
    // 处理请求错误
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response: { data: any }) => {
    // 在响应返回之后进行拦截
    // 可以在这里统一处理错误码或者数据格式等问题
    return response.data;
  },
  (error: any) => {
    // 处理响应错误
    return Promise.reject(error);
  },
);

const service = new Service({
  baseUrl: 'http://api.example.com',
  http: http,
});

export { service };
