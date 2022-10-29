import { useInput } from '../../hooks/use-input'
type FormProps = {
     type: string;
     handleClick: any;
     text: string
}
const Form: React.FC<FormProps> = ({ type, handleClick, text }) => {
     const email = useInput('', { isEmpty: true, isEmail: true, })
     const pass = useInput('', { isEmpty: true })
     const passReplay = useInput('', { isEmpty: true })
     const name = useInput('', { isEmpty: true, isName: true, })
     return (
          <form>
               {(name.isDirty && name.isEmpty) && <div className='input--error'>Поле не может быть пустое</div>}
               {(name.isDirty && name.nameError) && <div className='input--error'>Неккоректное имя</div>}
               {type == 'registration' &&
                    <input
                         value={name.value}
                         onChange={(e) => name.onChange(e)}
                         onBlur={e => name.onBlure(e)}
                         placeholder='Введите имя...'
                         required={true}
                    />
               }
               {(email.isDirty && email.isEmpty) && <div className='input--error'>Поле не может быть пустое</div>}
               {(email.isDirty && email.emailError) && <div className='input--error'>Неккоректный email</div>}
               <input
                    type='email'
                    value={email.value}
                    placeholder='Введите email...'
                    onChange={e => email.onChange(e)}
                    onBlur={e => email.onBlure(e)}
                    required={true} />
               {(pass.isDirty && pass.isEmpty) && <div className='input--error'>Поле не может быть пустое</div>}
               <input
                    type='password'
                    value={pass.value}
                    placeholder='Введите пароль...'
                    onChange={e => pass.onChange(e)}
                    onBlur={e => pass.onBlure(e)}
                    required={true} />
               {(passReplay.isDirty && passReplay.isEmpty) && <div className='input--error'>Поле не может быть пустое</div>}
               {(passReplay.value && pass.value != passReplay.value) && <div className='input--error'>Пароли не совпадают</div>}
               {type == 'registration' &&
                    <input
                         type='password'
                         value={passReplay.value}
                         placeholder='Повторите пароль...'
                         onChange={e => passReplay.onChange(e)}
                         onBlur={e => passReplay.onBlure(e)}
                         required={true} />
               }
               <button
                    type='button'
                    onClick={() => handleClick(email.value, pass.value, name.value)}>
                    {text}</button>
          </form>
     )

}

export default Form