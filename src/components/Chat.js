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
                <li><a href="/auth/logout">Wyloguj się</a></li>
            </ul>
            </nav>
    <main className="chat">
        <article className='chat__main'>
            <section className="chat__content">
                <h3 className='chat__header'>Wiadomości: </h3>
                <textarea className='chat__message_box'>sadas</textarea>
            </section>
        </article>
        <aside className="chat__aside">
            <h3>Utwórz czat grupowy:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <button type='button'>Utwórz czat</button>
        </aside>
    </main>
    <div className='chat__enter_message'>
        <input className='chat__input' type='text' placeholder='Wprowadź wiadomość...'></input>
        <button>Wyślij wiadomość</button>
    </div>
    <Footer/>
    </body>
    )
}

export default Chat
