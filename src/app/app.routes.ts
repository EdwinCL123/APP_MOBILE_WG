import { Routes } from '@angular/router';
import { FormExampleComponent } from './forms/form-example/form-example.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DataTableCategoryComponent } from './data-table-category/data-table-category.component';
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },

  { path: 'forms/form-example', component: FormExampleComponent },
  { path: 'data-table', component: DataTableComponent },
  { path: 'data-tableCategory', component: DataTableCategoryComponent },
  { path: 'productos', component: DataTableComponent },
  {
    path: 'home/productos',
    loadComponent: () => import('./data-table/data-table.component').then(m => m.DataTableComponent),
  },

  // {
  //   path: 'productos',
  //   loadChildren: () => import('/data-table.component').then((m) => m.DataTableComponent),
  // },
  // {
  //   path: 'categorias',
  //   loadChildren: () => import('./radio/radio-page.module').then((m) => m.RadioPageModule),
  // },

  { path: '', redirectTo: 'home',  pathMatch: 'full', },
];

export const AppRoutingModule = routes;
