import { useContext } from "react";
import HealthDataContext from "../../context/health-data-context";
import styless from './TableComp.module.scss';
import {stateType } from "../../store/store-types";
import { useNavigate } from "react-router-dom";
const TableComp = () => {

    const navigate = useNavigate();

    const {users} = useContext(HealthDataContext);
   

    const onEdit = (userDATA: stateType) => {
      
    
        navigate(`/edit/${userDATA.id}`)
    }

    const onView = (userDATA: stateType) => {
        console.table(userDATA)

        navigate(`/view/${userDATA.id}`)
    }

    const tBodyRow = users.map(user => {
      return  <tr className={styless['tr']} key={user.id}>
        <td className={styless['td']}> {user.id} </td>
        <td className={styless['td']}> { user.name}</td>
        <td className={styless['td']}> { user.BP.value}</td>
        <td className={styless['td']}> { user.HR.value}</td>
        <td className={styless['td']}> { user.SBP.value}</td>
        <td className={styless['td']}> { user.DBP.value}</td>
        <td className={styless['td']}> { user.PR.value}</td>
        <td className={styless['td']}> { user.SR.value}</td>
        <td className={styless['td']}>
   
            <button onClick={() => onEdit(user)}>Edit</button>
        </td>
        <td className={styless['td']}>
        <button onClick={() => onView(user)}>View</button>
        </td>
      </tr>
    })

    return (
       

<table className={styless['table']}>
 <thead>
 <tr className={styless['tr']}>
    <th className={styless['th']}>Sr.No</th>
    <th className={styless['th']}>Name</th>
    <th className={styless['th']}>BP</th>
    <th className={styless['th']}>HR</th>
    <th className={styless['th']}>SBP</th>
    <th className={styless['th']}>DBP</th>
    <th className={styless['th']}>PR</th>
    <th className={styless['th']}>SR</th>
    <th className={styless['th']}>Edit</th>
    <th className={styless['th']}>View</th>
  </tr>
 </thead>
 <tbody>
        {tBodyRow}
 </tbody>
  
</table>
    )
};

export default TableComp;