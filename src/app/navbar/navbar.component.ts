import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop/shop.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(
    public shopService: ShopService
  ) { }

  ngOnInit() {
  }
}
