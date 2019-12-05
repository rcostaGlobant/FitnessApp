import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UnderConstructionModalComponent } from '../../shared/under-construction-modal/under-construction-modal.component';

@Component({
  selector: 'app-nutrition-home',
  templateUrl: './nutrition-home.component.html',
  styleUrls: ['./nutrition-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NutritionHomeComponent implements OnInit {

  isWoman:any=false;
  isMan:any=false;

  manUrl="https://docs.google.com/forms/d/1VHIyAfXlPac1IcqzagkMzm4XuQTMLPka_Ff8N1bpQRI/edit";
  womenUrl="https://docs.google.com/forms/d/1VHIyAfXlPac1IcqzagkMzm4XuQTMLPka_Ff8N1bpQRI/edit";

  constructor(public dialog: MatDialog,
              private translate: TranslateService) { }

  ngOnInit() {
  }

  onManChange($event:Event){
    if(this.isWoman)
      this.isWoman=false;
    console.log("value changed Man :" );

 }
 onWomanChange($event:Event){
  if(this.isMan)
      this.isMan=false;
    console.log("value changed Man :" );
}

openDialog(): void {
  let url="";
  if(this.isMan)
  url=this.manUrl;
  else
  url=this.womenUrl
  const dialogRef = this.dialog.open(UnderConstructionModalComponent, {
    width: '650px',
    data: { url: url}
  });

  dialogRef.afterClosed().subscribe(res => {
    let a = res;
  });
}


}
