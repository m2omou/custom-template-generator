// Custom imports
import { {Name}ConfigInterface } from './{name}-config.interface';
import * as {Name}Constants from '../{name}.constant';
import { utilService } from '../../shared/util.service';

export class {Name}Config implements {Name}ConfigInterface {

    // Id for the {name}.
    private _id: string;

    /*
     * Instantiate the {name} config with all attributes from the interface definition substituting defaults where
     * necessary. The defaults are obtained from '{Name}Constants'.
     */
    constructor(private {name}Config?: {Name}Config) {
        // Value setters
        this.id = utilService.getValueIfExists({name}Config, 'id');
    }

    /*
     * Return id of the {name}.
     */
    get id(): string {
        return this._id;
    }

    /*
     * Set id of the {name}.
     */
    set id(_id: string) {
        this._id = _id;
    }
}
