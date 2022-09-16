import s from "../Input/MyInput.module.scss";
import { GlobalSvgSelector } from "../../../icons/global/globalSvgSelector";
import { useState } from "react";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<string, any>;

const MyInputPassword: React.FC<Props> = ({ input, meta, ...rest }: Props) => {
  const [passwordShown, setVisible] = useState(false);
  return (
    <div>
      <input
        className={s.myField}
        type={!passwordShown ? "password" : "text"}
        {...input}
        {...rest}
      />
      <button
        className={s.form__eye}
        type="button"
        onClick={() => setVisible(!passwordShown)}
      >
        {passwordShown ? (
          <GlobalSvgSelector id="openEye" />
        ) : (
          <GlobalSvgSelector id="closedEye" />
        )}
      </button>
    </div>
  );
};

export default MyInputPassword;
