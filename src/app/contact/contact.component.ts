import { Component } from "@angular/core";

@Component({
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css']
})

export class ContactComponent {
    title = 'Be the first to test';
    desc = 'Hi, I\'m Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I\'ll be in touch to schedule a call.';
}