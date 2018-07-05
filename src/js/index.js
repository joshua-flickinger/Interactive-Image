import App from "./app";

(($, window, document, undefined) => {
    $.fn.interactiveImage = function (items, options) {
        const defaults = {
            debug: false
        };

        options = $.extend(defaults, options);

        return this.each(() => {
            (new App(items, options).execute($(this)));
        });
    };
})(jQuery, window, document);