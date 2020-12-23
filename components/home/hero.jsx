import socialMedia from '../../constants/social-media'

export default function Hero() {

    const Greeting = () => (
        <div className="greeting">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-center">Hi there, <span className="text-blue-600">I'm Izzu</span>
            </h1>

            <h3 className="text-center sm:text-2xl font-semibold">Netflix, Code, and Travel</h3>
        </div>
    )

    const SocialMediaList = () => {

        const SocialMediaBtn = (props) => <a key={props.index} href={props.socmed.link} target="_blank" rel="noopener noreferrer" className={`px-2 py-1 rounded-md transition duration-500 ease-in-out bg-gray-400 font-semibold transform hover:${props.socmed.bgHover} hover:${props.socmed.colorHover} hover:-translate-y-1 hover:scale-110`}>
            {props.socmed.name}
        </a>

        return (
            <div className="social-media flex justify-center gap-4">
                {
                    socialMedia.map((socmed, index) =>
                        <SocialMediaBtn socmed={socmed} index={index} />
                    )
                }
            </div>
        )
    }

    return (
        <div className="hero px-4 bg-gray-200">
            <div className="container flex flex-col mx-auto h-screen justify-center gap-10">
                <Greeting />
                <SocialMediaList />
            </div>
        </div>
    )
}