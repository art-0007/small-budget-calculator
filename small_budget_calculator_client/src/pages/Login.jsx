import React from 'react';
import MyInput from '../components/UI/input/MyInput';

const Login = () => {
    return (
        <div>
            <h1>Login page</h1>
            <form>
                <MyInput tipe='text' placeholder='Login'/>
                <MyInput tipe='password' placeholder='Password'/>
            </form>
            
        </div>
    );
};

export default Login;