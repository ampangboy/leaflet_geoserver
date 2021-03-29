import './App.css';
import { LayersControl, MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function App() {
  return (
    <MapContainer center={[45, -90]} zoom={8}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LayersControl position="topright">
        <LayersControl.Overlay name="Polyline Landmark">
          <WMSTileLayer url="http://localhost:8080/geoserver/tiger/wms?" params={{
            layers: 'tiger:poly_landmarks',
            transparent: true,
            format: 'image/png'
          }} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Road">
          <WMSTileLayer url="http://localhost:8080/geoserver/tiger/wms?" params={{
            layers: 'tiger:tiger_roads',
            transparent: true,
            format: 'image/png'
          }} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Place of Interest">
          <WMSTileLayer url="http://localhost:8080/geoserver/tiger/wms?" params={{
            layers: 'tiger:poi',
            transparent: true,
            format: 'image/png'
          }} />
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer >
  );
}

export default App;
