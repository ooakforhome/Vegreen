import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

class LunchPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
            <img alt="MENU" src="../assets/img/Dinner_Menu.jpg" onClick={() => this.openModal()} />
                <input type="button" value="Open" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="40%" height="100%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h1>MENU</h1>
                        <img alt="MENU" src="../assets/img/Menu_01.jpg" />
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}

export default LunchPopup;
