import socialMedia from '../../constants/social-media'

export default function Hero() {

    return (
        <div className="hero px-4 bg-gray-300">
            <div className="container flex flex-col mx-auto h-screen justify-center gap-10">

                <div className="greeting">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-center">Hi there, <span className="text-blue-600">I'm Izzu</span>
                    </h1>

                    <h3 className="text-center font-semibold">Netflix, Code, and Travel</h3>
                </div>

                <div className="social-media flex border justify-center gap-4">
                    {
                        socialMedia.map((socmed, index) =>
                            <a key={index} href={socmed.link} className={`px-2 py-1 rounded-md transition duration-500 ease-in-out bg-gray-400 font-semibold transform hover:${socmed.bgHover} hover:${socmed.colorHover} hover:-translate-y-1 hover:scale-110`}>
                                {socmed.name}
                            </a>)
                    }
                </div>
            </div>
        </div>
    )
}