import './App.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Pages from './Pages';
function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  )
}

export default App;