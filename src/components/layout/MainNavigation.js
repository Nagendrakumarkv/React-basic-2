import { useContext } from 'react';
import {Link} from 'react-router-dom';
import FavoritesContext from '../store/favorites-context';
import classes from './MainNavigation.module.css';

function MainNavigation(){
   const favoriteCtx= useContext(FavoritesContext)
    return(
        <div className={classes.container}>
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav className={classes.link}>
                <ul>
                    <Link to='/'>All Meetups</Link>
                </ul>
                <ul>
                    <Link to='/new-meetup'>Add New Meetup</Link>
                </ul>
                <ul>
                    <Link to='/favorites'>
                        Favorites
                        <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
                     </Link>
                </ul>
            </nav>
        </header>
        </div>
    )
}

export default MainNavigation;