import { gql } from "@apollo/client";

export const ProcessListQuery = gql`
query ProcessList {
    processList {
      id
      name
      numberOfExecutions
      averageLeadTime
      averageActiveTime
      employeesInvolvedProcess
      numberOfScenarios
      start
      end
      loading
    }
  }
`;
