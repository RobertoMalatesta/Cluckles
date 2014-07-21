(function (window) {
	"use strict";

	/**
	 * Allows modifications of the Tooltip component styling in Bootstrap.
	 * 
	 * @class Tooltip
	 * @extends ThemeModifier
	 * 
	 * @param {ThemeEditor} editor instance which manages the less modifications.
	 * 
	 * @property {object} maxWidth The @tooltip-max-width variable which sets the Max Width of the Tooltip component.
	 * @property {object} bg The @tooltip-bg variable which sets the Background of the Tooltip component.
	 * @property {object} color The @tooltip-color variable which sets the Color of the Tooltip component.
	 * @property {object} opacity The @tooltip-opacity variable which sets the Opacity of the Tooltip component.
	 * @property {object} arrowWidth The @tooltip-arrow-width variable which sets the Arrow Width of the Tooltip component.
	 * @property {object} arrowColor The @tooltip-arrow-color variable which sets the Arrow Color of the Tooltip component.
	 * 
	 * @returns {Tooltip}
	 */
	var Tooltip = function (editor) {
		ThemeModifier.call(this, editor); // Call parent constructor
		
        // Configure the Modifiers
        this.maxWidth = {
            variable: '@tooltip-max-width',
            value: null
        };
		this.bg = {
			variable: '@tooltip-bg',
			value: null
		};
		this.color = {
			variable: '@tooltip-color',
			value: null
		};
        this.opacity = {
            variable: '@tooltip-opacity',
            value: null
        };
        this.arrowWidth = {
            variable: '@tooltip-arrow-width',
            value: null
        };
        this.arrowColor = {
            variable: '@tooltip-arrow-color',
            value: null
        };
		
        // Configure the modifiers so they can be extracted easier
        this.modifiers = {
            maxWidth:   this.maxWidth,
            bg:         this.bg,
            color:      this.color,
            opacity:    this.opacity,
            arrowWidth: this.arrowWidth,
            arrowColor: this.arrowColor
        };
	};
	
	// Inherit from parent Prototype and preserve constructor
	Tooltip.prototype = Object.create(ThemeModifier.prototype);
	Tooltip.constructor = Tooltip;

    /**
     * Gets the Max Width of the Tooltip Components.
     * 
     * @returns {string}
     */
    Tooltip.prototype.getMaxWidth = function () {
        return this.modifiers.maxWidth.value;
    };

    /**
     * Sets the Max Width of the Tooltip Components.
     * 
     * @param {string} maxWidth Sets the Tooltip Max Width.
     * @returns {undefined}
     */
    Tooltip.prototype.setMaxWidth = function (maxWidth) {
        this.modifiers.maxWidth.value = maxWidth + 'px';
        this.editor.queueModifications();
    };

	/**
	 * Gets the Background of the Tooltip Component.
	 * 
	 * @returns {string}
	 */
	Tooltip.prototype.getBackground = function () {
		return this.modifiers.bg.value;
	};

	/**
	 * Sets the Background of the Tooltip Component.
	 * 
	 * @param {string} color The color to set the Background.
	 * 
	 * @returns {undefined}
	 */
	Tooltip.prototype.setBackground = function (color) {
		this.modifiers.bg.value = color;
		this.editor.queueModifications();
	};

	/**
	 * Gets the Background of the Tooltip Component.
	 * 
	 * @returns {string}
	 */
	Tooltip.prototype.getColor = function () {
		return this.modifiers.color.value;
	};

	/**
	 * Sets the Text color of the Tooltip Component.
	 * 
	 * @param {string} color The color to set the text of the Tooltip Component.
	 * 
	 * @returns {undefined}
	 */
	Tooltip.prototype.setColor = function (color) {
		this.modifiers.color.value = color;
		this.editor.queueModifications();
	};

    /**
     * Gets the Opacity of the Tooltip Component.
     * 
     * @returns {string}
     */
    Tooltip.prototype.getOpacity = function () {
        return this.modifiers.opacity.value;
    };

    /**
     * Sets the Opacity of the Tooltip Component.
     * 
     * @param {string} opacity Sets the Tooltip Opacity.
     * 
     * @returns {string}
     */
    Tooltip.prototype.setOpacity = function (opacity) {
        this.modifiers.opacity.value = opacity;
        this.editor.queueModifications();
    };
    
    /**
     * Gets the Arrow Width of the Tooltip Component.
     * 
     * @returns {string}
     */
    Tooltip.prototype.getArrowWidth = function () {
        return this.modifiers.arrowWidth.value;
    };
    
    /**
     * Sets the Arrow Width of the Tooltip Component.
     * 
     * @param {string} arrow Sets the Tooltip Arrow.
     * 
     * @returns {undefined}
     */
    Tooltip.prototype.setArrowWidth = function (arrowWidth) {
        this.modifiers.arrowWidth.value = arrowWidth + 'px';
        this.editor.queueModifications();
    };
    
    /**
     * Gets the Arrow Color of the Tooltip Component.
     * 
     * @returns {string}
     */
    Tooltip.prototype.getArrowColor = function () {
        return this.modifiers.arrowColor.value;
    };
    
    /**
     * Sets the Arrow Color of the Tooltip Component.
     * 
     * @param {string} arrowColor Sets the Tooltip Arrow.
     * 
     * @returns {undefined}
     */
    Tooltip.prototype.setArrowColor = function (arrowColor) {
        this.modifiers.arrowColor.value = arrowColor;
        this.editor.queueModifications();
    };

	window.Tooltip = Tooltip;
})(window);