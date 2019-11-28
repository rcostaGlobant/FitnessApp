import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UnderConstructionModalComponent } from '../../shared/under-construction-modal/under-construction-modal.component';

@Component({
  selector: 'app-services-to-offer',
  templateUrl: './services-to-offer.component.html',
  styleUrls: ['./services-to-offer.component.scss']
})
export class ServicesToOfferComponent implements OnInit {
  name: "Jose";
  color: "Rojo";

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UnderConstructionModalComponent, {
      width: '650px',
      //data: { name: this.name, color: this.color }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }

}
