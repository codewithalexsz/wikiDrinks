function Navbar() {
  return (
    <nav className="">
      <div className="navbar  max-w-custom m-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="./public/index.html">Home</a>
              </li>
              <li>
                <a>Categories</a>
                <ul className="p-2">
                  <li>
                    <a>Alcoholic Drinks</a>
                  </li>
                  <li>
                    <a>Non-Alcoholic Drinks</a>
                  </li>
                  <li>
                    <a>Hot Beverages</a>
                  </li>
                  <li>
                    <a>Cold Beverages</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>About Us</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-[2rem]">wikiDrink</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[1rem]">
            <li>
              <a href="./public/index.html">Home</a>
            </li>
            <li tabIndex={0}>
              <details className="mr-16 ml-16">
                <summary>Categories</summary>
                <ul className="p-2 z-10">
                  <li>
                    <a>Alcoholic Drinks</a>
                  </li>
                  <li>
                    <a>Non-Alcoholic Drinks</a>
                  </li>
                  <li>
                    <a>Hot Beverages</a>
                  </li>
                  <li>
                    <a>Cold Beverages</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Button</a> */}
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered h-10 w-24 md:w-auto "
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
