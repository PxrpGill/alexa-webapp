import Link from 'next/link';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import Button from '@/shared/ui/button';
import Checkbox from '@/shared/ui/checkbox';
import Input from '@/shared/ui/input';

import css from './index.module.css';

export default function ModalForm() {
    return (
        <form className={css.root}>
            <div className={css.inputs}>
                <Input placeholder="Ваше имя" className={css.input} />
                <Input
                    placeholder="Номер телефона"
                    type="tel"
                    className={css.input}
                />
            </div>
            <div className={css.documents}>
                <Checkbox
                    label={
                        <p className={css.label}>
                            Я&nbsp;согласен с&nbsp;
                            <Link
                                href={SITE_NAVIGATION.privacyPolicy}
                                target="_blank"
                            >
                                политикой конфиденциальности
                            </Link>{' '}
                            и&nbsp;
                            <Link
                                href={SITE_NAVIGATION.userAgreement}
                                target="_blank"
                            >
                                обработкой персональных данных
                            </Link>
                        </p>
                    }
                />
                <Checkbox
                    label={
                        <p className={css.label}>
                            <Link href={SITE_NAVIGATION.letter} target="_blank">
                                Согласие на&nbsp;получение рассылки
                                рекламно&#8209;информационных материалов
                            </Link>
                        </p>
                    }
                />
            </div>
            <Button className={css.button} theme="transparent">
                Оставить заявку
            </Button>
        </form>
    );
}
