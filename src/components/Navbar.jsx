import styles from '../style/Navbar.module.scss';
import logo_cinema from '../icons/logoFile.svg';
import SearchMovie from '../components/SearchMovie';
import { Link } from 'react-router-dom'


export default function Navigation({ handleClick, handleChange }) {

    return (
        <div>
            <div className={styles.navigation}>
                <nav class="navbar navbar-expand-lg navbar-light bg-transparent w-100">
                    <div class="container-fluid">
                        <div className="d-flex justify-content-betwee(n w-100">
                            <img src={logo_cinema} className={styles.logo} alt="logo cinema" />
                            <SearchMovie handleChange={handleChange} handleClick={handleClick} />
                            <button
                                className="ml-4 navbar-toggler m-2"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <i class="fas fa-bars"></i>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <h4 className="text-warning">Home</h4>
                                <Link className="text-white" to="/">Upcoming</Link>
                                <Link className="text-white" to="/">Popular</Link>
                                <h4 className="text-warning">Genres</h4>
                                <Link className="text-white" to="/movies">Movies</Link>
                                <Link className="text-white" to="/series">Series</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    )
}
