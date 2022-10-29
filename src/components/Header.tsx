import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTeme, setTeme, setTitle } from '../redux/slices/temeSlice'
import { useNavigate } from 'react-router-dom';
import { selectCart } from '../redux/slices/cartSlice'
import { useAuth } from '../hooks/use-auth'
function Header() {

     const dispatch = useDispatch()
     const onClickSeason = (season: string, id: number) => {
          dispatch(setTeme(season))
          dispatch(setTitle(id))
     }
     const { title, teme } = useSelector(selectTeme)
     const { totalCount, totalPrice } = useSelector(selectCart)
     const navigate = useNavigate();
     useEffect(() => {
          if (teme === '') {
               navigate('/')
          }
     }, [])
     useEffect(() => {
          document.documentElement.setAttribute('data-teme', teme)
     }, [teme])
     const { isAuth } = useAuth();
     const classNameDisplay = (str: string, number: number) => {
          return `display--${str} ${title === number ? 'active' : ''}`
     }
     return (
          <div className="header">
               <div className="header--display display">
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
               </div>
               <h1 className="title">Season</h1>
               <div className="header--display display">
                    <Link to='/discounts' className="display--info">Акции</Link>
                    <Link to='/reviews' className="display--info">Отзывы</Link>
                    {isAuth
                         ? <Link to='/account' className="display--info">Аккаунт</Link>
                         : <Link to='/account/login' className="display--info">Аккаунт</Link>
                    }
                    <Link to='/cart' className="display--cart">
                         <div className="display--cart__price">{totalPrice} ₽</div>
                         <div className="display--cart__line"></div>
                         <div className="display--cart__count">{totalCount}</div>
                    </Link>
               </div>
          </div>
     )
}

export default Header