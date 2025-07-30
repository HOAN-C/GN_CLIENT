const API_CONFIG = {
  development: "http://localhost:5001",
  production: "http://3.27.187.244:5000",
};

export const getApiUrl = () => {
  const env = import.meta.env.MODE;
  return API_CONFIG[env] || API_CONFIG.development;
};

export const API_ENDPOINTS = {
  subscribe: "/api/subscribe",
  unsubscribe: "/api/unsubscribe",
  subscribers: "/api/subscribers",
  health: "/api/health",
};
