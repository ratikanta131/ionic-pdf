import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
 
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  letterObj ={
    'text':"This is a dummy content to create and download pdf"
  }
  pdfObj = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private plt: Platform,private file:File
    ,private fileOpener:FileOpener) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  /**
   *  This metho id used for creating the pdf
   */

  createPdf(){    
    var docDefinition = {
      content: [
        { text: 'REMINDER', style: 'header' },
        { text: new Date().toTimeString(), alignment: 'right' },   
       
        { text: this.letterObj.text, style: 'story', margin: [0, 20, 0, 20] }   
       
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        }
      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
    alert('created successfully');
  }
/**
 * This method is for downloading the pdf.
 *
 */

  downloadPdf(){
    
    if (this.plt.is('cordova')) {  


    this.pdfObj.getBuffer((buffer) => {
      var blob = new Blob([buffer], { type: 'application/pdf' });
      let folderName = 'myDir'

      // create a folder as myDir in external Root Directory Directory and Save the PDF file in that folder .
      this.file.writeFile(this.file.externalRootDirectory + "/" + folderName,'myPdf.pdf', blob, { replace: true })
      .then(fileEntry => {
        // Open the PDf with the correct OS tools
        this.fileOpener.open(this.file.externalRootDirectory + "/" + folderName + '/myPdf.pdf', 'application/pdf');
      })
    });
    } else {     
      this.pdfObj.download();
    }
  }
}
