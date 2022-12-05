import { Dispatch, SetStateAction } from "react";

export interface IoptionTypes {
  isOrderValue: string;
  setIsOrderValue: Dispatch<SetStateAction<string>>;
  isSortValue: string;
  setIsSortValue: Dispatch<SetStateAction<string>>;
}
