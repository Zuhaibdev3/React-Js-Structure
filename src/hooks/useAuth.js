import { useDispatch, useSelector } from 'react-redux';
import { LoginAuth } from '../store/apps/auth';

export const useAuth = (data) => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.auth);
    const userLogin = async (data) => {
        dispatch(LoginAuth({ ...data }))
    };
    return {
        store,
        userLogin,
    };
};
