export default function InputField({firstLabel, secondLabel}) {
    return (
        <div className="input-group">
            <p>
                <label>{firstLabel}</label>
                <input type="number" required/>
            </p>
            <p>
                <label>{secondLabel}</label>
                <input type="number" required/>
            </p>
        </div>
    )
}