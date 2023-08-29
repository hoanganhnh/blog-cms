// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

export type UserLayoutType = {
  id: string | undefined
}

export type UsersType = {
  id: number
  role: 'admin' | 'author'
  email: string
  status: 'inactive' | 'active'
  avatar: string
  company: string
  country: string
  contact: string
  fullName: string
  username: string
  avatarColor?: ThemeColor
}
