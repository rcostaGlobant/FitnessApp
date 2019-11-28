import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DanceGalleryComponent } from '../dance-gallery/dance-gallery.component';

@Component({
  selector: 'app-dance-gallery-modal',
  templateUrl: './dance-gallery-modal.component.html',
  styleUrls: ['./dance-gallery-modal.component.scss']
})
export class DanceGalleryModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef <DanceGalleryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
