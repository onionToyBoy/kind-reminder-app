export interface ISelectLanguageProps {
  selected: string;
  onSelect: (lang: 'en' | 'ru') => void;
}
