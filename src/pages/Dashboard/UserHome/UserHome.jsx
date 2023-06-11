import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { CgProfile } from 'react-icons/cg';

const UserHome = () => {
    const{user,loading}=useAuth();
  return (
<>
{
    loading?(
        <div className=""><progress className="progress w-56 text-red-600"></progress></div>
        
    ):
    (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-slate-300 max-w-md mx-auto p-8 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src={user.photoURL}
              alt="Profile"
            />
          </div>
          <div className="text-center">
          
            <p className="text-gray-600 font-semibold  mb-4">{user.displayName}</p>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Email:</span>
              <span className="text-gray-900 font-semibold">{user.email}</span>
            </div>
            
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-700 font-bold">Interests:</span>
              <span className="text-gray-900 font-semibold">Reading, Traveling</span>
            </div>
          </div>
        </div>
      </div>
    )
}
</>
   
  );
};

export default UserHome;
