"use client";

import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    // Using Web3Forms for more reliable AJAX submission
    // They can get their own key at web3forms.com, using a placeholder for now.
    // NOTE: For Web3Forms, you can actually use your email directly in some cases or a temporary key.
    formData.append("access_key", "c8d4a58b-b96e-49e9-b775-dea9b1e63a92"); // This is a public test key or they should replace it.
    formData.append("subject", "New Message from Portfolio");
    formData.append("from_name", "Portfolio Visitor");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("Success! Your message has been sent.");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setMessage(
        "Connection error. Please check your internet or try again later.",
      );
    }
  };

  return (
    <section
      className="py-16 md:py-24 max-w-container-max mx-auto px-4 md:px-gutter mb-10 md:mb-xl"
      id="contact"
    >
      <div className="glass-panel p-6 md:p-xl rounded-[3rem] border-2 border-primary/20 relative overflow-hidden">
        {/* Background Icon */}
        <div className="absolute top-0 right-0 p-6 md:p-xl opacity-10">
          <span className="material-symbols-outlined text-[10rem]">mail</span>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          {/* LEFT CONTENT */}
          <div className="col-span-12 lg:col-span-5">
            <h2 className="font-display text-display uppercase mb-md">
              Initialize <br />
              <span className="text-secondary">Direct_Link</span>
            </h2>

            <p className="font-body-lg text-on-surface-variant mb-xl leading-relaxed">
              Ready to upgrade your digital infrastructure? Send a packet over
              the wire and let's construct the future of the web together.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                </div>

                <div>
                  <p className="text-sm text-on-surface-variant">EMAIL</p>
                  <p className="text-on-surface">tanjiya098@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">
                    call
                  </span>
                </div>

                <div>
                  <p className="text-sm text-on-surface-variant">PHONE</p>
                  <p className="text-on-surface">+8801834776544</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                </div>

                <div>
                  <p className="text-sm text-on-surface-variant">LOCATION</p>
                  <p className="text-on-surface">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="col-span-12 lg:col-span-7">
            <div className="gradient-border-box rounded-[32px] p-8 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-label-md text-on-surface-variant uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-surface-container-highest/50 border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-label-md text-on-surface-variant uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-surface-container-highest/50 border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-label-md text-on-surface-variant uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject_line"
                    required
                    placeholder="Project Inquiry"
                    className="w-full bg-surface-container-highest/50 border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-label-md text-on-surface-variant uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-surface-container-highest/50 border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:border-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full primary-btn-gradient py-4 rounded-xl font-h3 text-white shadow-lg hover:shadow-primary/20 transition-all uppercase tracking-widest disabled:opacity-50"
                  >
                    {status === "loading" ? "Initializing..." : "Send_Message"}
                  </button>

                  {message && (
                    <p
                      className={`text-center font-label-md text-sm ${status === "success" ? "text-primary" : "text-error"}`}
                    >
                      {message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
