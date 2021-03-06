﻿import { PipeTransform, Pipe } from '@angular/core';
import { IUser } from '../Models/user';

@Pipe({
    name: 'userFilter'
})

export class UserFilterPipe implements PipeTransform {
    transform(value: IUser[], filter: string) {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((app: IUser) =>
            app.FirstName != null && app.FirstName.toLocaleLowerCase().indexOf(filter) != -1
            || app.LastName != null && app.LastName.toLocaleLowerCase().indexOf(filter) != -1
            || app.Gender != null && app.Gender.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}