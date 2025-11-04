import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './shared/menu/menu';
import { FooterRes } from './shared/footer-res/footer-res';
import { SocialMedia } from './shared/social-media/social-media';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Menu, SocialMedia, FooterRes],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements AfterViewInit {

  @ViewChild('dragScroll') dragScroll!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const el = this.dragScroll.nativeElement;

    let isDown = false;
    let startX = 0, startY = 0;
    let scrollLeftStart = 0, scrollTopStart = 0;
    let isDragging = false;

    el.addEventListener('pointerdown', (e) => {
      isDown = true;
      isDragging = false;
      el.setPointerCapture(e.pointerId);
      startX = e.clientX;
      startY = e.clientY;
      scrollLeftStart = el.scrollLeft;
      scrollTopStart = el.scrollTop;
    }, { passive: false });

    el.addEventListener('pointermove', (e) => {
      if (!isDown) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      // اگر فاصله بیشتر از چند پیکسل باشد، آن را drag در نظر می‌گیریم
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        isDragging = true;
        el.scrollLeft = scrollLeftStart - dx;
        el.scrollTop = scrollTopStart - dy;
      }
    }, { passive: false });

    el.addEventListener('pointerup', (e) => {
      if (!isDragging) {
        // اینجا اجازه می‌دهیم click روی لینک‌ها انجام شود
        const target = e.target as HTMLElement;
        target?.click?.();
      }

      isDown = false;
      isDragging = false;
    });

  }
}
