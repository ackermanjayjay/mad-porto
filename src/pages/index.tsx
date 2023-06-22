import { SITE_IMAGE } from "../assets/Image"
import Config from "../Const"
import { SiTypescript, SiVite, SiDaisyui } from "react-icons/si";

function Index() {
    return (
        <>
            <div className="navbar bg-const-300 text-neutral-content">
                <div className="mt-5 mx-5 w-10 rounded-full">
                    <a className=" btn btn-ghost normal-case text-xl">
                        <img src={SITE_IMAGE} />
                    </a>
                </div>
                <a className="mt-5 mx-5 btn btn-ghost normal-case text-xl">
                    <Config />
                </a>
            </div>
            <div className="p-3 mx-5 mt-5">
                <p className="flex justify-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore perspiciatis aperiam facere modi debitis placeat aliquid asperiores, error fugit odio quidem quae dolorum veritatis suscipit minima quibusdam fugiat necessitatibus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae culpa, rem exercitationem officia eaque odit quibusdam quis facere incidunt, voluptates suscipit voluptatem nemo, consequuntur quo deleniti quos alias. Exercitationem, possimus.
                </p>
                <p className="mt-5">
                    Made With: 
                </p>
                <ul className="mt-5 bg-const-300 w-56 rounded-box">
                    <li><a className="btn btn-ghost text-3xl rounded-box"><SiTypescript /></a></li>
                    <li><a className="btn btn-ghost text-3xl  rounded-box"><SiVite /></a></li>
                    <li><a className="btn btn-ghost text-3xl  rounded-box"><SiDaisyui /></a></li>
                </ul>
            </div>
        </>
    )

}
export default Index