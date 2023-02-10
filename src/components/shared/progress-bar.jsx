const ProgressBar = ({ progressPercentage }) => {
   return (
      <div className="h-2 w-full bg-gray-300 rounded-md overflow-hidden my-3">
         <div style={{ width: `${progressPercentage}%` }} className="h-full bg-dosma"></div>
      </div>
   );
};

export default ProgressBar;
