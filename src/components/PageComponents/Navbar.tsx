export const Navbar = () => {
  return (
    <nav className="bg-mainBg p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-black font-raleway font-bold text-lg">
            Quote Gen
          </h1>
          <div>
            <ul className="flex gap-4">
              <li className="font-semibold cursor-pointer">Sign Up</li>
              <li className="font-semibold cursor-pointer">
                Write your quote!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
