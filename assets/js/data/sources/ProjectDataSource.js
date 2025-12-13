/**
 * @class ProjectDataSource
 * Responsible for fetching raw project data.
 */
export class ProjectDataSource {
    constructor(url) {
        this.url = url;
    }

    async getData() {
        try {
            const response = await fetch(this.url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}
