import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTeme } from '../redux/slices/temeSlice'
import BurgerButton from '../components/BurgerButton'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Form from '../components/Form'
export type AccountProps = {
     authorization: string;
     setAuthorization: any;
}
function Account() {
     const { title } = useSelector(selectTeme)
     const back = ['зимнему', 'весеннему', 'летнему', 'осеннему']
     const [authorization, setAuthorization] = useState('login');
     return (
          <div className='authorization'>
               <Header />
               <BurgerButton />
               <main>
                    <div className='authorization--content'>
                         <div className='authorization--content__links'>
                              <span
                                   className={authorization == 'login' ? 'login' : ''}
                                   onClick={() => setAuthorization('login')}>Вход
                              </span>
                              <span
                                   className={authorization == 'registration' ? 'registration' : ''}
                                   onClick={() => setAuthorization('registration')}>Регистрация
                              </span>
                         </div>
                         <Form type={authorization} />
                    </div>
               </main>
               <Footer />
          </div>
     )
}

export default Account