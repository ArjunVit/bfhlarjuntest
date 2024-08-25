import React from 'react';

function ResponseDisplay({ response, selectedOptions }) {
    return (
        <div class="responseDisplay">
            {selectedOptions.includes('alphabets') && (
                <div>
                    <h3>Alphabets:</h3>
                    <p>{response.alphabets.join(', ')}</p>
                </div>
            )}
            {selectedOptions.includes('numbers') && (
                <div>
                    <h3>Numbers:</h3>
                    <p>{response.numbers.join(', ')}</p>
                </div>
            )}
            {selectedOptions.includes('highest_lowercase_alphabet') && (
                <div>
                    <h3>Highest Lowercase Alphabet:</h3>
                    <p>{response.highest_lowercase_alphabet.join(', ')}</p>
                </div>
            )}
        </div>
    );
}

export default ResponseDisplay;
