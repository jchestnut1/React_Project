import { useState } from "react";

const WishList = () => {
    const [list, setList] = useState([]);
    const [text, setText] = useState("");

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const addToList = () => {
        var copy = list;
        copy.push(text);
        setList(copy);
    };

    return (
        <div className="list">

            <div className="form">
                <input onChange={handleTextChange} type="text" />
                <button onClick={addToList}>Add to List</button> 
            </div>
        
        <div className="all">
            <ul>
                {list.map(t => <li key={text}>{text}</li>)}
            </ul>
        </div>
        </div>
    )
};

export default WishList;


