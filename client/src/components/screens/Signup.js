import React from 'react'

const Signup = () => {

    return (
        <div className="mycard">
            <div className="card auth-card input-field #81c784 green lighten-2">
                <h2>Instragram</h2>
                <input
                    type="text"
                    placeholder="name"
                />
                <input
                    type="text"
                    placeholder="email"
                />
              
                <input
                    type="text"
                    placeholder="password"
                />
                <button className="btn waves-effect waves-light #ff1744 red accent-3" type="submit" name="action">Signup

                </button>


            </div>
        </div>
    );
}

export default Signup