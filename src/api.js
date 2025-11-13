import axios from 'axios';
import { API_CONFIG } from './config';

// Create axios instance with default configuration
const apiClient = axios.create(API_CONFIG);

// Request interceptor for API calls
apiClient.interceptors.request.use(
  config => {
    // You can add auth tokens here if needed
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
apiClient.interceptors.response.use(
  response => response,
  error => {
    // Handle common errors here
    if (error.response?.status === 401) {
      // Unauthorized - could redirect to login
      console.warn('Unauthorized access');
    }
    return Promise.reject(error);
  }
);

export default apiClient;
