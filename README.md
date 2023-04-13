# CreateLibraryInAngular
created library which we are using in different angular application


Angular Library Creation and Publish in NPM and use it in angular application 

Create simple library and use it in angular application 
Steps 
1. Create simple angular application -ng new CreateAngularLibrary
2. Create library in angular application using this command  -  ng generate library my-lib
3. Make build of library - ng build my-lib 
4. Run application using - ng serve
5. Check application on browser If change is reflected or not on browser and if not then add watcher with build command - ng build my-lib —watch


Use a Library in a mono repo and different workspaces 

Now we need to create multiple applications so that we can use library with multiple applications 

1. We will create new project in project folder - ng generate application users 
2. It will create your users application inside projects folder near my-lib folder
3. Now we will run the users application using different port - ng serve users —port 4201
4. It will show default angular application on browser.
5. Now will import my-lib to users application 

 Now we have seen 2 projects are there in same workspace but what if library and application have different workspace..?
 
 We have created separate application named as client2. Now we have 2 application client1 and client2 and we have my-lib library in client1 folder

1. add below code  in tsconfig.json of client2 application from client1 tsconfig.json file   

"paths": {  
  "my-lib": [   
   "../client1/dist/my-lib”    
 ]
 }

2.  Add MyLibModule in app.module.ts file of client2 application
 in imports section 
imports: [
    BrowserModule,
    AppRoutingModule,
    MyLibModule
 ]
3.  And do - import { MyLibModule} from ‘my-lib’; in the app.module.ts file of client2 application 
4. Now will run 
    1. client1 default outer application 
    2. will run users application  which is under client1 
    3. will run client2 application
    4. Also build my-lib using command in client1 terminal- ng build my-lib —watch.
  


