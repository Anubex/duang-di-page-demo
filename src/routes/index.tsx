import SimpleLayout from '@/layouts/simple'

// import ComingSoonPage from '@/pages/coming-soon'
import HomePage from '@/pages/home'
// export const Page404 = lazy(() => import('@/pages/page-not-found'))
// export const ComingSoonPage = lazy(() => import('@/pages/coming-soon'))
// export const HomePage = lazy(() => import('@/pages/home'))
// export const TopUpPage = lazy(() => import('@/pages/topup'))
// export const PackagePage = lazy(() => import('@/pages/package'))
// export const ActivateSimPage = lazy(() => import('@/pages/activate-sim'))
import Page404 from '@/pages/page-not-found'
// import { Suspense, lazy } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <SimpleLayout>
          {/* <Suspense> */}
          <Outlet />
          {/* </Suspense> */}
        </SimpleLayout>
      ),
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: 'home', element: <HomePage /> },
        {
          path: '404',
          element: <Page404 />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ])

  return routes
}
