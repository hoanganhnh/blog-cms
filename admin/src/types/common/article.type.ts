import type { Comment } from './comment.type'

export type Article = {
  id: number
  title: string
  slug: string
  description: string
  comments: Comment[]
  favorited: boolean
}
