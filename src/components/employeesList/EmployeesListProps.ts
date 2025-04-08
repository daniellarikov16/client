import {Employee} from '../../types/models'

export interface EmployeesListProps {
    employeesList: Array<Employee>;
    onItemClick?: (id: number) => void;
}