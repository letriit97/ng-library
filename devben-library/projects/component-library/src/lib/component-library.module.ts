import { NgModule } from '@angular/core';
import { TerminalComponent } from './terminal/terminal.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ButtonCardComponent } from './button-card/button-card.component';


@NgModule({
  declarations: [
    TerminalComponent,
    FileUploadComponent,
    ButtonCardComponent,
  ],
  imports: [
  ],
  exports: [
    TerminalComponent,
    FileUploadComponent,
    ButtonCardComponent,
  ]
})
export class ComponentLibraryModule { }
