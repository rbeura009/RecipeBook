import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[toggleDropdown]',
})
export class toggleDropdown {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggle(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}
}
