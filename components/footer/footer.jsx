import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const { socialMedias } = require('../../constants/social-media')

const SocialMediaBtn = (props) => {

  const { name, link, hoverColor, icon } = props.data

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-md transition duration-500 ease-in-out font-semibold transform ${hoverColor} hover:-translate-y-1 hover:scale-110`}>
      <div className="socmed-icon flex content-center gap-2">
        <FontAwesomeIcon icon={icon} className="text-2xl" />
        <div className="name">
          {name}
        </div>
      </div>
    </a>)
}

export default function Footer() {

  return (
    <footer className="footer py-8 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
        <h4 className="font-black text-xl text-center md:text-left">izzuzantyaf.</h4>
        <div className="social-media md:justify-self-end flex flex-wrap justify-center gap-4">
          {socialMedias.map((socmed, index) =>
            <SocialMediaBtn data={socmed} key={index} />
          )}
        </div>
      </div>
    </footer>
  )
}