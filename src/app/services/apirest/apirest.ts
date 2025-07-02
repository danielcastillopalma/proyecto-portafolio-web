import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Apirest {


  constructor() { }
  /**
   * Noticias
   */
  //Esta funcion obtiene las noticias desde el backend
  public async getNews() {
    try {
      const response = await fetch(`https://respawnen3.duckdns.org/api/news`);
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor al tratar de obtener los datos de noticias');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  //esta funcion elimina las noticias del backend
  public async delNew(id: number) {
    const response = await fetch(`https://respawnen3.duckdns.org/api/news/${id}`, {
      method: 'DELETE'
    });

    window.location.reload();
  }
  //Esta funcion publica las nuevas noticias en el backend
  public async postNew(title: string, message: string, reference: string, email: string) {
    try {
      const createResponse = await fetch(`https://respawnen3.duckdns.org/api/news`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          message: message,
          reference: reference,
          email: email
        }),
      });

      if (!createResponse.ok) {
        throw new Error('Error al crear la noticia');
      }

      return await createResponse.json();

    } catch (error) {
      console.error(error);
    }
  }
  /**
   * Puntos Verdes
   */
  public async getPuntosVerdes() {
    try {
      const response = await fetch(`https://respawnen3.duckdns.org/api/mapa/web`);
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor al tratar de obtener los puntos verdes');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  /**
   * Reportes
   */
  public async getReportes() {
    try {
      const response = await fetch(`https://respawnen3.duckdns.org/api/blog/reporte`);
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor al tratar de obtener los reportes');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  /**
   * Sugerencias
   */
  public async getSugerencias() {
    try {
      const response = await fetch(`https://respawnen3.duckdns.org/api/blog/sugerencias`);
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor al tratar de obtener las sugerencias.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  /**
   * Aportes
   */
  public async getAportes() {
    try {
      const response = await fetch(`https://respawnen3.duckdns.org/api/querys`);
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor al tratar de obtener los aportes.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

