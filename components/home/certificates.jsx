import certificates from '../../constants/certificates'
import Image from 'next/image'

const CertificateCard = (props) => {
  const {
    imageFileName,
    name,
    issuerURL,
    issuer,
    credentialLink,
    width,
    height, } = props.certificateData

  return (
    <a href={credentialLink} target="_blank" rel="noopener noreferrer">
      <div className="certificate-card flex flex-col gap-4 p-4 bg-white dark:bg-gray-800 dark:text-gray-300 shadow-lg rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-full">

        <Image
          src={`/images/certificates/${imageFileName}`}
          alt={name}
          width={width}
          height={height}
          layout="intrinsic"
          className="rounded-xl"
        />

        <div className="certificate-title font-extrabold text-xl md:text-2xl">{name}</div>
        <a href={issuerURL} target="_blank" rel="noopener noreferrer" className="certificate-issuer self-start flex-grow md:text-xl">{issuer}</a>
      </div>
    </a>)
}

export default function Certificates() {

  return (
    <div className="certificates px-6 py-16 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="title text-center text-4xl sm:text-5xl font-black dark:text-gray-300">Cerftificates</div>
        <div className="certfificate-list mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
          {
            certificates.map((certificate, index) => <CertificateCard certificateData={certificate} key={index} />)
          }
        </div>
      </div>
    </div>
  )
}