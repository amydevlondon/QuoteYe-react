import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Quote from './components/Quote';
import Button from './components/Button';
import Loader from './components/Loader';
import Error from './components/Error';

export const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <Error />;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <>
        <Header />
        <Quote quote={data} />
        <Button text="New QuoteYe" />
      </>
    );
  }
};

export default App;
