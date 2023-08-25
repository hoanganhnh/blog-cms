import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountMultiple from 'mdi-material-ui/AccountMultiple'
import Post from 'mdi-material-ui/Post'

import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/home'
    },
    {
      title: 'User manager',
      icon: AccountMultiple,
      path: '/users',
      action: 'read',
      subject: 'acl-page'
    },
    {
      title: 'Article manager',
      icon: Post,
      path: '/articles',
      action: 'read',
      subject: 'acl-page'
    }
  ]
}

export default navigation
