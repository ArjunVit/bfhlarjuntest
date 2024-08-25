import React from 'react';

function Dropdown({ setSelectedOptions }) {
    const handleChange = (e) => {
        const options = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedOptions(options);
    };

    return (
        <select multiple onChange={handleChange}>
            <option value="alphabets">Alphabets</option>
            <option value="numbers">Numbers</option>
            <option value="highest_lowercase_alphabet">Highest Lowercase Alphabet</option>
        </select>
    );
}

export default Dropdown;
