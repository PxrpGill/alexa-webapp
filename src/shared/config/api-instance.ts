import axios, { isAxiosError } from 'axios';

declare module 'axios' {
    interface AxiosRequestConfig {
        isRetry?: boolean;
    }
}

const BASE_URL =
    process.env.API_URL ??
    process.env.NEXT_PUBLIC_API_URL ??
    'http://localhost:8000';

const RETRY_DELAY_MS = 300;
const RETRYABLE_STATUSES = new Set([502, 503, 504]);

const apiInstance = axios.create({ baseURL: BASE_URL, timeout: 30000 });

/**
 * Один повтор GET на транзиентных сбоях: обрыв соединения или 502–504
 * от прокси при рестарте бэкенда. Таймаут не повторяем — второй прогон
 * удвоил бы ожидание и упёрся в proxy_read_timeout nginx.
 *
 * Признак повтора — флаг в самом конфиге: axios клонирует конфиг на каждый
 * запрос, поэтому учёт по ссылке на объект не узнал бы повторный запрос.
 */
apiInstance.interceptors.response.use(undefined, async (error: unknown) => {
    if (!isAxiosError(error) || !error.config) throw error;

    const { config } = error;
    const isTimeoutOrCancel =
        error.code === 'ECONNABORTED' ||
        error.code === 'ETIMEDOUT' ||
        error.code === 'ERR_CANCELED';
    const isTransient = error.response
        ? RETRYABLE_STATUSES.has(error.response.status)
        : !isTimeoutOrCancel;

    if (config.method !== 'get' || !isTransient || config.isRetry) throw error;

    await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));

    return apiInstance({ ...config, isRetry: true });
});

export default apiInstance;
