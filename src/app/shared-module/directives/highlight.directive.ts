import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight('grey');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight('');
  }


  private highlight(color: string): void {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
