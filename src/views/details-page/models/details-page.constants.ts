import type { DetailsSectionProps } from '@/widgets/details-section/types/details-section.types';

export const DETAILS_SECTION_MOCK: DetailsSectionProps = {
    title: 'Реквизиты',
    cards: [
        {
            title: 'Полное наименование',
            content:
                '<p>Общество с&nbsp;ограниченной ответственностью &laquo;Алекса&raquo;</p>',
        },
        {
            title: 'Сокращенное наименование',
            content: '<p>ООО &laquo;Алекса&raquo;</p>',
        },
        {
            title: 'Фактический адрес',
            content:
                '<p>344092, г. Ростов-на-Дону, ул. Волкова, д.&nbsp;22;</p><p>346715, Ростовская область, Аксайский район, п. Янтарный, ул. Ландышевая, д.&nbsp;104</p>',
        },
        {
            title: 'Юридический адрес',
            content:
                '<p>344092, г. Ростов-на-Дону, ул. Волкова, д.&nbsp;22</p>',
        },
        {
            title: 'Почтовый адрес',
            content:
                '<p>344092, Ростовская область, г. Ростов-на-Дону, ул. Волкова, д.&nbsp;22</p>',
        },
        {
            title: 'Электронная почта',
            content:
                "<p><a href='mailto:oooalexa@bk.ru'>oooalexa@bk.ru</a></p>",
        },
        {
            title: 'ОГРН',
            content: '1096193002597',
        },
        {
            title: 'ИНН/КПП',
            content: '6161055650/616101001',
        },
        {
            title: 'Телефон',
            content:
                "<p><a href='tel:+7 (918) 555-02-96'>+7 (918) 555-02-96</a></p><p><a href='tel:+7 (918) 550-12-24'>+7 (918) 550-12-24</a></p>",
        },
    ],
};
