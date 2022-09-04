
export default function Footer() {
    const year = new Date().getFullYear();
    return(
        <footer className="text-slate-400 fixed text-center bottom-0 h-10 w-full bg-white">
            <p>Copyright ⓒ {year}</p>
        </footer>
    )
}