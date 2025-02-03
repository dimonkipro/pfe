import { useSelector } from "react-redux";

const TrainerDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user?.name}!</p>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
};

export default TrainerDashboard;
