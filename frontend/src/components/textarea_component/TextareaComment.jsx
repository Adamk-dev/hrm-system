import { useState } from "react";
import { TextArea } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

const TextareaComments = props => {
    const [comments, setComments] = useState([

    ]);
    const [commentText, setCommentText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setComments(prevState => [...prevState, commentText]);
        setCommentText("");
    };

    const onChangeText = e => {
        setCommentText(e.value);
    };

    return (
        <div className="k-d-flex k-gap-8">
            <div className="k-flex-grow">
                <h2>Create Comment Form</h2>
                <form onSubmit={handleSubmit}>
                    <TextArea value={commentText} onChange={onChangeText} rows={5} />
                    <div className="k-form-buttons k-justify-content-end">
                        <Button
                            themeColor={"primary"}
                            type={"submit"}
                            disabled={!commentText}
                        >
                            Add comment
                        </Button>
                    </div>
                </form>
            </div>
            <div className="k-flex-grow">
                <h2>Comments</h2>
                <ul className="k-list k-list-ul">
                    {comments.map((comment, idx) => {
                        return (
                            <li className="k-list-item" key={idx}>
                                {idx + 1} - {comment}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default TextareaComments;
