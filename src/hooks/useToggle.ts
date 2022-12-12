import { useRecoilState } from "recoil";
import { initialValues } from "../recoil/atoms";
type UseToggleReturnType = [boolean, (nv?: boolean) => void];

const useToggle = (initialValue: boolean = false): UseToggleReturnType => {
  const [isToggled, setIsToggled] = useRecoilState<boolean>(initialValues);
  const onToggle = (): void => {
    setIsToggled(!isToggled);
  };
  return [isToggled, onToggle];
};

export default useToggle;
