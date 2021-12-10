import React, { Component } from 'react';

class Stationery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statItems: [
                {
                    id: 0,
                    name: 'Musical Erasers',
                    image: 'assets/images/erasernotes.jpg',
                    price: 3.95,
                    quantity: 144,
                    description: 'Fun Mini Note Erasers are approxinately 1 inch long and come in a package of 144.  Assorted colors.'
                },
                {
                    id:1,
                    name: 'Glitter Notepads',
                    image: 'assets/images/notepads.jpg',
                    price: 15,
                    quantity: 24,
                    description: 'Includes 108 white vinyl glitter stickers to decorate pads. 3" x 5". Package of 24.'
                },
                {
                    id: 2,
                    name: 'Keyboard Sticky Notes',
                    image: 'assets/images/pianostickies.jpg',
                    price: 8.95,
                    quantity: 1,
                    description: 'Cube of stacked, blank sticky notes to help any musician get organized! 500 sheets, 3.25 inches.'
                },
                {
                    id: 3,
                    name: "Pencil for Singers",
                    image: 'assets/images/singpencil.jpg',
                    price: 39,
                    quantity: 144,
                    description: 'Pencils for singers! White pencils with "I love to sing" imprinted. Box of 144 pencils.'
                },
                {
                    id: 4,
                    name: 'Treble Cleff Bookmarks',
                    image: 'assets/images/treblebookmarks.jpg',
                    price: 16.95,
                    quantity: 25,
                    description: 'Durable plastic bookmark with a gold G-Clef design at the top. Package of 25, assorted bright colors, 6 inches in length.'
                }
            ]
        };
    }

    render() {
        const directory = this.state.statItems.map(item => {
            return (
                <div className='col' key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
            )
        })

        return(
            <div className='container' >
                <div className='row'>
                    {directory}
                </div>
            </div>
        );
    }
}

export default Stationery;