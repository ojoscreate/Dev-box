import propTypes from 'prop-types'
function UserGreeting(props) {
    


    return( props.isLoggedIn ? <h2 className="loggedIn">Welcome {props.username}</h2> :
                                <h2 className="invalid">Please Log In to continue</h2>)
        // if(props.isLoggedIn){
        //     return(
        //         <>
        //         <h2>Welcome {props.username}</h2> </>
        //     )
                
            
        // }else{
        //     return(
        //         <>
        //             <h2>Please Log In to continue</h2>
        //         </>
        //     )
        // }
}

// UserGreeting(props)
UserGreeting.proptypes = {
    isLoggedIn : propTypes.bool,
    username : propTypes.string,
}

UserGreeting.defautProps = {
    isLoggedIn : false,
    username: "Guest",
}
export default UserGreeting;