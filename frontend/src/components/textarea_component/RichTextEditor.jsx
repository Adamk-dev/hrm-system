import { useState } from "react";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import './textarea_app.scss'
const {
    Bold,
    Italic,
    Underline,
    // Strikethrough,
    // Subscript,
    // Superscript,
    ForeColor,
    // BackColor,
    CleanFormatting,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    // Indent,
    // Outdent,
    OrderedList,
    UnorderedList,
    NumberedList,
    BulletedList,
    // Undo,
    // Redo,
    FontSize,
    FontName,
    // FormatBlock,
    // Link,
    // Unlink,
    // InsertImage,
    // ViewHtml,
    InsertTable,
    // InsertFile,
    SelectAll,
    // Print,
    // Pdf,
    // AddRowBefore,
    // AddRowAfter,
    // AddColumnBefore,
    // AddColumnAfter,
    DeleteRow,
    DeleteColumn,
    DeleteTable,
    // MergeCells,
    // SplitCell,
} = EditorTools;

const tools = [
    // [Bold, Italic, Underline, Strikethrough],
    [Bold, Italic, Underline],
    // [Subscript, Superscript],

    ForeColor,
    // BackColor,
    [CleanFormatting],
    [AlignLeft, AlignCenter, AlignRight, AlignJustify],
    // [Indent, Outdent],
    [OrderedList, UnorderedList],
    [NumberedList, BulletedList],
    FontSize,
    FontName,
    // FormatBlock,
    [SelectAll],
    // [Undo, Redo],
    // [Link, Unlink, InsertImage, ViewHtml],
    // [InsertTable, InsertFile],
    [InsertTable],
    // [Pdf, Print],
    // [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
    [DeleteRow, DeleteColumn, DeleteTable],
    // [MergeCells, SplitCell],
];

const initialRichText = ``;

const RichTextEditor = props => {
    const [richText, setRichText] = useState(initialRichText);

    const onChangeText = e => {
        setRichText(e.html);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(richText);
        console.log(e);
    };

    return (
        <div>
            <div className="k-d-flex k-gap-8">
                <div className="k-flex-grow" style={{ maxWidth: "100%", border: "1px solid lightgray", padding: "10px", marginTop: "10px" }} >
                    <h1 style={{ padding: "10px 0 0px 10px" }}  >Description</h1>
                    <form onSubmit={handleSubmit} style={{ margin: "5px", border: "1px solid lightgray" }}>
                        <Editor
                            defaultContent={richText}
                            tools={tools}
                            onChange={onChangeText}
                            contentStyle={{ height: 270 }}




                        />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default RichTextEditor;
