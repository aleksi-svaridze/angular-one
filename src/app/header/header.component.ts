import { Component } from "@angular/core";

// Second Step
@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

// First Step
export class HeaderComponent {
    desc = 'header component'
}