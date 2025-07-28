const API_CONFIG = {
  development: "http://localhost:5001",
  production: "https://gn-server-production.up.railway.app",
};

export const getApiUrl = () => {
  const env = import.meta.env.MODE || "development";
  return API_CONFIG[env] || API_CONFIG.development;
};

export const ㅊ = {
  subscribe: "/api/subscribe",
  unsubscribe: "/api/unsubscribe",
  subscribers: "/api/subscribers",
  health: "/api/health",
};
