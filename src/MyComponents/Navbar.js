import darkmodeicon from "../assets/dark-mode.png"

const Navbar = ({currentTab, toggleDark, setToggleDark}) => {
  const toggle = () => {
    // console.log("img clicked");
    if(toggleDark==="dark") setToggleDark("light");
    else setToggleDark("dark");
    return;
  }

  return (  
        <nav className={`navbar navbar-expand-lg navbar-${toggleDark} bg-${toggleDark}`}>
          <a className="navbar-brand" href="#" style = {{margin: '0px 0px 0px 5px'}}>  Text Processing  </a>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <button className="nav-link" onClick = {() => currentTab("TextUtils")}>Home<span className="sr-only">(current)</span></button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick = {() => currentTab("News")}>News</button>
              </li>
              {/* <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Fiction/Non-Fiction
                </button>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li> */}
              <li className="nav-item">
                <button className="nav-link" onClick={() => currentTab("Home")}>Other</button>
              </li>
            </ul>
            <img src={darkmodeicon} onClick={()=>toggle()} alt="icon_missing" style={{height: '30px', width: 'auto', borderRadius: '5px', margin: '10px', filter: 'invert(100%)'}}/>
          </div>
        </nav>
  );
};

export default Navbar;


