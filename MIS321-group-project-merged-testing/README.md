# MIS321-group-project
<hr/>
<h1>Requirements</h1>
<p><strong>Make sure yall save the <u>pulled repository</u> to your local machine <u>before making any changes and pushing them</u>. We all need to be responsible for having an extra non-edited project folder everytime we pull from the repo!!! This is so if anyone pushes a project with errors, we have the backup.</strong></p>

<p>Run the following commands in your console (make sure in api folder). You might not need to since I technically uploaded the files... idk, if so then it'll just say. Better safe than sorry.</p>
<ul>
  <li>dotnet new webapi --use-controllers</li>
  <li>dotnet add package MySqlConnector</li>
</ul>

<h2>Task List</h2>
<p>I'm going to create a task list after our next meeting with the exec once we actually start coding. Everytime we pull/push from the repo, we will document it in this list so we know what all transactions have happened. We will put the pull/push info and a detailed description of what we did.</p>

<h2>Comment Your Code</h2>
<p>I haven't looked at yalls code, but comment every line. You should already be in that habit, but we need to know whats going on when someone else makes a push. The more descriptive, the better - even with the most simple code. Put your name and the date you make or edit code in the comments above the function/method.</p>

<hr/>
<hr/>
<hr/>

<h1>UPDATE TRACKER<h1>
<h2>10/30/2024 | BC</h2>
<ul>
  <li>Repo touch ups before start</li>
  <li>Created Models c#</li>
  <li>Created base html, css, js</li>
  <li>Created display screen on admin login/ customer order button click js/css</li>
</ul>

<h2>11/5/2024 | BC</h2>
<ul>
  <li>Created Admin sign-up and login forms and styled them</li>
  <li>Created a create new admin function and admin login check function to handle their corresponding form submission buttons.
    <ul>
      <li>create new admin saves admin locally by adding a newAdmin object to the adminList array.</li>
      <li>admin login check loops through the main adminList array and checks the dom element values to match it with.</li>
    </ul>
  </li>
  <li>Created a clear all fields function to clear the fields of the specifid-by-param form</li>
</ul>


<h2>Update 11/7/2024 | Connor</h2>
<ul><li>Created Customer Order Form</li></ul>



<h2>11/10/2024 | BC</h2>
<ul>
  <li>Merged Bryces and Connors code</li>
  <li>Bryce made the admin forms</li>
  <li>Connor made the customer form</li>
</ul>


<h2>11/8/2024 | HW</h2>
<ul>
  <li>Created Database folder within the api folder </li>
  <li>Created SQL script with all needed tables and TitleTownCatering Database within the Database Folder</li>
  <li>Created Hayden Branch </li>
</ul>


<h2>11/12/2024 | BC</h2>
<ul>
  <li>Merged all tasks from each member to main.</li>
</ul>

<h2>11/15/2024 | BC</h2>
<ul>
  <li>Created Admin handler and controllers with their respective methods.</li>
  <li>Created Customer handler and controllers with their respective methods.</li>
  <li>Created the Admin/Customer dashboard, which shows logged in admin data/functions and the customer dash will eventually show the customer order (and past orders?)</li>
  <li>Updated CSS to support the forms in mobile</li>
</ul>

<h2>11/19/2024 | BC</h2>
<ul>
  <li>Merged Bryce and connors code.</li>
  <li>Updated Order model (was missing some data columns to be inserted into the db) and customer order form.</li>
  <li>Updated Connor's orderhandler to meet expectations of new Order model.</li>
  <li>Built an admin dashboard navigation and report functions.</li>
</ul>

<h2>11/21/2024 | BC</h2>
<ul>
  <li>Merged Bryce and Haydens code.</li>
  <li>Updated Database sql script to a bool value for paymentstatus.</li>
  <li>Updated some payment handler logic and built the payment api in indexjs.</li>
</ul>

<h2>11/25-27/2024 | BC</h2>
<ul>
  <li>Merged Bryce and Haydens code.
    <ul>
      <li>Hayden made the controller, html, api for customer edits</li>
    </ul>
  </li>
  <li>Made api, controller, logic handling for admin editing</li>
  <li>Made admin task assignment functions and handling logic</li>
  <li>Made api, controller, logic handling for order editing</li>
  <li>Updated merged-testing branch</li>

</ul>

<hr/>
<hr/>
<hr/>

