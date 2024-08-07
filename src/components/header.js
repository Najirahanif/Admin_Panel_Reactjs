function Header() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light border-bottom">
                    <div className="container-fluid">
                        <ul  className="navbar-nav">
                            <li class="nav-item w-100">
                                <form class="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                                <input type="text" class="form-control" placeholder="Search products"/>
                                </form>
                            </li>
                        </ul>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li class="nav-item border-left">
                                    <a class="nav-link count-indicator" href="#" data-toggle="dropdown" aria-expanded="false">
                                    <i class="fa fa-envelope pt-1"></i>
                                    <span class="count bg-success"></span>
                                    </a>
                                </li>
                                <li class="nav-item nav-settings d-none d-lg-block">
                                    <a class="nav-link" href="#">
                                    <i class="fa fa-cog pt-1"></i>
                                    </a>
                                </li>
                                <li class="nav-item border-left">
                                    <a class="nav-link count-indicator" href="#" data-toggle="dropdown">
                                    <i class="fa fa-bell pt-1"></i>
                                    <span class="count bg-primary"></span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profileDropdown" href="#" data-toggle="dropdown">
                                    <div class="navbar-profile">
                                        <img class="img-xs rounded-circle w-10" src="assets/images/face1.jpg" alt=""/>
                                    </div>
                                    </a>
                                </li>
                                {/* <li className="nav-item active"><a className="nav-link" href="#!">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#!">Action</a>
                                        <a className="dropdown-item" href="#!">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
        </>
    );
    
}
export default Header;