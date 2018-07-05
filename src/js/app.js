import Factory from "./item/factory";
import Hover from "./event/hover";
import ImagesLoaded from "imagesloaded";
import ItemHelper from "./helper/itemHelper";
import LogHelper from "./helper/logHelper";
import Now from "performance-now";
import Resize from "./event/resize";
import Scene from "./scene";

export default class App {
    /**
     * @param items
     * @param {object} settings
     */
    constructor(items, settings) {
        this.scene = null;
        this.items = items;
        this.settings = settings;
        this.itemHelper = new ItemHelper();
        this.logHelper = new LogHelper(settings.debug);
        this.$image = null;
    }

    /**
     * @param {object} settings
     */
    checkSettings(settings) {
        const start = Now();
        if ('undefined' === typeof settings.debug || 'boolean' !== typeof settings.debug) {
            this.settings.debug = true;
            throw 'Error: check "debug" plugin option';
        }

        const end = Now();
        this.logHelper.log('Options successfully checked', end - start);
    }

    /**
     * Create content container
     *
     * @param {object} options
     * @returns {jQuery|HTMLElement}
     */
    createElement(options) {
        const start = Now();

        const type = options.type;
        delete options.type;
        this.logHelper.log(JSON.stringify(options), null, 'blue');

        const element = new Factory(type, options);

        this.$image.append(element.createHotspotElement());

        const end = Now();
        this.logHelper.log('item (' + type + ') created', end - start);

        return $(element.renderHtml());
    }

    buildContainer($imageElement) {
        const start = Now();

        this.scene = new Scene($imageElement);

        const divElement = this.scene.createContainer();
        $(divElement).insertAfter($imageElement);
        this.$image = $(divElement);

        $imageElement.remove();

        const end = Now();
        this.logHelper.log('Scene built', end - start);
    }

    /**
     * @param items
     */
    buildContent(items) {
        const start = Now();
        for (let i in items) {
            if (items.hasOwnProperty(i)) {
                this.$image.append(this.createElement(items[i]));
            }
        }

        const end = Now();
        this.logHelper.log('Items built', end - start);
    }

    positionItems() {
        const start = Now();
        const $items = this.$image.find('.item');

        var _this = this;
        $.each($items, function() {
            const $hotSpot = $('div[data-for="' + $(this).attr('data-id') + '"]');
            const itemOriginalWidth = $(this).width();
            const hotSpotLeft = parseInt($hotSpot.css('left'), 10);
            const hotSpotTop = parseInt($hotSpot.css('top'), 10);

            let left = 0;
            let top = 0;
            [left, top] = _this.itemHelper.calculateContainerPosition(
                hotSpotLeft,
                hotSpotTop,
                itemOriginalWidth
            );

            $(this).css('left', left);
            $(this).css('top', top);

            $(this).find('.arrow-up').css('left', _this.itemHelper.calculateArrowPosition(itemOriginalWidth));
        });

        const end = Now();
        this.logHelper.log('Items positioned', end - start);
    }

    execute($imageElement) {
        try {
            this.checkSettings(this.settings);

            ImagesLoaded($imageElement.parent(), () => {
                this.buildContainer($imageElement);
                this.buildContent(this.items);

                if (this.$image.find('img').length) {
                    ImagesLoaded(this.$image, () => {
                        this.logHelper.log('Images loaded');
                        this.positionItems();
                    });
                } else {
                    this.positionItems();
                }

                (new Hover().bindAll(this.$image));
                (new Resize().bind(this.$image, this.scene.getWidth()));
            });
        } catch (exception) {
            this.logHelper.log(exception.message, null, 'red');
        }
    }
}