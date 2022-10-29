import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../assets/icons/profile.svg'
import liked from '../assets/icons/liked.svg'
import cart from '../assets/icons/cart_navigation.svg'
function AccountNavigation() {

     return (
          <nav>
               <ul>
                    <li className='account--content__link'><img src={profile} /><Link to='/account'>Мои данные</Link></li>
                    <li className='account--content__link'><img src={liked} /><Link to='/account/favorites'>Избранные товары</Link></li>
                    <li className='account--content__link'><img src={cart} /><Link to='/account/orders'>Заказы</Link></li>
               </ul>
          </nav>
     )
}

export default AccountNavigation