import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {

const [ users, setUsers ] = useState(null);
const [ isFetched, setFetched ] = useState(false);

useEffect(() => {
if (!isFetched) {
setFetched(true);
fetch("https://coursesnodejs.herokuapp.com/user")
.then(response => response.json())
.then((users) => users)
}
},[isFetched]);

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