import { useContext, useEffect, useState } from "react";
import { stateType } from "../../store/store-types";
import HealthDataContext from "../../context/health-data-context";
import { useParams } from "react-router-dom";
import { initalState } from "../../store/reducer-store";
import styless from './EditHealthData.module.scss';
const EditHealthData = () => {

    const parms: any = useParams();
    console.table(parms)
    const {users, dispatchFun} = useContext(HealthDataContext);
   
    const [ userData, setUserData ] = useState<stateType>(initalState[0]);
    
    useEffect(() => {
        if(parms.userId){
            users.forEach(user=> {
                if(user.id == parseInt(parms.userId)){
                 setUserData(user)
                }
             })
        }
        console.log('userData',userData)
    },[parms])
  


    const onNameChange = (e:any) => {
        console.log('e.name', e.target.value)
        const newUserData = {...userData, name: e.target.value};
        setUserData(newUserData)
        const action = {
            type: 'UPDATE_USER_DATA',
            userData:userData
        }
        dispatchFun(action)
    }

    const onChangeBP = (e:any) => {
        // console.log('e.name', e.target.value);
        const newBP = {...userData.BP, value: e.target.value};
        const newUserData = {...userData, BP: newBP};
        setUserData(newUserData)
       
    }

    const submitdAta = () => {
        
        const action = {
            type: 'UPDATE_USER_DATA',
            userData:userData
        }
        dispatchFun(action)
    }

    return (
        <div>



<form className={styless['user-form']}>
   

<p>ID :- {userData.id}</p>

<div className={styless['form-control']}>
    <label htmlFor="name">User Name</label>
<input type="text" 
value={userData.name} 
onChange={onNameChange} 
placeholder="name" />

</div>

<div className={styless['form-control']}>
    <label htmlFor="bp">{userData.BP.name}</label>
<input 
    type="number" 
    value={userData.BP.value}
    onChange={onChangeBP}
    id="bp"
    placeholder={userData.BP.name} />
    
</div>

<div className={styless['form-control']}>
    <label htmlFor="HR">{userData.HR.name}</label>
<input 
    type="number" 
    value={userData.HR.value}
    onChange={onChangeBP}
    id="HR"
    placeholder={userData.HR.name} />
    
</div>


<div className={styless['form-control']}>
    <label htmlFor="SBP">{userData.SBP.name}</label>
<input 
    type="number" 
    value={userData.SBP.value}
    onChange={onChangeBP}
    id="SBP"
    placeholder={userData.SBP.name} />
    
</div>


<div className={styless['form-control']}>
    <label htmlFor="DBP">{userData.DBP.name}</label>
<input 
    type="number" 
    value={userData.DBP.value}
    onChange={onChangeBP}
    id="DBP"
    placeholder={userData.DBP.name} />
    
</div>

<div className={styless['form-control']}>
    <label htmlFor="DBP">{userData.DBP.name}</label>
<input 
    type="number" 
    value={userData.DBP.value}
    onChange={onChangeBP}
    id="DBP"
    placeholder={userData.DBP.name} />
    
</div>

<div className={styless['form-control']}>
    <label htmlFor="PR">{userData.PR.name}</label>
<input 
    type="number" 
    value={userData.PR.value}
    onChange={onChangeBP}
    id="PR"
    placeholder={userData.PR.name} />
    
</div>

<div className={styless['form-control']}>
    <label htmlFor="SR">{userData.SR.name}</label>
<input 
    type="number" 
    value={userData.SR.value}
    onChange={onChangeBP}
    id="SR"
    placeholder={userData.SR.name} />
    
</div>
</form>


        </div>
    )
};

export default EditHealthData;