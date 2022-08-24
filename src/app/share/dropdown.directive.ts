import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // @HostListener('click')
  // click() {
  //   console.log("click", this.elementRef.nativeElement.classList.contains("open"));
  //   if (!this.elementRef.nativeElement.classList.contains("open")) {
  //     this.renderer.addClass(this.elementRef.nativeElement, "open");
  //   } else {
  //     this.renderer.removeClass(this.elementRef.nativeElement, "open");
  //   }
  // }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click')
  click() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: Event) {
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

}
