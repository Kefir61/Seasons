import React, { useEffect } from 'react'
import verticalSmall from '../assets/icons/vsv.svg'
import gorisontalSmall from '../assets/icons/gsv.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setTeme, setTitle } from '../redux/slices/temeSlice'
import BorderHome from '../components/BorderHome'

const Home: React.FC = () => {

     const seyExplanation = () => {
          alert('Выберете время года в котором хотели бы покушать')
     }
     const dispatch = useDispatch()
     const onClickSeason = (season: string, id: number) => {
          dispatch(setTeme(season))
          dispatch(setTitle(id))
     }
     useEffect(() => {
          setTimeout(seyExplanation, 1000)
     }, [])
     return (
          <div className="home">

               <div className='home--content'>
                    <BorderHome />
                    <h1 className='home--title'>SEASON</h1>
                    <div className='home--navigate navigate'>
                         <Link to='/menu' onClick={() => onClickSeason('winter', 0)} className='navigate__item navigate__winter'></Link>
                         <div><img className='navigate__vertical--line' src={verticalSmall} /></div>
                         <Link to='/menu' onClick={() => onClickSeason('spring', 1)} className='navigate__item navigate__spring'></Link>
                         <div className='navigate__gorisontal--line'><img src={gorisontalSmall} /></div>
                         <Link to='/menu' onClick={() => onClickSeason('summer', 2)} className='navigate__item navigate__summer'></Link>
                         <div className='navigate__vertical--line2'><img src={verticalSmall} /></div>
                         <Link to='/menu' onClick={() => onClickSeason('autumn', 3)} className='navigate__item navigate__autumn'></Link>
                    </div>
               </div>

          </div >
     )
}

export default Home