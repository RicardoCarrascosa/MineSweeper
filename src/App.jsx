import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import { RootLayout } from './layout/RootLayout'
import { Homepage } from './pages/Homepage/Homepage'
import { Minesweeper } from './pages/Minesweeper/Minesweeper'
import { Wordie } from './pages/Wordie/Wordie'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Homepage />} />

      <Route path='minesweeper' element={<Minesweeper />} />
      <Route path='wordle' element={<Wordie />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
