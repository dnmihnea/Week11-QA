import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Clock from './Clock.jsx';
import Prop from './components/Prop.jsx';

function App() {
  const address = {
    fullname: "Alex Dinu",
    street: "123 Main Street",
    city: "Main City",
    country: "Main Country"
}
  return (
    <>
    <Header />
    <div className="App">
      <h1 id="owner-name">{address.fullname}</h1>
      <h2 className="list-title">Address</h2>
      <ul id="address">
        <li className="address-elem">{address.street}</li>
        <li className="address-elem">{address.city}</li>
        <li className="address-elem">{address.country}</li>
      </ul>
      <h2 className="list-title">Likes</h2>
      <ul id="likes">
        <li>Reading</li>
        <li>Chocolate</li>
        <li>Movies :)</li>
        
      </ul>
      <h2 className="list-title">Dislikes</h2>
      <ul id="dislikes">
        <li>Taxes</li>
        <li>Cold weather</li>
        <li>Sparkling Water</li>
      </ul>
    </div>
    <Clock />
    <Footer />
    </>
  );
}

export default App;