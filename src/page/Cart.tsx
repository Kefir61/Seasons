import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import CartEmpty from './CartEmpty'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { selectTeme } from '../redux/slices/temeSlice'
import { CartItemType, selectCart } from '../redux/slices/cartSlice'
import BurgerButton from '../components/BurgerButton'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Cart: React.FC = () => {
     const { title, teme } = useSelector(selectTeme)
     const back = ['зимнему', 'весеннему', 'летнему', 'осеннему']
     const { items, totalPrice, totalCount } = useSelector(selectCart)
     const navigate = useNavigate();
     useEffect(() => {
          if (teme === '') {
               navigate('/')
          }
     }, [])
     if (!totalCount) {
          return <CartEmpty back={back} title={title} />
     }
     return (
          <div className='cart'>
               <Header />
               <BurgerButton />
               <main>
                    <h2 className="cart--title">Корзина</h2>
                    <div className="cart--content">
                         {items.map((obj: CartItemType) => <CartItem {...obj} key={obj.id} />)}

                         <div className="cart--content__design">
                              <div className="design--price">
                                   <span>ИТОГО</span>
                                   <span>{totalPrice} ₽</span>
                              </div>
                              <div className="design--button">
                                   Перейти к оформлению
                              </div>
                         </div>
                         <Link to={'/menu'} className="cart--content__back">
                              Вернуться к {back[title]} меню
                         </Link>
                    </div>
               </main>
               <Footer />
          </div>
     )
}

export default Cart