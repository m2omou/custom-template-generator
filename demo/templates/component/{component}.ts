// Angular imports
import { ModuleWithProviders, NgModule } from '@angular/core';

// Custom imports
import { {Name}Component } from './{name}.component';

@NgModule({
    declarations: [ {Name}Component ],
    imports: [],
    exports: [ {Name}Component ]
})
export class {Name}Module {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: {Name}Module,
            providers: []
        };
    }

}
