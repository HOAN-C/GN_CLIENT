const API_CONFIG = {
  development: "http://localhost:5001",
  production: "https://api.gachonnotifier.site",
};

export const getApiUrl = () => {
  const env = import.meta.env.MODE;
  return API_CONFIG[env] || API_CONFIG.development;
};

export const API_ENDPOINTS = {
  subscribe: "/api/subscribe",
  unsubscribe: "/api/unsubscribe",
  subscriberCount: "/api/subscriber/count",
  health: "/api/health",
};
