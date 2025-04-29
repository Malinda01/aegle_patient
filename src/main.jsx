import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function ErrorBoundary({ children }) {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {children}
        </React.Suspense>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
);
