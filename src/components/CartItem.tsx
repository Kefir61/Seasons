import React from 'react'
import { useSelector } from 'react-redux'
import cardIcon from '../assets/icons/cartItem.svg'
import minuse from '../assets/icons/minuse.svg'
import pluse from '../assets/icons/pluse.svg'
import { addProduct, CartItemType, minusProduct, removeProduct } from '../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem: React.FC<CartItemType> = ({ id, name, ingridients, price, count, imageUrl, weight, }) => {
     const dispatch = useDispatch();

     const onClickPluse = () => {
          dispatch(addProduct({
               id,
               name: '',
               type: '',
               ingridients: '',
               price: 0,
               count: 0,
               imageUrl: '',
               weight: 0,
          }))
     }
     const onClickMinus = () => {
          dispatch(minusProduct(id))
     }
     const onClickRemove = () => {
          dispatch(removeProduct(id))
     }
     return (
          <div className="cart--content__card card">
               <div className='card--img'><img src={imageUrl} /></div>
               <div className='card--description'>
                    <div className='card--description__title'>{name}</div>
                    <div className='card--description__subtitle'>{ingridients}</div>
                    <div className='card--description__weight'>{weight} г</div>
                    <div className='card--description__price'>{price} ₽</div>
               </div>
               <div className='card--count'>
                    <div className='card--count__icon' onClick={onClickMinus}><img src={minuse} /></div>
                    <span>{count}</span>
                    <div className='card--count__icon' onClick={onClickPluse}><img src={pluse} /></div>
               </div>
               <img className='card--icon' src={cardIcon} onClick={onClickRemove} />
               <div className='card--sum'>{count * price} ₽</div>
          </div>
     )
}

export default CartItem