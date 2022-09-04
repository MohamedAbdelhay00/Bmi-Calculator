
export default function Header(){

    function handleToggelerClick(){
        return (
            document.getElementById("nav").classList.toggle("-right-full"),
            document.getElementById("nav").classList.toggle("right-0")
        )
    }

    return(
        <div className="text-white text-center text-2xl font-mono-Monaco">
            <header class="bg-green-500 text-white">
                <div class="container mx-auto items-center flex justify-between p-2">
                 <div className="font-bold ml-5 mt-3">BMI</div>

                <button onClick={handleToggelerClick} id="toggle" class="md:hidden mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                
                <nav id="nav" class="fixed top-6 bottom-0 -right-full bg-green-500 w-52 md:w-auto md:static transition-all mt-3">
                    <ul className="md:flex">
                        <li>
                            <a className="block p-3" href="#">home</a>
                        </li>
                        <li>
                            <a className="block p-3" href="#">about</a>
                        </li>
                        <li>
                            <a className="block p-3" href="#">contact</a>
                        </li>
                    </ul>
                </nav>
                </div>
            </header>
            
        </div>
    )
}