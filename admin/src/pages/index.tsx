import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Spinner from 'src/@core/components/spinner'

import { useAuth } from 'src/hooks/useAuth'

/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = (role: string) => {
  if (role === 'client') return '/acl'
  else return '/home'
}

const Home = () => {
  // ** Hooks
  const auth = useAuth()
  const router = useRouter()

  console.log(auth)

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (auth.user && auth.user.role) {
      const homeRoute = getHomeRoute(auth.user.role)

      // Redirect user to Home URL
      router.replace(homeRoute)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Spinner />
}

export default Home
