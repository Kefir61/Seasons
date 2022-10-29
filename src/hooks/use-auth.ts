import { selectUser } from './../redux/slices/userSlice';
import { useSelector } from 'react-redux';


export function useAuth() {
     const { email, token, id } = useSelector(selectUser)

     return {
          isAuth: !!id,
          email,
          token,
          id
     }
}