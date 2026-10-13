/** Сколько держится кадр-картинка, если у неё не задан свой duration */
export const STORY_IMAGE_DURATION = 7000;

/** Ключ localStorage со списком id просмотренных групп */
export const VIEWED_STORIES_KEY = 'aleksa-viewed-stories';

/** Удержание дольше этого времени считаем паузой, а не кликом */
export const HOLD_THRESHOLD_MS = 200;

/** Горизонтальный сдвиг, после которого жест считается свайпом */
export const SWIPE_THRESHOLD_PX = 50;

/** Вертикальный свайп вниз закрывает просмотрщик */
export const SWIPE_CLOSE_THRESHOLD_PX = 100;
