import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AccountNavigation from "../../components/AccountNavigation";
import BurgerButton from "../../components/BurgerButton";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { removeUser } from "../../redux/slices/userSlice";
import { getAuth } from "firebase/auth";
import Comment from "../../components/Comment";

export type AccountProps = {
     authorization: string;
     setAuthorization: any;
}

function Account() {
     const dispatch = useDispatch()
     const navigate = useNavigate()
     const logOut = () => {
          dispatch(removeUser())
          navigate('/menu')
     }


     const auth = getAuth();
     const user = auth.currentUser;

     return (
          <div className='account'>
               <Header />
               <BurgerButton />
               <main>
                    <h2 className="account--title">Аккаунт</h2>
                    <div className="account--content">
                         <AccountNavigation />
                         <div className="account--content__info">
                              <Comment />
                              <button className="logout--button" onClick={() => logOut()}>выйти из аккаунта</button>
                              <h2>Привет {user ? user.displayName : ''}!</h2>
                              <div className="info--account__section">
                                   <div>
                                        <h3>Информация о тебе:</h3>
                                   </div>
                                   <div>
                                        <h3>Твои купоны и баллы:</h3>
                                   </div>
                              </div>
                         </div>
                    </div>
               </main>
               <Footer />
          </div>
     )
}

export default Account