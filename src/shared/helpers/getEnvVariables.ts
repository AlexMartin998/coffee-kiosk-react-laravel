export const getEnvVariables = () => ({
  VITE_MODE: import.meta.env.VITE_MODE,
  VITE_KIOSK_API_URL: import.meta.env.VITE_KIOSK_API_URL,
});
