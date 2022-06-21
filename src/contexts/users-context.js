import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {

const [ users, setUsers ] = useState(null);

useEffect(() => {
fetch("https://coursesnodejs.herokuapp.com/user")
.then(res => res.json())
.then((users) => {
setUsers({
...users
})
})
},[users]);


if(!users) {
return null
};

return (
<UserContext.Provider value={{users, setUsers}}>
{children}
</UserContext.Provider>
);
}
export const useUsers = () => {
    return useContext(UserContext);
};

export default UserProvider;