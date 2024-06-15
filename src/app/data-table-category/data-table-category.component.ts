import { Component, OnInit, ViewChild, TemplateRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ApirestService } from '../api.service';
@Component({
  selector: 'app-data-table-category',
  templateUrl: './data-table-category.component.html',
  styleUrls: ['./data-table-category.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule]

})
export class DataTableCategoryComponent  implements OnInit {
  @ViewChild('createModal') createModal!: TemplateRef<any>;
  
  categorias: any[] = [];
  createCategoryForm: FormGroup;
  isModalOpen = false;

 constructor(
    public apirestservice: ApirestService,
    private modalController: ModalController,
    private formBuilder: FormBuilder
  ) {
    this.createCategoryForm = this.formBuilder.
    group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this.apirestservice.getCategorias().subscribe(
      (responseP: any) => {
        this.categorias = responseP;
      },
      (error) => {
        console.error('Error al obtener categorias:', error);
      }
    );
  }

  
  showModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    if (this.createCategoryForm.valid) {
      const newCategory = this.createCategoryForm.value;
      this.apirestservice.createCategory(newCategory).subscribe(
        (createdProduct) => {
          this.categorias.push(createdProduct);
          this.closeModal();
          this.createCategoryForm.reset();
        },        
        (error) => {
          console.error('Error al crear categoria:', error);
        }
      );
    }
  }
}
