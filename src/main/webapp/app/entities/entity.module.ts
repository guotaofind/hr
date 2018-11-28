import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HrDepartmentModule as ServiceDepartmentModule } from './service/department/department.module';
import { HrEmployeeModule as ServiceEmployeeModule } from './service/employee/employee.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        ServiceDepartmentModule,
        ServiceEmployeeModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HrEntityModule {}
