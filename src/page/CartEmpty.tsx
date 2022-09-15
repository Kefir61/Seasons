import React from 'react'
import { Link } from 'react-router-dom'

type CartEmptyProps = {
     back: string[];
     title: number;
}
const CartEmpty: React.FC<CartEmptyProps> = ({ back, title }) => {
     return (
          <div className='cart--empty'>
               <h2>Корзина пустая 😕</h2>
               <p>
                    Обязательно вернитесь и попробуйте наши блюда
               </p>
               <Link to={'/menu'} className="cart--empty__back">
                    Вернуться к {back[title]} меню
               </Link>
          </div>
     )
}

export default CartEmpty