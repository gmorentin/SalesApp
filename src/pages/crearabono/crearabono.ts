import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NegocioProvider } from '../../providers/negocio/negocio'
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the CrearabonoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crearabono',
  templateUrl: 'crearabono.html',
})
export class CrearabonoPage {
  ventas: any[] = [];
  abono: any[] = [];
  mensaje: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public negocio: NegocioProvider, 
    private alertCtrl: AlertController) {
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Abono agregada exitosamente',
      subTitle: '',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert2() {
    const alert = this.alertCtrl.create({
      title: 'El abono no se agregó',
      subTitle: 'Existen campos vacíos',
      buttons: ['OK']
    });
    alert.present();
  }

  AgregarAbono() {
    this.negocio.putAbono(this.abono)
      .subscribe(
        (data) => {
          this.mensaje = data;
          if (this.mensaje.status == "ok") {
            //alert("Cliente agregado!!");
            this.showAlert();
            this.navCtrl.pop();
          }
          else
          alert(JSON.stringify(data));
          //this.showAlert2();
        },
        (error) => {
          alert(JSON.stringify(error));
          //this.showAlert2();
          console.error(error);
        }
      )
  }

  cargarVentas() {
    this.negocio.getVentas()
      .subscribe(
        (data) => {
          this.ventas = data['records'];
          //alert(JSON.stringify(this.clientes))
        },
        (error) => {
          //this.showAlert();
          console.error(error);
        }
      )
  }
  ionViewDidLoad() {
    this.cargarVentas();
  }

  ionViewDidEnter() {
    this.cargarVentas();
  }
}
