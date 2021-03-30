import './App.css';
import { LayersControl, MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Square from './customComponent'
import { useState } from 'react';

function App() {
  const [size, setSize] = useState(1000)
  const [buttonColor, setButtonColor] = useState('blue')
  const center = [51.505, -0.09]

  const onClickEnlarge = () => {
    setSize(size + 50)
  }

  const onClickChangeColor = () => {
    setButtonColor("red")
  }

  return (
    <>
      <button style={{ backgroundColor: buttonColor }} onClick={onClickChangeColor}>Change Colour</button>
      <button onClick={onClickEnlarge}>Enlarge</button>
      <MapContainer center={center} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Square center={center} size={size} />
      </MapContainer>
    </>

  );
}

export default App;
