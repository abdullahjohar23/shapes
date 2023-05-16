// triangle area
let b,h;
function area_of_triangle() {
    b = document.getElementById("value_of_b_triangle").value;
    h = document.getElementById("value_of_h_triangle").value;
    document.getElementById("Show_result").innerHTML = "Area = " + 0.5 * b * h;

    let list = document.getElementById('ans');
    let li = document.createElement('li');
    li.innerText = "Triangle: " + ans;
    list.appendChild(li);
}

// rectangle area
let w ,i;
function area_of_rectangle() {
    w = document.getElementById("value_of_b_rectangle").value;
    i = document.getElementById("value_of_l_rectangle").value;
    document.getElementById("Show_result").innerHTML = "Area = " + w * i;

    let list = document.getElementById('ans');
    let li = document.createElement('li');
    li.innerText = "Rectangle: " + ans;
    list.appendChild(li);
}

// pentagon area
let pp, bp;
function area_of_pentagon() {
    pp = document.getElementById("value_of_b_pentagon").value;
    bp = document.getElementById("value_of_l_pentagon").value;
    document.getElementById("Show_result").innerHTML = "Area = " + 0.5 * pp * bp;

    let list = document.getElementById('ans');
    let li = document.createElement('li');
    li.innerText = "Pentagon: " + ans;
    list.appendChild(li);
}