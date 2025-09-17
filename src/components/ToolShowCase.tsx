const ToolShowCase = () => {
  const tools = [
    { name: 'Gmail', logo:'../../public/google_mail_gmail_logo_icon_159346.png' },
    { name: 'Outlook', logo:'../../public/microsoft_office_outlook_logo_icon_145721.png'  },
    { name: 'Yahoo', logo:'../../public/1485482357-yahoo_78671.png'},
    { name: 'Airmail', logo:'../../public/Airmail.png'},
  ];

  return (
    <>
    <div className="flex text-lg text-gray-600 justify-center pt-5 ">
        <p>Generates Email signatures that can be used with :</p>
    </div>
    <div className="flex flex-col sm:flex-row w-full py-12 px-6 gap-6 sm:gap-0 justify-center items-center pt-5 bg-white mb-10">
      
      {tools.map((tool, index) => (
        <div key={tool.name} className="flex items-center">
          <div className="card bg-white rounded-lg  w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
            <img
              src={tool.logo}
              alt={`${tool.name} logo`}
              className="w-10 h-10 sm:w-20 sm:h-20 object-contain"
            />
          </div>
          {index < tools.length - 1 && (
            <div className="divider divider-horizontal mx-4"></div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default ToolShowCase;
