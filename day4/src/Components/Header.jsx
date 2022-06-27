export const Header = () => {
  const logo = require("./logo.png");
  return (
    <div className="header">
      <div className="logo">
        <img alt="logo" src={logo} />
      </div>
    </div>
  );
};
