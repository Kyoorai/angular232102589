import { Component, Renderer2 } from '@angular/core';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard2',
  imports: [RouterModule,Header, Sidebar, Footer],
  templateUrl: './dashboard2.html',
  styleUrl: './dashboard2.css'
})
export class Dashboard2 {
  constructor(private renderer: Renderer2) {};
    
    ngAfterViewInit():void {
      this.renderer.removeClass(document.body,"sidebar-open");
      this.renderer.addClass(document.body,"sidebar-closed");
      this.renderer.addClass(document.body,"sidebar-collapse");
  }
}
