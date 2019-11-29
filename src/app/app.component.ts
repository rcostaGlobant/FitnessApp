import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BeFitness';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      console.log("Hay user");
      console.log(user);

      //hacer el pedido de los datos usuario a la api para mostrarlos
    });
  }
}
