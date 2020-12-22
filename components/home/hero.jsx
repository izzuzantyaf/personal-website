export default function Hero() {
    return (
        <div className="hero p-4 bg-gray-300">
            <div className="container flex flex-col mx-auto h-screen justify-center gap-10">

                <div className="greeting">
                    <h1 className="
                        text-5xl font-black
                        text-center">Hi there, <span className="text-secondary">I'm Izzu</span>
                    </h1>

                    <h3 className="text-center font-semibold">Netflix, Code, and Travel</h3>
                </div>

                {/* <div className="recent-projects bg-indigo-100 flex flex-col items-center gap-4 rounded-2xl">
                    <h2 className="text-2xl font-bold">Recent projects</h2>
                    <div className="project-cards flex gap-4 w-full">
                        <div className="project-card flex-grow bg-indigo-300 h-20">
                            content
                        </div>
                        <div className="project-card flex-grow bg-indigo-300 h-20">
                            content
                        </div>
                        <div className="project-card flex-grow bg-indigo-300 h-20">
                            content
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}