import { type SchemaTypeDefinition } from 'sanity'
import { Services } from '../schema/services'
import { Clients } from '../schema/clients'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Services, Clients],
}
