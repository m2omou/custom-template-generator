// Angular imports
import { Component, ElementRef, Input, OnInit, Renderer } from '@angular/core';

// Custom imports
import { {Name}Interface } from './{name}.interface';
import { {Name}Config } from './config/{name}.config';
import { {name}Service } from './{name}.service';
import { utilService } from '../shared/util.service';

@Component({
    selector: 'lg-{name}',
    styleUrls: ['{name}.component.css'],
    templateUrl: '{name}.html'
})
export class {Name}Component<T> implements OnInit, {Name}Interface<T> {

    /*
     * Feeds the selected item from the {name}.
     */
    @Input('model')
    private _model: T;

    /*
     * Stores the entire config for the {name}. Available options for the {name} are listed as part of the
     * {Name}ConfigInterface.
     */
    @Input('options')
    private _options: {Name}Config;

    constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
        let test = {uiconfig};
    }

    /*
     * Executes after the constructor and upon element setup which sets up the dependent data required to construct the
     * component.
     */
    ngOnInit(): void {
        /*
         * Sets up the service that initiates and sets up the {name} config singleton. This config is after the
         * component is initialized since the data needs to be available beforehand.
         */
        this.configure{Name}();
    }

    // Getters and Setters
    /*
     * Get the element reference.
     */
    get elementRef(): ElementRef {
        return this._elementRef;
    }

    /*
     * Set the element reference.
     */
    set elementRef(_elementRef: ElementRef) {
        this._elementRef = _elementRef;
    }

    /*
     * Get the renderer.
     */
    get renderer(): Renderer {
        return this._renderer;
    }

    /*
     * Set the renderer.
     */
    set renderer(_renderer: Renderer) {
        this._renderer = _renderer;
    }

    /*
     * Return {name} config options.
     */
    get options(): {Name}Config {
        return this._options;
    }

    /*
     * Return the model/selected item.
     */
    get model(): T {
        return this._model;
    }

    /*
     * Select the item from the menu.
     */
    set model(selectedItem: T) {
        {name}Service.onSelectItem(selectedItem);
    }


    /*
     * Return id of the {name}.
     */
    get id(): string {
        return {name}Service.id;
    }

    /*
     * Set the aria configuration for the component.
     */
    setAriaConfig(attr: string, value: any): void {
        this.renderer.setElementAttribute(this.elementRef.nativeElement.firstChild, attr, value);
    }

    /*
     * The options received as an input is fed to the {Name}Config constructor to instantiate and store
     * values substituting with defaults where required. The selected item and the list of {name} menu items are also
     * stored in the service to allow for easy access where necessary
     *
     * The aria config is constructed using the config specified as part of the {name}Config.
     */
    configure{Name}(): void {
        {name}Service.configure{Name}(this.model, this.items, this.options);

        /*
         * Initialize the aria config with the preset config from {name}Service. Use the parent element to apply the
         * aria attributes.
         */
        {name}Service.setAriaConfig(this.setAriaConfig.bind(this));
    }

}
