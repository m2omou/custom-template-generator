// Custom imports
import { {Name}Config } from './config/{name}.config';
import { ariaService } from '../shared/aria/aria.service';
import { {Name}ServiceInterface } from './{name}-service.interface';
import { utilService } from '../shared/util.service';

export class {Name}Service<T> implements {Name}ServiceInterface<T> {

    /*
     * Instance of the '{Name}Config' to save/retrieve data.
     */
    private _{name}Config: {Name}Config;

    // Getters and Setters
    /*
     * Returns the configuration for the {name}.
     */
    get {name}Config(): {Name}Config {
        return this._{name}Config;
    }

    /*
     * Sets the configuration for the {name}.
     */
    set {name}Config(_{name}Config: {Name}Config) {
        this._{name}Config = new {Name}Config(_{name}Config);
    }

}

// Creates an instance of the {Name}Service and exposes the created {name}Service instance to the caller.
export let {name}Service = new {Name}Service();
