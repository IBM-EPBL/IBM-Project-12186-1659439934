var height = $("#height").val();
var width = $("#width").val();
var error = false;
if(height <= 0) {
    error = true;
}
if(width <= 0) {
    error = true;
}
if(width > 2 * height) {
     error = true;
}
if(height > 2 * width) {
    error = true;
}

if(!error) {
    var area = .5 * height * width;
     $("#area").val(area);
}