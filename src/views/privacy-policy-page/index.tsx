import DocumentHero from '@/widgets/document-hero';

import css from './index.module.css';
import { DOCUMENT_HERO_MOCK } from './models/privacy-policy-page.constants';

export default function PrivacyPolicyPage() {
    return (
        <main className={css.root}>
            <DocumentHero {...DOCUMENT_HERO_MOCK} />
        </main>
    );
}
