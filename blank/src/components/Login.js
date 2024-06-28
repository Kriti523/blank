import { useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

// Define fields from loginFields
const fields = loginFields;

// Initialize field state
let fieldState = {};
fields.forEach(field => fieldState[field?.id] = '');

// Login component
const Login = ({ setLoginData }) => {
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState(fieldState);

    // Handle input change
    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    };

    // Authenticate user
    const authenticateUser = () => {
        const { email, password } = loginState;
        const users = JSON.parse(localStorage.getItem('users')) || [];
        console.log('users', users);
        const user = users.find(user => (user.email === email && user.password === password));
        setLoginData(user);

        if (user) {
            localStorage.setItem("isAuthenticated", true);
            localStorage.setItem("loggedInUser", email);
            console.log("Login successful!");
            navigate('/welcome');
        } else {
            console.log("Invalid credentials!");
            alert("Invalid credentials!");
        }
    };

    return (
        <form className="mt-2 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px mt-[-200px]">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    )
                }
            </div>
            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text="Login" />
        </form>
    );
};

export default Login;
