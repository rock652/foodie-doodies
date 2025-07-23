import logoImg from "../assets/logo.jpg";


export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="a restaurantfood"/>
                <h1>Foodie Doodie</h1>
            </div>
            <nav>
                <button>Cart (0)</button>
            </nav>
        </header>
    )
}