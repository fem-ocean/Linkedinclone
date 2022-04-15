import styled from "styled-components";
import { connect } from "react-redux";

const Leftside = (props) =>{
    return(
        <Container>
            <Artcard>
                
                <UserInfo>
                    <CardBackground />
                    <a>
                        <Photo />
                        <Link>Welcome, {props.user? props.user.displayName : "there"}!</Link>
                    </a>
                    <a>
                        <AddPhotoText>Add a Photo</AddPhotoText>
                    </a>
                </UserInfo>
                
                <Widget>
                    <a>
                        <div>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src="/Assets/widget-icon.svg" alt=""/>
                    </a>
                </Widget>

                <Item>
                    <span>
                        <img src="/Assets/item-icon.svg" alt="" />
                        My Items
                    </span>
                </Item>

            </Artcard>

            <CommunityCard>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>
                        Events
                        <img src="/Assets/plus-icon.svg" alt=""/>
                    </span>
                </a>
                <a>
                    <span>Follow Hashtags</span>
                </a>
                <a>
                    <span>Discover more</span>
                </a>
            </CommunityCard>
        </Container>
    )
}

const Container = styled.div`
    grid-area: leftside;
`

const Artcard = styled.div`
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    overflow: hidden;
    margin-bottom: 8px;
`

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-all; //In the tutorial you have break-word
`

const CardBackground = styled.div`
    height: 54px;
    /* background-color: yellow; */
    background: url("/Assets/card-bg.svg");
    margin: -12px -12px 0;
    background-position: center;
    background-size: 462px;
`

const Photo = styled.div`
    width: 72px;
    height: 72px;
    border: 2px solid white;
    border-radius: 50%;
    margin: -38px auto 12px;
    background-image: url("/Assets/photo.svg");
    background-color: white;
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: center;
    background-clip: content-box;
    box-sizing: border-box;
    box-shadow: none;

`

const AddPhotoText = styled.div`
    color: #0a66c2;
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;
`

const Link = styled.div`
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 600;
`

const Widget = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 0;

    & > a{
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;

        &:hover{
            background-color: rgba(0, 0, 0, 0.08);
        }

        div{
            display: flex;
            flex-direction: column;
            text-align: left;
            span{
                &:first-child{
                    color: rgba(0, 0, 0, 0.6);
                }
                &:nth-child(2){
                    color: rgba(0, 0, 0, 1);
                }
            }
        }
    svg{
        color: rgba(0, 0, 0, 1);
    }
    
    }
`

const Item = styled.a`
    text-align: left;
    display: block;
    padding: 12px;
    font-size: 12px;
    border-color: rgba(0, 0, 0, 0.08);
    span{
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 1);
        svg{
            color: rgba(0, 0, 0, 0.6);
        }
    }

    &:hover{
        background-color: rgba(0, 0, 0, 0.08);
    }
`

const CommunityCard = styled(Artcard)`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 8px 0 0;
    a{
        color: black;
        padding: 4px 12px;
        font-size: 12px;

        &:hover{
            color: #0a66c2;
        }

        span{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &:last-child{
            color: rgba(0, 0, 0, 0.6);
            text-decoration: none;
            border-top: 1px solid #d6cec2;
            padding: 12px;
            
            &:hover{
                background-color: rgba(0, 0, 0, 0.08);
            }
        
        }
    }
`

// We want to tell redux about it with mapstatetoprops

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}

export default connect(mapStateToProps)(Leftside);