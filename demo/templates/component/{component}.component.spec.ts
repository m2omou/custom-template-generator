// Angular imports
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// Custom imports
import { {Name}Component } from './{name}.component';

describe('{Name}Component', () => {

    let component: DropdownComponent<string>;
    let componentFixture: ComponentFixture<DropdownComponent<string>>;
    let debugElement: DebugElement;
    let htmlElement: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            // Declare the test component.
            declarations: [ {Name}Component ]
        });

        componentFixture = TestBed.createComponent({Name}Component);

        // {Name}Component test instance.
        component = componentFixture.componentInstance;
    });

});
