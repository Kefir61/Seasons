import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTeme } from '../redux/slices/temeSlice'
function Account() {
     const { title } = useSelector(selectTeme)
     const back = ['зимнему', 'весеннему', 'летнему', 'осеннему']
     return (
          <div >Страница находится в разработке...😕
               <Link to={'/menu'} className="cart--content__back">
                    Вернуться к {back[title]} меню
               </Link>
          </div>
     )
}

export default Account