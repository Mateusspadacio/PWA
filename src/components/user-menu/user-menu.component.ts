import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { BaseComponent } from '../base.component';
import { App } from 'ionic-angular';

/*
  Menu lateral de navegação do usuário, as paginas e seus respectivos
  componentes são declarados em um objeto onde quando clicado navega para
  a outra pagina
*/
@Component({
  selector: 'user-menu',
  templateUrl: 'user-menu.component.html'
})
export class UserMenuComponent extends BaseComponent {

  public pages = [
    { title: 'Home', component: 'HomePage', icon: 'home' },
    { title: 'Environments', component: 'EnvironmentsPage', icon: '' },
    { title: 'Estatísticas', component: 'StatisticsPage', icon: 'stats' },
    { title: 'Controladores', component: 'ControlsPage', icon: 'color-wand' }
  ];

  constructor(
    public app: App,
    public userService: UserServiceProvider
  ) {
    super(app, userService);
  }

}
