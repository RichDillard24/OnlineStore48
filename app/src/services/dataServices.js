import axios from "axios";

const categories = ['Guitar', 'Bass','Drums','Accessories'];



const data =[{

    title: "Epiphone Dave Mustang Flying V",
    price: 1100,
    category: "giutar",
    image: "guitar1.png",
    _id: "1"
    }, 
{
    title: "Evh Frankenstrat",
    price: 1999,
    category: "guitar",
    image: "evhStrip.webp",
    _id: "8"
    },
{
    title: "Evh Wolfgang blue",
    price: 1099,
    category: "guitar",
    image: "evhwvgblue.jpeg",
    _id: "9"
    },
{
    title: "Schecter Bass",
    price: 950,
    category: "bass",
    image: "schtBass.jpeg",
    _id: "10"
    },
 {
     title: "Bass Guitar",
    price: 650,
    category: "bass",
    image: "B04-Bass-Guitar-1-1.png",
    _id: "2"
    }, 
 {
    title: "8 piece drum kit",
    price: 800,
    category: "drum",
    image: "drum.webp",
    _id: "3"
    }, 
{
    title: "Ludwig 8 Piece Kit",
    price: 2000,
    category: "drum",
    image: "ludwig-main.jpg",
    _id: "11"
    },
{
    title: "Ludwig 5 Piece Kit",
    price: 1700,
    category: "drum",
    image: "ludwigDrum.jpg",
    _id: "12"
    },

{
    title: "Guitar Strings",
    price: 10.50,
    category: "accessories",
    image: "stringsG.png",
    _id: "4"
    }, 
{
    title: "Bass strings",
    price: 11.50,
    category: "accessories",
    image: "bassStrings.png",
    _id: "5"
    }, 
{
    title: "Tuner",
    price: 13.99,
    category: "accessories",
    image: "tuner2.jpg",
    _id: "6"
    },
{
    title: "Tuner",
    price: 12.99,
    category: "accessories",
    image: "tuner1.webp",
    _id: "7"
    }, 
]


class DataService {

    async getProducts(){
        
        let response = await axios.get("http://127.0.0.1:5000/api/products")
        return response.data

    }


    async getCategory(){

        let response = await axios.get("http://127.0.0.1:5000/api/categories");
        return response.data
      
    }

}

export default new DataService();