import React from 'react'
type FormProps = {
     type: string;
}
const Form: React.FC<FormProps> = ({ type }) => {
     if (type == 'login') {
          return (
               <form>
                    <input type='email' placeholder='Введите email...' />
                    <input type='password' placeholder='Введите пароль...' />
                    <button>Отправить</button>
               </form>
          )
     }
     else {
          return (
               <form>
                    <input placeholder='Введите имя...' />
                    <input placeholder='Введите фамилию...' />
                    <input type='email' placeholder='Введите email...' />
                    <input type='password' placeholder='Придумайте пароль...' />
                    <input type='password' placeholder='повторите пароль...' />
                    <button>Отправить</button>
               </form>
          )
     }

}

export default Form