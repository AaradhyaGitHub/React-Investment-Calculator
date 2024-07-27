import { useState } from 'react';

export default function UserInput() {
    const [inputs, setInputs] = useState({
        'initialInvestment': '',
        'annualInvestment': '',
        'expectedReturn': '',
        'duration': ''
    });

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setInputs(
            {
                ...inputs,
                [name] : value
            }
        );
    }



    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={initialInvestment} onChange={handleChange} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={annualInvestment} onChange={handleChange}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={expectedReturn} onChange={handleChange}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={duration} onChange={handleChange}/>
                </p>
            </div>


        </section>




    )
}