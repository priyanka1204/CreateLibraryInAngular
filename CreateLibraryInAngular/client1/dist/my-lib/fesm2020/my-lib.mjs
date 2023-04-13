import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class MyLibService {
    constructor() { }
}
MyLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: MyLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: MyLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: MyLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MyLibComponent {
}
MyLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: MyLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.7", type: MyLibComponent, selector: "lib-my-lib", ngImport: i0, template: `
     <p>
      my-lib works!
     </p>
     <p>
      This is a change
     </p>
     <p> added New Text to change </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: MyLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-lib', template: `
     <p>
      my-lib works!
     </p>
     <p>
      This is a change
     </p>
     <p> added New Text to change </p>
  ` }]
        }] });

class MyLibModule {
}
MyLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: MyLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.7", ngImport: i0, type: MyLibModule, declarations: [MyLibComponent], exports: [MyLibComponent] });
MyLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: MyLibModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: MyLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MyLibComponent
                    ],
                    imports: [],
                    exports: [
                        MyLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibComponent, MyLibModule, MyLibService };
//# sourceMappingURL=my-lib.mjs.map
