import {Container} from 'react-bootstrap'
import { Outlet } from 'react-router-dom';

import Header from './Components/Header'
import Footer from './Components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <>
      <Header />
        <main className='py-3'>
          <Container>
            <Outlet />
          </Container>
        </main>
        < Footer />
    </>
  )
}

export default App