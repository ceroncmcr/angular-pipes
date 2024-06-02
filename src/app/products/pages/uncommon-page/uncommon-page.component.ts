import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Cesar';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void{
    this.name = 'Mónica';
    this.gender = 'female';
  }

  // i18n Plural

  public clients: string[] = ['Maria', 'Pedro', 'Cesar', 'Luis', 'Juan', 'Carla', 'Sara'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void{
    this.clients.shift();
  }

  // KeyValue Pipe

  public person = {
    name: 'Cesar',
    age: 23,
    address: 'Calle falsa 123'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap( value => console.log('interval', value) )
    );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
      this.person.name = 'Mauricio';
    }, 3500);
  });

}
