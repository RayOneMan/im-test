import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { GlobalSvgSelector } from "../../icons/global/globalSvgSelector";
import { showSidebar, sidebarSelector } from "../../store/slices/SidebarSlice";
import Sidebar from "../Sidebar/Sidebar";

import s from "./Header.module.scss";

export default function Header() {
  const dispatch = useAppDispatch();
  const { sidebar } = useAppSelector(sidebarSelector);

  let activeStyleBlock = {
    color: "#ffffff",
  };

  return (
    <nav className={s.header}>
      <div
        className={s.topbar}
        onClick={() => dispatch(showSidebar())}
        style={sidebar ? activeStyleBlock : undefined}
      >
        <div
          className={s.topbarIcon}
          style={sidebar ? { fill: "#ffffff" } : { fill: "#6879BB" }}
        >
          <GlobalSvgSelector id="sidebarIcon" />
        </div>
        <div className={s.title}>
          {sidebar ? <GlobalSvgSelector id="procest" /> : <>Меню</>}
        </div>
      </div>
      <Sidebar />
    </nav>
  );
}
