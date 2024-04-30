import { CiLinkedin } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";

function Footer() {
  return (
    <footer className="text-secondColor font-nunito">
      <div className="border-t border-gray-300"></div>
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a href="https://github.com/olahamdy99" target="blank" className="flex font-bold items-center md:justify-start justify-center">
          <span className="ml-3 text-3xl">Ecommerce</span>
        </a>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">© 2024 OlaHamdy</p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://www.linkedin.com/in/olahamdy99/" target="blank">
            <CiLinkedin className="w-8 h-8 cursor-pointer hover:text-thirdColor" />
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer;