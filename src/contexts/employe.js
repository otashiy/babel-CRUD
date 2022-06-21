import { Children, createContext, useEffect, useState } from "react";

export const EmployeContext = createContext();

const [employe, setEmploye] = useState(null);

useEffect(() => {
fetch("https://coursesnodejs.herokuapp.com/employee")
.then(res => res.json())
.then((data) => {
    setEmploye({
    ...data
    })
});
}, [employe])

if(!employe) {
    return null;
}

const EmloyeProvider = ({children}) => {
    return (
   <EmployeContext.Provider value={{employe, setEmploye}}>
    {children}
   </EmployeContext.Provider>
    );
}
export const useEmploye = () => {
    return useEmploye(EmployeContext);
}


export default EmloyeProvider;