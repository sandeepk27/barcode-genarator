document.getElementById("btn").addEventListener("click", () => {
    let input = document.getElementById("text").value;
    JsBarcode("#barcode", text);
});