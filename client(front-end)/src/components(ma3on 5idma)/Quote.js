import {FaQuoteLeft} from "react-icons/fa";
import {FaQuoteRight} from "react-icons/fa";
export const Quote = () => {
  return (
    <div className="quote">
      <FaQuoteRight className="logo_quote_top" />
      <h2>
        If <span>TASK</span> once begun,
      </h2>
      <h2>never leave it until it done.</h2>
      <FaQuoteLeft className="logo_quote_bottom" />
    </div>
  );
};
