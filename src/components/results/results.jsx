import './results.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

const Results = (props) => {
    let { data } = props;

    return (
        <section>
            {data ? 
            (<>
                <span> Results
                    <JSONPretty data={data} />
                </span>
            </>) :
            (<span>Awaiting API Request</span>)
        }
        </section>
    );
};

export default Results;