
import { useState } from "react";
import styles from './.././index.css';
import Header from "./Header";
import InputArea from "./InputArea";
import Result from "./Result";
import Footer from "./Footer";

export default function App(){

    const [num, setNum] = useState([]);

    function getNumbers(num){
        setNum(prevNum => {
            return [...prevNum, num]
        })
    }

    function deleteNumber(id){
        setNum(prevNum => {
            return num.filter((newNumber, index) => {
                return index !== id
            })
        })
    }

    return(
        <div>
            <Header />
            <InputArea onAdd={getNumbers}/>
            {num.map((newNumber, index) => {
                return <Result 
                    key={index}
                    id={index}
                    num1={newNumber.num1}
                    num2={newNumber.num2}
                    result={newNumber.result = +newNumber.num1 / (+newNumber.num2 * +newNumber.num2)}
                    onDelete={deleteNumber}
                />
            })}
            <Footer />
        </div>
    )
}