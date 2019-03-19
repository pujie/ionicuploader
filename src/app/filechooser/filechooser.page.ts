import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx'
import { testUserAgent } from '@ionic/core';
import { ImageService } from '../image.service';
@Component({
  selector: 'app-filechooser',
  templateUrl: './filechooser.page.html',
  styleUrls: ['./filechooser.page.scss'],
})
export class FilechooserPage implements OnInit {
  uploadImage
  constructor(private fileChooser: FileChooser,private imageService: ImageService) { }


  ngOnInit() {
  }
  openChooser(){
    this.fileChooser.open()
    .then(uri => {console.log("URI",uri)})
    .catch(log => {console.log("Log",log)})
  }




  test(evt){
    var input = evt.target;
    let that = this
		var filereader = new FileReader();
		filereader.onload = function(){
      that.imageService.resizeImage(filereader.result,1600, function(result){
				//$("#output").attr("src",result);
				//$("#addImage").val(result);
			})
		}
    filereader.readAsDataURL(input.files[0]);
  }

  openFile(event){
    console.log("Data",event.target)
    let that = this
    var input = event.target;
    var myElement = document.getElementById("img")
    //myElement.attributes["src"] = 
    var filereader = new FileReader();
    filereader.onload = function(){
      that.imageService.resizeImage(filereader.result,1600,res=>{
        //myElement.attributes["src"] = res
        that.uploadImage = res
        console.log("Res",res)
      })
  
    }

    filereader.readAsDataURL(input.files[0]);
  }
}
