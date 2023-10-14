import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { SupabaseService } from 'src/app/shared/services/supabase/supabase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Input()
  error!: string | null;

  @Output() submitEM = new EventEmitter();

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    // password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService, private modalService: ModalService) {
    this.route.queryParams
      // .filter(params => params.category)
      .subscribe(params => {
        console.log(params); // { category: "fiction" }
        // this.category = params.category;
        // console.log(this.category); // fiction
        this.verifyOtp(params as any);
      }
      );
    console.log(this.route.snapshot.data);

  }

  submit() {
    // const modalRef = this.modalService.create({
    //   message: 'Magic link has been sent to your email',
    //   title: 'Continue to email',
    //   subMessage: 'Link expires after 60 seconds',
    //   type: 'success',
    //   buttons: [
    //     {
    //       text: 'OPEN EMAIL',
    //       handler: () => {
    //         return true;
    //       }
    //     }
    //   ]
    // });
    // return;
    if (this.form.valid) {
      this.authService.signInWithMagicLink(this.form.value)
        .then(res => {
          console.log(res);
          // TODO: Show message to check email for link
          if (!res.error) {
            const modalRef = this.modalService.create({
              message: 'Magic link has been sent to your email',
              title: 'Continue to email',
              subMessage: 'Link expires after 60 seconds',
              type: 'success',
              buttons: [
                {
                  text: 'OPEN EMAIL',
                  handler: () => {
                    this.form.reset();
                    location.href = 'https://mail.google.com/mail/u/0/#inbox';
                    return true;
                  }
                }
              ]
            });
          } else {
            const modalRef = this.modalService.create({
              message: 'An error occured while attempting to login',
              title: 'Try again',
              // subMessage: 'Link expires after 60 seconds',
              type: 'error',
              buttons: [
                {
                  text: 'CLOSE',
                  handler: () => {
                    return true;
                  }
                }
              ]
            });
          }

          this.submitEM.emit(res);
        }, err => {
          console.error(err);
          const modalRef = this.modalService.create({
            message: 'An error occured while attempting to login',
            title: 'Try again',
            // subMessage: 'Link expires after 60 seconds',
            type: 'error'
          });
          this.submitEM.emit(err);
        });
    }
  }

  verifyOtp(params: {
    token?: string,
    error?: string,
    error_code?: string,
    error_description: string
  }) {
    // if(!params?.token || params?.error) {
    //   // Show error alert
    // } else {
    const email = '';
    // this.authService.verifyMagicLink({ email, ...params } as any)
    this.authService.getUserFromSession()
      .then(res => {
        console.log(res);
        // alert(JSON.stringify(res));
        this.router.navigateByUrl('dashboard/home');
      }, err => {
        // Show error message
        // alert(JSON.stringify(err));
        console.log(err);
      });
    // }
  }


}
