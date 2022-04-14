import { Quote } from "./Quote";
import { MailBar } from "./MailBar";
import { BtnMyTask } from "./BtnMyTask";
import { useAuth } from "./authentication/auth";
export const Head = () => {
  const auth = useAuth();
  return (
    <div className="head">
      <Quote />
      {!auth.user ? <MailBar /> : <BtnMyTask />}
    </div>
  );
};
