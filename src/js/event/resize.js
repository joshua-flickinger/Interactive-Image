import ItemHelper from "../helper/itemHelper";

export default class Resize {
    constructor() {
        this.itemHelper = new ItemHelper();
    }

    bind($image, originalWidth) {
        var timeout;
        var _this = this;

        $(window).on('resize', function() {
            clearTimeout(timeout);
            timeout = setTimeout(_this.recalculatePositions($image, originalWidth), 250);
        });
    }

    recalculatePositions($image, originalWidth) {
        const $items = $image.find('.item');

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
        }


        console.log($(window).width());
    }
}