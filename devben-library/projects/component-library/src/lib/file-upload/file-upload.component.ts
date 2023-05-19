import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MediaType, MessageConstant } from '../const/message.const';

export interface FileResult {
  status: boolean;
  message: string;
  files?: File | null;
}




@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Input() labelUpload: string = 'Vui lòng chọn tệp tin';
  @Input() accept: string = '*';
  @Input() minSize: number = 0;
  @Input() maxSize: number = 5;

  @Output() file: EventEmitter<FileResult> = new EventEmitter();

  fileResult = <FileResult>{
    status: false,
    files: null,
    message: ''
  };


  constructor() { }

  ngOnInit(): void {
  }


  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      // check file name extension
      const fileNameExtension = event.target.files[0].name.split('.').pop();


      const fileZise = event.target.files[0].size;

      if (fileZise > (this.maxSize * 1024 * 1024))
        return this.returnFile(false, `Dung lượng không được vượt quá ${this.maxSize} mb`);


      this.fileResult.files = event.target.files[0]
      this.returnFile(true, '');


      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (e) => {
        // called once readAsDataURL is completed
        // this.media.fileBase = e.target!.result!.toString();
        // this.media.fileName = event.target.files[0].name;
        // this.media.extention = fileNameExtension;
        // this.media.size = fileZise;
        // this.media.type = event.target.files[0].type;

        // this.returnFile(true);
        // this.isImageOrVideo = this.chkImage(this.url);
      };
    }

  }

  returnFile(status: boolean, message: string) {
    this.fileResult.status = status;
    this.fileResult.message = message;
    this.file.emit(this.fileResult);
  }
}
