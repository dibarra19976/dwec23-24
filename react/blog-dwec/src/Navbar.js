
const Navbar = () => {
    return (  
        <nav className="navBar">
            <h1>El Blog de DWEC</h1>
            <div className="links">
                <Link to="/">Inicio</Link>
                <Link to="/create">Nuevo Blog</Link>
                <Link to="/details">Detalles</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;