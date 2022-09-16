import { EditForm } from "../../components/EditForm/EditForm";
import Header from "../../components/Header/Header";

import s from "./EditUser.module.scss";

export default function EditUser() {
  return (
    <>
      <div className={s.wrapper}>
        <Header />
        <div className={s.container}>
          <EditForm />
        </div>
      </div>
    </>
  );
}
