import React, { Component } from 'react';
import './App.css';
import Swal from 'sweetalert2';

class App extends Component {
	state = {
		todos: []
	};

	componentDidMount() {
    
  }

  removeCustomer = (event) => {

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
      
      if (password === "lakers23") {
        let queue = document.getElementById('queue');
        queue.removeChild(event.target.previousElementSibling);
        queue.removeChild(event.target.previousElementSibling);
        queue.removeChild(event.target);
      } else {
        Swal.fire({
          title: "Incorrect Password"
        })
      }
    })();
  }

	handleconfirm = () => {
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

    var customer = document.createElement('span');
    var barber = document.createElement('span');
    var x_button = document.createElement('span');

    if (barber_name === ''){
        customer.classList.add('barber-wait');
        barber.classList.add('barber-wait');
        customer.classList.add('queue-element');
        barber.classList.add('queue-element');
    } else {
        customer.classList.add('barber-none');
        barber.classList.add('barber-none');
        customer.classList.add('queue-element');
        barber.classList.add('queue-element');
    }

    customer.innerHTML += customer_name;
    barber.innerHTML += barber_name;
    x_button.innerHTML += 'X';

    x_button.classList.add('x-button');
    x_button.addEventListener('click', this.removeCustomer);

    let queue = document.getElementById('queue');
    queue.appendChild(customer);
    queue.appendChild(barber);
    queue.appendChild(x_button);

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
    <div id='queue' className ='grid-queue'>
        <span className='sub-title'>Customer</span>
        <span className='sub-title'>Barber</span>
        <span></span>
    </div>
    <div className = 'customer-input'>
        
                <div className='request'>Please enter your fullname</div>
                <div className='input-field'><input type="text" id="input_name"></input></div>
        
        <div>
            <div className='request'>Waiting for a specific barber?</div>
            <div className='request'>If yes, enter their name</div>
            <div className='request'>If no, leave blank</div>
            <div className='input-field'><input type="text" id="input_barber"></input></div>

            <div className='button-confirm-div' onClick={() => this.handleconfirm()}>
                <button id='btn_submit' className='button-confirm-a'>
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
            <div className='services'>hair Design . 10+</div>
        </div>
    </div>
</div>
</div>
</div>
		);
	}
}

export default App;
