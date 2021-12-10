import styled from "styled-components"


const Login = (props) => {


    return (

        <Container>
            <Content>
                <CTA>
                    <CTAlogoOne src="/images/cta-logo-one.svg" alt="" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 03/26/21, the price of Disney+
                        and The Disney Bundle will increase by $1.</Description>
                    <CTAlogoTwo src="/images/cta-logo-two.png" alt=""></CTAlogoTwo>
                </CTA>
                <BgImage></BgImage>
            </Content>
        </Container>
    )
}


const Container = styled.section`
overflow:hidden;
display: flex;
flex-direction:column;
text-align:center;
height: 100vh;

`;
const Content = styled.div`
margin-bottom:10vw;
width: 100%;
position: relative;
box-sizing:border-box;
display: flex;
justify-content:center;
align-items: center;
min-height: 100vh;

`;

const BgImage = styled.div`
height: 100%;
background-position:top;
background-size:cover;
background-repeat: no-repeat;
background-image: url("./images/login-background.jpg");
position: absolute;
top: 0;
right:0;
left: 0;
z-index:-1;
`;
const CTA = styled.div`
margin-bottom: 2vw;
max-width: 650px;
flex-wrap:wrap;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 0;
text-align:center;
margin-right: auto;
margin-left: auto;
transition-timing-function: ease-out;
width: 100%;
transition:opacity 0.2s;


`;
const CTAlogoOne = styled.img`
margin-bottom:12px;
max-width:600px;
min-height: 1px;
display: block;
width: 100%;


`;
const SignUp = styled.a`
font-weight: bold;
color: #f9f9f9;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border:1px solid transparent ;
border-radius: 4px;
background-color: #0063e5;
cursor: pointer;
&:hover{
    background-color: #0483ee;
}


`;
const Description = styled.p`
color:hsla(0,0%,95.3%, 1);
margin:0 0 24px;
line-height: 1.5;
font-size: 11px;
letter-spacing: 1.5px;


`;
const CTAlogoTwo = styled.img`
max-width:600px;
margin-bottom: 20px;
display: inline-block;
vertical-align: bottom;
width: 100%;

`;
export default Login;