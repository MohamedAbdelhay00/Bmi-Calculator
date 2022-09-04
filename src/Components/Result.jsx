
export default function Result(props){

    function deleteNumbers(){
        props.onDelete(props.id);
    }

    return(
        <div className="mt-5">
            <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
            <p className="text-slate-500 group-hover:text-white text-sm">Your Height: {props.num1}</p>
            <p className="text-slate-500 group-hover:text-white text-sm">Your Weight: {props.num2}</p>
            <p className="text-slate-900 group-hover:text-white text-sm font-semibold">Your BMI {props.result}</p>
            <button onClick={deleteNumbers}>Delete Result</button>
            </a>
        </div>
    )
}