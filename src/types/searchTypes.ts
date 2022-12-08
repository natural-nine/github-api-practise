export interface optionTypes {
  value: string;
  label: string;
}


export interface SearchTypes {
  searchRef: React.RefObject<HTMLInputElement>;
  submitClick: () => void;
}
