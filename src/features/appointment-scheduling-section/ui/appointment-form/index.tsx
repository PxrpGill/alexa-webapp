import ButtonIconSVG from '@/public/icons/button-teeth.svg';
import Button from '@/shared/ui/button';
import Checkbox from '@/shared/ui/checkbox';
import Input from '@/shared/ui/input';

import css from './index.module.css';

export default function AppointmentForm() {
    return (
        <form className={`${css.root}`}>
            <div className={css.inputGroup}>
                <Input label="Имя" placeholder="Введите ваше имя" type="text" />
                <Input
                    label="Номер телефона"
                    placeholder="Введите номер телафона"
                    type="tel"
                />
            </div>
            <div className={css.checkboxGroup}>
                <Checkbox
                    label={
                        <p>
                            Согласие на&nbsp;получение рассылки
                            <br /> рекламно-информационных материалов
                        </p>
                    }
                />
                <Checkbox
                    label={
                        <p>
                            Я&nbsp;согласен с&nbsp;политикой конфиденциальности
                            <br />
                            и&nbsp;обработкой персональных данных
                        </p>
                    }
                />
            </div>
            <Button
                className={css.button}
                rightIcon={<ButtonIconSVG className={css.icon} />}
            >
                Записаться на приём
            </Button>
        </form>
    );
}
