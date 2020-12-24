import certificates from '../../constants/certificates'

export default function Certificates() {

  const CertificateList = () => {

    const CertificateCard = (props) =>
      <div className="certificate-card p-4 bg-white shadow-lg rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">

        <img src={`/images/certificates/${props.certificateData.imageFileName}`} alt="Tel-U physics lab web project" className="rounded-xl" />

        <div className="project-card-footer flex flex-col gap-4 mt-4">
          <h3 className="certificate-title font-semibold text-xl">{props.certificateData.name}</h3>
          <a href={props.certificateData.credentialLink} target="_blank" rel="noopener noreferrer" className="self-end px-8 py-2 rounded-md transition duration-500 ease-in-out bg-blue-200 hover:bg-blue-400 text-blue-800 font-bold">View credential</a>
        </div>
      </div>

    return (
      <div className="certfificate-list mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {
          certificates.map((certificate, index) => <CertificateCard certificateData={certificate} key={index} />)
        }
      </div>
    )

  }

  return (
    <div className="certificates bg-gray-200 p-8">
      <div className="container mx-auto">
        <h3 className="title text-center text-4xl font-black">Cerftificates</h3>
        <CertificateList />
      </div>
    </div>
  )
}