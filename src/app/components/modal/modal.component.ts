import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  isOpen: boolean = false;

  //^ Open Modal Method
  openModal(): void {
    this.isOpen = true;
  }

  //^ Close Modal Method
  closeModal(): void {
    this.isOpen = false;
  }
}
