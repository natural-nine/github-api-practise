import { useState } from "react";
type UseToggleReturnType = [boolean, (nv?: boolean) => void];

const useToggle = (initialValue: boolean = false): UseToggleReturnType => {
  const [isToggled, setIsToggled] = useState<boolean>(initialValue);
  const onToggle = (): void => {
    setIsToggled(!isToggled);
  };
  return [isToggled, onToggle];
};

export default useToggle;
