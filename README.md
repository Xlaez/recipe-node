# recipe-app-node

<p>Run npm install or yarn add to install all packages</p>
<p>Run development server with npm serve or yarn serve</p>
<p>Add dish via 'http://localhost:8085/foods/add' (post)</p>
<p>Get dish via 'http://localhost:8085/foods/' (get)</p>
<p>Get dish by category via 'http://localhost:8085/foods/:category' (get)</p>
<p>Admin reg via 'http://localhost:8085/foods/auth' (post)</p>
<p>Admin login via 'http://localhost:8085/foods/auth/login' (post)</p>

<br />
<strong>Json recieved must contain:</strong>
<ul>
  <li>name</li>
  <li>image</li>
  <li>category</li>
  <li>tribe</li>
  <li>text </li>(description)
</ul>

### tweak database config in config folder and file

### add a .env file having a value of "Secret" and assign to it a sting of characters
