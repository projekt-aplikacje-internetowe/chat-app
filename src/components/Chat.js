import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';

const Chat = () => {
    return (
        <body>
            <Header/>
                <nav className="header__top-menu">
            <ul className="header__top-menu--list">
                <li><Link to="/chat"> Czat - strona główna</Link></li>
                <li><Link to="/settings"> Ustawienia konta</Link></li>
                <li><Link to="/create-group-chat"> Utwórz czat grupowy</Link></li>
                <li><a href="/auth/logout">Wyloguj się</a></li>
            </ul>
            </nav>
    <main className="chat">
        <article>
            <h2>Test h2</h2>
            <section className="chat__content">
                <h3>Test h3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </section>
        </article>
    </main>
    <aside className="aside"></aside>
        <Footer/>
        </body>
    )
}

export default Chat
