import './style.css';

import { NavBar } from '../../components/NavBar';
import { SignHeader } from '../../components/SignHeader';
import { ProductCategory } from '../../components/ProductCategory';
import { SearchInput } from '../../components/SearchInput'
import { Footer } from '../../components/Footer';

export const GeneralStartPage = () => {
  return (
    <div className='general-start-page-container'>
        <SignHeader />
        <div className='page-content'>
          <NavBar />
          <div className='products-container'>
            <SearchInput />
            <ProductCategory />
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default GeneralStartPage;
