import React from "react";
import { NavLink } from "react-router-dom";
import { GlobalSvgSelector } from "../../../../icons/global/globalSvgSelector";
import s from "./ProcessItemTitle.module.scss";
interface IProcessItemTitleProps {
  nameProcess: string;
}

const ProcessItemTitle: React.FC<IProcessItemTitleProps> = (
  props: any
): any => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{props.nameProcess}</h2>
      <NavLink className={s.link} to={"/*"}>
        <div className={s.linkTitle}>На карту процесса</div>
        <div className={s.icon}>
          <GlobalSvgSelector id="arrow" />
        </div>
      </NavLink>
    </div>
  );
};

export default ProcessItemTitle;
