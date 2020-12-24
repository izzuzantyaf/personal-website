import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Projects() {
  return (
    <div className="my-projects bg-gray-300 p-8">

      <div className="container mx-auto">
        <h3 className="title text-center text-4xl font-black">My Works</h3>

        <div className="project-list mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">

          <div className="project-card col-start-2 p-4 bg-white shadow-lg rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <img src="/images/projects/labfisdas.png" alt="Tel-U physics lab web project" className="rounded-xl" />
            <div className="project-card-footer flex flex-col gap-4 mt-4">
              <h3 className="project-title font-semibold text-xl">Tel-U Physics Laboratory Website</h3>
              <a href="https://labfisdas-telu.com" target="_blank" rel="noopener noreferrer" className="visit-me-btn self-end px-8 py-2 rounded-md transition duration-500 ease-in-out bg-blue-200 hover:bg-blue-400 text-blue-800 font-bold">Visit me</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
