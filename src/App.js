import './App.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/form';
import Results from './components/results/results';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);
  const [method, setMethod] = useState('GET');
  const [apiUrl, setApiUrl] = useState('');


  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const reqObj = { url: apiUrl, method }
    apiCall(reqObj);
  }

  useEffect(() => {
    console.log('Testing useEffect')
  }, []);

  const apiCall = (requestParams) => {
    setRequestParams(requestParams)
  }

  useEffect(() => {
    async function axiosCall() {
      let newData = await axios(requestParams);
      setData(newData.data);
      setLoading(false);
    }
    if (requestParams.method && requestParams.url){axiosCall()}
  }, [requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {method}</div>
      <div>URL: {apiUrl}</div>
      <Form handleSubmit={handleSubmit} setMethod={setMethod} setApiUrl={setApiUrl} />
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );
}

export default App;