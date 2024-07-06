import './styles/catalog.css';
import Product from '../components/product';
//TEST CHANGE
const categories = ['Guitar', 'Bass','Drums','strings'];



const data =[{

    title: "Flying V",
    price: 1100,
    category: "giutar",
    image: "guitar1.png",
    _id: "1"
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
    id: "3"
    }, 
{
    title: "Guitar Strings",
    price: 10.50,
    category: "strings",
    image: "stringsG.png",
    id: "3"
    }, 
{
    title: "Bass strings",
    price: 11.50,
    category: "strings",
    image: "bassStrings.png",
    id: "3"
    }, 
]

function Catalog(){
    return(
        <div className="catalog">
            <h1> Catalog! </h1>
            
            <div className="filter">
            {categories.map(cat => <button className='btun btn-sm btn-dark'>{cat}</button>)}
            </div>

            {data.map(prod =>  <Product info={prod}/>)}

        </div>
    )
}

export default Catalog;
