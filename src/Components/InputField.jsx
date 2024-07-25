import { useState } from 'react';



export default function InputField({ firstLabel, secondLabel }) {
    const [initialInvestment, setInput1] = useState('');
    const [AnnualInvestment, setInput2] = useState('');
    const [ExpectedReturn, setInput3] = useState('');
    const [Duration, setInput4] = useState('');
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={initialInvestment} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={AnnualInvestment} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={ExpectedReturn} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={Duration} />
                </p>
            </div>


        </section>




    )
}