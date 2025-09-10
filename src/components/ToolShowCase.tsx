import gmailLogo from '../../public/google_mail_gmail_logo_icon_159346.png'; 
import outlookLogo from '../../public/microsoft_office_outlook_logo_icon_145721.png';
import yahooLogo from '../../public/1485482357-yahoo_78671.png'
const ToolShowCase = () => {
  const tools = [
    { name: 'Gmail', logo: gmailLogo },
    { name: 'Outlook', logo: outlookLogo },
    { name: 'Yahoo', logo:yahooLogo },
  ];

  return (
    <div className="flex flex-col sm:flex-row w-full py-12 px-6 gap-6 sm:gap-0 justify-center items-center bg-base-100">
      {tools.map((tool, index) => (
        <div key={tool.name} className="flex items-center">
          <div className="card bg-white rounded-lg shadow-md border border-gray-200 w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
            <img
              src={tool.logo}
              alt={`${tool.name} logo`}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
          </div>
          {index < tools.length - 1 && (
            <div className="divider divider-horizontal mx-4"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ToolShowCase;
