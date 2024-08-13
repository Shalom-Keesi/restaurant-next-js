
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white">
      <div className="text-2xl font-bold text-yellow-400 italic">FoodHouse</div>
      <div className="space-x-6">
        <span className="text-orange-500">HOME</span>
        <span className="text-gray-500">RESTURNT</span>
        <span className="text-gray-500">SERVICES</span>
        <span className="text-gray-500">CART</span>
      </div>
      <div>
        <span className="text-gray-500">Sign In</span>
      </div>
    </nav>
  );
};

export default Navbar;
