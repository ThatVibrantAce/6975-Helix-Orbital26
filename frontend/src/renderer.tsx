import './index.css';
import { createRoot } from 'react-dom/client'
import { App } from './App'

const container = document.getElementById('app');
if (!container) {
  throw new Error('Missing #app element in index.html');
}

const root = createRoot(container);
root.render(<App />);