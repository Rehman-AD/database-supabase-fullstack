import { PolicyFormField } from 'components/interfaces/Auth/Policies/Policies.types'

export interface StoragePolicyFormField extends PolicyFormField {
  allowedOperations: string[]
}

export interface StorageBucket {
  id: string
  name: string
  owner: string
  public: boolean
  file_size_limit: number
  allowed_mime_types: string[]
  created_at: string
  updated_at: string
}
