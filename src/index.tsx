import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>Welcome to My Vercel App</h1>
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);