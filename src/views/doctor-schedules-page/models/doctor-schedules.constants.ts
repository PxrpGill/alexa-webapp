import type {
  DoctorSchedulesSectionProps,
  TimeSlot,
} from '@/widgets/doctors-schedules-section/types/doctor-schedules-section.types';

const WORK_HOURS: TimeSlot = { start: '09:00', end: '18:00' };

export const DOCTOR_SCHEDULES_SECTION: DoctorSchedulesSectionProps = {
  title: 'Расписание врачей',
  rows: [
    {
      fullname: 'Кравченко Павел Сергеевич',
      schedule: {
        monday: WORK_HOURS,
        tuesday: null,
        wednesday: null,
        thursday: WORK_HOURS,
        friday: null,
        saturday: WORK_HOURS,
      },
    },
    {
      fullname: 'Никогосян Анна Микаеловна',
      schedule: {
        monday: null,
        tuesday: WORK_HOURS,
        wednesday: null,
        thursday: WORK_HOURS,
        friday: null,
        saturday: WORK_HOURS,
      },
    },
    {
      fullname: 'Каплин Ефим Валерьевич',
      schedule: {
        monday: WORK_HOURS,
        tuesday: null,
        wednesday: WORK_HOURS,
        thursday: null,
        friday: WORK_HOURS,
        saturday: null,
      },
    },
    {
      fullname: 'Магомедгаджиева Ашрафиль Руслановна',
      schedule: {
        monday: WORK_HOURS,
        tuesday: WORK_HOURS,
        wednesday: WORK_HOURS,
        thursday: WORK_HOURS,
        friday: WORK_HOURS,
        saturday: WORK_HOURS,
      },
    },
    {
      fullname: 'Никитин Андрей Максимович',
      schedule: {
        monday: WORK_HOURS,
        tuesday: WORK_HOURS,
        wednesday: null,
        thursday: WORK_HOURS,
        friday: WORK_HOURS,
        saturday: WORK_HOURS,
      },
    },
    {
      fullname: 'Корамагомедов Рамазан Корамагомедович',
      schedule: {
        monday: null,
        tuesday: WORK_HOURS,
        wednesday: WORK_HOURS,
        thursday: WORK_HOURS,
        friday: WORK_HOURS,
        saturday: WORK_HOURS,
      },
    },
    {
      fullname: 'Золотовская Анастасия Витальевна',
      schedule: {
        monday: WORK_HOURS,
        tuesday: null,
        wednesday: WORK_HOURS,
        thursday: null,
        friday: null,
        saturday: null,
      },
    },
    {
      fullname: 'Маркарян Кнарик Робертовна',
      schedule: {
        monday: WORK_HOURS,
        tuesday: WORK_HOURS,
        wednesday: WORK_HOURS,
        thursday: WORK_HOURS,
        friday: null,
        saturday: null,
      },
    },
    {
      fullname: 'Давыдова Александра Викторовна',
      schedule: {
        monday: WORK_HOURS,
        tuesday: null,
        wednesday: WORK_HOURS,
        thursday: WORK_HOURS,
        friday: WORK_HOURS,
        saturday: null,
      },
    },
    {
      fullname: 'Шахназарян Эрик Каренович',
      schedule: {
        monday: null,
        tuesday: WORK_HOURS,
        wednesday: null,
        thursday: null,
        friday: null,
        saturday: WORK_HOURS,
      },
    },
  ],
};
