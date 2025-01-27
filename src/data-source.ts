import 'reflect-metadata';
import { DataSource } from 'typeorm';

import {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME
} from '@/config/index';

import { Employee } from '@/employee/domain/entity';
import { Department } from '@/department/domain/entity';
import { EmployeeDepartment } from '@/employee-department/domain/entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT),
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  entities: [Employee, Department, EmployeeDepartment],
  synchronize: true,
  logging: false
});

export async function initDataSource() {
  return new Promise<void>((resolve, reject) => {
    AppDataSource.initialize()
      .then(() => {
        console.log('Datasource initialize');
        resolve();
      })
      .catch((error) => reject(error));
  });
}
