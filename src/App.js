import {useState, useEffect} from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch'

import './App.css';

function App() {
  const [images,setImages] = useState([]);
  const [isLoading,setLoading] = useState(true);
  const [term,setTerm] = useState('');
  useEffect(() => {
    console.log(process.env.REACT_APP_PIXABAY_API_KEY);
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className='container mx-auto'>
      <ImageSearch searchText ={(text) => setTerm(text)}/>
      <div className='grid grid-cols-3'>
        {images.map(image => (
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>
    </div>

  );
}

export default App;
