import './form.scss';

const Form = (props) => {

    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <label >
                    <span>URL: </span>
                    <input data-testid="form-input" name='url' type='text' onChange = {(e) => props.setApiUrl(e.target.value)}/>
                    <button  type="submit">GO!</button>
                </label>
                <label>
                </label>
                <label className="methods">
                    <span onClick={() => props.setMethod('GET')} id="get">GET</span>
                    <span onClick={() => props.setMethod('POST')} id="post">POST</span>
                    <span onClick={() => props.setMethod('PUT')}id="put">PUT</span>
                    <span onClick={() => props.setMethod('DELETE')} id="delete">DELETE</span>
                </label>
            </form>
        </>
    );
}

export default Form;