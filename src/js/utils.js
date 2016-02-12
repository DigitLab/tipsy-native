/**
 * CSS properties that should have 'px' attached.
 *
 * @type {string[]}
 */
const pixelProperties = ['top', 'left', 'width', 'height'];

/**
 * Call the value if it is a function, otherwise returns the value.
 *
 * @param value
 * @param ctx
 * @returns {*}
 */
export function callOrReturn(value, ctx) {
    if (typeof value == 'function') {
        return value.call(ctx);
    }

    return value;
}

/**
 * Modifies the css of the element.
 *
 * @param element
 * @param css
 */
export function css(element, css) {
    for (var prop in css) {
        if (pixelProperties.indexOf(prop) >= 0 && css[prop] != 0) {
            css[prop] = css[prop] + 'px';
        }

        element.style[prop] = css[prop];
    }
}

/**
 * Extends an object with other objects.
 *
 * @returns {*}
 */
export function extend() {
    for (var i = 1; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
                arguments[0][key] = arguments[i][key];
            }
        }
    }

    return arguments[0];
}

/**
 * Gets the offset of an element.
 *
 * @param element
 * @returns {{top: number, left: number}}
 */
export function offset(element) {
    var rect = element.getBoundingClientRect();

    return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
    };
}