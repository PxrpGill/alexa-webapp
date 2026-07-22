import Link from 'next/link';

import LogoSvg from '@/public/icons/logo.svg';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';

import ContactPart from './contact-part';
import css from './index.module.css';

export default function Header() {
    return (
        <header className={`${css.root} container`}>
            <div className={css.wrapper}>
                <Link className={css.link} href={SITE_NAVIGATION.base}>
                    <LogoSvg className={css.logo} />
                </Link>
                <ContactPart />
            </div>
        </header>
    );
}
