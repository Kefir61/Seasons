import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, selectCartId } from '../redux/slices/cartSlice'
import { MenuItemType } from '../redux/slices/menuSlice'
import { ReactComponent as Liked } from '../assets/icons/liked.svg'
import { addLikedItem, selectUser } from '../redux/slices/userSlice'
const MenuItem: React.FC<MenuItemType> = ({ id, name, ingridients, price, calories, type, imageUrl, weight }) => {
     const dispatch = useDispatch()
     const [isLiked, setIsLiked] = useState(false)

     const cartItem = useSelector(selectCartId(id))
     const { liked } = useSelector(selectUser)

     const addedCount = cartItem ? cartItem.count : 0
     const likeItem = liked.find((obj) => obj.id == id)
     console.log(likeItem)
     const onClickAdd = () => {
          const newItem = {
               id,
               name,
               price,
               type,
               imageUrl,
               ingridients,
               weight,
               count: 0,
          }
          dispatch(addProduct(newItem))
     }

     const onClickLiked = () => {
          const newItem = {
               id,
               name,
               price,
               type,
               imageUrl,
               ingridients,
               weight,
               calories,
               isLiked,
          }
          dispatch(addLikedItem(newItem))
     }

     return (
          <div className="content--cards__item">
               <div className="item--img">
                    <Liked fill={isLiked ? '#f00' : '#fff'} onClick={onClickLiked} className='item--img__liked' />
                    <img src={imageUrl} className='item--img__backround' />
               </div>
               <div className="item--title">{name}</div>
               <div className="item--subtitle">{ingridients}</div>
               <div className="item--specifications">
                    <div className="item--specifications__price">{price} ₽</div>
                    <div className="item--specifications__calorie">{calories} кКл</div>
               </div>
               <div className="item--buy" onClick={onClickAdd}>
                    <span>+ Добавить в корзину</span>
                    {addedCount > 0 && <div className='item--buy__count'>{addedCount}</div>}
               </div>
          </div>
     )
}

export default MenuItem