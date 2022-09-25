import React, { useEffect } from 'react'
import Filters from '../components/Filters'
import Header from '../components/Header'
import MenuItem from '../components/MenuItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMenu, selectMenu } from '../redux/slices/menuSlice'
import { MenuItemType } from '../redux/slices/menuSlice'
import Skeleton from '../components/Skeleton'
import { selectTeme, setTeme } from '../redux/slices/temeSlice'
import { selectFilter, setPage, setType } from '../redux/slices/filterSlice'
import Footer from '../components/Footer'
import BurgerButton from '../components/BurgerButton';
import { selectCart } from '../redux/slices/cartSlice'
import { Link } from 'react-router-dom'
import Pagination from '../components/Pagination'
import Search from '../components/Search'
function Menu() {

     const dispatch = useDispatch();
     const { teme, title } = useSelector(selectTeme)
     const { items, status } = useSelector(selectMenu)
     const { totalCount } = useSelector(selectCart)
     const { type, page, searchValue } = useSelector(selectFilter)
     const menuTitle = ['Зимнее', 'Весеннее', 'Летнее', 'Осеннее']

     const onPageChange = (page: number) => {
          dispatch(setPage(page))
     }

     const getMenu = async () => {
          //@ts-ignore
          dispatch(fetchMenu({ season: teme, currentPage: page, type }))
          window.scrollTo(0, 0)
     }

     useEffect(() => {
          document.documentElement.setAttribute('data-teme', teme)
          getMenu()
     }, [teme, type, page, searchValue])


     const menuItems = items.filter((obj: any) => {
          if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
               return true
          }
          return false
     }).map((item: MenuItemType) => <MenuItem {...item} key={item.id} />)


     return (
          <div className='menu'>
               <BurgerButton />
               <Link to='/cart' className='app--cart'>
                    {totalCount != 0 ? <div className='app--cart__count'>{totalCount}</div> : ''}
               </Link>
               <div className="wrapper">
                    <Header />
                    <div className="content">
                         <div className='content--search'>
                              <h2 className="content--search__title">{menuTitle[title] + ' меню'}</h2>
                              <Search />
                         </div>
                         <Filters />
                         <div className="content--cards">
                              {(status === 'LOADING')
                                   ? [...new Array(8)].map((_, index) => <Skeleton key={index}></Skeleton>)
                                   : menuItems}
                         </div>
                         <Pagination onChangePage={onPageChange} />
                    </div>
                    <Footer />
               </div>
          </div>
     )
}

export default Menu