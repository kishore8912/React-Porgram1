import React from'react';
function UserInfo({name,age}){
return(
<p className="info">
User<strong>{name}</strong>is<strong>{age}</strong>years old.
</p>
);
}
export default UserInfo;