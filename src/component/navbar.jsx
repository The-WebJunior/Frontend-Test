export default function Navbar() {
  return (
    <div>
      <nav className="bg-white border-b border-b-slate-200/50 flex justify-between p-2">
        <div className=" p-3 mr-7 text-xl font-bold text-center">
          Where in the world?
        </div>
        <div className="flex items-center space-x-4">
          <ul>
            <li>
              <i className="fas fa-moon" id="dark-mode"></i>
              <span className="ml-2">Dark mode</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
