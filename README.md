Udemy course Angular - The Complete Guide (2022 Edition)

## Complete App

https://www.udemy.com/course/the-complete-guide-to-angular-2

## Commands:
# update local angular-cli
sudo npm uninstall -g angular-cli @angular/cli 
npm cache verify
# probably not needed
npm cache clean --force 
sudo npm install -g @angular/cli

# create new project
ng new my-first-app

# install dependency 
npm i --save bootstrap@5.2.0

# serve application
ng serve
OR
npm run start

# create items through cli
ng generate [component/directive/pipe/service] name

ng g c --skip-tests=true name

# Angular life cycle

ngOnChanges         // called after a bound input prop
ngOnInit            // called once at the component init
ngDoCheck           // called during every change detection run
ngAfterContentInit  // called after content has been projected into view
ngAfterContentChecked  // called every time  the projected content has been checked
ngAfterViewInit     //  called after component view  and child views init
ngAfterViewChecked  //  called every time  the view and child views have been checked
ngDestroy           //  called before component is destroyed

# CompleteGuide

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
