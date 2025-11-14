// Centralized API configuration
// In development, use proxy (empty string = same origin)
// In production, use full URL from environment variable
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? (process.env.VUE_APP_API_URL || 'http://127.0.0.1:8000')
  : (process.env.VUE_APP_API_URL || ''); // Empty = use proxy

export const API_CONFIG = {
  baseURL: API_BASE_URL,
  withCredentials: true,
  timeout: 10000
};

// API endpoints
// If using proxy (API_BASE_URL is empty), paths are relative
export const API_ENDPOINTS = {
  portfolio: `${API_BASE_URL}/api/portfolio`,
  user: `${API_BASE_URL}/api/user`,
  adminLogin: `${API_BASE_URL}/api/admin/login`,
  adminLogout: `${API_BASE_URL}/api/admin/logout`,
  csrfCookie: `${API_BASE_URL}/sanctum/csrf-cookie`,
  contact: `${API_BASE_URL}/api/contact`
};

export default API_CONFIG;
