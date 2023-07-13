import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

import './css/index.css'

import App from './App'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Member } from './pages/Member'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App><Home /></App>} />
      <Route path="about" element={<App><About /></App>} />
      <Route path="member" element={<App><Member /></App>} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AnimatePresence mode='wait'>
    <RouterProvider router={router} />
  </AnimatePresence>
)
