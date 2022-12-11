import React, {useState,useRef,useEffect} from 'react';
import emailjs from 'emailjs-com'
import styles from './contact.module.css';


function Contact () {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const [errorMessage,setErrorMessage] = useState('')
    const [confirmationMessage,setConfimationMessage] = useState('')
    const form = useRef<HTMLFormElement>(null);

    useEffect(()=>{
        setConfimationMessage('')
    },[])
    // Updates the state when something is typed
    const handleInput = ({target}:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        
        const {name,value} = target
        if (name === 'name'){
            setName(value)
        }
        if (name === 'email'){
            setEmail(value)
        }
        if (name === 'message'){
            setMessage(value)
        }
    }

    // Displays error message if input is selected and then unselected without entering the appropriate value
    const checkInput = ({target}:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const {name,value} = target
        
        if (name === 'name'){
            if (value===''){
                setErrorMessage('Name is required')
            }
        }
        if (name === 'email'){
            if (value===''){
                setErrorMessage('Email is required')
            } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value)){
                setErrorMessage('You must enter a valid email')

            }
        }
        if (name === 'message'){
            if (value===''){
                setErrorMessage('Message is required')
            }
        }
    }
    
    // Passes the data from the form if the email is valid - console.log the data as placeholder before setting up backend
    const sentEmail = () => {
        setName('')
        setEmail('')
        setMessage('')
        setConfimationMessage('Message sent.  I will be in touch shortly.  Thank you for your interest.')
    }
    
    const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email)){
            setErrorMessage('Invalid Email')
            return
        }
        const formInfo=form.current?form.current:''
        
         emailjs.sendForm('service_czkp25u', 'template_ojdfldr',  formInfo, 'BexAwkXyGw4j9GAnQ')
          .then((result) => {
              sentEmail()
          }, (error) => {
              console.log(error.text);
          });
    }

    return (
        <div>
            <form  ref={form} onSubmit={sendEmail} className={styles.contactContainer}>
                
                <label htmlFor='name'>Name: </label>
                <input
                    name='name'
                    type='text'
                    value={name}
                    onBlur={checkInput}
                    onChange={handleInput}
                    onClick={()=>setErrorMessage('')}

                    placeholder='Name'
                    className={`${styles.contactInput} ${styles.contactCard}`}
                    required
                    >
                </input>
                    
                <label htmlFor='email'>Email: </label>
                <input
                    name='email'
                    type='email'
                    value={email}
                    onChange={handleInput}
                    onBlur={checkInput}
                    onClick={()=>setErrorMessage('')}
                    placeholder='Email'
                    className={`${styles.contactInput} ${styles.contactCard}`}
                    required
                    >
                </input>

                <label htmlFor='message'>Message: </label>
                <textarea
                    name="message"
                    value={message}
                    onBlur={checkInput}
                    onClick={()=>setErrorMessage('')}
                    onChange={handleInput}
                    className={`${styles.contactMessage} ${styles.contactCard}`}
                ></textarea>

                <div>{errorMessage}</div>
                <div>{confirmationMessage}</div>
                <div className={styles.contactBtnContainer}>
                    <button className={styles.contactBtn}>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;