import './history.scss';

const History = ({history, showHistory}) => {

    return (
        <>
            <h2>History</h2>
            {history.map((reqHistory, index) => (
                <button
                   key={`history-${index}`}
                   onClick = {() => showHistory(reqHistory)}
                >
                    {reqHistory.request.method}: {reqHistory.request.url}
                    </button>
            ))}
        </>
    );
}

export default History;