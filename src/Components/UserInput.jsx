import { useState } from 'react';



export default function InputField() {
    const [initialInvestment, setInitialInvestment] = useState('');
    const [AnnualInvestment, setAnnualInvestment] = useState('');
    const [ExpectedReturn, setExpectedReturn] = useState('');
    const [Duration, setDuration] = useState('');

    const handleSetInitialInvestment = (userInput) => setInitialInvestment(userInput.target.value)
    const handleSetAnnualInvestment = (userInput) => setAnnualInvestment(userInput.target.value)
    const handleSetExpectedReturn = (userInput) => setExpectedReturn(userInput.target.value)
    const handleSetDuration = (userInput) => setDuration (userInput.target.value)



    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={initialInvestment} onChange={handleSetInitialInvestment} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={AnnualInvestment} onChange={handleSetAnnualInvestment}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={ExpectedReturn} onChange={handleSetExpectedReturn}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={Duration} onChange={handleSetDuration}/>
                </p>
            </div>


        </section>




    )
}