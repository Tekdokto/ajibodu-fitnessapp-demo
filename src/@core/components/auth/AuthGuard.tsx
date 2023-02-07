// ** React Imports
import { ReactNode, ReactElement, useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Hooks Import
import { useAuth } from 'src/hooks/useAuth'

interface AuthGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const AuthGuard = (props: AuthGuardProps) => {
  const { children } = props
  const auth = useAuth()
  const router = useRouter()

  useEffect(
    () => {
      if (!router.isReady) {
        router.replace('/dashboards/activities')
      }


      if (auth.user === null && !window.localStorage.getItem('userData')) {
        if (router.asPath !== '/') {
          router.replace({
            pathname: '/dashboards/activities',
            query: { returnUrl: router.asPath }
          })
        } else {
          router.replace({
            pathname: '/dashboards/history',
            query: { returnUrl: router.asPath }
          })
      }
        router.replace('/dashboards/activities')
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.route]
  )

  if (auth.loading || auth.user === null) {
    return <>{children}</>
  }

  return <>{children}</>
}

export default AuthGuard
