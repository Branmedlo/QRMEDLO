document.addEventListener("DOMContentLoaded", function(){
    //Declaro los inputs y accedo a ellos por la etiqueta HTML

    const ssid = document.getElementById('red')
    const password = document.getElementById('contra')

    const qrContainer = document.getElementById('qrcode')
    let qrCodeInstance = null

    //Funcion para crear formato WIFI

    function crearCadenaDeWifi(ssid, password){
       if(ssid && password){
        return `WIFI:T:WPA;S:${ssid};P:${password};;`;
       } else if(ssid && !password){
        return `WIFI:T:WPA;S:${ssid};P:;;`;
       }else{
        return "No hay datos"
       }
    }

    const ssidInicial = ssid.value;
    const passwordInicial = password.value;

    const inicialText = crearCadenaDeWifi(ssidInicial, passwordInicial);

    qrCodeInstance = new QRCode(qrContainer, {
        text: inicialText,
        width: 250,
        heigth: 250
    })

    function actualizarQR(){
        const actualSSID = ssid.value;
        const actualPassword = password.value;

        const newText = crearCadenaDeWifi(actualSSID, actualPassword);

        qrCodeInstance.makeCode(newText);
    }

    ssid.addEventListener('input', actualizarQR);
    password.addEventListener('input', actualizarQR);
})