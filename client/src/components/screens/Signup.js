import React, { useState } from 'react'
import {Link,useHistory } from "react-router-dom"
import M from 'materialize-css'

const Signup = () => {
    const history = useHistory()
    const [name,setName]=useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const PostData =()=>{
        fetch("/signup",{method:"Post",
        headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        name,
        password,
        email
    })
}).then(res=>res.json()).then(data=>{
   if(data.error){  M.toast({ html:data.error,classes:"#d50000 red accent-4"})}
   else{M.toast({ html: data.message, classes: "#00e5ff cyan accent-3" })
        history.push('/signin')
            }

})
    }
    return (
        <div className="mycard">
            <div className="card auth-card input-field #81c784 green lighten-2">
                <h2>Instragram</h2>
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
              
                <input
                    type="text"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #ff1744 red accent-3" type="submit" name="action"
                onClick={()=>PostData()}
                >Signup

                </button>
                <h5>
                    <Link to='/signin'>Already have and account</Link>
                </h5>


            </div>
        </div>
    );
}

export default Signup