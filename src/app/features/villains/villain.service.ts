import { Injectable } from '@angular/core';
import { Villain } from '@models/villain';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class VillainService extends EntityCollectionServiceBase<Villain> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Villain', serviceElementsFactory);
  }
}
