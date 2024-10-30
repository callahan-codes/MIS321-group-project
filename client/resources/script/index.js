// Handle Document OnLoad
function handleOnLoad()
{
    // loader
    loaderDisplay()
}


// LOGIC | HANDLER FUNCTIONS



// DOM MANIPULATION FUNCTIONS
// Loader Screen Function
/*
    this function will hide the loading screen
    after the document has loaded.
*/
function loaderDisplay()
{
    // get loader dom element
    const loader = document.getElementById('loader')

    // once loaded, fade out after 1.5 seconds
    setTimeout(() => {
        loader.classList.add('fade-out')
    }, 1500)
}

// App Screen Function
/*
    this function will display the admin or customer screen
    when the navigation button(s) are clicked.
*/
function appScreenDisplay(mode)
{
    // get app screen and change display
    const screen = document.getElementById('app-screen')

    // switch mode
    switch(mode)
    {
        // if mode == admin, build and show screen
        case 'admin':
            buildAdminLoginForm()
            screen.style.display = 'block'
            break
        // if mode == order, build and show screen
        case 'order':
            buildCustomerOrderForm()
            screen.style.display = 'block'
            break
        // defualt, hide screen
        default:
            screen.style.display = 'none'
            break
    }
}

// App Screen Build Function | Admin Login
/*
    this function builds the admin login form
*/
function buildAdminLoginForm()
{
    // get app dom
    const app = document.getElementById('app')

    // init html content
    let html = `<div class="container">
                    <h4>Admin login</h4>
                    <p>Todo: make a form. if someone makes this, make sure to include the datbase file in the corresponding folder</p>
                </div>
    `

    app.innerHTML = html
}

// App Screen Build Function | Customer Order
/*
    this function builds the customer order form
*/
function buildCustomerOrderForm()
{
    // get app dom
    const app = document.getElementById('app')

    // init html content
    let html = `<div class="container">
                    <h4>Order a reservation</h4>
                    <p>Todo: make a form. if someone makes this, make sure to include the datbase file in the corresponding folder</p>
                </div>
    `

    app.innerHTML = html
}