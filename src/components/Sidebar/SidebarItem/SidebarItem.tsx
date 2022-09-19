import React from "react";
import { GlobalSvgSelector } from "../../../icons/global/globalSvgSelector";

import s from "./SidebarItem.module.scss";

interface IMenuItemProps {
  iconId: string;
  text: string;
  secondName?: string;
}

const SidebarItem: React.FC<IMenuItemProps> = (props: any) => {
  return (
    <>
      <div className={s.icon}>
        <GlobalSvgSelector id={props.iconId} />
      </div>
      <div className={s.itemText}>
        {props.text} {props.secondName}
      </div>
    </>
  );
};

export default SidebarItem;
