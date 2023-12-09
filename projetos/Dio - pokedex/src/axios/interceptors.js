const requestInterceptor = (config) => config;

// Com a config abaixo não será necesspario utilizar response.data apenas data na responses
const responseSuccessInterceptor = (response) => response.data;

// Com a config abaixo não será necesspario utilizar response.data apenas data na responses
const responseErrorInterceptor = (error) => {
  const response = error.response || error;
  return Promise.reject(response.data || response);
};

module.exports = {
  requestInterceptor,
  responseSuccessInterceptor,
  responseErrorInterceptor,
};
