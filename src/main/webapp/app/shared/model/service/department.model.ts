export interface IDepartment {
    id?: number;
    name?: string;
    numberOfEmployee?: number;
}

export class Department implements IDepartment {
    constructor(public id?: number, public name?: string, public numberOfEmployee?: number) {}
}
