import React from 'react'
import React, {useState} from 'react';

function SignupPage(){
    /*manage role selection in dropdown box*/

    

    /* managing the input values*/
    /* when the component loads at first, no role is selected */
    const[ role, setRole] = useState('');
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[studentId, setStudentId] = useState('');
    const[lecturerId, setLecturerId] = useState('');
    const[registrarId, setRegistrarId] = useState('');
    

    /* handling changes when a user selects a role, what happens when a user selects a certain role*/
     const setUserRole = (evt) => {
        setRole( evt.target.value);
     

     /* here, when maybe a student enters in as a lecturer by mistake, then goes back to select student, the information entered in for lecturer erases or becomes empty*/

     setStudentId('');
     setLecturerId('');
     setRegistrarId('');
     };

     /* submission of the login form*/
     const submitLoginForm = (evt) => {
        evt.preventDefault();
        console.log('Form submitted successfully!: ' {
            
            role,
            username,
            email,
            password,
            studentId,
            lecturerId,
            registrarId,
            })
        };

      return (
        <div className= 'signUp Page'  >
            <h2>Welcome to the SignUp Page for AITS</h2>

            
                    



            
            




 




            </div>

        

      )  


     }

}

export default Signup
