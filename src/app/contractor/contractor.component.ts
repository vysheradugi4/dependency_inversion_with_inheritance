import { OnInit, Component } from '@angular/core';

import { Service } from 'src/app/shared/services/service';
import { Contractor } from 'src/app/shared/models/contractor.model';
import { ContractorService } from 'src/app/shared/services/contractor.service';
import { Entity } from 'src/app/entity/entity';


@Component({
  selector: 'contractor',
  template: 'Contractor Component <button (click)="delete(contractor)">Delete</button>',
  providers: [
    { provide: Service, useClass: ContractorService }
  ]
})
export class ContractorComponent extends Entity<Contractor> implements OnInit {

  public contractor: Contractor;

  constructor(public service: Service<Contractor>) {
    super(service);
  }

  ngOnInit(): void {
    this.contractor = new Contractor();
    this.contractor.id = 555;
  }
}