import {useState} from "react";
import {useFetch} from "../hooks/useFetch.jsx";
import './TripList.css'

export function TripList() {

    const [url, setUrl] = useState("http://localhost:3000/trips");

    const {data: trips, isLoading, error} = useFetch(url);

    return (
        <div className="trip-list">
            {isLoading ? <div>Loading...</div>: error ? <div>{error}</div>: null}
            <ul>
                {trips && trips.map((trip) => {
                    return (
                        <li key={trip.title}>
                            <h2>
                                {trip.title}
                            </h2>
                            <p>
                                {trip.price}
                            </p>
                            <p>
                                {trip.location}
                            </p>
                        </li>
                    )
                })}
            </ul>
            <div className="filters">
                <button onClick={()=>setUrl("http://localhost:3000/trips?location=Europe")}>Europe</button>
                <button onClick={()=>setUrl("http://localhost:3000/trips")}>All</button>
            </div>
        </div>
    )
}