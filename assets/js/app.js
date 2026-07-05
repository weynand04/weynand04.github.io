import { ProjectDataSource } from './data/sources/ProjectDataSource.js';
import { ProjectRepositoryImpl } from './data/repositories/ProjectRepositoryImpl.js';
import { GetProjects } from './core/usecases/GetProjects.js';
import { ProjectCard } from './presentation/components/ProjectCard.js';
import { NavigationManager } from './presentation/managers/NavigationManager.js';
import { AnimationManager } from './presentation/managers/AnimationManager.js';

class App {
    constructor() {
        this.navManager = new NavigationManager();
        this.animManager = new AnimationManager();
        this.projectContainer = document.getElementById('project-container');
    }

    async init() {
        // 1. Initialize Managers
        this.navManager.init();
        this.animManager.init();

        // 2. Load Projects (Clean Architecture)
        await this.loadProjects();
    }

    async loadProjects() {
        try {
            const dataSource = new ProjectDataSource('./assets/js/data.json');
            const repository = new ProjectRepositoryImpl(dataSource);
            const getProjects = new GetProjects(repository);

            const projects = await getProjects.execute();
            this.renderProjects(projects);
        } catch (error) {
            console.error("Failed to load projects:", error);
            this.projectContainer.innerHTML = '<p>Failed to load projects.</p>';
        }
    }

    renderProjects(projects) {
        this.projectContainer.innerHTML = ''; // Clear loading/existing
        projects.forEach(project => {
            const cardComponent = new ProjectCard(project);
            this.projectContainer.appendChild(cardComponent.render());
        });
    }
}

// Bootstrap
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
