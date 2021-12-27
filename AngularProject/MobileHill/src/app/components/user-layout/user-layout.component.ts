import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';

import { RefDirective } from 'src/app/shared/ref.directive';
import { ModalComponent } from '../elements/modal/modal.component';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss'],
})
export class UserLayoutComponent implements OnInit {
  @ViewChild(RefDirective) refDir: RefDirective;
  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    this.refDir.containerRef.clear();

    const component = this.refDir.containerRef.createComponent(modalFactory);
    component.instance.close.subscribe(() => {
      this.refDir.containerRef.clear();
    });
  }
}
