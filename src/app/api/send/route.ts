import { Email } from "@/components";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

export async function POST(request: Request) {
  const { email, subject, message } = await request.json();
  console.log(email, subject, message);

  try {
    const { data, error } = await resend.emails.send({
      from: "Info <info@info.mspacedronetech.com>",
      to: ["vsharansago@gmail.com", "mspacedrone@gmail.com"],
      subject: `Message From AMD-DRONES website and subject is ${subject}`,
      react: Email({ email, subject, message }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
