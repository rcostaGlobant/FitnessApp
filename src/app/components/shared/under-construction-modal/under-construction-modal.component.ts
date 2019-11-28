import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-under-construction-modal',
  templateUrl: './under-construction-modal.component.html',
  styleUrls: ['./under-construction-modal.component.scss']
})
export class UnderConstructionModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef <UnderConstructionModalComponent>,
              @Inject(MAT_DIALOG_DATA) public url: any,
              private router: Router
              ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.router.navigateByUrl(this.url.url);
  }

}
