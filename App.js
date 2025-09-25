import React from'react';
import UserGreeting from'./UserGreeting';
import UserInfo from'./UserInfo';
import'./App.css';
function App(){
const user={
name:'KISHORE',
age:20
};
return(
<div className="app-container">
<div className="card">
<h2>Sharing Data Using Props</h2>
<UserGreeting name={user.name}/>
<UserInfo name={user.name}age={user.age}/>
</div>
</div>
);
}
export default App;