import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectFilter, setPage, setType } from '../redux/slices/filterSlice'

function Filters() {
     const dispatch = useDispatch()
     const onClickType = (str: string) => {
          dispatch(setType(str))
     }
     const { type } = useSelector(selectFilter)
     const classNameType = (str: string) => {
          return `content--filters__item ${(type == str) ? 'active--type' : ''}`
     }
     return (
          <div className="content--filters">
               <div className={classNameType('')}
                    onClick={() => onClickType('')}>Все</div>
               <div className={classNameType('drinks')}
                    onClick={() => onClickType('drinks')}>Напитки</div>
               <div className={classNameType('first')}
                    onClick={() => onClickType('first')}>Первое</div>
               <div className={classNameType('second')}
                    onClick={() => onClickType('second')}>Второе</div>
               <div className={classNameType('dessert')}
                    onClick={() => onClickType('dessert')}>Десерты</div>
               <div className={classNameType('salad')}
                    onClick={() => onClickType('salad')}>Салаты</div>
          </div>
     )
}

export default Filters