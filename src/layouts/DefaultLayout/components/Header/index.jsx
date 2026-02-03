import AppLogo from "../AppLogo";
import MyCourses from "./partials/MyCourses";
import SearchForm from "../SearchForm";
import Notification from "./partials/Notification";
import UserMenu from "./partials/UserMenu";
import styles from "./Header.module.scss";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <AppLogo />
                <SearchForm />
                <div className={styles.headerAction}>
                    <MyCourses />
                    <Notification />
                    <UserMenu />
                </div>
            </div>
        </header>
    );
}
export default Header;
