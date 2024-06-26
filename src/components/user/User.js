import React, { useState } from 'react';
import { CiUser } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../redux/authSlice';
function User() {
    const dispatch = useDispatch();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const loginPage = () => {
        navigate('/login');
        setIsDropdownOpen(false);
    };

    const signupPage = () => {
        navigate('/signup');
        setIsDropdownOpen(false);
    };

    const logout = () => {
        localStorage.removeItem("userData");
        localStorage.removeItem("cart");
        dispatch(setLoggedIn(false)); 
        navigate('/login');
        setIsDropdownOpen(false);

    };

    // Parse userData from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    return (
        <div className="relative">
            <CiUser onClick={toggleDropdown} className="w-9 h-9 cursor-pointer hover:text-thirdColor" />
            {isDropdownOpen && (
                <div className="absolute right-0 z-10 mt-2 origin-top-right rounded-lg bg-white shadow-lg w-32 font-nunito font-semibold text-lg">
                    {userData && userData.name ? (
                        <div>
                            
                            <hr />
                            <button onClick={logout} className="block text-secondColor hover:text-thirdColor px-4 py-2">Log out</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={loginPage} className="block text-secondColor hover:text-thirdColor px-4 py-2"> Login</button>
                            <hr />
                            <button onClick={signupPage} className="block text-secondColor hover:text-thirdColor px-4 py-2">Sign up</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default User;
