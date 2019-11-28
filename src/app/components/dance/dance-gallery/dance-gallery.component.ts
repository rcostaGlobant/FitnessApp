import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DanceGalleryModalComponent } from '../dance-gallery-modal/dance-gallery-modal.component';

@Component({
  selector: 'app-dance-gallery',
  templateUrl: './dance-gallery.component.html',
  styleUrls: ['./dance-gallery.component.scss']
})
export class DanceGalleryComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  images:any=[{url:"https://source.unsplash.com/pWkk7iiCoDM/400x300"},
              {url:"https://source.unsplash.com/aob0ukAYfuI/400x300"},
              {url:"https://source.unsplash.com/EUfxH-pze7s/400x300"},
              {url:"https://source.unsplash.com/M185_qYH8vg/400x300"},
              {url:"https://source.unsplash.com/sesveuG_rNo/400x300"},
              {url:"https://source.unsplash.com/AvhMzHwiE_0/400x300"},
              {url:"https://source.unsplash.com/2gYsZUmockw/400x300"},
              {url:"https://source.unsplash.com/EMSDtjVHdQ8/400x300"},
              {url:"https://source.unsplash.com/8mUEy0ABdNE/400x300"},
              {url:"https://source.unsplash.com/G9Rfc1qccH4/400x300"},
              {url:"https://source.unsplash.com/aJeH0KcFkuc/400x300"},
              {url:"https://source.unsplash.com/p2TQ-3Bh3Oo/400x300"}];
  ngOnInit() {
  }

  openImgModal(img: any): void {
    let color="";
    const dialogRef = this.dialog.open(DanceGalleryModalComponent, {
      width: '890px',
      data: { image: img }
    });

    dialogRef.afterClosed().subscribe(res => {
      color = res;
    });
  }

}
