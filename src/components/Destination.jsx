// {
// "_id": "6a01cd69981b57009a5c292c",
// "destinationName": "Bali Paradise",
// "country": "Indonesia",
// "category": "Beach",
// "price": 1299,
// "duration": "7 Days / 6 Nights",
// "departureDate": "2026-06-15",
// "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
// "description": "Enjoy the stunning beaches, vibrant nightlife, and tropical atmosphere of Bali."

import Image from "next/image";
import { TiLocation } from "react-icons/ti";

// }
const Destination = ({destination}) => {
    // console.log(destination);
    const {_id, destinationName, country, category, price, duration, departureDate, imageUrl} = destination;
    return (
        <div>
            <Image width={400} height={400} className="w-full h-75 object-cover" src={imageUrl} alt="destinationName" priority />
            <div>
                <div className="flex items-center gap-1 capitalize">
                    <TiLocation />
                    {country}
                </div>
            </div>
        </div>
    );
};

export default Destination;