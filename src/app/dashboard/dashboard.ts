import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from "../header/header";
import { Sidebar } from "../sidebar/sidebar";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, Header, Sidebar, Footer],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  constructor(private renderer: Renderer2) {};
    
    ngAfterViewInit():void {
      this.renderer.removeClass(document.body,"sidebar-open");
      this.renderer.addClass(document.body,"sidebar-closed");
      this.renderer.addClass(document.body,"sidebar-collapse");
  }
}