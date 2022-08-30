import './App.css';

function App() {
  return (
    <div className="App">
      <h1 id="owner-name">Alex Dinu</h1>
      <h2 className="list-title">Address</h2>
      <ul id="address">
        <li className="address-elem">123 Main Street</li>
        <li className="address-elem">Main City</li>
        <li className="address-elem">Main Country</li>
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
  );
}

export default App;