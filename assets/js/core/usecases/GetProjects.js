/**
 * @class GetProjects
 * Use case to retrieve the list of projects.
 */
export class GetProjects {
    constructor(repository) {
        this.repository = repository;
    }

    async execute() {
        return await this.repository.getProjects();
    }
}
