import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ProductRepository } from './product.repository';
import { CategoryRepository } from './category.repository';
import { RestService } from './rest.service';
@NgModule({
  imports: [HttpClientModule],
  providers:[RestService,ProductRepository,CategoryRepository]
})
export class ModelModule { }
