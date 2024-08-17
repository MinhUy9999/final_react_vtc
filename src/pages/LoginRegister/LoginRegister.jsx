import {  useState } from 'react'
import './loginRegister.scss'
import SignupPage from '../SignupPage/SignupPage';
import SignInPage from '../SignInPage/SignInPage';




// const LoginRegister = () => {
//   useEffect(() => {
//     const container = document.getElementById('container')
//     const registerBtn = document.getElementById('register')
//     const loginBtn = document.getElementById('login')
//     registerBtn.addEventListener('click', () => {
//       {
//         container.classList.add('active')
//       }
//     })
//     loginBtn.addEventListener('click', () => {
//       {
//         container.classList.remove('active')
//       }
//     })
//   }, [])
const LoginRegister = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  // return (
  //   <div className="body">
  //     {/* container */}
  //     <div className="containerLayout" id="container">
  //       {/* Sign Up */}
  //       {/* <div className="formContainer signUp">
  //         <form>
  //           <h1>Create Account</h1>
  //           <div className="formIcon">
  //             <a>
  //               <i className="fa-brands fa-square-facebook"></i>
  //             </a>
  //             <a>
  //               <i className="fa-brands fa-twitter"></i>
  //             </a>
  //             <a>
  //               <i className="fa-brands fa-google-plus-g"></i>
  //             </a>
  //             <a>
  //               <i className="fa-brands fa-linkedin"></i>
  //             </a>
  //             <a>
  //               <i className="fa-brands fa-github"></i>
  //             </a>
  //           </div>
  //           <span>or use your email for registeration</span>
  //           <input type="text" placeholder="Name" />
  //           <input type="email" placeholder="Email" />
  //           <input type="password" placeholder="Password" />
  //           <button> Sign Up </button>
  //         </form>
  //       </div> */}

  //       {/* Sign In */}
  //       {/* <div className="formContainer signIn">
  //         <form>
  //           <h1>Sign In</h1>
  //           <div className="formIcon">
  //             <a>
  //               <i className="fa-brands fa-square-facebook"></i>
  //             </a>
  //             <a>
  //               <i className="fa-brands fa-twitter"></i>
  //             </a>
  //             <a>
  //               <i className="fa-brands fa-google-plus-g"></i>
  //             </a>
  //             <a>
  //               <i className="fa-brands fa-linkedin"></i>
  //             </a>
  //             <a>
  //               <i className="fa-brands fa-github"></i>
  //             </a>
  //           </div>
  //           <span>or use your email password</span>
  //           <input type="text" placeholder="Name" />
  //           <input type="email" placeholder="Email" />
  //           <input type="password" placeholder="Password" />
  //           <button> Sign In </button>
  //         </form>
  //       </div> */}
  //       {/* Container toggle */}
  //       <div className="toggleContainer">
  //         {/* toogle layout got 2 parts: left and right */}
  //         <div className="toggle">
  //           {/* toggle left */}
  //           <div className="togglePannel toggleLeft ">
  //             <h1>Welcome Back!</h1>
  //             <p className="font-thin">Login to use all of site features</p>
  //             <button className="hiddenBtn " id="login">
  //               Sign In
  //             </button>
  //           </div>

  //           {/* toggle right */}
  //           <div className="togglePannel toggleRight ">
  //             <h1>Hello!</h1>
  //             <p className="font-thin">Register to use all of site features</p>
  //             <button className="hiddenBtn " id="register">
  //               Sign Up
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )

  return (
    <div className="body">
      <div className={`containerLayout  ${isActive ? 'active' : ''}`} id="container">
        <SignupPage/>
        <SignInPage/>
        <div className="toggleContainer">
          <div className="toggle">
            <div className="togglePannel toggleLeft">
              <h1>Welcome Back!</h1>
              <p className="font-thin">Login to use all of site features</p>
              <button className="hiddenBtn" id="login" onClick={handleLoginClick}>
                Sign In
              </button>
            </div>
            <div className="togglePannel toggleRight">
              <h1>Hello!</h1>
              <p className="font-thin">Register to use all of site features</p>
              <button className="hiddenBtn" id="register" onClick={handleRegisterClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister
