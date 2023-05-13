import { service } from './request';

export const getExample = (params: any) => {
  return service.call({
    apiName: '/example',
    params,
    options: {
      method: 'GET',
    },
  });
};
