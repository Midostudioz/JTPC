function sendPrayer() {
    const name = document.getElementById("prayerName").value.trim();
    const message = document.getElementById("prayerMessage").value.trim();

    if (name === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    const text =
        "🙏 JTPC PRAYER REQUEST%0A%0A" +
        "Name: " + encodeURIComponent(name) +
        "%0A%0APrayer Request:%0A" +
        encodeURIComponent(message);

    const whatsappNumber = "254712550886";

    window.open(
        "https://wa.me/" + whatsappNumber + "?text=" + text,
        "_blank"
    );
}
