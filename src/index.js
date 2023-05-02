import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
import { InsertProductPage } from './templates/InsertProductPage'
import { ProductPage } from './templates/ProductPage'
import { AddAdressPage } from './templates/AddAddressPage'
import { AddFairPage } from './templates/AddFairPage'
import { FairPage } from './templates/FairPage'
import GeneralStartPage from './templates/GeneralStartPage'
import FeiranteStartPage from './templates/FeiranteStartPage'
import Login from './templates/Login'
import FairNear from './templates/NearbyFairs'
import SearchPage from './templates/SearchPage';
import ProfilePage from './templates/ProfilePage';
import BuyHistory from './templates/PurchasesHistoricPage';
import TypeUserSelect from './templates/TypeUserSelect';
import CartPage from './templates/CartPage';
import EntregadorLandingPage from './templates/EntregadorLandingPage';
import GainsPage from './templates/GainsPage';
import ShoppingCartPage from './templates/ShoppingCartPage';
import AddressPage from './templates/AddressPage';
import SellerProductPage from './templates/SellerProductsPage';
import EditProfilePage from './templates/EditProfilePage';
import SignToContinue from './templates/SignToContinue'
import SignUpConsumidor from './templates/SignUpConsumidor'
import SignUpFeirante from './templates/SignUpFeirante'
import UpdateFeiranteAccount from './templates/UpdateFeiranteAccount'
import UpdateConsumidorAccount from './templates/UpdateConsumidorAccount'
import MyOrderPage from './templates/MyOrderPage'

import { Route, BrowserRouter, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<GeneralStartPage />}/>
     <Route path='/marketer' element={<FeiranteStartPage />}/>
     <Route path='/login' element={<Login />}/>
     <Route path='/signup' element={<TypeUserSelect />}/>
     <Route path='/fair-near' element={<FairNear/>}/>
     <Route path='/profile/address/add-address' element={<AddAdressPage/>}/> 
     <Route path='/fair/add-fair' element={<AddFairPage/>}/> 
     <Route path='/fair/fairs' element={<FairPage/>}/> 
     <Route path='/search' element={<SearchPage name={'Laranja'}/>}/>
     <Route path='/profile' element={<ProfilePage/>}/>
     <Route path='/profile/buy-history' element={<BuyHistory/>}/>
     <Route path='/cart' element={<CartPage/>}/>
     <Route path='/gains' element={<GainsPage/>}/>
     <Route path='/shoppingcart' element={<ShoppingCartPage/>}/>
     <Route path='/sign' element={<SignToContinue/>}/>
     <Route path='/signup/consumidor' element={<SignUpConsumidor/>}/>
     <Route path='/signup/marketer' element={<SignUpFeirante/>}/>
     <Route path='/profile/update/marketer' element={<UpdateFeiranteAccount/>}/>
     <Route path='/profile/update/consumidor' element={<UpdateConsumidorAccount/>}/>
     <Route path='/profile/edit' element={<EditProfilePage/>}/>
     <Route path='/profile/address' element={<AddressPage/>}/>
     <Route path='/product/add-product' element={<InsertProductPage/>}/>
     <Route path='/product/:id' element={<ProductPage/>}/>
     <Route path='/product/marketer' element={<SellerProductPage/>}/>
     <Route path='/product/marketer' element={<SellerProductPage/>}/>
     <Route path='/delivery' element={<EntregadorLandingPage/>}/>
     <Route path='/order/track' element={<MyOrderPage />} />
   </Routes>
   </BrowserRouter>   
 </React.StrictMode>
);