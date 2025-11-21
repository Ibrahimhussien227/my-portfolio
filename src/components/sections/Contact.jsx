import {
  lazy,
  Suspense,
  startTransition,
  useRef,
  useState,
} from "react";
import { useFormStatus } from "react-dom";
import emailjs from "@emailjs/browser";

import TitleHeader from "../TitleHeader";

const ContactExperience = lazy(() =>
  import("../models/contact/ContactExperience")
);

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">
          {pending ? "Sending..." : "Send Message"}
        </p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </button>
  );
};

const Contact = () => {
  const formRef = useRef(null);
  const [state, setState] = useState({ success: false, error: null });

  const handleSubmit = async () => {
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form on success
      if (formRef.current) {
        formRef.current.reset();
      }

      startTransition(() => {
        setState({ success: true, error: null });
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      startTransition(() => {
        setState({
          success: false,
          error: error.message || "Failed to send message",
        });
      });
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="💬 Have questions or ideas? Let's talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                action={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                {state.success && (
                  <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-md">
                    Message sent successfully! 🎉
                  </div>
                )}
                {state.error && (
                  <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-md">
                    {state.error}
                  </div>
                )}

                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="What's your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="What's your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <SubmitButton />
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <Suspense
                fallback={
                  <div className="flex-center w-full h-full">
                    <p className="text-white-50">
                      Loading 3D model...
                    </p>
                  </div>
                }
              >
                <ContactExperience />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
