import { gql } from 'graphql-request'
import { Label } from './labelFragment'

export const highlightFragment = gql`
  fragment HighlightFields on Highlight {
    id
    type
    shortId
    quote
    prefix
    suffix
    patch
    annotation
    createdByMe
    createdAt
    updatedAt
    sharedAt
    highlightPositionPercent
    highlightPositionAnchorIndex
    labels {
      id
      name
      color
      createdAt
    }
  }
`
export type HighlightType = 'HIGHLIGHT' | 'REDACTION' | 'NOTE'

export type Highlight = {
  id: string
  type: HighlightType
  shortId: string
  quote?: string
  prefix?: string
  suffix?: string
  patch: string
  annotation?: string
  createdByMe: boolean
  createdAt: string
  updatedAt: string
  sharedAt: string
  labels?: Label[]
  highlightPositionPercent?: number
  highlightPositionAnchorIndex?: number
}

export type User = {
  id: string
  name: string
  profile: {
    id: string
    pictureUrl?: string
    username: string
  }
}
