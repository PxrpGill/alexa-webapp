import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import {
    ADULT_STOM_NAV,
    CHILD_STOM_NAV,
    STOM_INFO,
} from '../../models/footer.constants';

import FooterNavList from './footer-nav-list';
import css from './index.module.css';
import StartPart from './start-part';

export default function Footer() {
    return (
        <AnimationWrapper
            as="footer"
            className={`${css.root} container`}
            direction="fade"
        >
            <StartPart />
            <FooterNavList title="Детская стоматология" list={CHILD_STOM_NAV} />
            <FooterNavList
                title="Взрослая стоматология"
                list={ADULT_STOM_NAV}
            />
            <FooterNavList title="Информация" list={STOM_INFO} />
        </AnimationWrapper>
    );
}
