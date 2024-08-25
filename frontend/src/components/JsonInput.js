import React, { useState } from 'react';

function JsonInput({ setResponse }) {
    const [input, setInput] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/bfhl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: input
            });
            const data = await response.json();
            setResponse(data);
        } catch (error) {
            alert('Invalid JSON or server error'+error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} class="jsonInput" placeholder='Enter JSON' />
            <button type='submit'>Submit</button>
        </form>
    );
}

export default JsonInput;
