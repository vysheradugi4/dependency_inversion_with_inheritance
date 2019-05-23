import { Service } from 'src/app/shared/services/service';
import { Contractor } from 'src/app/shared/models/contractor.model';


export class ContractorService extends Service<Contractor> {
  public delete(contractor: Contractor) {
    console.log('Delete from Contractor Service!', contractor);
  }
}