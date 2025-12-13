/**
 * @class Project
 * Represents a portfolio project.
 */
export class Project {
    constructor({ title, year, tags, description, image, link }) {
        this.title = title;
        this.year = year;
        this.tags = tags;
        this.description = description;
        this.image = image;
        this.link = link;
    }
}
