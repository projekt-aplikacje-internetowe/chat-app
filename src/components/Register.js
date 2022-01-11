import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <body>
            <Header/>
            <main className="container">
                <article className="container__content">
                    <section>
                        <h3 className="container__header">Zarejestruj się:</h3>
                        <form className="register">
                            <label className="register__label" for="firstname">Imię:<input className="register__input" type="text" name="firstname" placeholder="Wpisz swoje imię..." required/></label>
                            <label className="register__label" for="lastname">Nazwisko:<input className="register__input" type="text" name="lastname" placeholder="Wpisz swoje nazwisko..." required/></label>
                            <label className="register__label" for="email">E-mail:<input className="register__input" type="text" name="email" placeholder="Wpisz swój adres e-mail..." required/></label>
                            <label className="register__label" for="password">Hasło:<input className="register__input register__input--password" name="password" type="password" placeholder="Wpisz swoje hasło..." required/></label>
                            <label className="register__label" for="verifypassword">Potwierdź hasło:<input className="register__input register__input--password" name="verifypassword" type="password" placeholder="Potwierdź hasło..." required/></label>
                            <button className="register__button" type="submit" action="/auth/register" method="POST">Zarejestruj się</button>
                        </form>
                        <div className="register__text"><p>Masz już konto? <strong><Link to="/"> Zaloguj się!</Link></strong></p></div>
                    </section>
                </article>
            </main>
            <Footer/>
        </body>
    )
}

export default Register
