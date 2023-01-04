import './form.scss';
import { useState } from 'react';

const Form = (props) => {
    const [method, setMethod] = useState('GET');

    const handleSubmit = e => {
        e.preventDefault();
        let apiUrl = e.target.url.value;
        props.handleApiCall(apiUrl, method);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label >
                    <span>URL: </span>
                    <input name='url' type='text' />
                    <button type="submit">GO!</button>
                </label>
                <label className="methods">
                    <span id="get" onClick={() => setMethod('GET')}>GET</span>
                    <span id="post" onClick={() => setMethod('POST')}>POST</span>
                    <span id="put" onClick={() => setMethod('PUT')}>PUT</span>
                    <span id="delete" onClick={() => setMethod('DELETE')}>DELETE</span>
                </label>
            </form>
        </>
    );
}



export default Form;