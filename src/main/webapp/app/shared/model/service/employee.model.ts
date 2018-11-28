import { IEmployee } from 'app/shared/model/service/employee.model';
import { IDepartment } from 'app/shared/model/service/department.model';

export interface IEmployee {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    hireDate?: number;
    salary?: number;
    manager?: IEmployee;
    department?: IDepartment;
}

export class Employee implements IEmployee {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public phoneNumber?: string,
        public hireDate?: number,
        public salary?: number,
        public manager?: IEmployee,
        public department?: IDepartment
    ) {}
}
