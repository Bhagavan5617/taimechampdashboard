import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SmartButtonComponent} from '@snovasys/snova-tailwind-uikit';
@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule,SmartButtonComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  activeTab = 'configure'; 
  apps = [
    { name: 'Education', active: true },
    { name: 'Email', active: false },
    { name: 'Entertainment', active: false },
    { name: 'Marketing', active: false },
    { name: 'News', active: false },
    { name: 'Office Apps', active: true },
    { name: 'Others', active: false },
    { name: 'Social Media', active: false },
  ];
}
