import Image from "next/image";
import { PiPlaceholder } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoChevronForwardOutline } from "react-icons/io5";
import { MdArrowBackIos } from "react-icons/md";


export default function Home() {
  return (
    <main>
      <div className="flex gap-[29%] text-[20px] mt-14 decoration-gray-400	">
        <div>
          <p className="text-orange-300 font-serif mx-[10%] font-thin italic	ml-[10%]">
            FoodHouse
          </p>
        </div>

        <div className="space-x-10 ">
          <nav className="space-x-12">
            <a
              className="'sans': 'Helvetica, Arial, sans-serif' text-orange-300"
              href="# "
            >
              HOME
            </a>
            <a href="#">RESTAURANT</a>
            <a href="#">SERVICES</a>
            <a href="#">CART</a>
          </nav>
        </div>

        <div>
          <a href="#"> Sign in</a>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12 flex	">
        <div className="w-1/2 pr-9 my-[100px]">
          <h1 className="text-6xl font-bold mb-4">
            Enjoy Delicious
            <br />
            Food in <span className="text-[#FFB830]">Healthy Life</span>
          </h1>
          <p className="mb-text-gray-900 font-light text-[25px] my-[53px] ">
            Tandoori masala is an Indian spice blend consisting of a variety of
            spices Tandoori masala is an Indian spice blend consisting of a
            variety of spices
          </p>
          <button className="my-[60px] bg-yellow-500 min-w-[250px] text-black-500 min-h-[65px] text-[25px] rounded-lg">
            ORDER NOW
          </button>
        </div>
        <div className="w-1/2 relative">
          <img
            src="./Image/roasted-chicken.jpeg"
            alt="chicken"
            className="rounded-full	 w-[400px] h-[400px]"
          />
        </div>
      </div>

      <p className="text-center text-[35px]"> Online store</p>
      <p className="text-center text-[35px] font-bold"> Popular Foods</p>
      <div className="flex gap-[10%] mx-[10%]">
        <div>
          <figure>
            <img
              src="./Image/fish-fill.jpeg"
              alt="one"
              className="rounded-full	"
            />
            <figcaption className="text-center  text-[25px]	">
              <b> Fruit Dish</b>
            </figcaption>
            <figcaption className="text-center	text-[20px]">
              Dinko food
            </figcaption>
            <p className="text-center mt-[20px]">
              &#11088;&#11088;&#11088;&#11088;&#11088;
            </p>
            <button className="my-[50px] bg-yellow-500 text-neutral-100 min-w-[200px] min-h-[60px] text-[18px] rounded-full mx-[10px]">
              Add to cart $696
            </button>
          </figure>
        </div>
        <div>
          <figure>
            <img
              src="./Image/two-fruit-dish.jpeg"
              alt="one"
              className="rounded-full	"
            />
            <figcaption className="text-center	text-[25px]">
              <b> Fruit Dish</b>
            </figcaption>
            <figcaption className="text-center  text-[20px]	">
              Dinko food
            </figcaption>
            <p className="text-center mt-[20px]">
              &#11088;&#11088;&#11088;&#11088;&#11088;
            </p>
            <button className="my-[50px] bg-yellow-500 text-neutral-100 min-w-[200px] min-h-[60px] text-[18px] rounded-full mx-[10px]">
              Add to cart $696
            </button>
          </figure>
        </div>

        <div>
          <figure>
            <img
              src="./Image/fish-fill.jpeg"
              alt="one"
              className="rounded-full	"
            />
            <figcaption className="text-center	text-[25px]">
              <b> Sea food Dish</b>
            </figcaption>
            <figcaption className="text-center	text-[20px]">
              Dinko food
            </figcaption>
            <p className="text-center mt-[20px]">
              
              &#11088;&#11088;&#11088;&#11088;&#11088;
            </p>
            <button className="my-[50px] bg-yellow-500 text-neutral-100 min-w-[200px] min-h-[60px] text-[18px] rounded-full mx-[10px]">
              Add to cart $696
            </button>
          </figure>
        </div>

        <div>
          <figure>
            <img
              src="./Image/two-fruit-dish.jpeg"
              alt="one"
              className="rounded-full	"
            />
            <figcaption className="text-center	text-[25px]">
              <b> Pizza</b>
            </figcaption>
            <figcaption className="text-center	text-[20px]">
              Dinko food
            </figcaption>
            <p className="text-center mt-[20px]">
              &#11088;&#11088;&#11088;&#11088;&#11088;
            </p>
            <button className="my-[50px] bg-yellow-500 text-neutral-100 min-w-[200px] min-h-[60px] text-[18px] rounded-full mx-[10px]">
              Add to cart $696
            </button>
          </figure>
        </div>
      </div>

      <div className="flex gap-[6px]">
        <div className="mx-[10%]">
          <p className=" text-[70px] font-bold	"> Our Special Offer</p>
          <p className="text-[20px]">
            Best cooks and best delivery guys at your service <br />
            Hot tasty food will reach you in 60 minutes
          </p>

          <button className=" mx-[40px] my-[60px] bg-yellow-500 text-neutral-100 min-w-[200px] min-h-[55px] text-[25px] rounded-lg mr-[60px]">
            See all menu
          </button>
        </div>
        <div>
          <img
            src="./Image/rating.jpeg"
            alt="one"
            className="rounded-full  min-w-[350px]	min-h-[350px]"
          />
        </div>
      </div>

      <div className="text-center	mx-[10%]">
        <p className="&#128076 text-[20px]"> Quality food</p>
        <h1 className="text-[50px] font-semibold	my-[5px]">
          Get the best offers
        </h1>
        <p className="text-[20px] my-[10px]">
          The food at your door step. Why starve when you have us. Your hunger
          <br /> patner. Straight out of the oven to your door step
        </p>
      </div>

      <div className="flex mx-[20%]	gap-[60px] my-[12px]">
        <div>
          <p className="text-[30px] font-bold ml-[-120%]"> Any Day</p>
          <p className="text-[30px] font-bold ml-[-120%]"> Offers</p>
          <p className="text-[20px] ml-[-120%]">
            New Phenomenon <br /> Burger Taste
          </p>
          <p className="text-amber-400	ml-[-120%]"> $12.90</p>
          <p className="font-extrabold	w-[70px] text-orange-400	ml-[-120%]">___</p>
        </div>
        <div>
          <img
            src="./Image/burger.jpeg"
            alt="one"
            className="rounded-full	bg-orange-400	ml-[-70%]"
          />
        </div>

        <div>
          <p className=" text-[30px] font-bold ml-[-50%]"> Any Day</p>
          <p className=" text-[30px] font-bold ml-[-50%]"> Offers</p>
          <p className="text-[20px]  ml-[-50%]">
            New Phenomenon <br /> Burger Taste
          </p>
          <p className="text-amber-400	ml-[-50%]"> $12.90</p>
          <p className="font-extrabold	w-[70px] text-orange-400	ml-[-50%]">___</p>

          <hr></hr>
        </div>
        <div>
          <img src="./Image/veges.jpeg" alt="one" className="rounded-full	" />
        </div>

        <div>
          <p className="text-[30px] font-bold"> Find a Poco Store</p>
          <p className="text-[30px] font-bold"> </p>
          <p className="text-[30px] font-bold"> Near you</p>
          <p className="font-extrabold	w-[70px] text-orange-400	">___</p>
        </div>
        <div>
          <img src="./Image/map.png" alt="one" className="rounded-full	ml-[15%]" />
        </div>
      </div>

      <p className="text-[40px] text-center  my-[7%] font-semibold">
        Our Service
      </p>

      <div className="flex mx-[5%]  space-x-[15%]  my-[10%]  ml-[10%]	">
        <div>
          <figure>
            <img src="./Image/rest.jpeg" alt="chicken" className="" />
            <figcaption className=" text-center font-bold text-[23px]">
              55+ Restaurants
            </figcaption>
          </figure>
        </div>

        <div>
          <figure>
            <img src="./Image/prices.png" alt="chicken" className="" />
            <figcaption className=" text-center font-bold text-[23px]">
              Good Quality
            </figcaption>
          </figure>
        </div>

        <div>
          <figure>
            <img src="./Image/discounts.jpeg" alt="chicken" className="" />
            <figcaption className=" text-center font-bold text-[23px]">
              Discount system
            </figcaption>
          </figure>
        </div>

        <div>
          <figure>
            <img src="./Image/bike.png" alt="chicken" className="" />
            <figcaption className=" text-[23px] text-center font-bold">
              {" "}
              Fast Delivery
            </figcaption>
          </figure>
        </div>
      </div>

      <p className="text-center mt-[20px]">Testimonial</p>
      <p className="text-center text-[45px] mt-[20px] font-bold">
        What our clients say
      </p>
      <p className="text-[100px] text-orange-400	text-center font-extrabold	">
        {" "}
        ,,
      </p>

      <p className="text-center mt-[20px] mx-[25%] mr-[25%] text-[20px]	">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis
        vulputate neque, sit amet pharetra augue. Donec ac commodo risus. Nulla
        at mollis justo, ut dictum erat. Proin ut tempor ligula. Mauris blandit
        finibus mauris, id vehicula est volutpat quis. Morbi non tortor in metus
        pulvinar eleifend. </p>

      <div className="flex items-center justify-center		">
        <div>
          <img
            src="./Image/Adam.jpeg"
            alt="person1"
            className="rounded-full  min-w-[150px]	min-h-[145px]"
          />
        </div>

        <div>
          <img
            src="./Image/Benjamin.jpeg"
            alt="person2"
            className="rounded-full  min-w-[150px]	min-h-[145px]"
          />
        </div>

        <div>
          <img
            src="./Image/user.jpeg"
            alt="person3"
            className="rounded-full  min-w-[150px]	min-h-[145px]"
          />
        </div>

        <div>
          <img
            src="./Image/Benjamin.jpeg"
            alt="person4"
            className="rounded-full  min-w-[150px]	min-h-[145px]"
          />
        </div>

        <div>
          <img
            src="./Image/Adam.jpeg"
            alt="person5"
            className="rounded-full  min-w-[150px]	min-h-[145px]"
          />
        </div>
      </div>

      <p className="text-center		text-[20px] font-bold	my-[20px] mb-px	">
        {" "}
        Mitchel Marsh
      </p>
      <p className="text-center		text-[20px]"> CEO, Bexon Agency</p>

      <div className="flex mx-[45%]	gap-11 my-4.5	">
     
        <MdArrowBackIos/>
      </div>

      <div className="flex gap-[30%] mt-[10%] ml-[-10%]">
        <div>
          <img
            src="./Image/app.png"
            alt="person5"
            className="ml-[140%] min-w-[300px] min-h-[300px]	"
          />
        </div>
        <div className="mt-[5%]">
          <p className=" text-orange-500"> Download Our App</p>
          <p className="text-[50px] font-bold"> It's all here</p>
          <p className="text-[50px] font-bold"> All in one App.</p>
          <p className="text-[25px] text-gray-500	">
            Discover local, on-demand delivery or pick-up from <br />
            restaurants nearby grocery and convenience stores <br /> and more
          </p>
          <img
            src="./Image/store.png"
            alt="person5"
            className=" h-[100px] w-[300px]"
          />
        </div>
      </div>

      <div className="flex my-[129px] gap-[18%] mt-[10%] ml-[10%] mx-[5%]">
        <div className="text-[25px]">
          <p className="font-bold 	"> Subscribe Our Newsletter</p>
          <p>
            Subscribe to our newsletter to get our <br /> news.
          </p>
        </div>
        <div className="text-[25px]">
          <input type="email"
          placeholder="Your email address..."
          className="focus:outline-none focus:right-2 text-[25px] mt-[40px]	"/>

         
        </div>
        <div>
          <button className=" mx-[40px] my-[60px] bg-yellow-500 text-neutral-100 min-w-[300px] min-h-[65px] text-[25px] rounded-lg mr-[60px] mt-[30px]">
            Subscribe
          </button>
        </div>
      </div>

      <footer className="bg-[rgb(24,6,5)] text-white p-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              FoodHouse<span className="text-orange-500 text-[25px]">.</span>
            </h2>
            <p className="mb-4 text-[20px] text-gray-400	">
              Best cooks and best delivery guys all at your service. Hot tasty
              food will<br />
              reach you in 60 minutes.
            </p>
            <div className="flex gap-10  text-yellow-500 h-60px w-60px">
            <FaFacebook  className="font-[30px] h-[45px] w-[45px]"/>
            <LuTwitter  className="font-[30px] h-[50px] w-[50px]  " />
            <TiSocialLinkedinCircular className="font-[30px] h-[60px] w-[60px]"/>
            </div>
          </div>

          <div>
            <h3 className="text-[25px] font-semibold mb-4 ">Company</h3>
            <div className="flex flex-col space-y-2 text-[20px] text-gray-400	">
              <a href="#">Career</a>
              <a href="#">About Us</a>
              <a href="#">Blog</a>
              <a href="#">Press Info</a>
              <a href="#">Features</a>
            </div>
          </div>
          <div>
            <h3 className="text-[25px] font-semibold mb-4">Fudo</h3>
            <div className="flex flex-col space-y-2 text-[20px] text-gray-400	">
              <a href="#">Why Fudo</a>
              <a href="#">How it Works</a>
              <a href="#">Why Choose Us</a>
              <a href="#">Client Stories</a>
              <a href="#">Gallery</a>
            </div>
          </div>
          <div>
            <h3 className="text-[25px] font-semibold mb-4">Menu</h3>
            <div className="flex flex-col space-y-2 text-[20px] text-gray-400	">
              <a>Breakfast</a>
              <a href="#">Lunch</a>
              <a href="#">Dinner</a>
              <a href="#">Fast Foods</a>
              <a href="#">Drinks</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="flex gap-[40%] bg-yellow-500  justify-center  text-white h-[40px] font-[20px]">
        <div>
          <p> Copyright 2021 Besnik All rights reserved</p>
        </div>
        <div>
          <p> Terms Privacy Security</p>
        </div>
      </div>
    </main>
  );
}
