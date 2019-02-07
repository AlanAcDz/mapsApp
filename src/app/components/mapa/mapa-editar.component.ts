import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent {
  forma: FormGroup;
  constructor(public dialogRef: MatDialogRef<MapaEditarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public fb: FormBuilder) {
    this.forma = fb.group({
      'titulo': data.titulo,
      'desc': data.desc
    });
  }
  guardarCambios() {
    this.dialogRef.close(this.forma.value);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
