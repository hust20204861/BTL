import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors} from '../../actions/userActions'
import Loader from '../layout/Loader'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();


    const { isAuthenticated, error, loading } = useSelector(state => state.auth);
    useEffect(() => {

        if(isAuthenticated) {
            navigate('/')
        }

        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, isAuthenticated, error, navigate, alert])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

  return (
   <Fragment>
      {loading ? <Loader /> : (
        <Fragment>
            <MetaData title={'Login'}/>

<div className="login">
                        <div className="login-form">
                            <form className="form" onSubmit={submitHandler}>
                                <h1 >Login</h1>
                                <div className="login-email">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email_field"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="login-password">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password_field"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <Link to="/password/forgot" className="to-forgot-pass">Forgot Password?</Link>

                                <button
                                    id="login_button"
                                    type="submit"
                                
                                >
                                    LOGIN
                                </button>

                                <Link to="/register" className="to-create">Create Account</Link>
                            </form>
                        </div>
                    </div>




        </Fragment>

      )}
   </Fragment>

  )
}

export default Login
