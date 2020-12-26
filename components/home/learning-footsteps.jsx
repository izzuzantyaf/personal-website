import learningFootsteps from '../../constants/learning-footsteps'

export default function LearningFootsteps() {

  const LearningFootstepList = () => {

    const LearningFootstepCard = (props) => {

      const ActionButton = (props) => <a href={props.data.link} target="_blank" rel="noopener noreferrer" className="action-button text-center px-8 py-2 bg-gray-300 rounded-lg transition duration-500 ease-in-out hover:bg-gray-400">{props.data.buttonName}</a>

      return (
        <div className="learning-footstep-card border border-gray-500 rounded-lg p-4 flex flex-col gap-4 transition duration-500 ease-in-out transform hover:bg-white hover:shadow-lg hover:border-opacity-0">
          {
            props.data.hasOwnProperty('imageFileName') ? <img src={`/images/learning-footsteps/${props.data.imageFileName}`} className="rounded-lg"></img> : ''
          }
          <div className="title font-bold text-xl md:text-2xl">{props.data.title}</div>
          <div className="desc">{props.data.desc}</div>
          <div className="footer flex flex-wrap flex-col md:flex-row gap-4 justify-end">
            {
              props.data.actionList.map((action, index) => <ActionButton data={action} key={index} />)
            }
          </div>
        </div>)
    }

    return <div className="learning-footstep-list mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {
        learningFootsteps.map((learningFootstep, index) => <LearningFootstepCard data={learningFootstep} key={index} />)
      }
    </div>
  }

  return (
    <div className="learning-footsteps  bg-gray-200 p-8">
      <div className="container mx-auto">
        <div className="title text-center text-4xl sm:text-5xl font-black">My learning footsteps</div>
        <LearningFootstepList />
      </div>
    </div>
  )
}