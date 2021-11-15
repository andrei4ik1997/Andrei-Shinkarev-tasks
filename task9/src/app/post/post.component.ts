import {
  EventEmitter,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() onDelete = new EventEmitter();
  @ContentChild('info', { static: true }) infoRef: ElementRef;

  ngOnInit(): void {
  }

  deletePost() {
    this.onDelete.emit(this.post.id);
  }
}
