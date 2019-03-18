import { Component, OnInit } from '@angular/core';
import { FileUploadOptions, FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx'
import { File } from '@ionic-native/file/ngx'

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {
  constructor(private transfer: FileTransfer, private file: File) { }
  
  ngOnInit() {
  }
  uploadFile(){
  let fileTransfer: FileTransferObject = this.transfer.create()

    let option : FileUploadOptions = {
      fileKey:'file',
      fileName:'contoh.jpg',
      headers:{}
    }
    fileTransfer.upload('','',option)
  }
}
