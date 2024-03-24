import { benefits } from "../constants";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";

const Benefits = () => {
    return (
        <Section id="features">
            <h1 class="md:max-w-md lg:max-w-2xl max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center text-3xl font-bold lg:text-4xl">Get Social, Get Smart, <p>Get GiggleGraph</p></h1>

            <div className="container relative z-2 ">
                <div className="flex flex-wrap gap-10 mb-10">
               
                        {benefits.map((item) => (
                            <div
                                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                                style={{
                                    backgroundImage: `url(${item.backgroundUrl}) `,
                                }}
                                key={item.id}
                            >
                                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none ">
                                    <h5 className="h5 mb-5 text-slate-300">{item.title}</h5>
                                    <p className="body-2 mb-6 text-n-3">{item.text}</p>
                                  
                                </div>

                                {item.light && <GradientLight />}

                                <div
                                    className="absolute inset-0.5 bg-n-8 hover:bg-transparent"
                                    style={{ clipPath: "url(#benefits)" }}
                                >

                                </div>

                            </div>
                        ))}
                 
                </div>
            </div>
        </Section>
    );
};

export default Benefits;