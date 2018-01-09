# ionic-pdf
This repository contains an example of exporting pdf from ionic
# Setting up your development environment
1. start with a blank new app and install two Cordova Plugins and install npm packages

## Install Cordova Plugins :
* ```ionic cordova plugin add cordova-plugin-file-opener2```
* ```ionic cordova plugin add cordova-plugin-file```
## Install NPM packages
* ```npm install pdfmake @ionic-native/file-opener @ionic-native/file```
2. Once your installation is finished, head over to your src/app.module.ts and add our two Plugins like this:
* ```import { File } from '@ionic-native/file'```;
* ```import { FileOpener } from '@ionic-native/file-opener'```;
3. Add two providers in Provider section of app.module.ts.
* File
* FileOpener 
4. Then create your view.
  * Go ahead and open your ```src/pages/home/home.html``` and insert input field and two buttons.One button for creating the pdf and another for downloading the pdf.
5. Create PDFs, Store Files and Display the Viewer
  * Go ahead and open your ```src/pages/home/home.ts``` and insert the code for crating and downloading the pdf.
