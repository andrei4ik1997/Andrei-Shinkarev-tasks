import { QuillModule } from 'ngx-quill';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      timeOut: 3000
    }),
  ],
  exports: [HttpClientModule,FormsModule,ReactiveFormsModule, QuillModule, ToastrModule],
})
export class SharedModule {}
