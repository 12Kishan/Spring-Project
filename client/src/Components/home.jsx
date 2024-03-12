
import Navbar from '../Components/Navbar';
export default function home() {
  
   
    return (
  
      <>
     <Navbar/> 
    <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-10">
                <h1 className="text-3xl font-bold text-center mb-5">Welcome to My Ticket Booking</h1>
                <p className="text-center text-lg mb-8">Your one-stop destination for hassle-free event ticket booking.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <img src="https://img.freepik.com/free-photo/steam-train-chugs-through-mountain-forest-scene-generative-ai_188544-8072.jpg?w=996&t=st=1710250890~exp=1710251490~hmac=a4df7b08d26f6b30179a39f71fa2fad4ba24795f9490c2c38419cec0b37c9b98" alt="Event" className="w-full h-auto rounded-lg" />
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-photo/people-watching-as-train-approaches_1353-227.jpg?w=996&t=st=1710250933~exp=1710251533~hmac=ad1b6e787035f37326b0c7776085cec1584940d1dc17a5883bc070af09e7cc39" alt="Event" className="w-full h-auto rounded-lg" />
                    </div>
                </div>

                <div className="text-center mt-8">
                    <a href="/BookTicket" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">Book Tickets</a>
                </div>
            </div>
        </div>
      </>
    )
  }