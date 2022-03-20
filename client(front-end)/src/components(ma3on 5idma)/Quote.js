import quote_logo from "../right-quotes-symbol.png";

export const Quote = () => {
  return (
    <div className="quote">
      <img className="logo_quote_top" src={quote_logo} alt="log_q" />
      <h2>
        if <span>TASK</span> once begun,
      </h2>
      <h2>never leave it until it done.</h2>
      <img className="logo_quote_bottom" src={quote_logo} alt="log_q" />
    </div>
  );
};
