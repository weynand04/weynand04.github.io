/**
 * @class ProjectCard
 * Renders a project into a card element.
 */
export class ProjectCard {
    constructor(project) {
        this.project = project;
    }

    render() {
        const card = document.createElement('div');
        card.classList.add('card');

        const tagsHtml = this.project.tags
            .map(tag => `<span class="tag">${tag}</span>`)
            .join('');

        card.innerHTML = `
        <div class="poster">
          <img src="${this.project.image}" alt="${this.project.title}" />
        </div>
        <div class="details">
          <h1>${this.project.title}</h1>
          <h2>${this.project.year}</h2>
          <div class="tags">
            ${tagsHtml}
          </div>
          <p class="desc">${this.project.description}</p>
          <a href="${this.project.link}" target="_blank" rel="noopener noreferrer">
            <button class="btn">Preview <i class="uil uil-eye"></i></button>
          </a>
        </div>
    `;

        return card;
    }
}
