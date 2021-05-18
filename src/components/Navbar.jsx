import styles from '../style/Navbar.module.scss';
import Sidebar from '../components/sidebar';
import SearchMovie from '../components/SearchMovie';
import logo_cinema from '../icons/logoFile.svg'


export default function Navigation({ handleClick, handleChange }) {

    return (
        <div>
            <div className={styles.navigation}>
                <img src={logo_cinema} className={styles.logo} alt="logo cinema" />
                <SearchMovie handleChange={handleChange} handleClick={handleClick} />
                <div className={styles.menu__modal}>
                    <button type="button" className="btn" data-mdb-toggle="modal" data-mdb-target="#menu">
                        Menu
                    </button>
                    <div className="modal right fade" id="menu" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-mdb-backdrop="false" data-mdb-keyboard="true">
                        <div className="modal-dialog modal-side modal-top-right ml-0">
                            <div className="modal-content">
                                <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                                <Sidebar />
                                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                                    Close
                            </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
