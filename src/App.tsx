import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import Layout from 'pages/Layout/Layout'
import Home from 'pages/Home/Home'
import History from 'pages/History/History'


const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/history' element={<History />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
