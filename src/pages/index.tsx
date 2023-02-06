
import { useEffect } from 'react'

import { useRouter } from 'next/router'

import Spinner from 'src/@core/components/spinner'

import { useAuth } from 'src/hooks/useAuth'

export const getHomeRoute = (role: string) => {
  if (role === 'client') return '/dashboards/activities'
  else return '/dashboards/activities'
}

const Home = () => {

  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (auth.user && auth.user.role) {
      const homeRoute = getHomeRoute(auth.user.role)

      router.replace(homeRoute)
    }
  }, [])

  return <Spinner />
}

export default Home
