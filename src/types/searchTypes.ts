export interface optionTypes {
  value: string | null;
  label: string | null;
}


export interface SearchTypes {
  searchRef: React.RefObject<HTMLInputElement>;
  submitClick: () => void;
}
