 
import React, { useState, useEffect } from "react";
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
// import { Datepicker } from '@mobiscroll/react';
import DatePicker from 'react-date-picker';

import apiCall from "../apiCall";

import './form.css'

const Formulaire = () => {
    const [users, setUsers] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [name, setName] = useState("");
    const [prenom, setPrenom] = useState("");
    const [company, setCompany] = useState("");
    const [date, setDate] =  useState(new Date());
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [commentaire, setCommentaire] = useState("");

    const isEmail = () => {
        let mail = document.getElementById('not-mail')
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.match(regex)) {
            mail.style.display = 'none'
            return true;
        } else {
            mail.style.display = "block"
            mail.style.animation = 'dongle 1s'
            setTimeout(() => {
                mail.style.animation = 'none'
            }, 1000)
            return false;
        }
    }

    const isTel = ()=> {
    let tel2 = document.getElementById('not-tel')
     // eslint-disable-next-line
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

    if (tel.match(regex)) {
        tel2.style.display = 'none'
        return true;
    } else {
        tel2.style.display = "block"
        tel2.style.animation = 'dongle 1s'
        setTimeout(() => {
            tel2.style.animation = 'none'
        }, 1000)
        return false;
    }
    }

    const failMessage = (message) => {
        let formMess = document.querySelector('.form-commentaire')

        formMess.innerHTML = message
        formMess.style.opacity = "1"
        formMess.style.background = '#ff4d4d'

        document.getElementById('name').classList.add('error')
        document.getElementById('prenom').classList.add('error')
        document.getElementById('company').classList.add('error')
        document.getElementById('tel').classList.add('error')
        document.getElementById('email').classList.add('error')
       // document.getElementById('commentaire').classList.add('error')
    }
    
    const successMessage = () => {
        let formMess = document.querySelector('.form-commentaire')
        
        formMess.innerHTML = 'Demande envoy?? ! Nous vous recontacterons d??s que possible';
        formMess.style.background = 'green'
        formMess.style.opacity = '1'
        document.getElementById('name').classList.remove('error')
        document.getElementById('prenom').classList.remove('error')
        document.getElementById('company').classList.remove('error')
        document.getElementById('tel').classList.remove('error')
        document.getElementById('email').classList.remove('error')
        //document.getElementById('commentaire').classList.remove('error')
        
        setTimeout(() => {
            formMess.style.opacity = '0'
        }, 5000)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const demandeRDV = () => {
            const body = {
                name: name,
                prenom: prenom,
                email: email,
                date: date,
                tel: tel,
                company: company
            }
            apiCall('/createUser', 'POST', body, null, (response) => {
                setTimeout(() => {
                    successMessage()
                }, 4000)
            })  
            // apiCall('/createBooking', 'POST', body, null, (response) => {
            //     setTimeout(() => {
            //         successMessage()
            //     }, 4000)
            // })
            // useEffect(() => {
            //     fetch('https://localhosthost:4242/createUser',
            //         {
            //             method: "POST",
            //             headers: {
            //                 'Accept': 'Application/json'
            //             },
            //             body: body
            //         })
            //         .then(res => res.json())
            //         .then(response => setUsers(response))
        
            // }, [])
            
        
        }


        if (name && prenom && isEmail() && isTel() && company) {
            demandeRDV() 
        } else {
            failMessage('Merci de remplir les champs requis *')
        }
    };

    // useEffect(() => {
    //     fetch('https://localhosthost:4242/users',
    //         {
    //             method: "GET",
    //             headers: {
    //                 'Accept': 'Application/json'
    //             }
    //         })
    //         .then(res => res.json())
    //         .then(response => setUsers(response))
    // }, [])

    // useEffect(() => {
    //     fetch('https://localhosthost:4242/booking',
    //         {
    //             method: "GET",
    //             headers: {
    //                 'Accept': 'Application/json'
    //             }
    //         })
    //         .then(res => res.json())
    //         .then(response => setBookings(response))

    // }, [])
    // useEffect(() => {
    //     fetch('https://localhosthost:4242/createUser',
    //         {
    //             method: "POST",
    //             headers: {
    //                 'Accept': 'Application/json'
    //             },
                
    //         })
    //         .then(res => res.json())
    //         .then(response => setUsers(response))

    // }, [])

    // useEffect(() => {
    //     fetch('https://localhosthost:4242/createBooking',
    //         {
    //             method: "POST",
    //             headers: {
    //                 'Accept': 'Application/json'
    //             }
    //         })
    //         .then(res => res.json())
    //         .then(response => setBookings(response))

    // }, [])
    return (
        <>
            
            <form className="contact-form" id="contact" style={{marginBottom: '25px'}}>
                <br/><h4><strong>Coordonn??es</strong></h4>
                <div className="form-content">
                    <input
                        type="text"
                        id="company"
                        name="company"
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Nom de la soci??t??*"
                        value={company}
                    />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nom *"
                        value={name}
                        autoComplete="off"
                    />

                    <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        onChange={(e) => setPrenom(e.target.value)}
                        placeholder="Pr??nom *"
                        value={prenom}
                        autoComplete="off"
                    />
                    <div className="email-content">
                    <label id="not-tel">Num??ro non valide</label>
                    <input
                        type="text"
                        id="tel"
                        name="tel"
                        onChange={(e) => setTel(e.target.value)}
                        placeholder="T??l??phone *"
                        value={tel}
                    />
                </div>
                    <div className="email-content">
                        <label id="not-mail">Email non valide</label>
                        <input
                            type="mail"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email *"
                            value={email}
                            autoComplete="off"
                        />
                    </div>
                    
                    <h4><strong>Solution souhait??e</strong></h4>
                   
                    <label for="solutions">Choose a solution: *</label>
                    <select id="solutions">
                    <option value="4inShield" selected>4inShield</option>
                    <option value="4inRadar">4inRadar</option>
                    <option value="4inEnrich">4inEnrich</option>
                    <option value="4inGen" >4inGen</option>
                    </select><br/>
                    
                    <DatePicker
                    id="date"
                    name="date"
                        onChange={setDate}
                        value={date}
                     />
                    {/* <input
                        type="text"
                        id="date"
                        name="date"
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Date de visite souhait??e "
                        value={date}
                        autoComplete="off"
                    /> */}
                    <textarea
                        id="commentaire"
                        name="commentaire"
                        onChange={(e) => setCommentaire(e.target.value)}
                        placeholder="Infos compl??mentaires "
                        value={commentaire}
                    />
                </div>

                <input
                    className="button"
                    type="button"
                    value="ENVOYER"
                    onClick={handleSubmit}
                    
                />
                <div className="form-commentaire"></div>

            </form>
        </>
    );
};

export default Formulaire;
