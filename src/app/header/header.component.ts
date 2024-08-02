import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('icons', { static: true }) icons!: ElementRef;
  @ViewChild('nav', { static: true }) nav!: ElementRef;

  ngAfterViewInit() {
    if (this.icons) {
      this.icons.nativeElement.addEventListener('click', () => {
        this.nav.nativeElement.classList.toggle('active');
      });
    }

    const links = document.querySelectorAll('nav li');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        if (this.nav) {
          this.nav.nativeElement.classList.remove('active');
        }
      });
    });
  }
}
