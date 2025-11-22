import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Menu } from "./shared/menu/menu";
import { SocialMedia } from "./shared/social-media/social-media";
import { RouterOutlet } from "@angular/router";
import { FooterRes } from "./shared/footer-res/footer-res";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Menu, SocialMedia, RouterOutlet, FooterRes],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements AfterViewInit {
  @ViewChild('dragScroll') dragScroll!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {

    const el = this.dragScroll.nativeElement;

    let isDown = false;
    let startX = 0;
    let startY = 0;
    let scrollLeftStart = 0;
    let scrollTopStart = 0;

    let velocityX = 0;
    let velocityY = 0;
    let lastX = 0;
    let lastY = 0;
    let momentumID: number | null = null;

    const stopMomentum = () => {
      if (momentumID) cancelAnimationFrame(momentumID);
      momentumID = null;
    };

    const momentumScroll = () => {
      el.scrollLeft -= velocityX;
      el.scrollTop -= velocityY;

      velocityX *= 0.95;
      velocityY *= 0.95;

      if (Math.abs(velocityX) > 0.2 || Math.abs(velocityY) > 0.2) {
        momentumID = requestAnimationFrame(momentumScroll);
      }
    };

    el.addEventListener('pointerdown', (e) => {
      isDown = true;
      startX = e.clientX;
      startY = e.clientY;
      scrollLeftStart = el.scrollLeft;
      scrollTopStart = el.scrollTop;
      lastX = startX;
      lastY = startY;
      stopMomentum();
    });

    el.addEventListener('pointermove', (e) => {
      if (!isDown) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      el.scrollLeft = scrollLeftStart - dx;
      el.scrollTop = scrollTopStart - dy;

      velocityX = e.clientX - lastX;
      velocityY = e.clientY - lastY;

      lastX = e.clientX;
      lastY = e.clientY;
    });

    el.addEventListener('pointerup', () => {
      isDown = false;
      momentumScroll();
    });

    el.addEventListener('pointerleave', () => {
      if (isDown) {
        isDown = false;
        momentumScroll();
      }
    });
  }
}
