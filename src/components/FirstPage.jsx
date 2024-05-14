import Banner from "./Banner";
import Header from "./Header";
import Products from "./Products";
import Contact from "./Contact"


const FirstPage = () => {
    const productList = [{
        name: "Atari",
        price: 100.00,
        image: "../src/assets/atari.png",
    }, {
        name: "Baby Yoda",
        price: 200.00,
        image: "../src/assets/babyyoda.png",
    },
    {
        name: "Remera SNES",
        price: 300.00,
        image: "../src/assets/camisasnes.png",
    },
    {
        name: "Taza Trupper",
        price: 300.00,
        image: "../src/assets/canecasw.png",
    },
    {
        name: "Mini Darth",
        price: 300.00,
        image: "../src/assets/mini darth.png"
    }];

    const consoleList = [{
        name: "PlayStation 5",
        price: 500.00,
        image: "../src/assets/ps5.png",
    }, {
        name: "Xbox Series X",
        price: 500.00,
        image: "../src/assets/console.png",
    },
    {
        name: "Nintendo Switch",
        price: 500.00,
        image: "../src/assets/switch.png",
    },
    {
        name: "SNES",
        price: 500.00,
        image: "../src/assets/snes.png",
    },
    {
        name: "GameBoy Advance",
        price: 500.00,
        image: "../src/assets/gba.png",
    }];

    const gameList = [{
        name: "Halo 3",
        price: 20.00,
        image: "../src/assets/HALO3.jpg",
    },
    {
        name: "Left 4 Dead",
        price: 20.00,
        image: "../src/assets/L4D.jpg",
    },
    {
        name: "Ghostbusters",
        price: 20.00,
        image: "../src/assets/Ghostbusters.jpg",
    },
    {
        name: "Grand Theft Auto Vice City",
        price: 20.00,
        image: "../src/assets/GTAVC.jpg",
    },
    {
        name: "Uncharted 2",
        price: 20.00,
        image: "../src/assets/Uncharted2.jpg",
    }];

    const accessoryList = [{
        name: "Joystick 1",
        price: 20.00,
        image: "../src/assets/jsxbox.png",
    },
    {
        name: "Joystick 2",
        price: 20.00,
        image: "../src/assets/jsxbox.png",
    },
    {
        name: "Joystick 3",
        price: 20.00,
        image: "../src/assets/jsxbox.png",
    },
    {
        name: "Joystick 4",
        price: 20.00,
        image: "../src/assets/jsxbox.png",
    },
    {
        name: "Joystick 5",
        price: 20.00,
        image: "../src/assets/jsxbox.png",
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