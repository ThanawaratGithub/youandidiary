import React,{Component, useEffect} from 'react'
import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg'
import { EditorState,convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import { convertFromHTML } from 'draft-js';
const TextEditor =  (props)=>{

    const [State,EditState] = useState(EditorState.createEmpty())
    const onEditorStateChanged = (editorState)=>{
        EditState(editorState)
    }
    const editorState = State;
    useEffect(()=>{
        props.Gettext(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    },[State])
        return(
        <div>
           <Editor
  editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={onEditorStateChanged}
            />
        </div>)
    }
export default TextEditor
