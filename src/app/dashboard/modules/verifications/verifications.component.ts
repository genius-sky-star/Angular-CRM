import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-verifications',
  templateUrl: './verifications.component.html',
  styleUrls: ['./verifications.component.scss'],
})
export class VerificationsComponent implements OnInit {
  constructor(public router: Router) {
    // router.navigate(['dashboard/varifications/streamer-avatar/']);
  }

  ngOnInit(): void {
    this.router.navigate(['dashboard/verifications/streamer-avatar']);
  }
}
