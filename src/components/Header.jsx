import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex justify-between py-3 px-28 shadow-md">
      <div className="text-green font-bold text-2xl font-logo">conduit</div>
      <Navbar />
    </div>
  );
};

export default Header;
