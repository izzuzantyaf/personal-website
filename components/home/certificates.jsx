import certificates from '../../constants/certificates'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

const CertificateCard = (props) => {
  const {
    imageFileName,
    name,
    issuerURL,
    issuer,
    credentialLink, } = props.certificateData

  return (
    <div className="certificate-card flex flex-col gap-4 p-4 bg-white dark:bg-gray-800 dark:text-gray-300 shadow-lg rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">

      <Image
        src={`/images/certificates/${imageFileName}`}
        alt="Picture of the cert"
        width={1754}
        height={1238}
        layout="intrinsic"
        className="rounded-xl"
      />

      {/* <img src={`/images/certificates/${imageFileName}`} alt="Tel-U physics lab web project" className="rounded-xl" /> */}

      <h3 className="certificate-title font-bold text-xl md:text-2xl">{name}</h3>
      <a href={issuerURL} target="_blank" rel="noopener noreferrer" className="certificate-issuer self-start flex-grow md:text-xl">{issuer}</a>
      <a href={credentialLink} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center self-end px-6 py-2 rounded-md transition duration-500 ease-in-out border border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-600 hover:border-opacity-0 text-blue-600 dark:text-blue-600 dark:hover:text-white font-bold">View credential
    <FontAwesomeIcon icon={['fas', 'external-link-alt']} className="w-4" />
      </a>
    </div>)
}

export default function Certificates() {

  const CertificateList = () =>
    <div className="certfificate-list mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
      {
        certificates.map((certificate, index) => <CertificateCard certificateData={certificate} key={index} />)
      }
    </div>

  return (
    <div className="certificates px-6 py-16 dark:bg-gray-900">
      <div className="container mx-auto">
        <h3 className="title text-center text-4xl sm:text-5xl font-black dark:text-gray-300">Cerftificates</h3>
        <CertificateList />
      </div>
    </div>
  )
}