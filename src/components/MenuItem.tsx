import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, selectCartId } from '../redux/slices/cartSlice'
import { MenuItemType } from '../redux/slices/menuSlice'

const MenuItem: React.FC<MenuItemType> = ({ id, name, ingridients, price, calories, type, imageUrl, weight }) => {
     const dispatch = useDispatch()
     const cartItem = useSelector(selectCartId(id))
     const addedCount = cartItem ? cartItem.count : 0
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
     return (
          <div className="content--cards__item">
               <div className="item--img"><img src={imageUrl} alt="" /></div>
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