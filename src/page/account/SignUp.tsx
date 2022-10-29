import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import Form from './Form'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/slices/userSlice'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import BurgerButton from '../../components/BurgerButton'
import Footer from '../../components/Footer'


function SignUp() {
     const dispatch = useDispatch()
     const [authorization, setAuthorization] = useState('registration');
     const navigate = useNavigate()
     const auth = getAuth()
     const hendleAutorisation = (email: string, password: string, name: string) => {
          createUserWithEmailAndPassword(auth, email, password)
               .then(({ user }) => {

                    dispatch(setUser({
                         id: user.uid,
                         email: user.email,
                    }))
                    navigate("/account/login");

               })
               .then(() => {
                    if (auth.currentUser != null) {
                         updateProfile(auth.currentUser, {
                              displayName: name,
                         })
                    }
               })
               .catch(console.error)
     }

     const classNameLink = (str: string) => {
          return `link--authorization ${authorization === str ? 'active--authorization__link' : ''}`
     }
     return (
          <div className='authorization'>
               <Header />
               <BurgerButton />
               <main>
                    <div className='authorization--content'>
                         <div className='authorization--content__links'>
                              <Link
                                   to='/account/login'
                                   className={classNameLink('login')}
                                   onClick={() => setAuthorization('login')}>Вход
                              </Link>
                              <Link
                                   to='/account/registration'
                                   className={classNameLink('registration')}
                                   onClick={() => setAuthorization('registration')}>Регистрация
                              </Link>
                         </div>
                         <Form
                              type={'registration'}
                              handleClick={hendleAutorisation}
                              text='Зарегистрироваться'
                         />
                    </div>
               </main>
               <Footer />
          </div>
     )
}

export default SignUp