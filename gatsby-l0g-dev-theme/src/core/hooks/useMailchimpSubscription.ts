import { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

import { MailchimpResponse } from "../../types";

export const useMailchimpSubscription = () => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<MailchimpResponse | null>(null);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("email", email);
    const response: MailchimpResponse = await addToMailchimp(email);
    setResult(response);
  };

  return {
    email,
    result,
    handleChangeEmail,
    handleSubmit,
  };
};
