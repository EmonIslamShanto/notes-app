import { useContext, useState } from "react";
import { NotesContext } from "../../App";
import "./style.css";
const colors = [
    "#ebcfad",
    "#f5b0a4",
    "#84dada",
    "#eff5b1",
    "#9adbf6",
    "#c3aed6", // lavender
    "#ffc1fa", // soft pink
    "#a0e7e5", // aqua mint
    "#b4f8c8", // mint green
    "#fbe7c6", // peachy cream
    "#fcd5ce", // soft coral
    "#cdeac0", // light green
    "#d4a5a5", // muted rose
    "#e4bad4", // light mauve
    "#a9def9", // soft sky blue
    "#f6dfeb", // baby pink
    "#ffe5b4", // light apricot
    "#e0bbe4", // soft lilac
    "#f4d6cc", // blush peach
    "#d6eadf", // sage green

]

function Sidebar() {

    const { addNote } = useContext(NotesContext);

    const [selectedTheme, setSelectedTheme] = useState(colors[0]);

    return (
        <div className="sidebar">
            <button className="add-note-btn" onClick={() => addNote(selectedTheme)}>
                <i className="fa fa-plus"></i>
            </button>
            <div className="colors-input-list">
                {colors.map(color => (
                    <div className="color-input">
                        <input
                            type="radio"
                            name="color-input"
                            value={color}
                            id={"color." + color}
                            checked={selectedTheme === color}
                            onChange={(e) => setSelectedTheme(color)}
                        />
                        <label htmlFor={"color." + color} style={{
                            background: color
                        }}></label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;