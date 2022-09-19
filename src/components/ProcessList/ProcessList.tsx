import { useQuery } from "@apollo/client";
import { ProcessListQuery } from "../../api/ProcessListQuery";
import Spinner from "../Spinner/Spinner";
import ProcessItem from "./ProcessItem/ProcessItem";

export default function ProcessList() {
  const { data, loading } = useQuery(ProcessListQuery);

  if (loading) {
    return <Spinner/>;
  }
  return (
    <div>
      {!loading &&
        data?.processList.map((item: any) => {
          return (
            <ProcessItem
              id={item.id}
              name={item.name}
              countReplay={item.numberOfExecutions}
              scenarios={item.numberOfScenarios}
              staff={item.employeesInvolvedProcess}
              start={item.start}
              end={item.end}
              loading={item.loading}
              averageExecutionTime={item.averageLeadTime}
              averageActiveTime={item.averageActiveTime}
              key={item.id}
            />
          );
        })}
    </div>
  );
}
