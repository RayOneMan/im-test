import s from "./EditFormError.module.scss";
import { GlobalSvgSelector } from "../../../icons/global/globalSvgSelector";

interface IErrorProps {
  msg: string | null;
}

const EditFormError: React.FC<IErrorProps> = ({ msg }: any) => {
  return (
    <>
      <div className={s.form__error}>
        <GlobalSvgSelector id="attention" />
        <span>{msg}</span>
      </div>
    </>
  );
};

export default EditFormError;
