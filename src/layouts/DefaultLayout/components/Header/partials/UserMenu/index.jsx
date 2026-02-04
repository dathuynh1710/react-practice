import { useEffect, useState } from "react";
import UserMenuResult from "./UserMenuResult";

import styles from "./UserMenu.module.scss";
import avatarImg from "/images/avatar.jpg";
import iconAvatarSp from "/icons/sp-avatar.svg";

function UserMenu() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(e) {
            if (e.target.closest(`.${styles.wrapper}`)) {
                return;
            }
            setOpen(false);
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // Cleanup
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperAvatar}>
                <div className={styles.avatar} onClick={() => setOpen(!open)}>
                    <img src={avatarImg} alt="avatar" className={styles.avatarImg} />
                    <img src={iconAvatarSp} alt="" className={styles.avatarSp} />
                </div>
            </div>
            {open && <UserMenuResult />}
        </div>
    );
}

export default UserMenu;
