import './App.css';
import { Footer } from './components/Header';
import Header from './components/Header'; //head also u can give
import { Nav } from './components/Nav';
import C1 from './components/C1';
import C2 from './components/C2';
import C4 from './components/C4';
import F1 from './components/F1'

function App() {
  return (
    <div >
      {/* here both ways are correct; */}
      {/* <Header name="Raj"></Header> 
      <Nav age="10"/>
      <Nav age="20"/>
      <Nav age="30"/>
      <Nav age="40"/>
      <Nav age="50"/>
      <Nav age="60"/>
      <Footer brand="Facebook"/> */}

      {/* <h1>State and props</h1>
      <C1 gift="watch" /> */}
      {/* <C2 /> */}
      {/* <C4 /> */}
      <F1 />
    </div>
  );
}

export default App;
