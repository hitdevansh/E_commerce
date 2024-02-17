$('#slider1, #slider2, #slider3').owlCarousel({
    loop: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            width: 300, // Set width for viewport width less than 600 pixels
            height: 200 // Set height for viewport width less than 600 pixels
        },
        600: {
            items: 2,
            width: 500, // Set width for viewport width between 600 and 1000 pixels
            height: 300 // Set height for viewport width between 600 and 1000 pixels
        },
        1000: {
            items: 5,
            width: 800, // Set width for viewport width greater than 1000 pixels
            height: 400 // Set height for viewport width greater than 1000 pixels
        },
        2000: { // Use a greater value than 1000 if needed
            items: 5,
            width: 800, // Set width for viewport width greater than 1000 pixels
            height: 400 // Set height for viewport width greater than 1000 pixels
        }
    }
});

// $('#slider2, #slider3').owlCarousel({
//     loop: true,
//     margin: 20,
//     responsiveClass: true,
//     responsive: {
//         0: {
//             items: 1,
//             nav: false,
//             autoplay: true,
//         },
//         600: {
//             items: 3,
//             nav: true,
//             autoplay: true,
//         },
//         1000: {
//             items: 5,
//             nav: true,
//             loop: true,
//             autoplay: true,
//         }
//     }
// })



$('.plus-cart').click(function() {
    var id = $(this).attr("pid").toString();
    var eml = this.parentNode.children[2]
    console.log(id);
    $.ajax({
        type: "GET",
        url: "/pluscart",
        data: {
            prod_id: id
        },
        success: function(data) {
            eml.innerText = data.quantity
            document.getElementById("amount").innerText = data.amount
            document.getElementById("totalamount").innerText = data.totalamount
        },
        error: function(error) {
            console.log("Error:", error);
        }
    });
});

$('.minus-cart').click(function() {
    var id = $(this).attr("pid").toString();
    var eml = this.parentNode.children[2]
    console.log(id);
    $.ajax({
        type: "GET",
        url: "/minuscart",
        data: {
            prod_id: id
        },
        success: function(data) {
            eml.innerText = data.quantity
            document.getElementById("amount").innerText = data.amount
            document.getElementById("totalamount").innerText = data.totalamount
        },
        error: function(error) {
            console.log("Error:", error);
        }
    });
});

$('.remove-cart').click(function() {
    var id = $(this).attr("pid").toString();
    var eml = this
    console.log(id);
    $.ajax({
        type: "GET",
        url: "/removecart",
        data: {
            prod_id: id
        },
        success: function(data) {
            document.getElementById("amount").innerText = data.amount
            document.getElementById("totalamount").innerText = data.totalamount
            eml.parentNode.parentNode.parentNode.parentNode.remove(a)
            location.reload(true);
        },
        error: function(error) {
            console.log("Error:", error);
        }
    });
});