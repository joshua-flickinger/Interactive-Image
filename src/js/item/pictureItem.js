import BaseItem from "./baseItem";

/**
 * @extends BaseItem
 */
export default class PictureItem extends BaseItem {
    /**
     * @param {object} parameters
     */
    constructor(parameters) {
        let requiredParameters = ['position', 'path'];
        for (let i in requiredParameters) {
            if ("undefined" === typeof parameters[requiredParameters[i]] || null === parameters[requiredParameters[i]] || '' === parameters[requiredParameters[i]]) {
                throw 'Error: missing required parameter "' + requiredParameters[i] + '" in PictureItem';
            }
        }

        super(parameters);
        this.path = parameters.path;
        this.caption = parameters.caption;
        this.linkUrl = parameters.linkUrl;
    }

    /**
     * @returns {HTMLElement}
     */
    createPicture() {
        let element = this.domHelper.createElement('img', 'picture');
        element.src = this.path;
        if ('undefined' !== typeof this.caption) {
            element.alt = this.caption;
        } else {
            element.alt = 'Picture #' + this.identifier;
        }

        return element;
    }

    /**
     * @returns {HTMLElement}
     */
    renderHtml() {
        let element = this.createItemElement();

        let pictureItem =  this.domHelper.createElement('div', 'picture-item');

        if ('undefined' !== typeof this.caption) {
            pictureItem.setAttribute('data-caption', this.caption);
        }

        if ('undefined' !== typeof this.linkUrl) {
            let link = this.domHelper.createElement('a');
            link.href = this.linkUrl;
            link.appendChild(this.createPicture());
            pictureItem.appendChild(link);
        } else {
            pictureItem.appendChild(this.createPicture());
        }

        element.appendChild(pictureItem);

        return element;
    }
}