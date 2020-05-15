import React from 'react'

const Profile = () => {

    return (
        <div style={{ maxWidth: "550px", margin: "9px auto" }}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "18px 10px",
                borderBottom: "1px solid gray"
            }}>
                <div>
                    <img style={{ width: "160px", hight: "160px", marginTop: "40px", borderRadius: "80px" }}
                        src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    />
                </div>
                <div>
                    <h4>Pasindu perera</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                        <h6>40posts</h6>
                        <h6>40followers</h6>
                        <h6>40followings</h6>
                    </div>
                </div>
                {/* <div>
                    <img style={{ width: "160px", hight: "160px", marginTop: "40px", borderRadius: "80px" }}
                        src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    />
            </div> */}
            </div>

            <div className="gallary">
                <img className="item" src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </div>
        </div>
    );
}

export default Profile