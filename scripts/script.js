document.querySelectorAll('.box-item').forEach(packageElement => {
    const priceElement = packageElement.querySelector('.price')
    const basePrice = parseFloat(priceElement.getAttribute('data-base-price'));
    let count = 1;

    const amountElement = packageElement.querySelector('#amount');
    const increaseButton = packageElement.querySelector('#increase');
    const decreaseButton = packageElement.querySelector('#decrease');
    const roomCountElement = packageElement.querySelector('#room');
    /* Sign Up Section */
    const signUpButton = packageElement.querySelector('#sign-up');
    const thanksElement = packageElement.querySelector('#thanks');
    const roomMsgElement = packageElement.querySelector('#room-msg');

    function updatePrice() {
        amountElement.textContent = `$ ${basePrice * count}`;
        roomCount = `${count} Room${count > 1 ? 's' : ''}`;
        roomCountElement.textContent = roomCount;
        roomMsgElement.textContent = roomCount;
    }

    /* Increase and Decrease Functionality */
    increaseButton.addEventListener('click', () => {        
        count++;
        updatePrice();
    });

    decreaseButton.addEventListener('click', () => {
        if (count > 1) {
            count--;
            updatePrice();
        }
    });

    updatePrice();  // Initialize the price and room count display

    /* Sign Up Functionality */
    signUpButton.addEventListener('click', () => {        
        thanksElement.classList.remove('hide');
        thanksElement.classList.add('show');
        setTimeout(() => {
            thanksElement.classList.add('hide');
            thanksElement.classList.remove('show');
        }, 4000);
    });

    thanksElement.addEventListener('click', () => {       
        thanksElement.classList.add('hide');
        thanksElement.classList.remove('show');
    });
});