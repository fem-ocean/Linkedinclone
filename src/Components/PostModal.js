import { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";     //for videos
import { connect } from "react-redux";      //to connect to our redux store
import firebase from "firebase/compat/app";
import { postArticleAPI } from "../actions";
import React from "react";

const PostModal = (props) => {
    const [editorText, setEditorText] = useState("");
    const [shareImage, setShareImage] = useState('');
    const [videoLink, setVideoLink] = useState("");
    const [assetArea, setAssetArea] = useState("");

    const handleChange = (e) =>{
        const image = e.target.files[0];

        if(image === '' || image === undefined) {
            alert (`not an image, the file is a ${typeof image}`)
            return;
        }

        setShareImage(image);
    }

    const switchAssetArea = (area) => {
        setShareImage("");
        setVideoLink("");
        setAssetArea(area);
    };

    const postArticle = (e) => {
        console.log("post malone");
        e.preventDefault();
        if (e.target !== e.currentTarget) {     //e.currentTarget is d node d event listener is directly attached to (like parent element)while e.target is the specific node the action takes place. This concept allows us add an event listener to one parent, & avoid adding many event listeners to specific nodes.
            console.log("hello");
            return;
        }
    
        const payload = {
            image: shareImage,
            video: videoLink,
            user: props.user,
            description: editorText,
            timeStamp: firebase.firestore.Timestamp.now(),
        };

        props.postArticle(payload);
        reset(e);
    }

    const reset = (e) => {
        setEditorText("");
        setShareImage("");
        setVideoLink("");
        setAssetArea("");
        props.handleClick(e);
    }


    return(

        <>
            {   props.showModal === "open" &&
                <Container>
                    <Content>
                        <Header>
                            <h2>Create a post</h2>
                            <button onClick={(event) => reset(event)}>
                                <img src="./Assets/close-icon.svg" alt="" />
                            </button>
                        </Header>
                        <SharedContent>
                            <UserInfo>
                                {props.user.photoURL ? (
                                <img src={props.user.photoURL} alt=""/>
                                ):(
                                <img src="./Assets/user.svg" alt="" />
                                )}
                                <span>{props.user.displayName}</span>
                            </UserInfo>

                            <Editor>
                                <textarea 
                                    value={editorText} 
                                    onChange={(event)=>setEditorText(event.target.value)}
                                    placeholder="What do you want to talk about?"
                                    autoFocus={true}
                                />
                                {assetArea === 'image' ? (
                                    <UploadImage>
                                        <input 
                                            type="file"
                                            accept="image/gif, image/png, image/jpeg"
                                            name="image"
                                            id="file"
                                            style={{display: "none"}}
                                            onChange={handleChange}
                                        />
                                        <p>
                                            <label htmlFor="file">Select an image to share</label>
                                        </p>
                                        {shareImage && <img src={URL.createObjectURL(shareImage)} alt="" />}
                                    </UploadImage>
                                ): (
                                    assetArea === 'media' && (
                                        <>
                                            <input 
                                                type="text"
                                                placeholder="please input a video link"
                                                value={videoLink}
                                                onChange={(e) => setVideoLink(e.target.value)}
                                            />
                                            {videoLink && (
                                                <ReactPlayer width={'100%'} url={videoLink} />
                                            )}
                                        </>
                                    )
                                )}
                                
                            </Editor>
                            
                        </SharedContent>
                        <ShareCreation>
                            
                            <AttachAssets>
                                <AssetButton onClick={() => switchAssetArea("image")}>
                                    <img src="./Assets/share-image.svg" alt=""/>
                                </AssetButton>
                                <AssetButton onClick = {() => switchAssetArea("media")}>
                                    <img src="./Assets/share-video.svg" alt="" />
                                </AssetButton>
                            </AttachAssets>

                            <ShareComment>
                                <AssetButton>
                                    <img src="./Assets/share-comment.svg" alt="" />
                                    Anyone
                                </AssetButton>
                            </ShareComment>

                            <PostButton 
                                disabled={!editorText ? true : false} 
                                onClick={(event) => postArticle(event)}
                            >Post
                            </PostButton>

                        </ShareCreation>
                    </Content>
                </Container>
            }
        </>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5000;
    background-color: rgba(0, 0, 0, 0.8);
    animation: fadeIn 0.4s;
`

const Content = styled.div`
    width: 100%;
    max-width: 552px;
    background-color: white;
    border-radius: 5px;
    max-height: 90%;
    overflow: initial;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
`

const Header = styled.div`
    display: block;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
        height: 40px;
        width: 40px;
        min-width: auto;
        color: rgba(0, 0, 0, 0.15);
        svg, img{
            pointer-events: none;
        }

    }
`

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;
    
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    svg, img{
        width: 48px;
        height: 48px;
        border: 2px solid transparent;
        background-clip: content-box;
        border-radius: 50%;
    }
    span{
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        margin-left: 5px;
    }
`

const ShareCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;
`

const AssetButton = styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.5);
`

const AttachAssets = styled.div`
    display: flex;
    padding-right: 8px;
    align-items: center;
    ${AssetButton} {
        width: 40px;
    }
`



const ShareComment = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    ${AssetButton} {
        svg {
            margin-right: 5px;
        }
    }
`

const PostButton = styled.button`
    min-width: 60px;
    border-radius: 20px;
    padding-left: 16px;
    padding-right: 16px;
    color: ${(props) => (props.disabled? "rgba(1,1,1,0.5)" : "white")};     //dynamic functionality: reads access PostButton properties. if disable properties is true, do this, else do this.
    background: ${(props) => (props.disabled? "rgba(0,0,0,0.6)" : "#0a66c2")};
    &:hover {
        background: ${(props) => (props.disabled? "rgba(0,0,0,0.08)" : "#004182")};
    }
`

const Editor = styled.div`
    padding: 12px 24px;
    textarea{
        resize: none;
        min-height: 100px;
        width: 100%;
    }

    input{
        width: 100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
    }
`

const UploadImage = styled.div`
    text-align: center;
    img{
        width: 100%;
    }
    p{
        color: blue;
        cursor: pointer;
        text-decoration: underline;
    }
`

const mapStateToProps = (state) => {
    return{
        user: state.userState.user,
    }
};

const mapDispatchToProps = (dispatch) => ({
    postArticle: (payload) => dispatch(postArticleAPI(payload)),        //we give postArticle a payloac it dispatches it and gives it to the postArticleAPI function. The function knows how to upload.
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);