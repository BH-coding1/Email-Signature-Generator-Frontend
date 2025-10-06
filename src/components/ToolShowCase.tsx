const ToolShowCase = () => {
  const tools = [
    { name: 'Gmail', logo:'/google_mail_gmail_logo_icon_159346.png' },
    { name: 'Outlook', logo:'/microsoft_office_outlook_logo_icon_145721.png'  },
    { name: 'Yahoo', logo:'./1485482357-yahoo_78671.png'},
    { name: 'Airmail', logo:'/Airmail.png'},
  ];

  return (
    <>
      <div className="flex text-base sm:text-lg text-gray-600 justify-center pt-4 sm:pt-5">
        <p>Generates Email signatures that can be used with:</p>
      </div>
      <div className="flex flex-row w-full max-w-full py-8 sm:py-12 px-2 sm:px-4 lg:px-8 gap-2 sm:gap-2 justify-center items-center bg-white mb-8 sm:mb-10 overflow-hidden">
        {tools.map((tool, index) => (
          <div key={tool.name} className="flex items-center flex-shrink-0">
            <div className="card bg-white rounded-lg w-16 h-16 md:w-24 md:h-24 lg:w-40 lg:h-40 flex items-center justify-center">
              <img
                src={tool.logo}
                alt={`${tool.name} logo`}
                className="w-6 h-6 sm:w-5 sm:h-8 lg:w-20 lg:h-20 object-contain"
              />
            </div>
            {index < tools.length - 1 && (
              <div className="divider divider-horizontal mx-1 md:mx-0 lg:mx-4"></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ToolShowCase;
