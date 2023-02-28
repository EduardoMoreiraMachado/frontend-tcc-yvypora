import { Navbar } from '../../components/Nav';
import './style.css';
import { SignHeader } from '../../components/SignHeader';
import { ProductCategory } from '../../components/ProductCategory';


function App() {
  return (
    <>
        <SignHeader />
        <div className="app">
            <div className='navbar-container'>
            <Navbar />
            </div>

        <ProductCategory />
        </div>
    </>
  );
}

export default App;
