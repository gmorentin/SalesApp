import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CrearabonoPage } from '../../pages/crearabono/crearabono';
import { DetalleabonoPage } from '../../pages/detalleabono/detalleabono';
import { NegocioProvider } from '../../providers/negocio/negocio'
import { ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-listarabonos',
  templateUrl: 'listarabonos.html',
})
export class ListarabonosPage {

  abonos: any[] = [];
  mensaje: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public actionSheetCtrl: ActionSheetController, 
    public alertCtrl: AlertController,  
    public negocio: NegocioProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
    //alert(JSON.stringify(NavParams.prototype.data))
  }

  public openModal() {
    this.navCtrl.push(CrearabonoPage);
  }


  ionViewDidLoad() {
    this.cargarAbonos();
  }

  ionViewDidEnter() {
    this.cargarAbonos();
  }

  eliminarAbono(idabono) {
    this.negocio.deleteAbono(idabono)
      .subscribe(
        (data) => {
          this.mensaje = data;
          if (this.mensaje.status == "ok") {
            this.ionViewDidEnter();
            const toast = this.toastCtrl.create({
              message: 'Abono eliminado',
              duration: 3000
            });
            toast.present();
          }
          else {
            alert(JSON.stringify(data))
            const toast = this.toastCtrl.create({
              message: 'No se pudo eliminar el abono!!',
              duration: 3000
            });
            toast.present();
          }
        },
        (error) => {
          alert(JSON.stringify(error));
          console.error(error);
        }
      )
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Carga Fallida',
      subTitle: 'No se pudieron obtener los abonos',
      buttons: ['OK']
    });
    alert.present();
  }

  cargarAbonos() {
    this.negocio.getAbonos()
    .subscribe(
      (data) => {
          this.abonos = data['records'];
        },
        (error) => {
          this.showAlert();
          alert(JSON.stringify(error))
          console.error(error);
        }
      )
  }

  public openDetalle(item) {
    const actionSheet = this.actionSheetCtrl.create({
      title: '¿Que quieres hacer?',
      buttons: [
        {
          text: 'Eliminar',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            let alert = this.alertCtrl.create({
              title: 'Confirmar la eliminación',
              message: '¿Realmente quieres eliminar este abono?',
              buttons: [
                {
                  text: 'Cancelar',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                  }
                },
                {
                  text: 'Eliminar',
                  handler: () => {
                    console.log('Eliminar clicked');
                    const loader = this.loadingCtrl.create({
                      content: "Eliminando abono...",
                      duration: 3000
                    });
                    loader.present();
                    this.eliminarAbono(item.idabono);
                  }
                }
              ]
            });
            alert.present();
          }
        }, {
          text: 'Editar',
          icon: 'md-create',
          handler: () => {
            this.navCtrl.push(DetalleabonoPage, item);
            console.log('Archive clicked');
          }
        }, {
          text: 'Cancelar',
          icon: 'md-close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  /*EditarAbono(){
    this.navCtrl.push(DetalleabonoPage)
  }
  
  AgregarAbono(){
    this.navCtrl.push(CrearabonoPage)
  }

  mostrarAcciones() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Opciones',
      buttons: [
        {
          text: 'Eliminar',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            this.mostrarConfirmacion();
          }
        },{
          text: 'Editar',
          icon: 'md-create',
          handler: () => {
            console.log('Archive clicked');
            this.EditarAbono();
          }
        },{
          text: 'Cancelar',
          icon:'md-close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  mostrarConfirmacion() {
    const confirm = this.alertCtrl.create({
      title: 'Va a eliminar el abono!!!!',
      message: '¿Está seguro de que quiere eliminar el abono?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }*/

}

