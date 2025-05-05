import Image from "next/image";
import "./style.css";

function Home() {
    return (
        <section id="home">
            <div className="container pt-4">
                <div className="hero max-w-screen-lg mx-auto transition duration-[0.8s]">
                    <div className="slide w-full">
                        <Image
                            src="https://images.pexels.com/photos/211122/pexels-photo-211122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="under construction"
                            width={1024}
                            height={400} // For Aspect Ratio guidance
                            priority
                            className="w-full h-auto  max-h-[25rem] object-cover rounded-2xl"
                        />
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="font-bold text-[clamp(1.875rem,4vw,5rem)] uppercase text-orange-600 tracking-wide my-0">
                        Coming soon
                    </h1>
                    <h2 className="text-[clamp(1rem,3vw,1.875rem)]">
                        For any information, please reach on:
                    </h2>
                    <p className="italic text-sky-500 font-semibold mb-[0.67em]">
                        +91 9769680485 / sales@phoenixglobal.co.in
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Home;
