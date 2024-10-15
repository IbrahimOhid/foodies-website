
// active navbar 
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
       
    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide

let navbar= document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show")
    })
})

// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = "+" + current;
            if (current === end) {
                clearInterval(timer);
            }
        }, step);
    }

    // All counters will now complete in 1500 milliseconds
    const duration = 1500;

    counter("count1", 0, 1200, duration);
    counter("count2", 10, 1210, duration);
    counter("count3", 0, 1120, duration);
    counter("count4", 0, 1010, duration);
});



// food details page
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.nav-item.nav-link');
    const tabContents = document.querySelectorAll('.tab-pane');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Remove active classes from all tabs and contents
        tabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active', 'show'));
  
        // Add active class to the clicked tab and corresponding content
        const target = this.getAttribute('href');
        this.classList.add('active');
        document.querySelector(target).classList.add('active', 'show');
      });
    });
  });
  

//   add cart system
document.addEventListener('DOMContentLoaded', function() {
    const decreaseButtons = document.querySelectorAll('.btn-decrease');
    const increaseButtons = document.querySelectorAll('.btn-increase');
    const removeButtons = document.querySelectorAll('.btn-remove');
  
    decreaseButtons.forEach(button => {
      button.addEventListener('click', function() {
        const input = this.nextElementSibling;
        let value = parseInt(input.value);
        if (value > 1) {
          input.value = value - 1;
          updateSubtotal(this.closest('.cart-item'));
        }
      });
    });
  
    increaseButtons.forEach(button => {
      button.addEventListener('click', function() {
        const input = this.previousElementSibling;
        let value = parseInt(input.value);
        input.value = value + 1;
        updateSubtotal(this.closest('.cart-item'));
      });
    });
  
    removeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const cartItem = this.closest('.cart-item');
        cartItem.parentNode.removeChild(cartItem);
        updateTotal();
      });
    });
  
    function updateSubtotal(cartItem) {
      const price = parseFloat(cartItem.querySelector('.cart-item-price').innerText.replace('$', ''));
      const quantity = parseInt(cartItem.querySelector('.cart-item-quantity input').value);
      const subtotal = price * quantity;
      cartItem.querySelector('.cart-item-subtotal').innerText = `$${subtotal.toFixed(2)}`;
      updateTotal();
    }
  
    function updateTotal() {
      let total = 0;
      document.querySelectorAll('.cart-item-subtotal').forEach(subtotal => {
        total += parseFloat(subtotal.innerText.replace('$', ''));
      });
      
    }
  });
  


