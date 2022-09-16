import moment from "moment";

interface IGetHourAndMinProps {
    (time: number, allTime?: number | undefined): string;
  }
const getHourAndMin: IGetHourAndMinProps = (time, allTime) => {
    let duration = moment.duration(time, 'milliseconds');
    let hours = Math.floor(duration.asHours());
    let mins = Math.floor(duration.asMinutes()) - hours * 60;
    let procent: number = 0;
    allTime
      ? (procent = Math.trunc(time / 60000 / (allTime / 6000000)))
      : (procent = 0);
  
    return `${hours > 0 ? hours + " ч" : ""} ${
      mins > 0 ? mins + " мин." : ""
    } ${allTime ? "(" + procent + "%)" : ""}`;
  };
  
  export default getHourAndMin;
