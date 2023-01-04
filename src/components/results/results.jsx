import './results.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

const Results = (props) => {
    let { data } = props;

    return (
        <section>
            {
                props.loading ? <div>Loading...</div> :
                    data ?
                        (<pre data-testid="results-data">
                            <span> Results
                                <JSONPretty data={data} />
                            </span>
                        </pre>) :
                        (<span>Awaiting API Request</span>)
            }
        </section>
    );
};

export default Results;