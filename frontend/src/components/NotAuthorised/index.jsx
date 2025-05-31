import { Link } from 'react-router-dom';

const NotAuthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-red-500">403 - Access Denied</h1>
      <p className="text-lg mt-4 text-gray-700">
        You do not have permission to access this page.
      </p>
      <Link to="/home" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Go Back to Home page
      </Link>
    </div>
  );
};

export default NotAuthorized;