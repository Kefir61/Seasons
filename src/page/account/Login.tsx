import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Form from './Form'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/slices/userSlice'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import BurgerButton from '../../components/BurgerButton'
import Footer from '../../components/Footer'

function Login() {
     const dispatch = useDispatch()
     const [authorization, setAuthorization] = useState('login');
     const navigate = useNavigate()
     const hendleLogin = (email: string, password: string) => {
          const auth = getAuth()
          signInWithEmailAndPassword(auth, email, password)
               .then(({ user }) => {
                    dispatch(setUser({
                         id: user.uid,
                         email: user.email,
                    }))
                    navigate("/account");
               })
               .catch((error) => {
                    switch (error.code) {
                         case 'auth/wrong-password':
                              alert("Неправильно введен пароль")
                              break;
                         case 'auth/user-not-found':
                              alert("Пользователя с таким email не существует")
                              break;
                    }
               })
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
                                   className={classNameLink('registartion')}
                                   onClick={() => setAuthorization('registration')}
                              >Регистрация
                              </Link>
                         </div>
                         <Form
                              type={'login'}
                              handleClick={hendleLogin}
                              text='Войти'
                         />
                    </div>
               </main>
               <Footer />
          </div>
     )
}

export default Login