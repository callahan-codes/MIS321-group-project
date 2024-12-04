// init main api url
let url = 'http://localhost:5049/api/'

// init empty admin array
let adminList = []
let customerList = []
let orderList = []
// let paymentList = []  

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
    // await getAllPayments();

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

        // show alert
        alert.style.display = 'block'
        alert.style.backgroundColor = 'var(--alert-pass)'
        alert.innerHTML = `The admin account for ${newAdmin.email} has been made.<br><br><div class="profile-btn" onclick="buildAdminLoginForm()">Login</div>`

       // clear admin create form
       clearAllFormFields('admin-create-form')
    }

}

// Create New Order Function | Customer Order
/*
    Written by Connor Gilstrap 11/7/2024
        Updated by Bryce Callahan 11/15/2024
        Updated by Bryce Callahan 11/19/2024
        Updated by Hayden Walls 12/2/2024
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

    // I was having some issues with string time and date time conversion. These
    // functions should fix that.


    //takes take string as an input, converts it to date object format, then extracts the YYYY-MM-DD
    const normalizeDateString = (dateStr) => new Date(dateStr).toISOString().split("T")[0];

    //This (temporarily, hopefully) converts the time into something with the hours and minutes as simple
    //numbers, which should make comparisons more easier.
    const parseTimeTo24Hour = (time) => {
        const [hour, modifier] = time.split(" ");
        let [hours, minutes] = hour.split(":").map(Number);
        if (modifier === "PM" && hours !== 12) hours += 12;
        if (modifier === "AM" && hours === 12) hours = 0;
        return { hours, minutes };
    };

    //This SHOULD convert the 24 hour time back into the 12 hour time, since its easier to understand
    //from a customer and employees perspective.
    const formatTime = (hour) => {
        const period = hour < 12 ? "AM" : "PM";
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
        return `${formattedHour}:00 ${period}`;
    };


    //This is a simple boole that determines whether a selected date is tomorrow or later.
    const isTomorrowOrLater = (date) => {
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Remove time part
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate());
        return selectedDate >= tomorrow;
    };

    // Fetch unavailable slots for scheduling!

    const fetchUnavailableSlots = (selectedDate) => {
        //selected date is turned into YYYY-MM-DD.
        const normalizedDate = normalizeDateString(selectedDate);

        //

        const ordersForDate = orderList.filter(
            //This should populate a list of orders for the specific date that has been selected, so as to 
            //prevent mismatches and whatnot.
            (order) => normalizeDateString(order.serviceDate) === normalizedDate
        );

        //Initializes an array of slots that are unavailable for scheduling
        const unavailableSlots = [];
        ordersForDate.forEach((order) => {
            const startHour = parseTimeTo24Hour(order.serviceTime).hours;
            const endHour = startHour + parseInt(order.duration);
            for (let hour = startHour; hour < endHour; hour++) {
                unavailableSlots.push(formatTime(hour));
            }
        });

        //Returns the array
        return unavailableSlots;
    };

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
        // Fetch unavailable slots for the selected date
        const unavailableSlots = fetchUnavailableSlots(serviceDate);
            
        // Check if there's already an event for the day
        const ordersForDay = orderList.filter(
            (order) => normalizeDateString(order.serviceDate) === normalizeDateString(serviceDate)
        );
        
        if (ordersForDay.length > 0) {
            alert.style.display = 'block';
            alert.innerHTML = 'An event is already scheduled for the selected day. Please choose a different date.';
            console.log('Order creation failed because another event is already scheduled for this date.');
            return;
        }

        // Check for time slot conflicts
        const startHour = parseTimeTo24Hour(serviceTime).hours;
        for (let hour = startHour; hour < startHour + parseInt(serviceDuration); hour++) {
            if (unavailableSlots.includes(formatTime(hour))) {
                alert.style.display = 'block';
                alert.innerHTML = 'The selected time slot is unavailable. Please choose a different time.';
                console.log('Order creation failed due to unavailable time slot.');
                return;
            }
        }

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
            serviceCompleted: false
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
        // defualt, hide screen
        default:
            screen.style.display = 'none'
            break
    }
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
        updated by BC 11/25/2024
        updated by BC 11/26/2024
*/
function buildAdminDashboard(admin)
{
    // get app DOM
    const app = document.getElementById('app')

    // init html
    let html = `
        <div class="container">
            <h2 style="color: var(--red);">Admin Dashboard</h2>
            <h4>${admin.email} | ID: ${admin.id}</h4>
            <hr/><br/>

            <div class="grid col-3">
                <div class="admin-option-box" onclick="buildAdminToolsNav(${admin.id})">
                    <p>Admin Tools</p>
                </div>
                <div class="admin-option-box" onclick="buildCustomerToolsNav()">
                    <p>Customer Tools</p>
                </div>
                <div class="admin-option-box" onclick="buildReportNav()">
                    <p>Reports</p>
                </div>
            </div>

            <div id="toolbox-nav"></div>
            <div id="toolbox"></div>
            <div id="toolbox-form"></div>
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
    removeToolboxForm()
    const app = document.getElementById('toolbox')
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
                    <th>Service Completed</th>
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
                    <td>${order.serviceCompleted}</td>
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

    app.innerHTML = html
}

// Build Admin Table
/*
    this function builds the table that 
    displays all Admin and their respective
    data.

    Written by Bryce Callahan 11/19/2024
*/
function buildAdminDataTable()
{
    // removeToolboxForm()
    const app = document.getElementById('toolbox')
    // add order info to table
    let html = `<h5>All Admins</h5>
    <table>
        <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Password</th>
            <th>Edit</th>
        </tr> 
    `
    // indivudal order info insertion
    adminList.forEach(admin => {
    html += `
        <tr>
            <td>${admin.id}</td>
            <td>${admin.email}</td>
            <td>${admin.password}</td>
            <td><a href="#edit-admin" onclick="editAdminDataForm(${admin.id})">Edit</a></td>
        </tr>
    `
    });
    // close table
    html += `</table>`

    app.innerHTML = html
}

// Build Customer Table
/*
    this function builds the table that 
    displays all Customer and their respective
    data.

    Written by Bryce Callahan 11/19/2024
*/
function buildCustomerDataTable()
{
    removeToolboxForm()
    // get app DOM
    const app = document.getElementById('toolbox')

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

    app.innerHTML = html
}

// Build Customer Tools Nav
/*
    this shows the customer-based tools
    readily available to admin

    Written by Bryce Callahan 11/26/2024
*/
function buildCustomerToolsNav()
{
    // get app DOM
    const app = document.getElementById('toolbox-nav')

    let html = `
        <div class="tool-nav-flexbox">
            <div onclick="buildCustomerDataTable()">All Customers</div>
            <div onclick="buildCustomerEditTool()">Edit Customer data</div>
            <div onclick="buildCustomerOrdersTool()">Show Customer orders</div>
        </div>
    `

    clearToolboxDom()
    app.innerHTML = html
}

// Build Customer Orders search tool dom
/*
    this builds the dom for the order search tool
    per customer

    written by Bryce Callahan 11/26/2024
*/
function buildCustomerOrdersTool()
{
    const app = document.getElementById('toolbox')

    let html = `
        <h5>Search Customer Orders</h5>
        <form onsubmit="return false;" method="post" id="customer-search-form">
            <div id="alert"></div>

            <label for="custEmail">Customer Email</label><br>
            <input type="text" id="custEmail" name="custEmail" placeholder="search">

            <button type="submit" onclick="showCustomerOrders(custEmail.value)">Search</button>
        </form>
    `

    app.innerHTML = html
}

// written by Jeb Bradford 12/1/2024
function showCustomerOrders(customerEmail)
{

    removeToolboxForm()
    // get app DOM
    const app = document.getElementById('toolbox')

    // add order info to table
    let html = `<h5>Customer Orders</h5>
    <h6>Customer: ${customerEmail}</h6>
    <table>
        <tr>
            <th>Order Id</th>
            <th>Package</th>
            <th>Date Ordered</th>
        </tr> 
    `

    customerList.forEach(customer => {
        if(customer.email == customerEmail)
        {
            orderList.forEach(order => {
                if(order.servicedBy == customer.id)
                {
                    html += `
                        <tr>
                            <td>${order.id}</td>
                            <td>${order.package}</td>
                            <td>${order.date}</td>
                        </tr>
                    `
                }
            });
        }
    });

    // close table
    html += `</table>`

    app.innerHTML = html
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
            <div onclick="buildAllSalesReport()">All Sales</div>
        </div>
    `

    clearToolboxDom()
    app.innerHTML = html
}

// Build Admin Tools Nav
/*
    this shows the admin tools
    readily available

    Written by Bryce Callahan 11/22/2024
        updated by BC 11/26/2024
*/
function buildAdminToolsNav(adminID)
{
    // get app DOM
    const app = document.getElementById('toolbox-nav')

    let html = `
        <div class="tool-nav-flexbox">
            <div onclick="buildAdminDataTable()">Edit Employee Data</div>
            <div onclick="buildEmployeeTaskAssignment()">Employee Task Assignment</div>
            <div onclick="buildEmployeeEvents('${adminID}')">My Events</div>
        </div>
    `

    clearToolboxDom()
    app.innerHTML = html
}

// Build employee event list
/*
    this shows an employee all
    the events they are assigned to
    and allows them to update their status.

    Written by Bryce Callahan 11/26/2024
*/  
function buildEmployeeEvents(adminID)
{
    removeToolboxForm()
    let app = document.getElementById('toolbox')

    let html = `
        <h5>My Uncompleted Tasks</h5>
        <div class="grid col-2">
    `

    orderList.forEach(order => {

        if(order.servicedBy == adminID && order.serviceCompleted == false)
        {
            html += `
            <div class="card">
                <h3 class="title">Order #${order.id}</h5>
                <h5 class="subtitle">Service Date: ${order.serviceDate} @ ${order.serviceTime}</h5>
                <hr/>
                <h5 class="subtext">Address: ${order.serviceAddress}</h5>
                <h5 class="subtext">Package: ${order.package}</h5>
                <hr/>
            `

            html += `
                    <h5 class="subtext" id="completed-status-${order.id}">Completed: ${order.serviceCompleted}</h5>
                    <button type="button" id="completed-btn-${order.id}" onclick="completeService(${order.id})">Mark as Completed</button>
                </div>
            `
            
        }
    })

    html += `</div>`
    app.innerHTML = html
}

// Update service completion status
/*
    this updates the status of completion
    for an order by an admin.

    written by Bryce Callahan 11/26/2024
*/
async function completeService(orderID)
{
    orderList.forEach(async order => {
        if(order.id == orderID)
        {
            order.serviceCompleted = true

            try 
            {
                let orderURL = url + `order/${orderID}`

                // put | update in db
                await fetch(orderURL, {
                    method: "PUT",
                    body: JSON.stringify(order),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })

                // show alert
                const button = document.getElementById(`completed-btn-${orderID}`)
                const label = document.getElementById(`completed-status-${orderID}`)

                label.innerHTML = `Completed: ${order.serviceCompleted}`

                button.style.backgroundColor = "var(--alert-pass)" 
                button.style.borderColor = "var(--alert-pass)" 
                button.innerHTML = "Completed"
                
            } catch (error) 
            {
                // log
                console.log(error)
            }
        }
    });
}

// Show daily orders
/*
    this functions shows all orders that 
    were placed today.

    written by BC 11/22/2024
*/
function buildDailyOrderReport()
{
    removeToolboxForm()

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

// Build all sales report
/*
    this report gets all the packages,
    gets their price and shows the total
    price made from the total packages ordered

    written by Bryce Callahan 11/25/2024
*/
function buildAllSalesReport()
{
    removeToolboxForm()
    let app = document.getElementById('toolbox')

    // add info to table
    let html = `<h5>Total Sales</h5>`

    // package 1
    let p1Count = 0
    let p1Sales = 0

    // package 2
    let p2Count = 0
    let p2Sales = 0

    // package 3
    let p3Count = 0
    let p3Sales = 0

    orderList.forEach(order => {
        if(order.package == 1)
        {
           p1Count += 1
           p1Sales += 100
        }
        if(order.package == 2)
        {
            p2Count += 1
            p2Sales += 200
        }
        if(order.package == 3)
        {
            p3Count += 1
            p3Sales += 300
        }
    })

    // close table
    html += `
        <div class="grid col-3">
            <div class="card">
                <h3 class="title">Package 1</h5>
                <h5 class="subtitle">Units Sold: ${p1Count}</h5>
                <h5 class="subtitle">Total Sales: $${p1Sales}</h5>
            </div>
            <div class="card">
                <h3 class="title">Package 2</h5>
                <h5 class="subtitle">Units Sold: ${p2Count}</h5>
                <h5 class="subtitle">Total Sales: $${p2Sales}</h5>
            </div>
            <div class="card">
                <h3 class="title">Package 3</h5>
                <h5 class="subtitle">Units Sold: ${p3Count}</h5>
                <h5 class="subtitle">Total Sales: $${p3Sales}</h5>
            </div>
        </div>
        <br/>
        <hr/>
        <br/>
        <div class="card">
            <h3 class="title">All Packages</h5>
            <h5 class="subtitle">Units Sold: ${p1Count + p2Count + p3Count}</h5>
            <h5 class="subtitle">Total Sales: ${p1Sales + p2Sales + p3Sales}</h5>
         </div>
    `

    app.innerHTML = html
}

// Assign Employee Task
/*
    this method shows the admin
    all the orders and the respective
    employee ID assigned to the order. An
    edit button sends the admin to change
    the default assignment (admin 1).

    written by Bryce Callahan 11/25/2024
*/
function buildEmployeeTaskAssignment()
{
    // removeToolboxForm()
    // init app
    let app = document.getElementById('toolbox')

    // init today
    let date = GetDate()
    let indexThird = date.charAt(5)
    let indexFourth = date.charAt(6)
    let thisMonth = indexThird + indexFourth

    // init html
    let html = `<h5>This month's tasks</h5>
        <table>
            <tr>
                <th>Order ID</th>
                <th>Event Date</th>
                <th>Event Time</th>
                <th>Event Duration</th>
                <th>Assigned Employee</th>
                <th>Edit</th>
            </tr> 
    `

    orderList.forEach(order => {
        let indexFirst = order.serviceDate.charAt(5) 
        let indexSec = order.serviceDate.charAt(6)
        let orderMonth = indexFirst + indexSec

        if(orderMonth == thisMonth)
        {
            html += `
                <tr>
                    <td>${order.id}</td>
                    <td>${order.serviceDate}</td>
                    <td>${order.serviceTime}</td>
                    <td>${order.duration}</td>
                    <td>${order.servicedBy}</td>
                    <td><a href="#assignment-form" onclick="editOrderAssignment('${order.id}', '${order.servicedBy}')">Edit</a></td>
                </tr>
            `
        }
    });

    html += `
        </table>
        <h5>All Tasks</h5>
        <table>
            <tr>
                <th>Order ID</th>
                <th>Event Date</th>
                <th>Event Time</th>
                <th>Event Duration</th>
                <th>Assigned Employee</th>
                <th>Edit</th>
            </tr> 
    `

    orderList.forEach(order => {
        html += `
            <tr>
                <td>${order.id}</td>
                <td>${order.serviceDate}</td>
                <td>${order.serviceTime}</td>
                <td>${order.duration}</td>
                <td>${order.servicedBy}</td>
                <td><a href="#assignment-form" onclick="editOrderAssignment('${order.id}', '${order.servicedBy}')">Edit</a></td>
            </tr>
        `
    });

    html += `</table>`
    app.innerHTML = html
}

// Edit order assignment employee form
/*
    this method displays the dom that
    allows an admin to assign another 
    admin to a customers order event via a form.

    written by Bryce Callahan 11/25/2024
*/
function editOrderAssignment(orderID, adminID)
{
    // init app
    let app = document.getElementById('toolbox-form')
    let html = ``

    orderList.forEach(order => {
        if(order.id == orderID)
        {
            html = `
                <h4>Employee Task Assignment</h4>
                <form onsubmit="return false;" method="post" id="assignment-form">
                    <div id="alert"></div>
                    <div class="grid col-2">

                        <div>
                            <h5>Order Details</h5>
                            <div class="grid col-2">
                                <div>
                                    <label for="orderID">Order ID</label><br>
                                    <input type="text" id="orderID" name="orderID" value="${order.id}" disabled>
                                </div>

                                <div> 
                                    <label for="empID">Employee ID</label><br>
                                    <input type="text" id="empID" name="empID" value="${adminID}">
                                </div>

                                <div> 
                                    <label for="dateOrdered">Date Ordered</label><br>
                                    <input type="text" id="dateOrdered" name="dateOrdered" value="${order.date}">
                                </div>

                                 <div> 
                                    <label for="timeOrdered">Time Ordered</label><br>
                                    <input type="text" id="timeOrdered" name="timeOrdered" value="${order.time}">
                                </div>

                                <div> 
                                    <label for="serviceDuration">Duration</label><br>
                                    <input type="text" id="serviceDuration" name="serviceDuration" value="${order.duration}">
                                </div>`

                                if(order.cancelled == true)
                                {
                                    html += `
                                        <div> 
                                            <label for="serviceCancelled">Cancelled</label><br>
                                            <input type="checkbox" id="serviceCancelled" name="serviceCancelled" checked>
                                        </div>
                                    `
                                } else
                                {
                                    html += `
                                        <div> 
                                            <label for="serviceCancelled">Cancelled</label><br>
                                            <input type="checkbox" id="serviceCancelled" name="serviceCancelled">
                                        </div>
                                    `
                                }

                                html += `

                            </div>

                        </div>
                        <div>
                            <h5>Service Details</h5>
                            <div class="grid col-2">
                                <div> 
                                    <label for="serviceDate">Service Date</label><br>
                                    <input type="text" id="serviceDate" name="serviceDate" value="${order.serviceDate}">
                                </div>

                                <div> 
                                    <label for="serviceTime">Service Time</label><br>
                                    <input type="text" id="serviceTime" name="serviceTime" value="${order.serviceTime}">
                                </div>

                                <div> 
                                    <label for="serviceAddress">Address</label><br>
                                    <input type="text" id="serviceAddress" name="serviceAddress" value="${order.serviceAddress}">
                                </div>

                                <div> 
                                    <label for="packageType">Package</label><br>
                                    <input type="text" id="packageType" name="packageType" value="${order.package}">
                                </div>
                                `
                                if(order.serviceCompleted == true)
                                {
                                    html += `
                                        <div> 
                                            <label for="serviceCompleted">Completed</label><br>
                                            <input type="checkbox" id="serviceCompleted" name="serviceCompleted" checked>
                                        </div>
                                    `
                                } else
                                {
                                    html += `
                                        <div> 
                                            <label for="serviceCompleted">Completed</label><br>
                                            <input type="checkbox" id="serviceCompleted" name="serviceCompleted">
                                        </div>
                                    `
                                }

                                html += `
                            </div>
                        </div>
                    </div>
                    <button type="submit" onclick="updateAdminTask(orderID.value, empID.value)">Submit</button>
                </form>
            `
        }
    });

    app.innerHTML = html
}

// Edit admin data
/*
    this method shows the form to edit
    admin data

    written by Bryce Callahan 11/26/2024
*/
function editAdminDataForm(adminID)
{
    // init app
    let app = document.getElementById('toolbox-form')

    // init html
    let html = ``

    adminList.forEach(admin => {
        if(admin.id == adminID)
        {
            html = `
            <h5>Edit Admin</h5>
            <form onsubmit="return false;" method="post">
                <div id="alert"></div>
                <div class="grid col-2">
                    <div> <!-- email -->
                        <label for="adminEmail">Email</label><br>
                        <input type="email" id="adminEmail" name="adminEmail" value="${admin.email}" autocomplete="off">
                    </div>
    
                    <div> <!-- password -->
                        <label for="adminPassword">Password</label><br>
                        <input type="text" id="adminPassword" name="adminPassword" value="${admin.password}" autocomplete="off">
                    </div>
                </div>
                <button type="submit" onclick="updateAdminData(${admin.id}, adminEmail.value, adminPassword.value)">Submit</button>
            </form>
        `
        }
    });
    

    app.innerHTML = html
}

// Update admin data
/*
    this function edits the admin 
    data in the db

    written by Bryce Callahan 11/27/2024
*/
async function updateAdminData(adminID, adminEmail, adminPass) {
    
    const alert = document.getElementById('alert')
    alert.style.display = 'none'

    adminList.forEach(async admin => {
        if(admin.id === adminID)
        {
            try 
            {
                let adminURL = url + `admin/${adminID}`
                admin.email = adminEmail
                admin.password = adminPass
                // put | update in db
                await fetch(adminURL, {
                    method: "PUT",
                    body: JSON.stringify(admin),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })

                // show alert
                alert.style.display = 'block'
                alert.style.backgroundColor = 'var(--alert-pass)'
                alert.innerHTML = `The Admin (ID: ${adminID}) has succesfully been edited.` 

                buildAdminDataTable()

                
            } catch (error) 
            {
                // log
                console.log(error)
            }
        }
    });
}

// Update Admin Task Assignment
/*
    this function enables an admin
    to assign any other existing admin 
    to any existing order.

    written by Bryce Callahan 11/25/2024
*/
async function updateAdminTask(orderID, adminID)
{
    // init alert dom
    const alert = document.getElementById('alert')

    // get url for order to edit
    let orderURL = url + `order/${orderID}`

    let adminExists = false
    const orderedDate = document.getElementById('dateOrdered').value
    const orderedTime = document.getElementById('timeOrdered').value
    const serviceDuration = document.getElementById('serviceDuration').value
    const serviceDate = document.getElementById('serviceDate').value
    const serviceTime = document.getElementById('serviceTime').value
    const serviceAddress = document.getElementById('serviceAddress').value
    const servicePackage = document.getElementById('packageType').value
    let serviceCancelled = false
    let serviceCompleted = false

    if(document.getElementById('serviceCompleted').checked)
    {
        serviceCompleted = true
    } 
    if(document.getElementById('serviceCancelled').checked)
    {
        serviceCancelled = true
    }

    console.log(serviceCancelled, serviceCompleted)

    // check if admin exists
    adminList.forEach(admin => {
        if(admin.id == adminID)
        {
            adminExists = true
        }
    });

    // if admin exists
    if(adminExists)
    {
        // for each order
        orderList.forEach(async order => {
            // if order id = id
            if(order.id == orderID)
            {
                // update locally
                order.date = orderedDate
                order.time = orderedTime
                order.duration = parseInt(serviceDuration)
                order.serviceDate = serviceDate
                order.serviceTime = serviceTime
                order.serviceAddress = serviceAddress
                order.package = parseInt(servicePackage)
                order.serviceCompleted = serviceCompleted
                order.cancelled = serviceCancelled
                order.servicedBy = adminID

                try 
                {
                    // put | update in db
                    await fetch(orderURL, {
                        method: "PUT",
                        body: JSON.stringify(order),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    })
    
                    
                } catch (error) 
                {
                    // log
                    console.log(error)
                }
            }
        });

        // show alert
        alert.style.display = 'block'
        alert.style.backgroundColor = 'var(--alert-pass)'
        alert.innerHTML = `The Order (ID: ${orderID}) has succesfully been edited.` 

        // rebuild tasks
        buildEmployeeTaskAssignment()
    }
    else
    {
        // show alert
        alert.style.display = 'block'
        alert.innerHTML = `The Admin ID '${adminID}' does not exist.`    
    }

}

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

// Clear toolbox
/*
    this function clears the admin dash
    toolbox divs

    Written by Bryce Callahan 11/26/2024
*/
function clearToolboxDom()
{
    document.getElementById("toolbox-nav").innerHTML = ''
    document.getElementById("toolbox").innerHTML = ''
    document.getElementById("toolbox-form").innerHTML = ''
}

// Clear toolbox
/*
    this function removes the admin dash
    toolbox form

    Written by Bryce Callahan 11/26/2024
*/
function removeToolboxForm()
{
    document.getElementById("toolbox-form").innerHTML = ''
}

// Get Date
/*
    this function returns today's
    date in a string format 
    yyyy-mm-dd

    written by Bryce Callahan 11/23/2024
*/
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

// BELOW WAS WRITTEN BY HAYDEN WALLS
// Build the Customer Tools section
function buildCustomerEditTool() {
    removeToolboxForm()
    // Get app DOM
    const app = document.getElementById('toolbox');

    // Generate customer editing tools (table + form)
    let html = `
        <div>
            ${createCustomerEditTable()}
        </div>
    `;

    // Send to inner HTML
    app.innerHTML = html;
}

// Create the customer table
function createCustomerEditTable() {
    let html = `<h5>Customers</h5>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
        </tr>`;

    // Should loop through the customers and add table data for all the rows.
    customerList.forEach(customer => {
        html += `
        <tr>
            <td>${customer.id}</td>
            <td>${customer.fName} ${customer.lName}</td>
            <td>${customer.email}</td>
            <td>
                <a href="#customer-edit" onclick="populateCustomerForm(${customer.id})">Edit</a>
            </td>
        </tr>`;
    });

    html += `</table>`;
    return html;
}

// Create the customer editing form
function createCustomerEditForm() {

    const app = document.getElementById('toolbox-form')

    let html = `
    <h5 id="customer-edit">Edit Customer</h5>
    <form onsubmit="return false;" method="post" id="editCustomerForm">
        <div id="alert"></div>
        <div class="grid col-2">
            <div>
                <label for="editID">ID:</label>
                <input type="text" id="editID" name="id" disabled >
            </div>
            <div>
                <label for="editFName">First Name:</label>
                <input type="text" id="editFName" name="fname">
            </div>
            <div>
                <label for="editLName">Last Name:</label>
                <input type="text" id="editLName" name="lname">
            </div>
            <div>
                <label for="editEmail">Email:</label>
                <input type="email" id="editEmail" name="email">
            </div>
        </div>
        <button type="submit" onclick="submitCustomerEdit()">Submit</button>
    </form>`;
    
    app.innerHTML = html
}

// Populate the form with customer data when editing
function populateCustomerForm(customerId) {

    createCustomerEditForm()

    const customer = customerList.find(c => c.id === customerId);
    
    if (customer) {
        document.getElementById('editFName').value = customer.fName;
        document.getElementById('editLName').value = customer.lName;
        document.getElementById('editEmail').value = customer.email;
        document.getElementById('editID').value = customer.id;
    }
}

// Submit the edited customer form
async function submitCustomerEdit() {
    const id = parseInt(document.getElementById('editID').value, 10);
    const updatedFName = document.getElementById('editFName').value;
    const updatedLName = document.getElementById('editLName').value;
    const updatedEmail = document.getElementById('editEmail').value;

    const customerIndex = customerList.findIndex(c => c.id === id);
    const alert = document.getElementById('alert')
    alert.style.display = 'none'
    if (customerIndex !== -1) {
        customerList[customerIndex].fName = updatedFName;
        customerList[customerIndex].lName = updatedLName;
        customerList[customerIndex].email = updatedEmail;
        try 
        {
            const customerURL = url + `customer/${id}`
            // put | update in db
            await fetch(customerURL, {
                method: "PUT",
                body: JSON.stringify(customerList[customerIndex]),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })

            
        } catch (error) 
        {
            // log
            console.log(error)
        }

        // show alert
        alert.style.display = 'block'
        alert.style.backgroundColor = 'var(--alert-pass)'
        alert.innerHTML = `The Customer (ID: ${customerList[customerIndex].id}) has succesfully been edited.` 

        // Rebuild the customer table
        document.getElementById('toolbox').innerHTML = `
            ${createCustomerEditTable()}
        `;
        console.log(customerList[customerIndex])
    } else {
        // show alert
        alert.style.display = 'block'
        alert.style.backgroundColor = 'var(--red)'
        alert.innerHTML = `The Customer (ID: ${customerList[customerIndex].id}) was not found.` 
    }
}