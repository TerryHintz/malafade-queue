import React, { Component } from 'react';
import './App.css';
import Swal from 'sweetalert2';

let list = [];
let id = localStorage.getItem('id') || 0;
if (id){
    id = parseInt(id, 10);
}

const PASS = 'lakers23';

class App extends Component {
	state = {
		temp: true,
        list: JSON.parse(localStorage.getItem('queue')) || [],
	};

	componentDidMount() {

    }

    clearList = () => {
        (async () => {
            const { value: password } = await Swal.fire({
                title: 'Enter the password',
                input: 'password',
                inputAttributes: {
                    maxlength: 10,
                    autocapitalize: 'off',
                    autocorrect: 'off'
                }
            })

            if (password === PASS) {
                this.setState({list: []});
                let temp = [];
                localStorage.setItem('queue', JSON.stringify(temp));
            } else {
                Swal.fire({
                    title: "Incorrect Password"
                })
            }
        })();
    }

    removeCustomer = (id) => {
        (async () => {
          const { value: password } = await Swal.fire({
            title: 'Enter the password',
            input: 'password',
            inputAttributes: {
              maxlength: 10,
              autocapitalize: 'off',
              autocorrect: 'off'
            }
          })

          if (password === PASS) {
            id = parseInt(id, 10);
            list = this.state.list;
            list = list.filter(function(obj){
                return obj.id !== id;
              });

            this.setState({list: list});

            localStorage.setItem('queue', JSON.stringify(list));

          } else {
            Swal.fire({
              title: "Incorrect Password"
            })
          }
        })();
  }

	handleConfirm = () => {
    let customer_name = document.getElementById('input_name').value;
    let barber_name = document.getElementById('input_barber').value;

    if (customer_name.length === 0){
      Swal.fire({
        title: "Your name must not be empty!",
        timer: 5000
      })
      return;
    }

    document.getElementById('input_barber').value = '';
    document.getElementById('input_name').value = '';

    list = this.state.list;

    list.push({
        id: id,
        name: customer_name,
        barber: barber_name,
    });

    id++;

    localStorage.setItem('id', id);

    localStorage.setItem('queue', JSON.stringify(list));

    this.setState({list: list});

    Swal.fire({
      title: "Thank you, you have been added to the waitlist, please wait for us to call your name.",
      timer: 5000,
      showConfirmButton: false
    })
}

	render() {
        return (
            <div>
			    <div>
                    <link rel="stylesheet" type="text/css" href="css/main.css"></link>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
                </div>

                <div className='body'>
                    <img className='logo' src="http://www.malafadebarbershop.com/uploads/7/9/7/9/79799084/published/9475109_1.png?1542419052" alt="logo"></img>
                    <div className='grid-2'>
                        <div id='queue'>
                            <div className ='grid-queue'>
                                <div className={"sub-title-container"}>
                                    <span className='sub-title'>Customer</span>
                                </div>
                                <div className={"sub-title-container"}>
                                    <span className='sub-title'>Barber</span>
                                </div>
                                <span className={'clear-button'} onClick={() => this.clearList()}>Clear All</span>
                            </div>
                            {(this.state.list).map((arr) => {
                                return(
                                    <div className ='grid-queue'>
                                        {arr.barber ? <span className='queue-element barber-wait'>{arr.name}</span> : <span className='queue-element barber-none'>{arr.name}</span>}
                                        {arr.barber ? <span className='queue-element barber-wait'>{arr.barber}</span> : <span className='queue-element barber-none'>{arr.barber}</span>}
                                        <span id={arr.id} className={'x-button'} onClick={() => this.removeCustomer(arr.id)}>X</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className = 'customer-input'>
                            <div className='request'>Please enter your fullname</div>
                            <div className='input-field'><input type="text" id="input_name"></input></div>
                            <div>
                                <div className='request'>Waiting for a specific barber?</div>
                                <div className='request'>If yes, enter their name</div>
                                <div className='request'>If no, leave blank</div>
                                <div className='input-field'><input type="text" id="input_barber"></input></div>
                                <div className='button-confirm-div'>
                                    <button id='btn_submit' className='button-confirm-a' onClick={() => this.handleConfirm()}>
                                        <span className='rat'>Confirm</span>
                                    </button>
                                </div>
                                <div className='sub-title'>Services</div>
                                <div className='services'>Fades . 20</div>
                                <div className='services'>Adult Haircut . 17</div>
                                <div className='services'>Seniors . 14</div>
                                <div className='services'>Children . 14</div>
                                <div className='services'>Dry Shave . 12</div>
                                <div className='services'>Hot Shave . 22</div>
                                <div className='services'>Beard Trim . 6</div>
                                <div className='services'>Beard Line-Up . 6</div>
                                <div className='services'>Black Mask . 6</div>
                                <div className='services'>Beard Colour . 12</div>
                                <div className='services'>Hair Black Colour . 20</div>
                                <div className='services'>Hair Design . 10+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default App;
