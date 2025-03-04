import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { socket } from '../../utils/socket';

const LiveMap = () => {
  const [buses, setBuses] = useState<Bus[]>([]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GMAPS_KEY,
  });

  useEffect(() => {
    socket.on('busUpdate', (data: Bus[]) => {
      setBuses(data);
    });
    return () => { socket.off('busUpdate'); };
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '600px' }}
      center={TRIPOLI_COORDINATES}
      zoom={13}
    >
      {buses.map(bus => (
        <Marker
          key={bus.id}
          position={{ lat: bus.lat, lng: bus.lng }}
          icon={BUS_ICON}
        />
      ))}
    </GoogleMap>
  ) : <CircularProgress />;
};