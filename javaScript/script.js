    // Signup & login form animation

    let login = document.querySelector('#login'),
    signup = document.querySelector('#signup'),
    SignupForm = document.querySelector('#Signup-form'),
    loginForm = document.querySelector('#login-form');
    
    login.addEventListener('click', () => {
        loginForm.classList.replace('left-[100%]','left-0');
        SignupForm.classList.replace('left-0','left-[-100%]');
    });
    signup.addEventListener('click', () => {
        loginForm.classList.replace('left-0','left-[100%]');
        SignupForm.classList.replace('left-[-100%]','left-0');
    });
    
    
    // Confirm Password click event
    
    let eyeIcon = document.querySelector('#eyeIcon'),
        confirm_pw = document.querySelector('#confirm_pw'),
        create_pw = document.querySelector('#create_pw');
    
        eyeIcon.addEventListener('click', () => {
           if((confirm_pw.type === 'password') && (create_pw.type === 'password')){
            confirm_pw.type = 'text' ;
            create_pw.type = 'text' ;
            eyeIcon.classList.replace('fa-eye-slash','fa-eye') ;
           }
           else{
            confirm_pw.type = 'password' ;
            create_pw.type = 'password' ;
            eyeIcon.classList.replace('fa-eye','fa-eye-slash') ;
           }
        });