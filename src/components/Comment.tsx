import React from 'react'

function Comment() {
     return (
          <>
               <form className="comment--form">
                    <textarea className="comment--form__textarea" placeholder="Оставьте свой отзыв..."></textarea>
                    <button type='button' className="comment--form__button">Отправить</button>
               </form>
          </>
     )
}

export default Comment