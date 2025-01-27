import { DepartmentRepository } from '../domain/repository';

export class DepartmentUseCases {
  departmentRepository: DepartmentRepository;

  constructor(departmentRepository: DepartmentRepository) {
    this.departmentRepository = departmentRepository;
  }

  getAllDepartments = async () => {
    return await this.departmentRepository.getAllDepartment();
  };

  getDepartmentById = async (id: string) => {
    return await this.departmentRepository.getDepartmentById(id);
  };
}
