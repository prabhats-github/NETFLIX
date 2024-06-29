import logo from './logo.svg';
import './App.css';
import Nav from './componants/Nav';
import Featured from './componants/Featured';

function App() {
  return (
    <div className="App">
     <Nav/>
     <img  width={'100%'}  src='https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg'/>

     <Featured/>
    </div>
  );
}

export default App;
