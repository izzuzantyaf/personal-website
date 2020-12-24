export default function Hero() {

    const Greeting = () =>
        <div className="greeting">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-center">Hi there, <span className="text-blue-600">I'm Izzu</span>
            </h1>

            <h3 className="text-center sm:text-2xl font-semibold">a Software Developer</h3>
        </div>

    return (
        <div className="hero px-4 bg-gray-200">
            <div className="container flex flex-col mx-auto h-screen justify-center gap-10">
                <Greeting />
            </div>
        </div>
    )
}