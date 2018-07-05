import DomHelper from "./helper/domHelper";

export default class Scene {
    constructor($imageElement) {
        this.domHelper = new DomHelper();
        this.width = $imageElement.width();
        this.height = $imageElement.height();
        this.url = $imageElement.attr('src');
    }

    /**
     * @returns {number}
     */
    getWidth() {
        return this.width;
    }

    /**
     * @returns {number}
     */
    getHeight() {
        return this.height;
    }

    /**
     * @returns {HTMLElement}
     */
    createContainer() {
        const element = this.domHelper.createElement('div', 'interactive-image');
        element.style.height = this.height + 'px';
        element.style.width = 'auto';
        element.style.backgroundImage = "url('" + this.url + "')";

        return element;
    }
}