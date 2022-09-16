import SidebarItem from "./SidebarItem/SidebarItem";
import s from "./Sidebar.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { showSidebar, sidebarSelector } from "../../store/slices/SidebarSlice";
import { NavLink } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { LoadUserInfoQuery } from "../../api/LoadUserInfoQuery";

interface IMenuProps {}
const Sidebar: React.FC<IMenuProps> = () => {
  const dispatch = useAppDispatch();
  const { sidebar } = useAppSelector(sidebarSelector);
  const {data} = useQuery(LoadUserInfoQuery);
  let collapsed = {
    left: "-224px",
  };

  return (
    <>
      <div className={s.menuDown} style={!sidebar ? collapsed : undefined}>
        <div className={s.emptyDiv}></div>
        <div className={s.menuItem}>
          <NavLink
            className={s.link}
            to="/profile"
            onClick={() => dispatch(showSidebar())}
            style={({ isActive }) => ({
              background: isActive ? '#252538' : '#404064',
              color: isActive ? '#E5C465' : '#ffffff',
            })}
          >
            <SidebarItem text={data?.currentUser.firstName} secondName={data?.currentUser.secondName} iconId={"user"} />
          </NavLink>
        </div>

        <div className={s.menuItem}>
          <NavLink
            className={s.link}
            to="/home"
            onClick={() => dispatch(showSidebar())}
            style={({ isActive }) => ({
              background: isActive ? '#252538' : '#404064',
              color: isActive ? '#E5C465' : '#ffffff',
            })}
          >
            <SidebarItem text="Список процессов" iconId={"processesIcon"} />
          </NavLink>
        </div>
      </div>
      {sidebar ? (
        <div className={s.blur} onClick={() => dispatch(showSidebar())} />
      ) : null}
    </>
  );
};

export default Sidebar;
