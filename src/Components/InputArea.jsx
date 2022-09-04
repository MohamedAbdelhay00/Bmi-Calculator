import { useState } from "react"

export default function InputArea(props){

    const [numbers, setNumbers] = useState({
        num1: "", 
        num2: ""
    });

    function handleChange(event){
        const {name, value} = event.target;
        setNumbers(prevNumber => {
            return {...prevNumber, [name]: value}
        });
    }

    function handleClick(event){
        if(numbers.num1 === "" || numbers.num2 === ""){
            alert("Please enter your data first!");
        } else{
            props.onAdd(numbers);
            setNumbers({
            num1: "", 
            num2: ""
        })

        event.preventDefault();
        }
    }

    return(
        <div className="grid place-items-center">
            <form>
                <label class="block">
                     <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mt-10">Weight</span>
                     <input onChange={handleChange} type="number" name="num1" value={numbers.num1} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-60 rounded-md sm:text-sm focus:ring-1" placeholder="firstNumber" />
                </label>
                <label class="block">
                     <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mt-3">Height</span>
                     <input onChange={handleChange} type="number" name="num2" value={numbers.num2} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-60 rounded-md sm:text-sm focus:ring-1" placeholder="Second one" />
                </label>
                <button onClick={handleClick} className="bg-sky-500 hover:bg-sky-700 text-white p-2 w-60 rounded-full mt-5"> Calculate </button>
            </form>
        </div>
    )
}