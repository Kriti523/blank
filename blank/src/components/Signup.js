import { SignupFields } from '../constants/formFields';
import FormAction from './FormAction';
import Input from './Input';
import { useNavigate } from 'react-router-dom';

// Define fields from SignupFields
const fields = SignupFields;

// Initialize field state
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

// Signup component
export default function Signup({ signupState, setSignupState }) {
    // Handle input change
    const navigate = useNavigate();
    const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        createAccount();
    };

    // Create account
    const createAccount = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        console.log("Existing users:", users);
        console.log("Signup state:", signupState);

        // Check if passwords match
        if (signupState.password !== signupState.confirmPassword) {
            console.log("Passwords do not match!");
            alert("Passwords do not match!");
            return;
        }

        // Check if user already exists
        const userExists = users.some(user => user.email === signupState.email);
        if (userExists) {
            console.log('User already exists!');
            alert("User already exists!");
        } else {
            users.push(signupState);
            localStorage.setItem('users', JSON.stringify(users));
            console.log('Account created successfully!');
            navigate('/welcome');
        }
    };

    return (
        <form className="mt-2 space-y-6" onSubmit={handleSubmit}>
            <div className="mt-[-200px]">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
                <FormAction handleSubmit={handleSubmit} text="Signup" />
            </div>
        </form>
    );
}
