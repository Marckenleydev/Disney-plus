import styled from "styled-components"
import { auth, provider } from "../firebase"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import React, { useEffect } from 'react';
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../features/user/userSlice"


const Header = (props) => {



    const dispatch = useDispatch()
    const history = useHistory()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user)
                history.push('/home')
            }
        })
    }, [userName])



    const handleAuth = () => {
        if (!userName) {


            auth.signInWithPopup(provider).then((result) => { setUser(result.user) })
                .catch((error) => {
                    alert(error.message);
                });


        } else if (userName) {
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                history.push('/')
            }).catch((err) => alert(err.message))
        }
    }
    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
        )
    }




    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="disney logo" />
            </Logo>
            {!userName ? (
                <Login onClick={handleAuth}>LOGIN</Login>
            ) : (
                <>



                    <NAvMenu>
                        <a>
                            <img src="/images/home-icon.svg" alt="home-icon" />
                            <span>HOME</span>
                        </a>
                        <a>
                            <img src="/images/search-icon.svg" alt="home-icon" />
                            <span>SEARCH</span>
                        </a>
                        <a>
                            <img src="/images/watchlist-icon.svg" alt="home-icon" />
                            <span>WATCHLIST</span>
                        </a>
                        <a>
                            <img src="/images/original-icon.svg" alt="home-icon" />
                            <span>ORIGINALS</span>
                        </a>
                        <a>
                            <img src="/images/movie-icon.svg" alt="home-icon" />
                            <span>MOVIES</span>
                        </a>
                        <a>
                            <img src="/images/series-icon.svg" alt="home-icon" />
                            <span>SERIES</span>
                        </a>

                    </NAvMenu>
                    <SignOut>

                        <UserImg src={userPhoto} alt={userName} />
                        <DropDown>
                            <span onClick={handleAuth}>sign out</span></DropDown>

                    </SignOut>

                </>
            )}

        </Nav>
    )
}
const Nav = styled.div`

position:fixed;
top: 0;

display: flex;
justify-content: space-between;
align-items: center;
right: 0;
left: 0;
height: 70px;
background-color: #090b13;

padding: 0 36px;

z-index:3;
`
    ;
const Logo = styled.a`
padding: 0;
width: 80px;
margin-top: 4px;
max-height: 70px;
display: inline-block;
font-size: 0;



`


const NAvMenu = styled.div`
align-items: center;
display: flex;
height: 100%;
justify-content: flex-end;
margin-right: auto;
margin-left: 25px;
padding: 0px;
margin: 0px;
flex-flow:row nowrap;

a{
    display: flex;
    align-items: center;
    padding: 20px;
    img{
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
    }
    
    span{
        cursor:pointer;
        color:rgb(249, 249, 249) ;
        font-size: 13px;
      line-height:1.8;
        position: relative;
   letter-spacing: 1.42px;
   white-space: nowrap;
        &:before{
        background-color: rgb(249, 249,249);
        border-radius: 0px 0px 0px 0px;
        bottom: -6px;
        content: "";
        height:2px;
        opacity: 0;
        position: absolute;
        right: 0px;
        left: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94) 0s;
        visibility:hidden ;
        width: auto;
        
    }
}
&:hover{
    span:before{
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
    }
    }
   
}



`

const Login = styled.a`
background-color:rgba(0,0,0,0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
transition: all 0.2s ease 0s;
border-radius: 3px;
color: #f9f9f9;
cursor: pointer;

&:hover{
    background-color: #f9f9f9;
    color: #000;
}




`;

const UserImg = styled.img`
height:100%;

`;
const DropDown = styled.div`
position: absolute;
top: 48px;
right: 0px;
background-color:#040714;
border:1px solid rgba(151,151,151,0.34);
padding: 10px;
border-radius: 4px;
box-shadow: rgb(0 0 0/50%)0px 0px 18px 0px;
font-size: 14px;
letter-spacing: 3px;
opacity: 0;
width: 100px;
`;
const SignOut = styled.div`
position:relative;
height: 48px;
width:48px;
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;
${UserImg}{
    border-radius: 50%;
    height: 100%;
    width:100%;
}
&:hover{
    ${DropDown}{
        opacity: 1;
        transition-duration:1s;
    }
}
`;
export default Header;