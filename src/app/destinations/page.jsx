import Destination from "@/components/Destination";
import Container from "@/components/shared/Container";
import { getDestinations } from "@/lib/actions";

const DestinationPage = async () => {
    const destinations = await getDestinations();
    // console.log(destinations);
    return (
        <div className="py-10">
            <Container>
                <h1 className="text-3xl text-center font-semibold mb-10">All Destinations</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:6">
                    {
                        destinations.map(destination => <Destination key={destination._id} destination={destination}>{destination.destinationName}</Destination>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default DestinationPage;