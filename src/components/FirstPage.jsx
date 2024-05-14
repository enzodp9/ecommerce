import Banner from "./Banner";
import Header from "./Header";
import Products from "./Products";
import Contact from "./Contact"


const FirstPage = () => {
    const productList = [{
        name: "Atari",
        price: 100.00,
        image: "assets/atari.png",
    }, {
        name: "Baby Yoda",
        price: 200.00,
        image: "assets/babyyoda.png",
    },
    {
        name: "Remera SNES",
        price: 300.00,
        image: "assets/camisasnes.png",
    },
    {
        name: "Taza Trupper",
        price: 300.00,
        image: "assets/canecasw.png",
    },
    {
        name: "Mini Darth",
        price: 300.00,
        image: "assets/mini darth.png"
    }];

    const consoleList = [{
        name: "PlayStation 5",
        price: 500.00,
        image: "assets/ps5.png",
    }, {
        name: "Xbox Series X",
        price: 500.00,
        image: "assets/console.png",
    },
    {
        name: "Nintendo Switch",
        price: 500.00,
        image: "assets/switch.png",
    },
    {
        name: "SNES",
        price: 500.00,
        image: "assets/snes.png",
    },
    {
        name: "GameBoy Advance",
        price: 500.00,
        image: "assets/gba.png",
    }];

    const gameList = [{
        name: "Halo 3",
        price: 20.00,
        image: "assets/HALO3.jpg",
    },
    {
        name: "Left 4 Dead",
        price: 20.00,
        image: "assets/L4D.jpg",
    },
    {
        name: "Ghostbusters",
        price: 20.00,
        image: "assets/Ghostbusters.jpg",
    },
    {
        name: "Grand Theft Auto Vice City",
        price: 20.00,
        image: "assets/GTAVC.jpg",
    },
    {
        name: "Uncharted 2",
        price: 20.00,
        image: "assets/Uncharted2.jpg",
    }];

    const accessoryList = [{
        name: "Joystick 1",
        price: 20.00,
        image: "assets/jsxbox.png",
    },
    {
        name: "Joystick 2",
        price: 20.00,
        image: "assets/jsxbox.png",
    },
    {
        name: "Joystick 3",
        price: 20.00,
        image: "assets/jsxbox.png",
    },
    {
        name: "Joystick 4",
        price: 20.00,
        image: "assets/jsxbox.png",
    },
    {
        name: "Joystick 5",
        price: 20.00,
        image: "assets/jsxbox.png",
    }];

    return (
        <>
            <Header />
            <Banner />
            <Products title="Productos Destacados" productList={productList} />
            <Products title="Consolas" productList={consoleList} />
            <Products title="Juegos" productList={gameList} />
            <Products title="Accesorios" productList={accessoryList} />
            <Contact />
        </>
    )
}
export default FirstPage;