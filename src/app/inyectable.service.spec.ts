import { TestBed, inject } from '@angular/core/testing';

import { InyectableService } from './inyectable.service';

describe('InyectableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InyectableService]
    });
  });

  it('should be created', inject([InyectableService], (service: InyectableService) => {
    expect(service).toBeTruthy();
  }));
});
