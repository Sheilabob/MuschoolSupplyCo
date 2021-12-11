import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Stationery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null
        };
    }

    onItemSelect(item) {
        this.setState({selectedItem: item});
    }

    renderSelectedItem(item) {
        if (item) {
            return (
                <Card>
                    <CardImg top src={item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        {item.description}
                                    </div>
                                    <div className="col">
                                        Price: ${item.price}
                                        <br />
                                        Quantity: {item.quantity}
                                    </div>
                                </div>
                            </div>
                        </CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const directory = this.props.statItems.map(item => {
            return (
                <div className='col-md-5 col-lg-3 m-1' key={item.id}>
                    <Card onClick={() => this.onItemSelect(item)}>
                        <CardImg width="100%" src={item.image} alt={item.name} />
                        <CardImgOverlay>
                            <CardTitle>{item.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })

        return(
            <div className='container' >
                <div className='row'>
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedItem(this.state.selectedItem)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Stationery;