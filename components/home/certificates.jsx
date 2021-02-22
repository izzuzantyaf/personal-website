import certificates from '../../constants/certificates'

const CertificateCard = (props) =>
  <div className="certificate-card flex flex-col gap-4 p-4 bg-white dark:bg-gray-800 dark:text-gray-300 shadow-lg rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">

    <img src={`/images/certificates/${props.certificateData.imageFileName}`} alt="Tel-U physics lab web project" className="rounded-xl" />

    <h3 className="certificate-title flex-grow font-semibold text-xl md:text-2xl">{props.certificateData.name}</h3>
    <a href={props.certificateData.credentialLink} target="_blank" rel="noopener noreferrer" className="self-end px-8 py-2 rounded-md transition duration-500 ease-in-out bg-blue-200 hover:bg-blue-400 text-blue-800 font-bold">View credential</a>
  </div>

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