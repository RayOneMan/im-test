interface IDeclinationEmployeesProps {
    (count: number): string | null
}

interface IDeclinationScenarioProps {
    (count: number): string | null
}

export const getDeclinationEmployees: IDeclinationEmployeesProps = count => {
    let employees = count.toString();
    switch (employees[employees.length - 1]) {
        case "1":
            return " сотрудник"
        case "2"|| "3"|| "4":
            return " сотрудника"
        default: return " сотрудников"
    }
}

export const getDeclinationScenario: IDeclinationScenarioProps = count => {
    let Scenario = count.toString();
    switch (Scenario[Scenario.length - 1]) {
        case "1"  :
            return " сценарий"
        case "2" ||"3" ||"4" ||"5":
            return " сценария"
        default: return " сценарев"
    }
}