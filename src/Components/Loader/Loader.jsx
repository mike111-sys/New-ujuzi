const Loader = ({ isDarkMode }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isDarkMode ? 'bg-gray-900 bg-opacity-75' : 'bg-gray-100 bg-opacity-75'
      } z-50`}
    >
      <div className="w-6 h-6 bg-green-500 rounded-full animate-ping"></div>
    </div>
  );
};

export default Loader;