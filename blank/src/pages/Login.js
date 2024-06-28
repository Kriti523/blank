import Header from "../components/header";
import Login from "../components/Login";

// LoginPage component
export default function LoginPage({ setLoginData }) {
    return (
        <>
            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet?"
                linkName="Signup"
                linkUrl="/signup"
            />
            <Login setLoginData={setLoginData} />
        </>
    );
}
