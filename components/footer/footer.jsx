import socialMedia from '../../constants/social-media'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialMediaBtn = (props) => {

  const { link, color, icon } = props.data

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-md transition duration-500 ease-in-out font-semibold transform hover:${color} hover:-translate-y-1 hover:scale-110`}>
      <div className="socmed-icon flex content-center">
        <FontAwesomeIcon style={{ width: '25px' }} icon={icon} />
      </div>
    </a>)
}

export default function Footer() {

  const SocialMediaList = () =>
    <div className="social-media md:justify-self-end flex flex-wrap justify-center gap-4">
      {
        socialMedia.map((socmed, index) =>
          <SocialMediaBtn data={socmed} key={index} />
        )
      }
    </div>

  return (
    <footer className="footer p-8 bg-gray-50 dark:bg-gray-900">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
        <h4 className="font-black text-xl text-center md:text-left">izzuzantyaf.</h4>
        <SocialMediaList />
      </div>
    </footer>
  )
}