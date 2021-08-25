import React, { useState, useEffect } from "react";
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
 import { Datepicker } from '@mobiscroll/react';

// setOptions({
//     locale: localeFr,
//     theme: 'ios',
//     themeVariant: 'light'
// });

function App() {
    const [users, setUsers] = useState([]);
    const [bookings, setBookings] = useState([]);


    // const [multiple, setMultiple] = React.useState([
    //     '2021-08-11T00:00',
    //     '2021-08-16T00:00',
    //     '2021-08-17T00:00'
    // ]);
    const min = '2021-08-25T00:00';
    const max = '2022-02-25T00:00';
    // const [singleLabels, setSingleLabels] = React.useState([]);
    // const [singleInvalid, setSingleInvalid] = React.useState([]);
    // const [datetimeLabels, setDatetimeLabels] = React.useState([]);
    // const [datetimeInvalid, setDatetimeInvalid] = React.useState([]);

    // const [multipleLabels, setMultipleLabels] = React.useState([]);
    // const [multipleInvalid, setMultipleInvalid] = React.useState([]);
    
    // const onPageLoadingSingle = React.useCallback((event, inst) => {
    //     getPrices(event.firstDay, (bookings) => {
    //         setSingleLabels(bookings.labels);
    //         setSingleInvalid(bookings.invalid);
        	
    //     });
    // }, []);
    
    // const onPageLoadingDatetime = React.useCallback((event, inst) => {
    //     getDatetimes(event.firstDay, (bookings) => {
    //         setDatetimeLabels(bookings.labels);
    //         setDatetimeInvalid(bookings.invalid);
    //     });
    // }, []);
    
    // const onPageLoadingMultiple = React.useCallback((event, inst) => {
    //     getBookings(event.firstDay, (bookings) => {
    //         setMultipleLabels(bookings.labels);
    //         setMultipleInvalid(bookings.invalid);
    //     });
    // }, []);

    // const getPrices = (d, callback) => {
    //     let invalid = [];
    //     let labels = [];

    //     getJson('https://trial.mobiscroll.com/getprices/?year=' + d.getFullYear() + '&month=' + d.getMonth(), (bookings) => {
    //         for (let i = 0; i < bookings.length; ++i) {
    //             const booking = bookings[i];
    //             const d = new Date(booking.d);

    //             if (booking.price > 0) {
    //                 labels.push({
    //                     start: d,
    //                     // title: '$' + booking.price,
    //                     textColor: '#e1528f'
    //                 });
    //             } else {
    //                 invalid.push(d);
    //             }
    //         }
    //         callback({ labels: labels, invalid: invalid });
    //     }, 'jsonp');
    // }
    
    // const getDatetimes = (d, callback) => {
    //     let invalid = [];
    //     let labels = [];

    //     getJson('https://trial.mobiscroll.com/getbookingtime/?year=' + d.getFullYear() + '&month=' + d.getMonth(), (bookings) => {
    //         for (let i = 0; i < bookings.length; ++i) {
    //             const booking = bookings[i];
    //             const bDate = new Date(booking.d);

    //             if (booking.nr > 0) {
    //                 labels.push({
    //                     start: bDate,
    //                     // title: booking.nr + ' SPOTS',
    //                     textColor: '#e1528f'
    //                 });
    //                 invalid = [...invalid, ...booking.invalid];
    //             } else {
    //                 invalid.push(d);
    //             }
    //         }
    //         callback({ labels: labels, invalid: invalid });
    //     }, 'jsonp');
    // }
    
    // const getBookings = (d, callback) => {
    //     let invalid = [];
    //     let labels = [];

    //     getJson('https://trial.mobiscroll.com/getbookings/?year=' + d.getFullYear() + '&month=' + d.getMonth(), (bookings) => {
    //         for (let i = 0; i < bookings.length; ++i) {
    //             const booking = bookings[i];
    //             const d = new Date(booking.d);

    //             if (booking.nr > 0) {
    //                 labels.push({
    //                     start: d,
    //                     title: booking.nr + ' SPOTS',
    //                     textColor: '#e1528f'
    //                 });
    //             } else {
    //                 invalid.push(d);
    //             }
    //         }
    //         callback({ labels: labels, invalid: invalid });
    //     }, 'jsonp');
    // }

    useEffect(() => {
        fetch('http://localhosthost:4242/users',
            {
                method: "GET",
                headers: {
                    'Accept': 'Application/json'
                }
            })
            .then(res => res.json())
            .then(response => setUsers(response)
            )
    }, [])

    useEffect(() => {
        fetch('http://localhosthost:4242/booking',
            {
                method: "GET",
                headers: {
                    'Accept': 'Application/json'
                }
            })
            .then(res => res.json())
            .then(response => setBookings(response)
            )

    }, [])
console.log(users);
    return (
        <div className="bookings" id="booking">
            <h1>Reservations:</h1>
            <div>
            {users.map(user =><p>{user.name} a reservé </p>)}
            {bookings.map(booking =><p>la solution {booking.solutions} pour cet date:{booking.date}</p>)}
            </div>
            <Datepicker
    controls={['calendar']}
    display="inline"
    touchUi={true}
 />
        </div>
    );
}

export default App;