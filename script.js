let inputurl = document.getElementById("input_url")
let btn = document.getElementById("btn")
let qrbox = document.getElementById("qrbox")
let massege = document.getElementById("massege")
let box = document.getElementById("box")
let download = document.getElementById("download")




btn.addEventListener("click", qr_code_gener)


function qr_code_gener() {
    if (input_url.value === "") {
        massege.textContent = "Please, Enter your URL"
        massege.style.color = "red"
        return
    }
    else {
        massege.textContent = "The QR CODE was successfully generated "
        massege.style.color = "blue"
        if(qrbox.innerHTML !== ""){
            qrbox.innerHTML = ""
        }
        new QRCode(qrbox, {
            text: inputurl.value,
            width: 250,
            height: 250
        })
        download.style.display = "block"


    }
    input_url.value = ""

}
download.addEventListener("click", function () {

    const image = qrbox.querySelector("img");
    const canvas = qrbox.querySelector("canvas");

    if (!image && !canvas) {
        alert("Generate QR Code First");
        return;
    }

    const link = document.createElement("a");

    if (image) {
        link.href = image.src;
    } else {
        link.href = canvas.toDataURL("image/png");
    }

    link.download = "";

    link.click();

});


