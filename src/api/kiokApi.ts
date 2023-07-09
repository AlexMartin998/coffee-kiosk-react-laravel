import axios from 'axios';

import { getEnvVariables } from '@/shared/helpers';

const { VITE_KIOSK_API_URL } = getEnvVariables();

export const kioskApi = axios.create({ baseURL: VITE_KIOSK_API_URL });
