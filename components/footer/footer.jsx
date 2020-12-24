import socialMedia from '../../constants/social-media'

export default function Footer() {

  const SocialMediaList = () => {

    const SocialMediaBtn = (props) => <a href={props.socmed.link} target="_blank" rel="noopener noreferrer" className={`px-2 py-1 rounded-md transition duration-500 ease-in-out bg-gray-800 font-semibold transform hover:${props.socmed.bgHover} text-gray-500 hover:${props.socmed.colorHover} hover:-translate-y-1 hover:scale-110`}>
      {props.socmed.name}
    </a>

    return (
      <div className="social-media md:justify-self-end flex justify-center gap-4">
        {
          socialMedia.map((socmed, index) =>
            <SocialMediaBtn socmed={socmed} key={index} />
          )
        }
      </div>
    )
  }

  return (
    <footer className="footer p-8 bg-gray-900">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
        <h4 className="font-bold text-xl text-white text-center md:text-left">izzuzantyaf.</h4>
        <SocialMediaList />
      </div>
    </footer>
  )
}