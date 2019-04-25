import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosModule } from './produtos/produtos.module';
import { CoreModule } from './core/core.module';
import { ProdutoService } from './produtos/produto.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ProdutosModule
    
    
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
