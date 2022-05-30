import { Nav } from '../components/nav';
import styles from '../styles/EOM.module.css';
 
 
 export const EOM = ({employee}) =>{
   
   console.log(employee);

    return(
        <div className="page-container">
<Nav/>
        <div className={styles.main}>
        <h1>Employee of The Month!</h1>
        
        <div className={styles.employeeOfTheMonth} >
        <h3>{employee.name}</h3>
        <h5>{employee.position}</h5>

        <img src={employee.image} alt="image"/>
        <p>{employee.description}</p>

        </div>
        </div>
        </div>
     );

 };

 
 export const getServerSideProps = async pageContext => {
 
/* const apiResponse =await fetch( 'eom.json'); */
 const apiResponse =await fetch( 'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',);
 const employee = await apiResponse.json();

  return{

    props :{
        employee,
    }
  }

};
 
 export default EOM;