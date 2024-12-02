// init main api url
let url = 'http://localhost:5049/api/'

// init empty admin array
let adminList = []
let customerList = []
let orderList = []
let paymentList = []

// Handle Document OnLoad
async function handleOnLoad()
{
    // get all admins
    await getAllAdmins()
    // get all customers
    await getAllCustomers()
    // get all orders
    await getAllOrders();
    // get all payments
    await getAllPayments();

    // loader
    loaderDisplay()
}


// LOGIC | HANDLER, API FUNCTIONS
// Get all admins api call
/*
    this function gets the admin api URL,
    fetches for a response, and assigns the
    response data to the main adminList array.

    Written by Bryce Callahan 11/15/2024
*/
async function getAllAdmins()
{
    // get admin url
    const adminURL = url + 'admin';

    // log
    console.log(`Fetching Admin API from ${adminURL}...`)

    // try 
    try
    {
        // if url isn't null
        if(url != null)
        {
            // fetch url
            let response = await fetch(adminURL)

            // error handle | https://dev.to/dionarodrigues/fetch-api-do-you-really-know-how-to-handle-errors-2gj0
            if(response.ok)
            {
                // assign recipe list to json
                let data = await response.json()
                adminList = data

                // log
                console.log('API fetched: ' + adminList.length + ' admins pulled from the database.')

            } else 
            {
                // log
                console.log("API FETCH ERROR: " + response.status)
            }
        }

    } catch (error) // catch error
    {
        // log error
        alert("Promise failed\n\n" + error + "\n\nPlease try again by reloading the page or checking your server.")
    }
}

// Get all customers api call
/*
    this function gets the customer api URL,
    fetches for a response, and assigns the
    response data to the main customerList array.

    Written by Bryce Callahan 11/15/2024
*/
async function getAllCustomers()
{
    // get admin url
    const customerURL = url + 'customer';

    // log
    console.log(`Fetching Customer API from ${customerURL}...`)

    // try 
    try
    {
        // if url isn't null
        if(url != null)
        {
            // fetch url
            let response = await fetch(customerURL)

            // error handle | https://dev.to/dionarodrigues/fetch-api-do-you-really-know-how-to-handle-errors-2gj0
            if(response.ok)
            {
                // assign recipe list to json
                let data = await response.json()
                customerList = data

                // log
                console.log('API fetched: ' + customerList.length + ' customers pulled from the database.')

            } else 
            {
                // log
                console.log("API FETCH ERROR: " + response.status)
            }
        }

    } catch (error) // catch error
    {
        // log error
        alert("Promise failed\n\n" + error + "\n\nPlease try again by reloading the page or checking your server.")
    }
}

// Get all orders api call
/*
    this function gets the order api URL,
    fetches for a response, and assigns the
    response data to the main orderList array.

    Written by Bryce Callahan 11/15/2024
*/
async function getAllOrders()
{
    // get admin url
    const orderURL = url + 'order';

    // log
    console.log(`Fetching Order API from ${orderURL}...`)

    // try 
    try
    {
        // if url isn't null
        if(url != null)
        {
            // fetch url
            let response = await fetch(orderURL)

            // error handle | https://dev.to/dionarodrigues/fetch-api-do-you-really-know-how-to-handle-errors-2gj0
            if(response.ok)
            {
                // assign recipe list to json
                let data = await response.json()
                orderList = data

                // log
                console.log('API fetched: ' + orderList.length + ' orders pulled from the database.')

            } else 
            {
                // log
                console.log("API FETCH ERROR: " + response.status)
            }
        }

    } catch (error) // catch error
    {
        // log error
        alert("Promise failed\n\n" + error + "\n\nPlease try again by reloading the page or checking your server.")
    }

    orderList.forEach(element => {
        console.log(element)
    });
}

// Get all payments api call
/*
    this function gets the payment api URL,
    fetches for a response, and assigns the
    response data to the main orderList array.

    Written by Bryce Callahan 11/21/2024
*/
async function getAllPayments()
{
    // get admin url
    const orderURL = url + 'payment';

    // log
    console.log(`Fetching Order API from ${orderURL}...`)

    // try 
    try
    {
        // if url isn't null
        if(url != null)
        {
            // fetch url
            let response = await fetch(orderURL)

            // error handle | https://dev.to/dionarodrigues/fetch-api-do-you-really-know-how-to-handle-errors-2gj0
            if(response.ok)
            {
                // assign recipe list to json
                let data = await response.json()
                paymentList = data

                // log
                console.log('API fetched: ' + paymentList.length + ' orders pulled from the database.')

            } else 
            {
                // log
                console.log("API FETCH ERROR: " + response.status)
            }
        }

    } catch (error) // catch error
    {
        // log error
        alert("Promise failed\n\n" + error + "\n\nPlease try again by reloading the page or checking your server.")
    }
}

// Admin Creation
/*
    this function creates a new admin locally.
    I grabbed the form input values, checked if they
    are "valid", created a new instance of newAdmin to
    push to the main adminList array. After a successful
    submission the form fields clear.

    Written by Bryce Callahan 11/5/2024
        Updated by BC 11/15/2024
*/
async function createNewAdmin()
{
    // init email, password, password confirm, and alert DOM elements and values
    const email = document.getElementById('adminEmail').value
    const password = document.getElementById('adminPassword').value
    const passwordConfirm = document.getElementById('adminPasswordConfirm').value
    const alert = document.getElementById('alert')
    alert.style.backgroundColor = 'var(--alert)'

    // if invalid entries, display alert and alert type
    // email
    if(email === null || email === undefined || email === '' || email.trim().length == 0)
    {
        alert.style.display = 'block'
        alert.innerHTML = 'You must fill out the <u>Email</u> field.'
        console.log('New admin submission failed due to invalid email.')
    }
    // password
    else if(password === null || password === undefined || password === '' || password.trim().length == 0)
    {
        alert.style.display = 'block'
        alert.innerHTML = 'You must fill out the <u>Password</u> field.'
        console.log('New admin submission failed due to invalid password.')
    }
    // password confirm
    else if(passwordConfirm === null || passwordConfirm === undefined || passwordConfirm === '' || passwordConfirm.trim().length == 0)
    {
        alert.style.display = 'block'
        alert.innerHTML = 'You must fill out the <u>Confirm Password</u> field.'
        console.log('New admin submission failed due to invalid password confirmation.')
    }
    // password match
    else if(password != passwordConfirm)
    {
        alert.style.display = 'block'
        alert.innerHTML = 'Passwords do not match.'
        console.log('New admin submission failed due to mismatched passwords.')
    }
    else 
    {
        // show alert
        alert.style.display = 'block'
        alert.style.backgroundColor = 'var(--alert-pass)'
        alert.innerHTML = `The admin account for ${email} has been made.<br><br><div class="profile-btn">View Admin Dashboard</div>`

        // get admin url
        const adminURL = url + 'admin';

        // create new admin
        let newAdmin = {
            id: adminList.length + 1,
            email: email,
            password: password
        }

        // push to admin list
        adminList.push(newAdmin)

        try 
        {
            // post | save to db through controller
            await fetch(adminURL, {
                method: "POST",
                body: JSON.stringify(newAdmin),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })

            // build admin dashboard call here
            
        } catch (error) 
        {
            // log
            console.log(error)
        }

       // clear admin create form
       clearAllFormFields('admin-create-form')
    }

}

// Create New Order Function | Customer Order
/*
    Written by Connor Gilstrap 11/7/2024
        Updated by Bryce Callahan 11/15/2024
        Updated by Bryce Callahan 11/19/2024
*/
async function createNewOrder()
{
    // get dom values
    const fname = document.getElementById('customerFName').value
    const lname = document.getElementById('customerLName').value
    const email = document.getElementById('customerEmail').value
    const packageType = document.getElementById('package').value
    const serviceAddress = document.getElementById('serviceAddress').value
    const serviceDuration = document.getElementById('serviceDuration').value
    const serviceDate = document.getElementById('serviceDate').value
    const serviceTime = document.getElementById('serviceTime').value
    const alert = document.getElementById('alert')
    alert.style.backgroundColor = 'var(--alert)'

    // check email
    if (email === null || email === undefined || email === '' || email.trim().length === 0)
    {
        alert.style.display = 'block'
        alert.innerHTML = 'You must fill out the <u>Email</u> field.'
        console.log('New order submission failed due to missing email.')
    }
    // check package
    else if (packageType === null || packageType === undefined || packageType === '')
    {
        alert.style.display = 'block'
        alert.innerHTML = 'You must select a <u>Package</u>.'
        console.log('New order submission failed due to missing package.')
    }
    // check address
    else if (serviceAddress === null || serviceAddress === undefined || serviceAddress === '')
    {
        alert.style.display = 'block'
        alert.innerHTML = 'You must fill out the <u>Service Address</u> field.'
        console.log('New order submission failed due to missing service address.')
    }
    // check date
    else if (serviceDate === null || serviceDate === undefined || serviceDate === '')
    {
        alert.style.display = 'block'
        alert.innerHTML = 'You must select a <u>Service Date</u>.'
        console.log('New order submission failed due to missing service date.')
    }
    // check time
    else if (serviceTime === null || serviceTime === undefined || serviceTime === '')
    {
        alert.style.display = 'block'
        alert.innerHTML = 'You must select a <u>Service Time</u>.'
        console.log('New order submission failed due to missing service time.')
    }
    // complete order
    else 
    {
        // display success alert
        alert.style.display = 'block'
        alert.style.backgroundColor = 'var(--alert-pass)'
        alert.innerHTML = `Your order for ${packageType} on ${serviceDate} at ${serviceTime} has been created.`

        // get today's date | https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        // get today's time | https://stackoverflow.com/questions/10599148/how-do-i-get-the-current-time-only-in-javascript
        let time = new Date().toLocaleTimeString();
    
        // format date
        today = yyyy + '-' + mm + '-' + dd;
        let date = today.toString()

        // create new customer object and push to db
        // get customer url
        const customerURL = url + 'customer'

        // create new customer
        let newCustomer = {
            id: customerList.length + 1,
            fname: fname,
            lname: lname,
            email: email
        }

        // create new order object and push to db
        // get order url
        const orderURL = url + 'order'

        // create new order object
        let newOrder = {
            id: orderList.length + 1,
            date: date,
            time: time,
            cancelled: false,
            serviceDate: serviceDate,
            serviceTime: serviceTime,
            serviceAddress: serviceAddress,
            duration: parseInt(serviceDuration),
            package: parseInt(packageType),
            orderedBy: newCustomer.id,      
            servicedBy: 1,
            paymentId: 1 // will replace this after we get payment
        }

        // add to main customer list
        customerList.push(newCustomer)
        try 
        {
            // post | save to db through controller
            await fetch(customerURL, {
                method: "POST",
                body: JSON.stringify(newCustomer),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            
        } catch (error) 
        {
            // log
            console.log(error)
        }

        // add order to order list
        orderList.push(newOrder)
        try 
        {
            // post | save to db through controller
            await fetch(orderURL, {
                method: "POST",
                body: JSON.stringify(newOrder),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            
        } catch (error) 
        {
            // log
            console.log(error)
        }

        // clear order form fields
        clearAllFormFields('customerOrderForm')
    }
}

// DOM MANIPULATION FUNCTIONS
// Loader Screen Function
/*
    this function will hide the loading screen
    after the document has loaded.

    Written by Bryce Callahan 10/30/2024
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

    Written by Bryce Callahan 10/30/2024
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
            buildCreateAdminForm()
            screen.style.display = 'block'
            break
        // if mode == order, build and show screen
        case 'order':
            buildCustomerOrderForm()
            screen.style.display = 'block'
            break
        // if mode == package, build and show screen
        case 'packages':
            buildPackageDetailsPage();
            screen.style.display = 'block';
            break;
        // defualt, hide screen
        default:
            screen.style.display = 'none'
            break
    }
}
// Created by Connor Gilstrap 12/1/2024
function buildPackageDetailsPage() {
    // Get app DOM
    const app = document.getElementById('app');

    // Initialize HTML content
    let html = `<div class="container">
                    <h4 class="text-center">Packages</h4>
                    <p class="text-center">Explore our packages tailored to meet your event needs.</p>
                    
                    <div class="grid col-3">
                        <div class="infobox2">
                            <h5>Package 1</h5>
                            <p>Package 1 is an excellent choice for small to medium-sized gatherings, providing all the essential raw materials you need to make your event a success. This package includes quality hot dogs, hamburger meat, and other essentials to create a memorable experience for your guests. Designed to feed approximately 50 people, Package 1 is perfect for casual events such as family reunions, community picnics, or birthday celebrations. At just $100 per hour, it offers a cost-effective solution for hosting a fun and delicious event without the hassle of sourcing ingredients yourself.</p>
                        </div>
                        
                        <div class="infobox2">
                            <h5>Package 2</h5>
                            <p>Package 2 takes the stress out of hosting by providing not only the raw materials but also the convenience of professional cooking services. This package includes high-quality hot dogs, hamburger meat, fresh buns, and all the necessary utensils to ensure your event runs smoothly. Designed to feed approximately 50 people, this package is ideal for larger gatherings such as corporate events, community celebrations, or milestone parties. At $200 per hour, our team will expertly prepare and cook the food for you, allowing you to relax and enjoy the occasion with your guests while we handle the culinary details..</p>
                        </div>
                        
                        <div class="infobox2">
                            <h5>Package 3</h5>
                            <p>Package 3 offers a premium catering experience, providing not only all the essentials from previous packages including high-quality hot dogs, hamburger meat, fresh buns, and utensils but also a dedicated wait staff and cleanup crew. This all-inclusive package is designed to ensure a seamless and stress-free event, from setup to service to the final clean-up. Feeding approximately 50 people, Package 3 is perfect for formal gatherings, weddings, or high-profile corporate events where attention to detail and superior service are paramount. At $300 per hour, this package allows you to enjoy your event to the fullest while we take care of everything else.</p>
                        </div>
                    </div>
                </div>`;

    // Set the inner HTML of the app container
    app.innerHTML = html;
}



// App Screen Build Function | Admin Creation
/*
    this function builds the admin creation form.
    It gets the email, password, and password confirmation
    from the admin.

    Written by Bryce Callahan 10/30/2024
        updated by BC 11/5/2024
*/
function buildCreateAdminForm()
{
    // get app dom
    const app = document.getElementById('app')

    // init html content
    let html = `<div class="container">
                    <h4>Admin login</h4>
                    <form onsubmit="return false;" method="post">
                        <h5 class="text-center">Create an account</h5>
                        <div id="alert"></div>
                        <div class="grid col-2">
                            <div> <!-- email -->
                                <label for="adminEmail">Email</label><br>
                                <input type="email" id="adminEmail" name="adminEmail" placeholder="example@gmail.com" autocomplete="off">
                            </div>

                            <div> <!-- password -->
                                <label for="adminPassword">Password</label><br>
                                <input type="password" id="adminPassword" name="adminPassword" autocomplete="off">
                            </div>
                        </div>
                        <label for="adminPasswordConfirm">Confirm Password</label><br>
                        <input type="password" id="adminPasswordConfirm" name="adminPasswordConfirm" autocomplete="off">
                        <button type="submit" onclick="createNewAdmin()">Submit</button>
                    </form>
                    <p class="text-center pd-top">Already have an account? <span class="sign-in-btn" onclick="buildAdminLoginForm()">Sign In</span></p>
                </div>
    `

    app.innerHTML = html
}

// App Screen Build Function | Admin Login
/*
    this function shows the admin login form, which
    takes only the email and password. This is used
    after someone makes an account. After making an 
    account, they will be redirected to this form
    to sign in.

    Written by Bryce Callahan 11/5/2024
*/
function buildAdminLoginForm()
{
    // get app dom
    const app = document.getElementById('app')

    // init html content
    let html = `<div class="container">
                    <h4>Admin login</h4>
                    <form onsubmit="return false;" method="post">
                        <h5 class="text-center">Login</h5>
                        <div id="alert"></div>
                        <div class="grid col-2">
                            <div> <!-- email -->
                                <label for="adminEmail">Email</label><br>
                                <input type="email" id="adminEmail" name="adminEmail" placeholder="example@gmail.com" autocomplete="off">
                            </div>

                            <div> <!-- password -->
                                <label for="adminPassword">Password</label><br>
                                <input type="password" id="adminPassword" name="adminPassword" autocomplete="off">
                            </div>
                        </div>
                        <button type="submit" onclick="adminLoginCheck()">Submit</button>
                    </form>
                    <p class="text-center pd-top">Don't have an account? <span class="sign-in-btn" onclick="buildCreateAdminForm()">Create account</span></p>
                </div>
    `

    app.innerHTML = html
}

// Admin Login
/*
    this function checks all the stored admins and
    builds calls the admin dashboard function if
    successful

    Written by Bryce Callahan 11/5/2024
        Updated by BC 11/15/2024
*/
function adminLoginCheck()
{
    // init email, password and alert
    const email = document.getElementById('adminEmail').value
    const password = document.getElementById('adminPassword').value
    const alert = document.getElementById('alert')
    alert.style.backgroundColor = 'var(--alert)'

    // init bool and admin obj
    let successful = false
    var adminLoggedIn

    // loop through main admin list and check for matches
    adminList.forEach(admin => {
        if(admin.email == email && admin.password == password)
        {
            // if successful login, build admin dashboard
            successful = true
            adminLoggedIn = admin
        }
    })

    // if successful
    if(successful)
    {
        alert.style.display = 'none'
        buildAdminDashboard(adminLoggedIn)
    } else {
        alert.innerHTML = "Invalid credentials."
        alert.style.display = 'block'
    }
}

// App Screen Build Function | Customer Order
/*
    this function builds the customer order form.

    Written by Connor Gilstrap 11/7/2024
        updated by Bryce Callahan 11/10/2024
        updated by Bryce Callahan 11/15/2024
        updated by Bryce Callahan 11/22/2024
*/
function buildCustomerOrderForm() {
    // get app DOM
    const app = document.getElementById('app')

    // HTML content for customer order form
    let html = `
        <div class="container">
            <h4>Schedule Service</h4>
            <form id="customerOrderForm" onsubmit="return false;" method="post">
                <div id="alert"></div>

                <h5>Personal Details</h5>
                <div class="grid col-3">
                    <div>
                        <label for="customerFName">First Name</label><br>
                        <input type="text" id="customerFName" name="customerFName" placeholder="John" required>
                    </div>
                    <div>
                        <label for="customerLName">Last Name</label><br>
                        <input type="text" id="customerLName" name="customerLName" placeholder="Doe" required>
                    </div>
                    <div>
                        <label for="customerEmail">Your Email</label><br>
                        <input type="email" id="customerEmail" name="customerEmail" placeholder="example@gmail.com" required>
                    </div>
                </div>

                <hr/>
                <h5>Event Details</h5>
                <div class="grid col-2">
                    <div>
                        <label for="serviceDate">Event Date</label><br>
                        <input type="date" id="serviceDate" name="serviceDate" required>
                    </div>
                    <div>
                        <label for="serviceAddress">Event Address</label><br>
                        <input type="text" id="serviceAddress" name="serviceAddress" placeholder="Address of event" required>
                    </div>
                    <div>
                        <label for="serviceTime">Event Start Time</label><br>
                        <select id="serviceTime" name="serviceTime" value="">
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="1:00 PM">1:00 PM</option>
                            <option value="2:00 PM">2:00 PM</option>
                            <option value="3:00 PM">3:00 PM</option>
                            <option value="4:00 PM">4:00 PM</option>
                            <option value="5:00 PM">5:00 PM</option>
                            <option value="6:00 PM">6:00 PM</option>
                            <option value="7:00 PM">7:00 PM</option>
                            <option value="8:00 PM">8:00 PM</option>
                            <option value="9:00 PM">9:00 PM</option>
                            <option value="10:00 PM">10:00 PM</option>
                        </select>
                    </div>
                    <div>
                        <label for="serviceDuration">Number of Hours</label><br>
                        <select id="serviceDuration" name="serviceDuration">
                            <option value="1">1 hour</option>
                            <option value="2">2 hours</option>
                            <option value="3">3 hours</option>
                        </select>
                    </div>
                    <div class="col-span-all">
                        <label for="package">Select Package</label><br>
                        <select id="package" name="package">
                            <option value="1">Package 1</option>
                            <option value="2">Package 2</option>
                            <option value="3">Package 3</option>
                        </select>
                    </div>
                </div>

                <hr/>
                <h5>Payment Details</h5><!-- payment form will go here -->

                <button type="submit" onclick="createNewOrder()">Submit Order</button>
            </form>
        </div>
    `

    app.innerHTML = html
}

// Show Admin Dashboard
/*
    this function builds the admin dashboard
    after an admin logins successfully.

    we might just have to save to local storage and
    redirect to a new page. idk.

    Written by Bryce Callahan 11/15/2024
        updated by BC 11/19/2024
*/
function buildAdminDashboard(admin)
{
    // get app DOM
    const app = document.getElementById('app')

    // init html
    let html = `
        <div class="container">
            <h2 style="color: var(--red);">Admin Dashboard</h2>
            <h4>${admin.email}</h4>
            <hr/><br/>

            <div class="grid col-3">
                <div class="admin-option-box" onclick="buildAdminTools()">
                    <p>Admin Tools</p>
                </div>
                <div class="admin-option-box">
                    <p>Customer Tools</p>
                </div>
                <div class="admin-option-box" onclick="buildReportNav()">
                    <p>Reports</p>
                </div>
            </div>

            <div id="toolbox-nav"></div>
            <div id="toolbox"></div>
        `

    html += '</div>'

    // send to inner html
    app.innerHTML = html
}

// Build Orders Table
/*
    this function builds the table that 
    displays all orders and their respective
    data.

    Written by Bryce Callahan 11/19/2024
*/
function buildOrderDataTable()
{
    let html = `<h5>Orders</h5>`
    // if orders don't exist
    if(orderList.length < 1)
    {   
        html += `<p>No orders have been placed.</p>`
    } else // else
    {
        // add order info to table
        html += `
           <table>
                <tr>
                    <th>ID</th>
                    <th>Date Ordered</th>
                    <th>Time Ordered</th>
                    <th>Cancelled Status</th>
                    <th>Service Date</th>
                    <th>Service Time</th>
                    <th>Service Address</th>
                    <th>Duration (hours)</th>
                    <th>Package Type</th>
                    <th>Ordered By</th>
                    <th>Serviced By</th>
                    <th>Payment ID</th>
                </tr> 
        `
        // indivudal order info insertion
        orderList.forEach(order => {
            html += `
                <tr>
                    <td>${order.id}</td>
                    <td>${order.date}</td>
                    <td>${order.time}</td>
                    <td>${order.cancelled}</td>
                    <td>${order.serviceDate}</td>
                    <td>${order.serviceTime}</td>
                    <td>${order.serviceAddress}</td>
                    <td>${order.duration}</td>
                    <td>${order.package}</td>
                    <td>${order.orderedBy}</td>
                    <td>${order.servicedBy}</td>
                    <td>${order.paymentId}</td>
                </tr>
            `
        });
        // close table
        html += `</table>`
    }
    
    // clsoe container
    html += `            
    </div>
    `

    return html
}

// Build Admin Table
/*
    this function builds the table that 
    displays all Admin and their respective
    data.

    Written by Bryce Callahan 11/19/2024
*/
//edit button added by Connor Gilstrap 11/23/2024

// Build Customer Table
/*
    this function builds the table that 
    displays all Customer and their respective
    data.

    Written by Bryce Callahan 11/19/2024
*/
function buildCustomerDataTable()
{
    // add order info to table
    let html = `<h5>Customers</h5>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
        </tr> 
    `
    // indivudal order info insertion
    customerList.forEach(customer => {
        console.log(customer)
    html += `
        <tr>
            <td>${customer.id}</td>
            <td>${customer.fName} ${customer.lName}</td>
            <td>${customer.email}</td>
        </tr>
    `
    });
    // close table
    html += `</table>`

    return html
}

// Build Reports
/*
    calls all functions that builds
    a table showing db info

    Written by Bryce Callahan 11/19/2024
*/
function buildReportNav()
{
    // get app DOM
    const app = document.getElementById('toolbox-nav')

    let html = `
        <div class="tool-nav-flexbox">
            <div onclick="buildDailyOrderReport()">Daily Orders</div>
            <div onclick="buildOrderDataTable()">All Orders</div>
            <div>All Customers</div>
            <div>Unpaid Orders</div>
        </div>
    `

    // html += buildAdminDataTable()
    // html += buildCustomerDataTable()
    // html += buildOrderDataTable()

    // send to inner html
    app.innerHTML = html
}

// Show daily orders
/*
    this functions shows all orders that 
    were placed today.

    written by BC 11/22/2024
*/
function buildDailyOrderReport()
{

    let app = document.getElementById('toolbox')

    // add info to table
    let html = `<h5>Today's Orders</h5>
    <table>
        <tr>
            <th>ID</th>
            <th>Ordered</th>
            <th>Event Date</th>
            <th>Event Time</th>
            <th>Event Duration</th>
        </tr> 
    `

    orderList.forEach(order => {
        if(order.date == GetDate())
        {
            html += `
                <tr>
                    <td>${order.id}</td>
                    <td>${order.date} ${order.time}</td>
                    <td>${order.serviceDate}</td>
                    <td>${order.serviceTime}</td>
                    <td>${order.duration} hours</td>
                </tr>
            `
        }
    })

    // close table
    html += `</table>`

    app.innerHTML = html
}

// Build Admin tools
/*
    calls all functions that admins
    can use as a tool.

    Written by Bryce Callahan 11/19/2024
*/
//updated Connor 11/23/24
function buildAdminTools() {
    // Get the DOM element where the content will go
    const app = document.getElementById('toolbox-nav');

    // Create the form for editing admins (visible by default)
    let html = `
        <div id="edit-form-container" style="margin-bottom: 20px;">
            <form id="edit-admin-form" onsubmit="return false;">
                <label for="admin-email">Admin Email:</label><br>
                <input type="text" id="admin-email" name="email"><br>
                
                <label for="admin-password">New Password:</label><br>
                <input type="password" id="admin-password" name="password"><br><br>
                
                <button type="button" onclick="handleAdminEdit()">Submit</button>
            </form>
        </div>`;

    // Append the Admin Data Table to the HTML
    html += buildAdminDataTable();

    // Set the content to the app container
    app.innerHTML = html;
}

// Function to build the admin data table
function buildAdminDataTable() {
    let html = `
        <h5>Admins</h5>
        <table>
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
    `;

    // Iterate over the admin data from the database
    adminList.forEach(admin => {
        html += `
            <tr>
                <td>${admin.id}</td>
                <td>${admin.email}</td>
                <td>
                    <button onclick="showEditForm(${admin.id}, '${admin.email}', '${admin.password}')">Edit</button>
                </td>
            </tr>
        `;
    });

    // Close the table
    html += `</table>`;
    
    return html;
}

// Function to display the edit form with the selected admin's data
function showEditForm(adminId, adminEmail, adminPassword) {
    // Fill the form with the current admin's information
    document.getElementById('admin-email').value = adminEmail;
    document.getElementById('admin-password').value = adminPassword;

    // Store the current admin ID for editing
    const editFormContainer = document.getElementById('edit-form-container');
    editFormContainer.dataset.currentAdminId = adminId;
}

// Function to handle form submission for editing an admin
async function handleAdminEdit() {
    // Retrieve updated data from the form
    const updatedEmail = document.getElementById('admin-email').value;
    const updatedPassword = document.getElementById('admin-password').value;

    // Get the admin ID stored in the form's container
    const formContainer = document.getElementById('edit-form-container');
    const adminId = formContainer.getAttribute('data-current-admin-id');

    // New admin data
    const updatedAdmin = {
        email: updatedEmail,
        password: updatedPassword
    };

    // Simulating backend update with a PUT request
    console.log("Sending admin to PUT:", JSON.stringify(updatedAdmin));

    try {
        await fetch(`http://localhost:5049/api/admins/${adminId}`, { 
            method: "PUT",
            body: JSON.stringify(updatedAdmin),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });

        // Fetch the updated list of admins to refresh the table (if necessary)
        await fetchAdminList();

        // Clear the form fields
        clearAdminFormFields();

        // Reload the admin table with updated data
        document.getElementById('toolbox-nav').innerHTML = buildAdminDataTable();
    } catch (error) {
        console.error("Error updating admin:", error);
    }
}

// Function to clear form fields after editing
function clearAdminFormFields() {
    document.getElementById('admin-email').value = '';
    document.getElementById('admin-password').value = '';
}

// Function to fetch the admin list from the backend
async function fetchAdminList() {
    try {
        const response = await fetch('http://localhost:5049/api/admin');
        const data = await response.json();
        adminList = data;
    } catch (error) {
        console.error("Error fetching admin list:", error);
    }
}

// Ensure that the admin list is fetched before displaying the tools
document.addEventListener('DOMContentLoaded', async () =>{
    await fetchAdminList();
    buildAdminTools();
});
// Clear Form Fields Function | Admin & Customer Order
/*
    this function clears all form fields. Connor, put your
    form fields here and "clear" them.

    Written by Bryce Callahan 11/5/2024
        Updated by Connor Gilstrap 11/7/2024
*/
function clearAllFormFields(formToClear)
{
    // clear depending on form to clear
    switch(formToClear)
    {
        // admin create form
        case 'admin-create-form':
            document.getElementById('adminEmail').value = ''
            document.getElementById('adminPassword').value = ''
            document.getElementById('adminPasswordConfirm').value = ''
            break

        case 'customerOrderForm':
            document.getElementById('customerEmail').value = ''
            document.getElementById('package').value = ''
            document.getElementById('serviceAddress').value = ''
            document.getElementById('serviceDate').value = ''
            document.getElementById('serviceTime').value = ''
            break

        // default hide alert
        default:
            alert.style.backgroundColor = 'var(--alert)'
            document.getElementById('alert').style.display = 'none'
            break
    }
}

function GetDate()
{
    // get today's date | https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    // format date
    today = yyyy + '-' + mm + '-' + dd;
    let date = today.toString()

    return date
}