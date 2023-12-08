import { useState, useEffect } from "react";
import { FaArrowAltCircleUp, FaArrowCircleUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down 100px
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed bottom-4 right-4 p-1 bg-indigo-600 text-white rounded-full transition-opacity duration-300 focus:outline-none focus:ring focus:border-blue-300`}
      onClick={scrollToTop}>
      <FaArrowCircleUp className='h-6 w-6' />
    </button>
  );
};

export default BackToTopButton;
