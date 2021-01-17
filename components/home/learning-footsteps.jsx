import learningFootprints from '../../constants/learning-footprints'

const ActionButton = (props) => {

  const { link, buttonName } = props.data

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="action-button text-center px-8 py-2 bg-gray-200  dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 rounded-lg transition duration-500 ease-in-out hover:bg-gray-300">{buttonName}</a>)
}

const LearningFootprintCard = (props) => {

  const { title, desc, actionList } = props.data

  return (
    <div className="learning-footprint-card border border-gray-500 rounded-lg p-4 flex flex-col gap-4 transition duration-500 ease-in-out transform hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300 hover:shadow-lg hover:border-opacity-0">
      <div className="title font-bold text-xl md:text-2xl">{title}</div>
      <div className="desc">{desc}</div>
      <div className="footer flex flex-wrap flex-grow gap-4 justify-end items-end">
        {
          actionList.map((action, index) => <ActionButton data={action} key={index} />)
        }
      </div>
    </div>)
}

export default function LearningFootprints() {

  const LearningFootprintList = () =>
    <div className="learning-footprint-list mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {
        learningFootprints.map((learningFootprint, index) => <LearningFootprintCard data={learningFootprint} key={index} />)
      }
    </div>

  return (
    <div className="learning-footprints px-8 py-16 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="title text-center text-4xl sm:text-5xl font-black  dark:text-gray-300">My learning footprints</div>
        <LearningFootprintList />
      </div>
    </div>
  )
}