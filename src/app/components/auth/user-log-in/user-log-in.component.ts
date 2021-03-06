import { Subject } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthenticationComponent } from '../../shared/user-authentication/user-authentication.component';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.component.html',
  styleUrls: ['./user-log-in.component.scss']
})
export class UserLogInComponent {

  currentDialog: MatDialogRef<UserAuthenticationComponent> = null;

  constructor(matDialog: MatDialog,
              activatedRoute: ActivatedRoute,
              private router: Router) {

        if(this.currentDialog){
          this.currentDialog.close();
        }
        this.currentDialog= matDialog.open(UserAuthenticationComponent);
        this.currentDialog.afterClosed().subscribe(res=>{
          console.log("Dialog closed", res);
          if ((!!res && !!res.isAdmin )) {
           router.navigate(['/dashboard']);
          } else {
            router.navigateByUrl('/');
          }
        });
  }




}
