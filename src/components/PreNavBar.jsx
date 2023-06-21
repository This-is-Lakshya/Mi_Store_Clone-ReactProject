import React from 'react';
import '../styles/PreNavBar.css';

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="23" viewBox="0 -960 960 960" width="23"><path d="M286.788-81Q257-81 236-102.212q-21-21.213-21-51Q215-183 236.212-204q21.213-21 51-21Q317-225 338-203.788q21 21.213 21 51Q359-123 337.788-102q-21.213 21-51 21Zm400 0Q657-81 636-102.212q-21-21.213-21-51Q615-183 636.212-204q21.213-21 51-21Q717-225 738-203.788q21 21.213 21 51Q759-123 737.788-102q-21.213 21-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841-759 829-738L694-495q-11 19-28.559 30.5Q647.881-453 627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"/></svg>

const PreNavBar = () => {
  return (
    <div className="preNav">
        <div>
            <a  href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
            <a  href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
            <a  href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
            <a  href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ﹀</a>
        </div>

        <div>
            <a  href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
            <a  href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a> <span>|</span>
            <a  href="https://store.mi.com/in/site/login"> {cartIcon} CART (0)</a>
               
        </div>
    </div>
  )
}

export default PreNavBar