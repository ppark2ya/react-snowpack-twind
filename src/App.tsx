import { useCounterStore } from '@/store';
import React, { useEffect } from 'react';

import './App.css';
import logo from './logo.svg';

interface AppProps {}

// eslint-disable-next-line no-empty-pattern
function App({}: AppProps) {
  const { bears, increasePopulation } = useCounterStore((state) => ({
    bears: state.bears,
    increasePopulation: state.increasePopulation,
  }));

  useEffect(() => {
    const timer = setTimeout(() => increasePopulation(), 1000);
    return () => clearTimeout(timer);
  }, [bears, increasePopulation]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{bears}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
