export default function Projects() {
  return (
    <div className="my-projects dark:bg-gray-900 px-8 py-16">

      <div className="container mx-auto">
        <h3 className="title text-center text-4xl sm:text-5xl font-black text-blue-500">My works</h3>

        <div className="project-list mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 items-center">
          <div className="project-info flex flex-col gap-8 items-center">
            <div className="project-title font-bold dark:text-gray-300 text-3xl md:text-4xl lg:text-5xl text-left sm:text-left">
              Tel-U Physics Laboratory Website
            </div>
            <a href="https://labfisdas-telu.com" target="_blank" rel="noopener noreferrer" className="visit-me-btn self-center sm:self-start px-8 py-2 rounded-md transition duration-500 ease-in-out border border-blue-500 hover:bg-blue-500 hover:border-none hover:text-white  text-blue-500 font-bold">Visit me</a>
          </div>
          <div className="project-image">
            <img src="/images/projects/labfisdas.png" alt="Tel-U physics lab web project" className="shadow-xl rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" />
          </div>
        </div>

      </div>
    </div>
  )
}
