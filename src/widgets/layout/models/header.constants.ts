import BreakTeeth from '@/public/icons/break-teeth.svg';
import BubblesSVG from '@/public/icons/bubbles.svg';
import CatalogSVG from '@/public/icons/catalog.svg';
import DashBoardSVG from '@/public/icons/dashboard.svg';
import DmsSVG from '@/public/icons/dms.svg';
import DoctorSVG from '@/public/icons/doctor.svg';
import KlinikaSVG from '@/public/icons/klinika.svg';
import KnifeSVG from '@/public/icons/knife.svg';
import ManSVG from '@/public/icons/man.svg';
import PriceSVG from '@/public/icons/money.svg';
import MouthSVG from '@/public/icons/mouth.svg';
import NadzorniyOrgani from '@/public/icons/nadzorniy-organy.svg';
import NalogSVG from '@/public/icons/nalog.svg';
import PacientSVG from '@/public/icons/pacient.svg';
import PromoSVG from '@/public/icons/promo.svg';
import QrSVG from '@/public/icons/qr.svg';
import SmileSVG from '@/public/icons/smile.svg';
import TwoTeeth from '@/public/icons/two-teeth.svg';
import WindowSVG from '@/public/icons/window.svg';
import ZubSVG from '@/public/icons/zub.svg';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import type { HeaderMenuLinksType } from '@/shared/types/header-menu-links.types';

export const HEADER_NAVIGATION_ADULT_DENTISTRY_LINKS: HeaderMenuLinksType = [
    {
        title: 'Консультация стоматолога',
        description: 'Ваша здоровая улыбка начинается здесь',
        IconSvg: SmileSVG,
        href: SITE_NAVIGATION['konsultaciya-stomatologa'],
    },
    {
        title: 'Ортодонтия',
        description:
            'Коррекция и&nbsp;устранения аномалий зубочелюстной системы',
        IconSvg: ZubSVG,
        href: SITE_NAVIGATION['ortodontiya-vz'],
    },
    {
        title: 'Гигиена и&nbsp;профилактика',
        description: 'Откройте для себя преимущества профессиональной гигиены',
        IconSvg: BubblesSVG,
        href: SITE_NAVIGATION['gigiena-i-profilaktika-vz'],
    },
    {
        title: 'Лечение &laquo;во&nbsp;сне&raquo;',
        description: 'Просыпайтесь с&nbsp;идеальной улыбкой',
        IconSvg: WindowSVG,
        href: SITE_NAVIGATION['lechenie-vo-sne-vz'],
    },
    {
        title: 'Терапия',
        description: 'Здоровье ваших зубов&nbsp;&mdash; наша миссия',
        IconSvg: DoctorSVG,
        href: SITE_NAVIGATION['terapiya-vz'],
    },
    {
        title: 'Пародонтология',
        description: 'Своевременная оценка состояния десен',
        IconSvg: TwoTeeth,
        href: SITE_NAVIGATION.parodontologiya,
    },
    {
        title: 'Хирургия и&nbsp;имплантация',
        description: 'Мы&nbsp;найдем лучшее решение для вашей улыбки',
        IconSvg: KnifeSVG,
        href: SITE_NAVIGATION['hirurgiya-i-implantaciya'],
    },
    {
        title: 'Гнатология',
        description: 'Лечение нарушений височно-нижнечелюстного сустава',
        IconSvg: BreakTeeth,
        href: SITE_NAVIGATION.gnatologiya,
    },
    {
        title: 'Ортопедия',
        description: 'С&nbsp;интраоральным сканером Detsply Sirona PrimeScan',
        IconSvg: MouthSVG,
        href: SITE_NAVIGATION['ortopediya-vz'],
    },
];

export const HEADER_NAVIGATION_PEDIATRIC_DENTISTRY: HeaderMenuLinksType = [
    {
        title: 'Консультация детского стоматолога',
        description: 'Первый шаг к&nbsp;здоровым зубам вашего ребенка',
        href: SITE_NAVIGATION['konsultaciya-detskogo-stomatologa'],
        IconSvg: SmileSVG,
    },
    {
        title: 'Детская хирургия полости рта',
        description: 'Безопасные и&nbsp;комфортные хирургические процедуры',
        href: SITE_NAVIGATION['detskaya-hirurgiya'],
        IconSvg: KnifeSVG,
    },
    {
        title: 'Гигиена и&nbsp;Профилактика',
        description:
            'Бережный уход за&nbsp;молочными и&nbsp;постоянными зубами',
        href: SITE_NAVIGATION['gigiena-i-profilaktika'],
        IconSvg: BubblesSVG,
    },
    {
        title: 'Ортодонтия',
        description: 'Точная диагностика, эффективные методы лечения',
        href: SITE_NAVIGATION.ortodontiya,
        IconSvg: ZubSVG,
    },
    {
        title: 'Детская терапия',
        description:
            'Эффективное лечение зубов для детей без боли и&nbsp;страха',
        href: SITE_NAVIGATION['detskaya-terapiya'],
        IconSvg: DoctorSVG,
    },
    {
        title: 'Лечение &laquo;во&nbsp;сне&raquo;',
        description: 'Сладкие сны и&nbsp;здоровые зубки',
        href: SITE_NAVIGATION['lechenie-vo-sne'],
        IconSvg: WindowSVG,
    },
];

export const HEADER_NAVIGATION_INFO: HeaderMenuLinksType = [
    {
        title: 'Прейскурант',
        href: SITE_NAVIGATION.price,
        IconSvg: PriceSVG,
    },
    {
        title: 'Надзорные органы',
        href: SITE_NAVIGATION['nadzornye-organy'],
        IconSvg: NadzorniyOrgani,
    },
    {
        title: 'О&nbsp;клинике',
        href: SITE_NAVIGATION['o-klinike'],
        IconSvg: KlinikaSVG,
    },
    {
        title: 'Реквизиты',
        href: SITE_NAVIGATION.rekvizity,
        IconSvg: QrSVG,
    },
    {
        title: 'Врачи',
        href: SITE_NAVIGATION.vrachi,
        IconSvg: DoctorSVG,
    },
    {
        title: 'Вакансии',
        href: SITE_NAVIGATION.vakansii,
        IconSvg: ManSVG,
    },
    {
        title: 'Расписание врачей',
        href: SITE_NAVIGATION.raspisanievrachej,
        IconSvg: DashBoardSVG,
    },
    {
        title: 'Акции',
        href: SITE_NAVIGATION.akcii,
        IconSvg: PromoSVG,
    },
    {
        title: 'Документы и&nbsp;лицензии',
        href: SITE_NAVIGATION['dokumenty-i-licenzii'],
        IconSvg: CatalogSVG,
    },
    {
        title: 'ДМС',
        href: SITE_NAVIGATION.dms,
        IconSvg: DmsSVG,
    },
    {
        title: 'Пациенту',
        href: SITE_NAVIGATION.pacientu,
        IconSvg: PacientSVG,
    },
    {
        title: 'Налоговый вычет',
        href: SITE_NAVIGATION.nalogovyjvychet,
        IconSvg: NalogSVG,
    },
];
