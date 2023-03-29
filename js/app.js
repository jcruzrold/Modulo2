var oHotel = {
    Palace: { 
        hotelName: "Palace",
        hotelLocation: "Madrid",
        hotelImage: "https://static.hosteltur.com/app/public/uploads/img/articles/2020/08/26/L_100024_palace-madrid-puerta-cerrada-r.jpg"
    },
    Renaissance: { 
        hotelName: "Renaissance",
        hotelLocation: "Barcelona",
        hotelImage: "https://pix10.agoda.net/hotelImages/408/408552/408552_14093013550022498072.jpg?ca=3&ce=1&s=1024x768"
    },
    Miramar: { 
        hotelName: "Miramar",
        hotelLocation: "Málaga",
        hotelImage: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/fb/42/00/pool.jpg?w=1200&h=-1&s=1"
    }
}

var oHotelStars = {
    una:    "&#9733;&#9734;&#9734;&#9734;&#9734;",
    dos:    "&#9733;&#9733;&#9734;&#9734;&#9734;",
    tres:   "&#9733;&#9733;&#9733;&#9734;&#9734;",
    cuatro: "&#9733;&#9733;&#9733;&#9733;&#9734;",
    cinco:  "&#9733;&#9733;&#9733;&#9733;&#9733;"
}

var sHotelName = window.prompt("Indique el hotel sobre el que quiere hacer la reseña: Palace, Renaissance, Miramar");
var sHotelScore = window.prompt("Indique la puntuación del hotel: una, dos, tres, cuatro o cinco estrellas");
var bEsReseñaAnonima = window.confirm("¿Desea hacer anónima la reseña?");

document.getElementById("hotelName").innerHTML = oHotel[sHotelName].hotelName;
document.getElementById("hotelLocation").innerHTML = "Ubicado en " + oHotel[sHotelName].hotelLocation;
document.getElementById("hotelImage").src = oHotel[sHotelName].hotelImage;
document.getElementById("stars").innerHTML = oHotelStars[sHotelScore];
document.getElementById("anonimousReviewCheck").checked = bEsReseñaAnonima;