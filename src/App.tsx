import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import Layout from 'pages/Layout/Layout'


const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          {/* <Route path="/" element={} /> */}
          {/* <Route path="/history" element={<h1>History</h1>} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
