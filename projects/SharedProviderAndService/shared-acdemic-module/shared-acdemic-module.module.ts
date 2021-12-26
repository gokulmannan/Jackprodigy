 
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { ManageAcdemicProviderServiceService } from '../ManageAcademic-ServiceandProvider/manage-acdemic-provider-service.service';
import { ManageAcademicserviceServiceService } from '../ManageAcademic-ServiceandProvider/manage-academicservice-service.service';
import { NaacService } from '../Naac-serviceAndProvider/naac-service.service';
import { NaacProvider } from '../Naac-serviceAndProvider/naac-provider.service';
  


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[ManageAcademicserviceServiceService,ManageAcdemicProviderServiceService,NaacService,NaacProvider]
})
export class SharedAcdemicModuleModule {
static forRoot():ModuleWithProviders<any>
{
  return {
    ngModule:SharedAcdemicModuleModule, 
    providers:[]
  };
}

 }
