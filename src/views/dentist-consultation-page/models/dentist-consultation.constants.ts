import type { BrickworkSectionProps } from '@/widgets/brickwork-section/types/brickwork-section.types';
import type { OurPeopleSectionProps } from '@/widgets/our-people-section/types/our-people-section.types';
import type { QuadroSectionProps } from '@/widgets/quadro-section/types/quadro-section.types';
import type { TitleStickySectionProps } from '@/widgets/tilte-sticky-section/types/title-sticky-section.types';

export const QUADRO_SECTION_MOCK: QuadroSectionProps = {
  sectionHeader: {
    title: 'Полной диагностики за&nbsp;1&nbsp;прием',
    description: 'Ваш путь к&nbsp;безупречной улыбке начинается&nbsp;с',
    card: {
      title: 'Ваша здоровая улыбка начинается здесь! ',
      buttonText: 'Записаться на прием',
    },
    poster: {
      original: {
        src: '/mock/quadro/quadro-desktop.jpg',
      },
    },
  },
  cards: [
    { title: 'Получить точные сведения о&nbsp;состоянии ваших зубов' },
    { title: 'Выбрать наиболее эффективный и&nbsp;безопасный метод лечения' },
    { title: 'Сэкономить время и&nbsp;деньги в&nbsp;будущем' },
    { title: 'Избежать осложнений и&nbsp;ненужных процедур' },
  ],
};

export const TITLE_STICKY_SECTION: TitleStickySectionProps = {
  title: 'Показания к&nbsp;диагностике в&nbsp;клинике &laquo;Алекса&raquo;',
  cards: [
    {
      title:
        'Хотите получить полную картину состояния ваших зубов и&nbsp;полости рта.',
    },
    {
      title:
        'Планируете провести комплексное лечение зубов (имплантация, протезирование, ортодонтия).',
    },
    {
      title:
        'Имеете хронические заболевания, которые могут повлиять на&nbsp;состояние ваших зубов.',
    },
    { title: 'Недавно пережили травму челюсти или зубов.' },
    { title: 'Ищете надежного и&nbsp;опытного стоматолога для всей семьи.' },
    {
      title:
        'Заметили изменения во&nbsp;внешнем виде зубов (цвет, форма, положение).',
    },
    {
      title:
        'Хотите провести профилактический осмотр и&nbsp;получить рекомендации по&nbsp;уходу за&nbsp;зубами.',
    },
    {
      title:
        'Хотите убедиться в&nbsp;безопасности и&nbsp;эффективности планируемого лечения.',
    },
    { title: 'Испытываете дискомфорт или боль в&nbsp;зубах.' },
  ],
  lastCard: {
    poster: {
      original: {
        src: '/mock/sticky-title/title-sticky.jpg',
      },
    },
    buttonText: 'Записаться на прием',
  },
};

export const BRICKWORK_SECTION: BrickworkSectionProps = {
  sectionHeader: {
    title: 'Ваша улыбка в&nbsp;руках профессионалов!',
    description: 'Мы&nbsp;реализуем целостный осмотр для своих пациентов:',
  },
  cards: [
    {
      icon: '/icons/eye.svg',
      title: 'Визуальный и&nbsp;инструментальный осмотр:',
      description: 'Точная оценка состояния ваших зубов и&nbsp;полости рта.',
    },
    {
      icon: '/icons/dms.svg',
      title: 'Сбор полного анамнеза:',
      description:
        'Мы&nbsp;узнаем о&nbsp;вашем здоровье, чтобы построить индивидуальный план лечения.',
    },
    {
      icon: '/icons/graphic.svg',
      title: 'Рентген и&nbsp;компьютерная томография:',
      description:
        'Современные методы диагностики для уверенности в&nbsp;точности диагноза.',
    },
    {
      icon: '/icons/child.svg',
      title: 'Индивидуальный план лечения:',
      description:
        'Мы&nbsp;вместе с&nbsp;вами выберем наиболее подходящий вариант лечения.',
    },
    {
      icon: '/icons/doctor.svg',
      title: 'Консультация с&nbsp;узкими специалистами:',
      description:
        'Если необходимо, мы&nbsp;проведем консилиум с&nbsp;врачами других специальностей (хирурги, ортопеды, ортодонты) для оптимального решения ваших проблем.',
    },
  ],
};

export const EMPLOYEES_SECTION: OurPeopleSectionProps = {
  title:
    'Мы&nbsp;собрали лучших специалистов-стоматологов в&nbsp;клинике &laquo;Алекса&raquo;',
  employees: [
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-1.webp',
        },
      },
      fullname: 'Давыдова Александра Викторовна',
      position: 'Главный врач, врач-стоматолог-терапевт, эндодонтист',
    },
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-2.webp',
        },
      },
      fullname: 'Каплин Ефим Валерьевич',
      position: 'Врач-стоматолог-хирург, ортопед, имплантолог',
    },
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-3.webp',
        },
      },
      fullname: 'Никитин Андрей Максимович',
      position: 'Детский врач-стоматолог',
    },
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-4.webp',
        },
      },
      fullname: 'Золотовская Анастасия Витальевна',
      position: 'Врач-стоматолог-терапевт',
    },
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-5.webp',
        },
      },
      fullname: 'Корамагомедов Рамазан Корамагомедович',
      position: 'Врач-стоматолог-терапевт, эндодонтист, стоматолог-ортопед',
    },
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-6.webp',
        },
      },
      fullname: 'Топоров Артур Игоревич',
      position: 'Врач-анестезиолог-реаниматолог',
    },
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-7.webp',
        },
      },
      fullname: 'Магомедгаджиева Ашрафиль Руслановна',
      position: 'Врач-стоматолог-гигиенист',
    },
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-8.webp',
        },
      },
      fullname: 'Шахназарян Эрик Каренович',
      position: 'Врач-стоматолог-хирург',
    },
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-9.webp',
        },
      },
      fullname: 'Кравченко Павел Сергеевич',
      position: 'Врач-стоматолог-ортодонт',
    },
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-10.webp',
        },
      },
      fullname: 'Никогосян Анна Микаеловна',
      position: 'Детский врач-стоматолог',
    },
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-11.webp',
        },
      },
      fullname: 'Забалуев Александр Валерьевич',
      position: 'Врач-анестезиолог-реаниматолог',
    },
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-12.webp',
        },
      },
      fullname: 'Маркарян Кнарик Робертовна',
      position: 'Врач-стоматолог-терапевт',
    },
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-13.webp',
        },
      },
      fullname: 'Корнилов Герман Валерьевич',
      position: 'Врач-стоматолог-пародонтолог',
    },
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-14.webp',
        },
      },
      fullname: 'Паламарчук Татьяна Васильевна',
      position: 'Ассистент',
    },
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-15.webp',
        },
      },
      fullname: 'Ермакова Полина Максимовна',
      position: 'Ассистент',
    },
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-16.webp',
        },
      },
      fullname: 'Власенко Марина Ильинична',
      position: 'Ассистент',
    },
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-17.webp',
        },
      },
      fullname: 'Харитонова Елена Петровна',
      position: 'Ассистент',
    },
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-18.webp',
        },
      },
      fullname: 'Курганская Елена Павловна',
      position: 'Управляющая',
    },
    {
      poster: {
        webp: {
          src: '/mock/employees/employee-19.webp',
        },
      },
      fullname: 'Осадчая Юлия Александровна',
      position: 'Администратор',
    },
  ],
};
