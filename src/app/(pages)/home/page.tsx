import Image from "next/image";
import "./style.css";

function Home() {
    return (
        <>
            <section id="home-hero" className="py-4">
                <div className="hero container max-w-3xl px-2 lg:p-0">
                    <div className="slide relative w-full max-h-[25rem] aspect-video overflow-hidden">
                        <Image
                            src="https://images.pexels.com/photos/211122/pexels-photo-211122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="under construction"
                            priority
                            fill // If fill is not used the add style = {{width:, height:} fixed value as mentioned in Image width and height property }
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            // width={1024}
                            // height={400}
                            // style={{width:"1024px", height:"400px"}}
                            className="object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </section>
            <section id="home-content" className="border-y">
                <div className="container max-w-5xl text-center px-2 lg:p-0 border-x">
                    <h1 className="font-bold text-[clamp(1.875rem,4vw,5rem)] uppercase text-orange-600 tracking-wide">
                        Coming soon
                    </h1>
                    <h2 className="text-[clamp(1rem,3vw,1.875rem)]">
                        For any information, please reach on:
                    </h2>
                    <p className="italic text-sky-500 font-semibold pb-[0.67em]">
                        +91 9769680485 / sales@phoenixglobal.co.in
                    </p>
                </div>
            </section>
        </>
    );
}

export default Home;
