/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { SectionHeaderProps } from '../../types/prevention-section.types';

import css from './index.module.css';

export default function SectionHeader({
  title,
  className,
}: SectionHeaderProps) {
  if (!title) return null;

  return (
    <div className={`${css.root} ${className}`}>
      <h2 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
    </div>
  );
}
