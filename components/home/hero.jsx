export default function Hero() {

    const Greeting = () =>
        <div className="greeting">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-center dark:text-gray-300">Hi there, <span className="text-blue-500">I'm Izzu</span>
            </h1>

            <h3 className="text-center sm:text-2xl font-semibold  dark:text-gray-300">a Digital Craftman</h3>
        </div>

    return (
        <div className="hero px-4 dark:bg-gray-900">
            <div className="container flex flex-col mx-auto h-screen justify-center gap-10">
                <Greeting />
            </div>
        </div>
    )
}
