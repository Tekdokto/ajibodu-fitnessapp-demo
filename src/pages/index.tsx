
import { useEffect } from 'react'

import { useRouter } from 'next/router'

import Spinner from 'src/@core/components/spinner'

import { useAuth } from 'src/hooks/useAuth'



const Home = () => {

  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (auth.user && auth.user.role) {
      const homeRoute = '/dashboards/activities'

      router.replace(homeRoute)
    }
  }, [])

  return <Spinner />
}

export default Home
