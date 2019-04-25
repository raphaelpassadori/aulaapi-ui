import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export class ProdutoFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 2;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  produtosUrl = 'http://localhost:8080/produtos';

  pesquisar(filtro: ProdutoFiltro):Promise<any>{
      let params = new HttpParams({
        fromObject: {
          page: filtro.pagina.toString(),
          size: filtro.itensPorPagina.toString()
        }
      });

      if (filtro.nome) {
        params = params.append('nome', filtro.nome);
      }

      return this.http.get<any>(`${this.produtosUrl}`, {params})
      .toPromise()
      .then(response =>{
        const produtos = response.content;

        const resultado = {
          produtos,
          total: response.totalElements
        }

        return resultado;
      });
  }
}
