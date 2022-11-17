import React from 'react'
import styles from "./textarea_app.scss";
import RichTextEditor from "./RichTextEditor";
// import TextareaMessage from "./TextareaMessage";
const TextAreaApp = () => {
    return (
        <div className={styles.appContainer}>

            <div>
                <RichTextEditor />
            </div>
        </div>
    )
}

export default TextAreaApp