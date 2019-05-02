$(".push").click(function() {
    var imagelink = $(".C").val();
    var price = $(".B").val();
    var name = $(".A").val();
    var productname = [];
    var productprice = [];
    var productimage = [];
    
    productimage.push(imagelink);
    productname.push(name);
    productprice.push(price);
    productimage.forEach(function(picture) {
        $(".coding").append("<img src=" + picture + ">");
    });
    productname.forEach(function(word) {
        $(".coding").append("<p>" + word + "</p>");
    });
    productprice.forEach(function(cost) {
        $(".coding").append("<p>" + cost + "</p>");
    });
    var sum=0;

productprice.forEach(function(amount) {
    sum = sum + amount;
});


