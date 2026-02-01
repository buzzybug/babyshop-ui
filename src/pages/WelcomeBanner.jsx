import "./WelcomeBanner.css";

const WelcomeBanner = ({ user }) => {
  if (!user) return null;

  return (
    <div className="welcome-banner">
      <div className="welcome-left">
        <h2>
          Welcome back, <span>{user.name}</span> 👶🍼
        </h2>
        <p>{user.email}</p>
      </div>

      <div className="welcome-right">
        <div className="avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
