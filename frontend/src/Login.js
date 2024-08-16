import { useLogin } from "../src/hooks/useLogin";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await login(email, password);
    };

    return (
        <div className='bg-gray-400 py-5 h-screen'>
        <form className="max-w-sm mx-auto p-8 bg-gray-100 shadow-lg rounded-lg py-7" onSubmit={handleSubmit}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Log In</h3>
            <label className="block mb-1 text-sm text-gray-600">Email:</label>
            <input
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black  bg-gray-200"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label className="block mt-3 mb-1 text-sm text-gray-600">Password:</label>
            <input
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2  focus:ring-black bg-gray-200"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button className="w-full mt-6 bg-gray-700 text-white font-semibold py-2 rounded focus:outline-none focus:ring-2 focus:ring-black" disabled={isLoading}>Log In</button>
            {error && <div className="text-red-500 mt-2">{error}</div>}
        </form>
        </div>
    );
};

export default Login;
