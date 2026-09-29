import localFont from 'next/font/local';

const InvolveFont = localFont({
    src: [
        {
            path: '../../public/fonts/Involve-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Involve-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Involve-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Involve-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    display: 'swap',
    // Все четыре начертания предзагружались с высоким приоритетом и отъедали
    // канал у LCP-картинки: 126 КБ ещё до того, как страница что-то покажет.
    // При display: swap текст рисуется системным шрифтом сразу, а начертания
    // подтягиваются следом.
    preload: false,
    variable: '--involve',
});

export default InvolveFont;
