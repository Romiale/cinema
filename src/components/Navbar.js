import styles from '../style/Navbar.module.scss';
import search from '../icons/search.svg'
import Sidebar from '../components/sidebar';

export default function Navigation() {
    return (
        <div>
            <div className={styles.navigation}>

                <div>
                 <input type="text" placeholder="Search movie" />
                 <button>
                      <img src={search} alt="search" />
                </button>
                </div>
                <div className={styles.menu__modal}>
                <button type="button" className="btn" data-mdb-toggle="modal" data-mdb-target="#menu">
                 Menu
                </button>
                <div className="modal right fade" id="menu" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-mdb-backdrop="false" data-mdb-keyboard="true">
  <div className="modal-dialog modal-side modal-top-right ml-0">
    <div className="modal-content">
        <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
     <Sidebar/>
        <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
          Close
        </button>
    </div>
  </div>
</div>   
                </div>
            <span>Sign Up</span>
           
            </div>
            
        </div>
    )
}
