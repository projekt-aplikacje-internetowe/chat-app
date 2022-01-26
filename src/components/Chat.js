import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';

const Chat = () => {

    const [rooms, setRooms] = useState([]);

    const [hidden, setHidden] = useState(true);

    function getRooms(){
        //fetch("http://localhost:3000/auth/userCredentials")
        //    .then((res) => res.json())
        //    .then((rooms) => setRooms(rooms.message));
        setRooms( room => [...room, (`${room.id}, ${room.nazwa_pokoju}`)])
        console.log(rooms);
    }


    function showRooms(){
        return(
            rooms && rooms.map(room =>
                <tr key={room.id}>
                    <td>ID:  {room.id}</td>
                    <td> Nazwa pokoju: {room.nazwa_pokoju}</td>
                </tr>
            )
        )
    }
        

    function refreshRooms(){
        setHidden(false);
        setHidden(true);
    }

    return (
        <div className='center__div'>
            <body>
                <Header/>
                    <nav className="header__top-menu">
                        <ul className="header__top-menu--list">
                            <li><Link to="/chat"> Czat - strona główna</Link></li>
                            <li><a href="/">Wyloguj się</a></li>
                        </ul>
                    </nav>
                <main className="chat">
                    <article className='chat__main'>
                        <section className="chat__content">
                            <h3 className='chat__header'>Wiadomości: </h3>
                            <textarea className='chat__message_box' readOnly ></textarea>
                        </section>
                    </article>
                    <aside className="chat__aside">
                        <h3 className='aside__header'>Utwórz czat grupowy:</h3>
                        <div className='aside__buttons'>
                            <button className='aside__button' type='button' action='' onClick={refreshRooms}>Utwórz czat</button>
                            <button className='aside__button' type='button' onClick={getRooms}>Odśwież listę</button>
                            <button className='aside__button aside__button--last' type='button' action=''>Dołącz do pokoju</button>
                        </div>
                        <div className='chat__rooms_list'>
                            {hidden ? showRooms() : ""}
                        </div>
                    </aside>
                </main>
                <div className='chat__center_enter_message'>
                    <div className='chat__enter_message'>
                        <label for="message"><input className='chat__input' name='message' id='message' type='text' placeholder='Wprowadź wiadomość...'></input></label>
                        <button className='aside__button' type='button' action=''>Wyślij wiadomość</button>
                    </div>
                </div>
                <Footer/>
            </body>
        </div>
    )
}

export default Chat
