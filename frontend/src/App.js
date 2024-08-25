import React from 'react';
import JsonInput from './components/JsonInput';
import Dropdown from './components/Dropdown';
import ResponseDisplay from './components/ResponseDisplay';

function App() {
    const [response, setResponse] = React.useState(null);
    const [selectedOptions, setSelectedOptions] = React.useState([]);

    return (
        <div className="App">
            <h1>BFHL Challenge</h1>
            <JsonInput setResponse={setResponse} />
            {response && <Dropdown setSelectedOptions={setSelectedOptions} />}
            {response && <ResponseDisplay response={response} selectedOptions={selectedOptions} />}
        </div>
    );
}

export default App;
