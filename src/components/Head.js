const Head = () => {
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-sm">
      <div className="flex col-span-1">
        <img
          className="h-10"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
        />
        <img
          className="h-10 mx-4"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnk9Y1gJNsfef0Q970Qgi87cJuheUycIstjw&s"
        />
      </div>
      <div className="col-span-10 pl-28">
        <input
          className="p-2 w-3/5 border border-gray-400 rounded-l-full"
          type="text"
        />
        <button className="p-2 border border-gray-400 rounded-r-full px-5 bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          alt="user-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-Gh6uC11b9BUzfJ1OAuC3MgwwQdOLZL7PA&s"
        />
      </div>
    </div>
  );
};

export default Head;
