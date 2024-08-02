import Menu from "./Menu";

const Navbar = () => {
  const menus = ["Home", "Sign in", "Sign up"];
  return (
    <div className="flex gap-4 items-center">
      {menus.map((menu) => (
        <Menu name={menu} key={menu} />
      ))}
    </div>
  );
};

export default Navbar;
