import Header from "../../components/Header/Header";
import ProcessList from "../../components/ProcessList/ProcessList";

import s from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={s.wrapper}>
        <Header />
        <div className={s.container}>
          <ProcessList />
        </div>
      </div>
    </>
  );
}
