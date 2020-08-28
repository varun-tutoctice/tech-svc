import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class Tech extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: string;


  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'number',
  })
  price?: string;

  @property({
    type: 'string',
  })
  applicationType?: string;

  @property({
    type: 'Boolean',
  })
  isAvailable?: string;

  constructor(data?: Partial<Tech>) {
    super(data);
  }
}

export interface TechRelations {
  // describe navigational properties here
}

export type TechWithRelations = Tech & TechRelations;
