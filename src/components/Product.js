import one from "../assets/images/image1.jpg"
import two from "../assets/images/image2.jpg"
import three from "../assets/images/image8.jpg"
//Product component
function Product() {
    return (
        <div className="image-gallery">
            <h1>Image Gallery</h1>
            <div class="products-container">

                <div class="box">
                    <img src={one} alt="one"></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel omnis facilis officia assumenda necessitatibus voluptatibus corporis non similique tenetur.</p>
                </div>

                <div class="box">
                    <img src={two} alt="one"></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel omnis facilis officia assumenda necessitatibus voluptatibus corporis non similique tenetur.</p>
                </div>

                <div class="box">
                    <img src={three} alt="one"></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel omnis facilis officia assumenda necessitatibus voluptatibus corporis non similique tenetur.</p>
                </div>

            </div>
        </div>

    )
}

export default Product
