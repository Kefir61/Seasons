import React from 'react'
import inst from '../assets/icons/instagram.svg'
import vk from '../assets/icons/vkontakte.svg'
import tg from '../assets/icons/telegram.svg'
const Footer: React.FC = () => {
     return (
          <div className='footer'>
               <div className='footer--icons'>
                    <a href='https://instagram.com/ermakov272?igshid=133iykbgmvf12'>
                         <img src={inst} />
                    </a>
                    <a href='https://vk.com/id_784785786'>
                         <img src={vk} />
                    </a>
                    <a href=''>
                         <img src={tg} />
                    </a>
               </div>
               <div className='footer--links'>
                    <span>Номер<br /> <p>+7 (962) 329-25-82</p></span>
                    <span>График<br /><p>ПН-ЧТ 9:00-22:00</p><p>ПТ-ВС 9:00-00:00</p></span>
                    <span>Адресс<br /> <p>г.Воронеж ул.Алексея-Геращенко д.1</p></span>
               </div>
          </div>
     )
}

export default Footer