/** biome-ignore-all lint/suspicious/noArrayIndexKey: row order is stable mock data, not reorderable */

import { DAYS_OF_WEEK } from '../../models/doctor-schedules-section.constants';
import type { DoctorSchedulesTableProps } from '../../types/doctor-schedules-section.types';

import css from './index.module.css';

export default function DoctorSchedulesTable({
    rows,
}: DoctorSchedulesTableProps) {
    return (
        <div className={css.wrapper}>
            <div className={`${css.row} ${css.headerRow}`}>
                <div className={css.cell} />
                {DAYS_OF_WEEK.map((day) => (
                    <div
                        className={`${css.cell} ${css.headerCell}`}
                        key={day.key}
                    >
                        {day.label}
                    </div>
                ))}
            </div>
            <div className={css.root}>
                {rows.map((row, index) => (
                    <div
                        className={`${css.row} ${index % 2 === 0 ? css.rowDark : css.rowLight}`}
                        key={`${row.fullname}-${index}`}
                    >
                        <div className={`${css.cell} ${css.fullname}`}>
                            {row.fullname}
                        </div>
                        {DAYS_OF_WEEK.map((day) => {
                            const slot = row.schedule[day.key];
                            return (
                                <div className={css.cell} key={day.key}>
                                    {slot ? `${slot.start}–${slot.end}` : null}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}
