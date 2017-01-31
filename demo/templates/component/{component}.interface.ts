// Angular imports
import { ElementRef, Renderer } from '@angular/core';

// Custom imports
import { {Name}Config } from './config/{name}.config';

export interface {Name}Interface<T> {

    /*
     * Feeds the selected item from the {name}.
     */
    model: T;

    /*
     * Stores the entire config for the {name}. Available options for the {name} are listed as part of the
     * DropdownConfigInterface.
     */
    readonly options: {Name}Config;


    /*
     * Executes after the constructor and upon element setup which sets up the dependent data required to construct the
     * component.
     */
    ngOnInit(): void;

    /*
     * Reference to an element.
     */
    elementRef: ElementRef;

    /*
     * Get/Set the renderer.
     */
    renderer: Renderer;

    /*
     * Return id of the {name}.
     */
    readonly id: string;

    /*
     * Set the aria configuration for the component.
     */
    setAriaConfig(attr: string, value: any): void;
}
