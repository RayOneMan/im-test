import React from "react";
import { GlobalSvgSelector } from "../../../../icons/global/globalSvgSelector";

import s from "./ProcessItemCount.module.scss";
interface IProcessItemCountProps {
  countReplay: Number;
}

const ProcessItemCount: React.FC<IProcessItemCountProps> = (
  props: any
): any => {
  return (
    <div className={s.wrapper}>
      <div className={s.iconWrapper}>
        <GlobalSvgSelector id="repet" />
      </div>
      <div className={s.textWrapper}>
        <div className={s.text}> {props.countReplay}</div>
        <div className={s.subText}>выполнено раз</div>
      </div>
    </div>
  );
};

export default ProcessItemCount;
