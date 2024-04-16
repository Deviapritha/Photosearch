import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [urlsDisplay, setUrlsDisplay] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");

  async function getUnsplashPhotos() {
    try {
      const apikey = 'QdSVYRorr0szjMETloIafUlA_3ilQPo6yP05mmFaVNU';
      let resp = await axios.get(`https://api.unsplash.com/search/photos?client_id=${apikey}&query=${searchQuery}&per_pages=5`);
      console.log(21, resp.data.results);
      setUrlsDisplay(resp.data.results);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="App">

      <div className='container'>
        <div className='center'>


          <h1 className='title'>React Photo Search</h1>
          <input className='input' placeholder='Enter Search Query' onChange={(e) => {
            setsearchQuery(e.target.value);
          }} />
          <button className='button' onClick={getUnsplashPhotos}>
            Submit</button>
        </div>
        <div className="card-list">
          {urlsDisplay.map((image) => {
            return <div>
              <img className='card--image' src={image.urls.small} />
            </div>
          })}

        </div>
      </div>

    </div>
  );
}

export default App;
