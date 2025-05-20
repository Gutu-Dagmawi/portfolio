// @ts-check
/** @type {import('stylelint').Config} */
module.exports = {
    extends: [
        "stylelint-config-recommended", // Base error-prevention rules
        "stylelint-prettier"
    ],
    plugins: ["stylelint-order"],     // Optional: Keeps property ordering
    rules: {
        // === Error Prevention ===
        "color-no-invalid-hex": true,
        "unit-no-unknown": true,
        "property-no-unknown": true,
        "declaration-block-no-duplicate-properties": true,
        "declaration-block-no-shorthand-property-overrides": true,


        // === Optional Organization ===
        "order/properties-order": [     // Prettier won't touch this
            "position", "top", "right", "bottom", "left", "z-index",
            "display", "flex", "grid", "align-items", "justify-content",
            "width", "height", "margin", "padding", "border", "background",
            "color", "font", "text", "opacity", "transition", "animation"
        ]
    }
};