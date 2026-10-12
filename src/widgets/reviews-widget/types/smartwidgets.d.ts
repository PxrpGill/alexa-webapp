declare global {
    interface Window {
        /**
         * Пересканирует DOM и поднимает все контейнеры `.sw-app[data-app]`.
         * Объявляется загрузчиком SmartWidgets (`res.smartwidgets.ru/app.js`).
         */
        swAppRefresh?: () => void;
    }
}

export {};
