import './form.scss';
import { useState } from 'react';

const Form = (props) => {
    const [method, setMethod] = useState('GET');
    const [ setApiUrl ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        let apiUrl = e.target.url.value;
        props.setLoading(true);
        props.handleApiCall(apiUrl, method);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label >
                    <span>URL: </span>
                    <input name='url' type='text' onChange = {(e) => setApiUrl(e.target.value)}/>
                    <button type="submit">GO!</button>
                </label>
                <label>
                </label>
                <label className="methods">
                    <span onClick={() => setMethod('GET')} id="get">GET</span>
                    <span onClick={() => setMethod('POST')} id="post">POST</span>
                    <span onClick={() => setMethod('PUT')} id="put">PUT</span>
                    <span onClick={() => setMethod('DELETE')} id="delete">DELETE</span>
                </label>
            </form>
        </>
    );
}

export default Form;