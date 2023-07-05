import React, {useState} from "react";


export default function DataTable({header, data}) {
    const [tableData, setTableData] = useState(data);
    const [edit, setEdit] = useState(null)

    const showEditor = (e) => {
        setEdit({
            row: parseInt(e.target.parentNode.id),
            column: parseInt(e.target.id)
        })
    }

    const save = (e) => {
        e.preventDefault();
        const input = e.target.firstChild.value
        tableData[edit.row][edit.column] = input;
        setEdit(null)
    }

    return (
        <table>
            <thead>
            <tr>
                {header.map((label, idx) => (
                    <th key={idx}>{label}</th>
                ))}
            </tr>
            </thead>
            <tbody onDoubleClick={showEditor}>
            {
                tableData?.map((row, ridx) => (
                    <tr key={ridx} id={ridx}>
                        {row.map((cell, cidx) => {
                            if (edit && edit.row === ridx && edit.column === cidx) {
                                cell = (<form onSubmit={save}>
                                    <input type="text" defaultValue={cell}/>
                                </form>)
                            }
                            return <td key={cidx} id={cidx}>{cell}</td>
                        })}
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}
