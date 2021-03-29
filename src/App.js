import './App.css';
import { MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function App() {
  return (
    <MapContainer center={[50, 50]} zoom={4}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <WMSTileLayer url="http://localhost:8080/geoserver/nurc/wms" params={
        {
          layers: "nurc:Img_Sample",
          transparent: true,
          format: 'image/png',
        }
      } />


    </MapContainer>
  );
}

export default App;
