import React from "react";

import ProcessItemStatistic from "./ProcessItemStatistic/ProcessItemStatistic";
import ProcessItemTitle from "./ProcessItemTitle/ProcessItemTitle";
import moment from "moment";
import "moment/locale/ru";
import s from "./ProcessItem.module.scss";
import getHourAndMin from "../../../utils/getHourseAndMinutes";
import {
  getDeclinationEmployees,
  getDeclinationScenario,
} from "../../../utils/getDeclination";
import ProcessItemCount from "./ProcessItemCount/ProcessItemCount";
import ProcessItemDate from "./ProcessItemDate/ProcessItemDate";

interface IPropcessItemProps {
  id: string;
  name: string;
  countReplay: Number;
  averageExecutionTime: Number;
  averageActiveTime: Number;
  staff: Number;
  scenarios: Number;
  start: Number;
  end: Number;
  loading: Number;
}

const ProcessItem: React.FC<IPropcessItemProps> = (props: any): any => {
  return (
    <div className={s.container} key={props.id}>
      <ProcessItemTitle nameProcess={props.name} />
      <hr className={s.line}></hr>
      <div className={s.wrapper}>
        <ProcessItemCount countReplay={props.countReplay} />
        <div className={s.statisticWrapper}>
          <ProcessItemStatistic
            text={getHourAndMin(props.averageExecutionTime)}
            iconId={"time"}
            subText={"среднее время выполнения"}
          />
          <ProcessItemStatistic
            text={getHourAndMin(
              props.averageActiveTime,
              props.averageExecutionTime
            )}
            iconId={"timeAvg"}
            subText={"среднее активное время"}
          />
        </div>
        <div className={s.statisticWrapper}>
          <ProcessItemStatistic
            text={props.staff + getDeclinationEmployees(props.staff)}
            iconId={"employees"}
            subText={"участвует в процессе"}
          />
          <ProcessItemStatistic
            text={props.scenarios + getDeclinationScenario(props.staff)}
            iconId={"graphTree"}
            subText={"среднее время выполнения"}
          />
        </div>
        <div className={s.dateWrapper}>
          <ProcessItemDate
            label={"Начало"}
            date={moment.unix(props.start).locale("ru").format("DD MMMM YYYY")}
          />
          <ProcessItemDate
            label={"Окончание"}
            date={moment.unix(props.end).locale("ru").format("DD MMMM YYYY")}
          />
          <ProcessItemDate
            label={"Загрузка"}
            date={moment
              .unix(props.loading)
              .locale("ru")
              .format("DD MMMM YYYY")}
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessItem;
