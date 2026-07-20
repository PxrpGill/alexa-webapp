import type { PropsWithClassName } from '@/shared/types/props-with-classname';

export type SectionHeaderProps = { title?: string } & PropsWithClassName;

export type PreventionSectionProps = {
  sectionHeader?: SectionHeaderProps;
  content?: string;
} & PropsWithClassName;
