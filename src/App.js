import logo from './logo.svg';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Card from './Components/Card';
import './Css/App.css'
function App() {
  return (
    <div className='whole'>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div>
        <Header/>
      </div>
      <div className='cards'>
          <Card side={true} />
          <Card side={false} />
      </div>
    </div>
  );
}

export default App;
