export function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form || !status) return;

  const placeholderAction = form.getAttribute("action") || "";
  const isConfigured = !placeholderAction.includes("YOUR_FORM_ID");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!isConfigured) {
      status.textContent =
        "Contact form isn't connected to an inbox yet — email balachandra.srinevasalu@gmail.com directly, or set up a free Formspree endpoint (see README).";
      status.className = "form-status err";
      return;
    }

    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    const originalLabel = submitBtn.textContent;
    submitBtn.textContent = "Sending…";
    status.textContent = "";
    status.className = "form-status";

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        status.textContent = "Message sent — thank you, I'll respond soon.";
        status.className = "form-status ok";
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      status.textContent = "Something went wrong sending that — please email balachandra.srinevasalu@gmail.com directly.";
      status.className = "form-status err";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });
}
