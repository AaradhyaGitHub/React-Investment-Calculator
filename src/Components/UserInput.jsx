import InputField from "./InputField"
export default function UserInput() {
    return (
        <section id="user-input">

            <InputField firstLabel={"Initial Investment"} secondLabel={"Annual Investment"}/>
            <InputField firstLabel={"Expected Return"} secondLabel={"Duration"}/>

        </section>
    )
}