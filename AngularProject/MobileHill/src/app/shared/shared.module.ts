import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { ToastrModule } from 'ngx-toastr';

import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [SearchPipe],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      timeOut: 3000,
    }),
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SearchPipe,
    QuillModule,
    ToastrModule,
  ],
})
export class SharedModule {}
