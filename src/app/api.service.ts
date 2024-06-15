import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

  @Injectable({
  providedIn: 'root'
  })
  export class ApirestService {
    private apiUrl = 'https://api-ecommerce-01.azurewebsites.net/api/products/';
    private apiCaregory = 'https://api-ecommerce-01.azurewebsites.net/api/product_categories/';

    constructor(private http: HttpClient) { }
     
    getProductos() {
      return this.http.get(this.apiUrl);
    }

    createProducto(product: any) {
      return this.http.post('https://api-ecommerce-01.azurewebsites.net/api/products/', product);
    }

    getCategorias() {
      return this.http.get(this.apiCaregory);
    }

    createCategory(newCategory: any) {
      return this.http.post('https://api-ecommerce-01.azurewebsites.net/api/category/', newCategory);
    }

    // crearProducto(nuevoProducto: any) {
    //   return this.http.post('https://api-ecommerce-01.azurewebsites.net/api/products/', nuevoProducto);
    // }

   
    // actualizarProducto(producto: any) {
    //   // Se asume que tu API tiene una ruta para actualizar productos, por ejemplo, '/api/productos/:id/'.
    //   // Aquí usaremos la convención RESTful donde ':id' es el identificador único del producto.
    //   return this.http.put(`http://127.0.0.1:8000/api_drf/v1/producto/${producto.id}/`, producto);
    // }

  //   eliminarProducto(id: any) {
  //     // Suponiendo que tu API tiene una ruta para eliminar productos, por ejemplo, '/api/productos/:id/'.
  //     // Aquí usaremos la convención RESTful donde ':id' es el identificador único del producto.
  //     return this.http.delete(`http://127.0.0.1:8000/api_drf/v1/producto/${id}/`);
  //   }

  //   deleteEstudios(id:any) {
  //     return this.http.delete('http://localhost:8000/api_drf/v1/estudios/'+id+"/");
  //  }
 
  }
    
  
