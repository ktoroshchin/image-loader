$(document).ready(function () {
    console.log('hello world')
    $("<div/>").attr('class','img').appendTo('body'); 
    fetchImg().then(res => {
        console.log('FRONT END RESPONSE',res)
   
        const img = $("<img/>").attr('src', `data:image/jpeg;base64,${res}`)
        $('.img').append(img)
    })




    function fetchImg() {
        return $.ajax('/fetch-image/2')
            .then(res => res)
    }
})