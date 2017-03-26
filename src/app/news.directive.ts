import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[newsHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class HighlightDirective {
  private _defaultColor = 'orange';
  private el: HTMLElement;

  constructor(el: ElementRef) { this.el = el.nativeElement; }

  @Input('myHighlight') highlightColor: string;

  onMouseEnter() { 
      this.highlight(this.highlightColor || this._defaultColor);
      this.newsFocus(true);
  }
  onMouseLeave() { 
      this.highlight(null);
      this.newsFocus(false);
  }

  private highlight(color:string) {
      this.el.style.backgroundColor = color;
  }

  private newsFocus(isFocus:boolean) {
      if(isFocus) {
        this.el.setAttribute("class","news_wrap_on");
      } else {
        this.el.setAttribute("class","");
      }
  } 

}