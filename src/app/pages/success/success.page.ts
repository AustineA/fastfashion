import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
  constructor(private renderer2: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {}

  fire() {
    const canvas = this.renderer2.createElement('canvas');

    this.renderer2.appendChild(this.elementRef.nativeElement, canvas);

    const newConfetti = confetti.create(canvas, {
      resize: true,
    });

    const colors = ['#667FEB', '#ffffff', 'CAA963', '#FF3636', '#8FFF36'];

    newConfetti({
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });

    newConfetti({
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    });
  }

  ngAfterViewInit() {
    this.fire();
  }
}
