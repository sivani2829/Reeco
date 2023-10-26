const Navbar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <div className="container-fluid m-2">
    <h1 className="navbar-brand text-light" href="#">Reeco</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-between " id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ">
        <li className="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Store</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Orders</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link disabled text-light" href="#" tabindex="-1" aria-disabled="true">Analytics</a>
        </li>
      </ul>
      <form className="d-flex mr-5">
        <p className="mr-5 text-light">Cart</p>
        <p className="ml-4 text-light" type="submit">Hello James</p>
      </form>
    </div>
  </div>
</nav>
      </div>
    );
  }
  
  export default Navbar;
  