
import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { useAuth } from 'src/hooks/useAuth'
import ActivityDashboard from './dashboards/activities'



const Home = () => {

  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (auth.user && auth.user.role) {
      const homeRoute = '/dashboards/activities'

      router.replace(homeRoute)
    }
  }, [])

  return <ActivityDashboard />
}

export default Home
