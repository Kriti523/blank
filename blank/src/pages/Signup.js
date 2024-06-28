import Header from "../components/header";
import Signup from "../components/Signup";


// SignupPage component
export default function SignupPage({signupState, setSignupState , setLoginData}){
    return(
        <>
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <Signup signupState={signupState} setSignupState={setSignupState} setLoginData={setLoginData} />
        </>
    )
}