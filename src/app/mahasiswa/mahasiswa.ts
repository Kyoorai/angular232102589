import { AfterViewInit, Component } from '@angular/core';
import { Header } from "../header/header";
import { Sidebar } from "../sidebar/sidebar";
import { Footer } from "../footer/footer";

declare const $:any;

@Component({
  selector: 'app-mahasiswa',
  imports: [Header, Sidebar, Footer],
  templateUrl: './mahasiswa.html',
  styleUrl: './mahasiswa.css',
})
export class Mahasiswa implements AfterViewInit{
  constructor() {};
    
    ngAfterViewInit():void {
      $("#table1").DataTable();
    }
}
