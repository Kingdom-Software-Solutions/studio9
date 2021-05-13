import Nav from "./Nav";

export default function Header(){
    return (
        <header>
            <div id="title" className="bar">
                <Link href="/">Studio 9 NC</Link>
            </div>
            <Nav />
        </header>
    )
}