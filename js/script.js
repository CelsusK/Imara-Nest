document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("appointmentForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const doctor = form.doctor.value;
    const date = form.date.value;
    const time = form.time.value;

    if (!doctor || !date || !time) {
      alert("Please fill in all fields.");
      return;
    }

    alert(`Appointment booked with ${doctor} on ${date} at ${time}.`);
    form.reset();
  });
});
