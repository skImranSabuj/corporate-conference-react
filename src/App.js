import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import background from '../src/images/background.jpg';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Main></Main>
    </div>
  );
}

export default App;
