// init empty admin array
let adminList = []

// Handle Document OnLoad
function handleOnLoad()
{
    // loader
    loaderDisplay()
}


// LOGIC | HANDLER, API FUNCTIONS



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

// Admin Creation
/*
    this function creates a new admin locally.
    I grabbed the form input values, checked if they
    are "valid", created a new instance of newAdmin to
    push to the main adminList array. After a successful
    submission the form fields clear.

    Written by Bryce Callahan 11/5/2024
*/
function createNewAdmin()
{
    // init email, password, password confirm, and alert DOM elements and values
    const email = document.getElementById('adminEmail').value
    const password = document.getElementById('adminPassword').value
    const passwordConfirm = document.getElementById('adminPasswordConfirm').value
    const alert = document.getElementById('alert')

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


        // create new admin
        let newAdmin = {
            email: email,
            password: password
        }

        // push to admin list
        adminList.push(newAdmin)

        /*
            after the db is made, we will do a fetch
            for a POST method to insert into db. We will
            also call something like showAdminData() but we will
            discuss that next meeting.

            I'll edit this function a bit after the db is made and we connect
            and check for existing emails.
        */
       console.log(adminList)

       // clear admin create form
       clearAllFormFields('admin-create-form')
    }

}

// Admin Login
/*
    this function checks all the locally stored admins in
    the main admin list. if the entered email and password
    match an existing admin, a log appears in console. We 
    will edit this when the db is made.

    Written by Bryce Callahan 11/5/2024
*/
function adminLoginCheck()
{
    // init email, password and alert
    const email = document.getElementById('adminEmail').value
    const password = document.getElementById('adminPassword').value
    const alert = document.getElementById('alert')

    // loop through main admin list and check for matches
    adminList.forEach(admin => {
        if(admin.email == email && admin.password == password)
        {
            console.log(`Successful login attempt for ${admin.email}.`)
        }
    });
}


// App Screen Build Function | Customer Order
/*
    this function builds the customer order form.

    Written by ...
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

// Clear Form Fields Function | Admin & Customer Order
/*
    this function clears all form fields. Connor, put your
    form fields here and "clear" them.

    Written by Bryce Callahan 11/5/2024
        Updated by Connor Gilstrap ...
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

        // default hide alert
        default:
            document.getElementById('alert').style.display = 'none'
            break
    }
}