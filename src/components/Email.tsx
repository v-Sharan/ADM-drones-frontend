import * as React from "react";

interface EmailTemplateProps {
  email: string;
  subject: string;
  message: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  subject,
  message,
}) => (
  <div>
    <h1>Subject of the mail is {subject}</h1>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);

export default EmailTemplate;
