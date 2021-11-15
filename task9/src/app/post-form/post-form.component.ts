import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  @Output() onDeleteAllPosts: EventEmitter<Post> = new EventEmitter();
  @ViewChild('titleInput', { static: true }) titleRef: ElementRef;
  @ViewChild('textInput', { static: true }) textRef: ElementRef;

  title: string = '';
  text: string = '';

  constructor() {}

  ngOnInit(): void {
    this.titleRef.nativeElement.focus();
  }

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        id: Math.round(Math.random() * 100),
      };
      this.onAdd.emit(post);
      this.title = this.text = '';
    }
  }
  deleteAllPosts() {
    this.onDeleteAllPosts.emit();
  }

  focusTitle() {
    this.titleRef.nativeElement.focus();
  }
  focusText() {
    this.textRef.nativeElement.focus();
  }
}
