import { Outlet } from "react-router-dom";
import { GlobalSvgSelector } from "../../icons/global/globalSvgSelector";

import s from "./Auth.module.scss";

type Props = {};

const Auth = (props: Props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.logo}>
          <GlobalSvgSelector id="logo" />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Auth;
