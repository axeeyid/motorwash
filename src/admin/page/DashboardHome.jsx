import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-teal-50 rounded-md py-12 px-4">
      {/* Dashboard Header */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-teal-600 mb-6">Welcome, Admin</h1>
        <p className="text-lg text-teal-500 mb-12">Manage your platform effectively and efficiently.</p>
      </div>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 - Total Orders */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">Total Orders</h3>
          <p className="text-4xl font-bold text-teal-700">350</p>
        </div>

        {/* Card 2 - Active Users */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">Active Users</h3>
          <p className="text-4xl font-bold text-teal-700">128</p>
        </div>

        {/* Card 3 - Completed Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">Completed Tasks</h3>
          <p className="text-4xl font-bold text-teal-700">250</p>
        </div>
      </section>

      {/* Welcome Message */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">Your Admin Dashboard</h2>
        <p className="text-lg text-teal-500">
          As an admin, you can manage users, view analytics, and take action on tasks.
          Explore the sections below to get started!
        </p>
      </div>

      {/* Quick Links Section */}
      <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Link 1 */}
        <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h4 className="text-xl font-semibold mb-4">Manage Users</h4>
          <p className="text-lg mb-4">Add, remove, or update user accounts.</p>
          <button className="bg-teal-700 hover:bg-teal-800 text-white py-2 px-4 rounded-lg">
            Go to Users
          </button>
        </div>

        {/* Link 2 */}
        <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h4 className="text-xl font-semibold mb-4">View Orders</h4>
          <p className="text-lg mb-4">See all orders placed by customers.</p>
          <button className="bg-teal-700 hover:bg-teal-800 text-white py-2 px-4 rounded-lg">
            Go to Orders
          </button>
        </div>

        {/* Link 3 */}
        <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h4 className="text-xl font-semibold mb-4">Order History</h4>
          <p className="text-lg mb-4">View and track completed orders.</p>
          <button className="bg-teal-700 hover:bg-teal-800 text-white py-2 px-4 rounded-lg">
            Go to History
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
