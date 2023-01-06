import './App.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/form';
import Results from './components/results/results';
import History from './components/history/history'
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';


const initialState = {
  data: null,
  requestParams: {},
  loading: false,
  history: []
}

const reducer = (state = initialState, action) => {

  const { type, payload } = action;
  switch (type) {
    case 'START_REQUEST':
      return {
        ...state,
        requestParams: payload,
        loading: true,
      }

    case 'FINISH_REQUEST':
      return {
        ...state,
        data: payload,
        loading: false,
        history: [...state.history, { request: state.requestParams, data: payload }]
      }

    case 'SHOW_HISTORY':
      return{
        ...state,
        data: payload.data,
        requestParams: payload.request
      }
    default: return state;
  }

}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [method, setMethod] = useState('GET');
  const [apiUrl, setApiUrl] = useState('');


  const handleSubmit = e => {
    e.preventDefault();
    let action = {
      type: 'START REQUEST',
    }
    dispatch(action);
    const reqObj = { url: apiUrl, method }
    apiCall(reqObj);
  }


  const apiCall = (requestParams) => {
    const action = {
      type: 'START_REQUEST',
      payload: requestParams,
    }

    dispatch(action);
  }

  const showHistory = (reqHistory) => {
    const action = {
      type: 'SHOW_HISTORY',
      payload: reqHistory,
    }
    dispatch(action);
  }

  useEffect(() => {
    async function axiosCall() {
      let newData = await axios(state.requestParams);
      let action = {
        type: 'FINISH_REQUEST',
        payload: newData.data
      }
      dispatch(action);
    }
    axiosCall();
  }, [state.requestParams]);


  return (
    <>
      <Header />
      <div>Request Method: {method}</div>
      <div>URL: {apiUrl}</div>
      <Form handleSubmit={handleSubmit} setMethod={setMethod} setApiUrl={setApiUrl} />
      <History history={state.history} showHistory={showHistory}></History>
      <Results data={state.data} loading={state.loading} />
      <Footer />
    </>
  );
}

export default App;