import { GlobalSvgSelector } from "../../../../icons/global/globalSvgSelector";
import s from "./ProcessItemStatistic.module.scss";

interface IProcessItemStatistic {
  text: string;
  iconId: string;
  subText: string;
}

const ProcessItemStatistic: React.FC<IProcessItemStatistic> = (props): any => {
  return (
    <div className={s.wrapperStatistic}>
      <div className={s.iconWrapper}>
        <GlobalSvgSelector id={props.iconId} />
      </div>
      <div className={s.textWrapper}>
        <div className={s.text}>{props.text}</div>
        <div className={s.subText}>{props.subText}</div>
      </div>
    </div>
  );
};

export default ProcessItemStatistic;

