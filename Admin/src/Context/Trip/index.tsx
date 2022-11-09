import { createContext, useState, useMemo } from "react";
import axios from "axios";
import { TripState } from "../../types";
import { toast } from "react-toastify";
export const TripContext = createContext(null);
const TripContextProvider = ({ children }: any) => {
  const [trips, setTrips] = useState<TripState[] | null>();
  const [trip, setTrip] = useState<[]>();
  const [loading, setLoading] = useState<boolean>(false);
  // get all trips
  const getTrips = async () => {
    setLoading(true);
    const res = await axios
      .get(`http://localhost:5000/api/v1/trips/all`)
      .catch((err) => {
        const message: any =
          (err.res && err.res.data && err.res.data.message) ||
          err ||
          err.message;
        if (message) {
          setLoading(false);
          toast.error(message.response.data.message);
          setTimeout(() => {
            setLoading(false);
          }, 4000);
        }
      });
    if (res && res.data) {
      setLoading(false);
      setTrips(res.data);
    }
  };
  const values: any = useMemo(() => ({
    getTrips,
    trips
  }), [getTrips,trips]);
  return <TripContext.Provider value={values}>{children}</TripContext.Provider>;
};
export default TripContextProvider;