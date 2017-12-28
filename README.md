Load **ngx-bootstrap** package in an ASP .NET Core 2.0 project.
===============================================================

 

This is a sample project to demonstrate how to correctly load ngx-bootstrap
package in an ASP .NET Core 2.0 project.

 

Getting Started
---------------

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

 

### Prerequisites

For running this sample project, you will need

-   any edition of [Visual Studio 2017](https://www.visualstudio.com/downloads/)
    (includes .NET core SDK 2.0)

 

### Installing

Download the project, extract it into an empty folder on your PC and open the
solution in Visual Studio.

Build, inspect, enjoy. :)

 

 

ngx-bootstrap installation steps
--------------------------------

This is all about the client app only, and has pretty nothing to do with the
ASP.Net Core project. The only difference compared to a
stock [angular-cli](https://cli.angular.io/) generated project is that it has a
little different folder structure and file naming.

E.g. the *package.json* file is in the root folder of the ASP.NET project, not
in the angular app’s root, or the Visual Studio approach does not have an *src*
folder under the *ClientApp* structure. The *app.module* file is also split into
chunks to manage shared code in *app.shared.module.ts*, browser specific code in
*app.module.browser.ts*, and server specific code in *app.module.server.ts*
file. Etc.

 

1.  Fire up **Visual Studio 2017** and create a new project from the **ASP.Net
    Core Web Application** template.   
    In the template options select **Angular**.  
    

2.  **Add ngx-bootstrap to package.json**, which is in the project root's
    folder. (To learn more about npm packages and package.json file, check [the
    npm docs](https://docs.npmjs.com/files/package.json).)  
    If the **bootstrap** package is not included yet (but it is in this
    template), add that too, because it is prerequisite.   
    Since this project template contains webpack integration out of the box, it
    will find our newly added packages automatically, and so we do not need to
    modify the webpack config file to include them. This is just cool. 

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ...
    "bootstrap": "3.3.7",
    "ngx-bootstrap": "2.0.0-rc.0",
    "css": "2.2.1",
    ...
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  **Import whichever modules you want to use in
    app.module.shared.ts** (*\~\\ClientApp\\app\\components\\app.module.shared.ts*). 

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Load as many modules as you want to use. 
    // For demonstration purposes, I load AlertModule only.
    import {
            AlertModule, 
        //AccordionModule,
        //ButtonsModule,
        //CarouselModule,
        //CollapseModule,
        //BsDatepickerModule,
        //BsDropdownModule,
        //ModalModule,
        //PaginationModule,
        //ProgressbarModule,
        //SortableModule,
        //TabsModule,
        //TimepickerModule,
        //TooltipModule,
        //TypeaheadModule
    } from 'ngx-bootstrap';
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  **Add the above imported modules to the AppModule's imports collection by
    calling their forRoot() function:**. 

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,

        // Bootstrap ----------------------------
            AlertModule.forRoot(),
        //AccordionModule.forRoot(),
        //ButtonsModule.forRoot(),
        //...
        //TooltipModule.forRoot()
        //---------------------------------------

        //...

        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
    ])
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  **Start using them in Components**.   
    E.g. add an **\<alert\>** tag in the home component template of your client
    app under *\~\\ClientApp\\app\\components\\home\\home.component.html* file.   
    **Note** that you do not need to import Bootstrap modules in your component
    ts file!  
    

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    <alert type="success" dismissible="true"><br />
        <b>Congratulations</b></br>, ngx-bootstrap package was loaded successfully. This alert is shown by the package. Great!<br />
        Now click the <b>[x]</b> button on right side to close this alert.
    </alert>
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

 

Authors
-------

-   **Csaba Együd**

 

License
-------

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details

 

Acknowledgments
---------------

-   [Angular Bootstrap](https://valor-software.com/ngx-bootstrap/#/)

-   [Bootstrap](http://getbootstrap.com/)
