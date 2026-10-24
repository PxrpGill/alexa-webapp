import { isAxiosError } from 'axios';

/**
 * Единый catch для серверных GET-фетчеров под ISR.
 *
 * 404 от бэкенда — легитимное «такой записи нет»: возвращаем undefined,
 * и страница уходит в notFound(). Любая другая ошибка (таймаут, 5xx, обрыв
 * соединения) пробрасывается: Next при упавшей ревалидации продолжает отдавать
 * последнюю удачную версию страницы, а если проглотить ошибку, в кэш на окно
 * ревалидации попадёт пустая страница или ложный 404.
 */
export const handleFetchError = (error: unknown): undefined => {
    if (isAxiosError(error) && error.response?.status === 404) return;

    console.error(error);

    throw error;
};
