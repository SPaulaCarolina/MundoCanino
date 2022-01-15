
const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="logo.png" alt="" width="30" height="24" /> Mundo canino
                    </a>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#"> ALIMENTOS BALANCEADOS</a>
                            <a class="nav-link" href="#"> SALUD E HIGIENE</a>
                            <a class="nav-link" href="#"> ENTRETENIMIENTO</a>
                            <a class="nav-link" href="#"> ACCESORIOS</a>
                        </div>
                    </div>
                    <button class="btn btn-outline-dark" type="button">Mi Compra</button>
                </div>
        </nav>
    )
}

export default NavBar
