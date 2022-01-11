import React from 'react'
import Header from './Header'
import Footer from './Footer'
import logo from '../Google-logo.png';
import { Link } from 'react-router-dom';



const Index = () => {
    return (
        <body>
            <Header/>
            <main className="container">
                <article className="container__content">
                    <section>
                        <h3 className="container__header">Zaloguj się:</h3>
                        <form className="login" type='submit' method='POST'>
                            <label className="login__label" for="email">E-mail:<input className="login__input" type="text" name="email" placeholder="Wpisz swój adres e-mail..." required/></label>
                            <label className="login__label" for="password">Hasło:<input className="login__input login__input--password" name="password" type="password" placeholder="Wpisz swoje hasło..." required/></label>
                            <button className="login__button" action="/auth/local">Zaloguj się</button>
                            <div><hr/></div>
                            <button className="login__button" action="/auth/google"><img src={logo} alt="" className="logo"/>Zaloguj się przez Google</button>
                        </form>
                        <div className="login__text"><p>Nie masz konta? <strong><Link to="/register"> Zarejestruj się!</Link></strong></p></div>
                    </section>
                </article>
            </main>
            <Footer/>
        </body>
    )
}

export default Index
