import { Project } from '../../core/entities/Project.js';

/**
 * @class ProjectRepositoryImpl
 * Concrete implementation of the Project Repository.
 */
export class ProjectRepositoryImpl {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }

    async getProjects() {
        const rawData = await this.dataSource.getData();
        return rawData.map(item => new Project(item));
    }
}
