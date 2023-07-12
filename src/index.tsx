import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import './css/index.css'

import App from './App'
import { Home } from './pages/Home'
import { Member } from './pages/Member'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App><Home /></App>} />
      <Route path="member" element={<App><Member /></App>} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
