import React from 'react'
import { Link } from 'react-router-dom'
import { slide as Burger } from 'react-burger-menu'
import { useDispatch, useSelector } from 'react-redux'
import { selectTeme, setTeme, setTitle } from '../redux/slices/temeSlice'
const BurgerButton = () => {
     const dispatch = useDispatch()
     const { title, teme } = useSelector(selectTeme)
     const onClickSeason = (season, id) => {
          dispatch(setTeme(season))
          dispatch(setTitle(id))
     }

     const classNameDisplay = (str, number) => {
          return `${title === number ? 'active' : ''}`
     }
     return (
          <Burger isOpen={false} >
               <Link
                    to='/menu'
                    onClick={() => onClickSeason('winter', 0)}
                    className={classNameDisplay('winter', 0)}>Зима
               </Link>
               <Link
                    to='/menu'
                    onClick={() => onClickSeason('spring', 1)}
                    className={classNameDisplay('spring', 1)}>Весна
               </Link>
               <Link
                    to='/menu'
                    onClick={() => onClickSeason('summer', 2)}
                    className={classNameDisplay('summer', 2)}>Лето
               </Link>
               <Link
                    to='/menu'
                    onClick={() => onClickSeason('autumn', 3)}
                    className={classNameDisplay('autumn', 3)}>Осень
               </Link>
               <Link to='/discounts' className="display--info">Акции</Link>
               <Link to='/reviews' className="display--info">Отзывы</Link>
               <Link to='/account' className="display--info">Аккаунт</Link>
          </Burger>
     )
}

export default BurgerButton