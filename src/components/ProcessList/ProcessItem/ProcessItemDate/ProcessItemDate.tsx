// Компонент MetaDataItem, используется в документе ProcessItem.tsx
// Используется в проекте для отображения метаданных о начале, завершении и загрузки процесса
import s from "./ProcessItemDate.module.scss";


interface IProcessItemDateProps {
  label: string;
  date: any;
}

const ProcessItemDate: React.FC<IProcessItemDateProps> = (props: any): any => {
  return (
    <div className={s.wrapperDate}>
      <p className={s.label}>{props.label}</p>
      <p className={s.date}>{props.date}</p>
    </div>
  );
};

export default ProcessItemDate;
