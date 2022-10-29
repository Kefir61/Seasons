import AccountNavigation from "../../components/AccountNavigation";
import BurgerButton from "../../components/BurgerButton";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
function Favorites() {
     return (
          <div className='account'>
               <Header />
               <BurgerButton />
               <main>
                    <h2 className="account--title">Аккаунт</h2>
                    <div className="account--content">
                         <AccountNavigation />
                         <div className="account--content__info">
                         </div>
                    </div>
               </main>
               <Footer />
          </div>
     )
}

export default Favorites