import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-social-media',
  imports: [],
  templateUrl: './social-media.html',
  styleUrl: './social-media.scss'
})
export class SocialMedia {
  @Output() languageSwitcher = new EventEmitter<string>();

  changeLanguage(value:string){
    this.languageSwitcher.emit(value);
  }
}
