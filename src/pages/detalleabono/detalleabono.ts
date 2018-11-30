import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NegocioProvider } from '../../providers/negocio/negocio'
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the DetalleabonoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalleabono',
  templateUrl: 'detalleabono.html',
})
export class DetalleabonoPage {

  mensaje: any;
  ventas: any[] = [];
  abono: any[] = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public negocio: NegocioProvider, 
    private alertCtrl: AlertController) {
    let data3 = this.navParams.data;
    console.log(data3); //this shows as {}
    this.abono = data3
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Abono modificado exitosamente',
      subTitle: '',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert2() {
    const alert = this.alertCtrl.create({
      title: 'El abono no se modificó',
      subTitle: 'Existen campos vacíos',
      buttons: ['OK']
    });
    alert.present();
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

  ActualizarAbono() {
    this.negocio.updateAbono(this.abono)
      .subscribe(
        (data) => { // Success
          this.mensaje = data;
          if (this.mensaje.status == "ok") {
            //alert("Cliente actualizado!!");
            this.showAlert();
            //this.navParams.get("HomePage").someFnToUpdateParent();
            this.navCtrl.pop();
          }
          else
            //alert(JSON.stringify(data));
            this.showAlert2();
        },
        (error) => {
          //alert(JSON.stringify(error));
          //console.error(error);
          this.showAlert2();
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
