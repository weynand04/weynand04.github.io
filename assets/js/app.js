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
        this.searchInput = document.querySelector('.search__input');
        this.projects = [];
    }

    async init() {
        // 1. Initialize Managers
        this.navManager.init();
        this.animManager.init();

        // 2. Load Projects (Clean Architecture)
        await this.loadProjects();

        // 3. Setup search functionality
        this.setupSearch();
    }

    async loadProjects() {
        try {
            const dataSource = new ProjectDataSource('./assets/js/data.json');
            const repository = new ProjectRepositoryImpl(dataSource);
            const getProjects = new GetProjects(repository);

            this.projects = await getProjects.execute();
            this.renderProjects(this.projects);
        } catch (error) {
            console.error("Failed to load projects:", error);
            this.projectContainer.innerHTML = '<p>Failed to load projects.</p>';
        }
    }

    setupSearch() {
        if (this.searchInput) {
            this.searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                const filtered = this.projects.filter(project => {
                    const matchesTitle = project.title.toLowerCase().includes(query);
                    const matchesDesc = project.description.toLowerCase().includes(query);
                    const matchesTags = project.tags.some(tag => tag.toLowerCase().includes(query));
                    return matchesTitle || matchesDesc || matchesTags;
                });
                this.renderProjects(filtered);
            });
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
