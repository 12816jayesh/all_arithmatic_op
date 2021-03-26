//reach the container of the operation
const container = document.querySelector("#container");

// accses the container element by useing gettag name method 
const all_div_tag = container.getElementsByTagName("div");
console.log(all_div_tag);

// additon input access
const operation_div_add = all_div_tag[0].getElementsByTagName("input");
const operation_add_btn = all_div_tag[0].getElementsByTagName("button");

// // subtraction div access 
const operation_sub= all_div_tag[2].getElementsByTagName("input");
const operation_sub_btn= all_div_tag[2].getElementsByTagName("button");
// Division div access
const operation_div = all_div_tag[4].getElementsByTagName("input");
const operation_div_btn = all_div_tag[4].getElementsByTagName("button");
//multiplication div access
const operation_mul = all_div_tag[6].getElementsByTagName("input");
const operation_mul_btn = all_div_tag[6].getElementsByTagName("button");



//factorial operation
 const operation_fact= all_div_tag[8].getElementsByTagName("input");
const operation_fact_btn = all_div_tag[8].getElementsByTagName("button");
 
//armstrong number 
const operation_arm= all_div_tag[10].getElementsByTagName("input");
const operation_arm_btn = all_div_tag[10].getElementsByTagName("button");


//even or odd
const operation_ev= all_div_tag[14].getElementsByTagName("input");
const operation_ev_btn = all_div_tag[14].getElementsByTagName("button");





// accses the button 



//addition operation

operation_add_btn[0].onclick=function addition_op() {
    var fno = parseInt(operation_div_add[0].value);
    var sno = parseInt(operation_div_add[1].value);
    var addtion_ans = fno + sno;

    all_div_tag[1].innerHTML = "<p>" + "Addition is =" + addtion_ans + "<p>";
};

//subtraction 
operation_sub_btn[0].onclick=function subtraction_op() {
    var fno = parseInt(operation_sub[0].value);
    var sno = parseInt(operation_sub[1].value);
    var subtraction_ans = fno - sno;

    all_div_tag[3].innerHTML = "<p>" + "Subtraction is =" +subtraction_ans + "<p>";
};

//division
operation_div_btn[0].onclick=function division_op() {
    var fno = parseInt(operation_div[0].value);
    var sno = parseInt(operation_div[1].value);
    var division_ans = fno / sno;

    all_div_tag[5].innerHTML = "<p>" + "Subtraction is =" +division_ans+ "<p>";
};

//multiplicaton
operation_mul_btn[0].onclick=function multiplication_op() {
    var fno = parseInt(operation_mul[0].value);
    var sno = parseInt(operation_mul[1].value);
    var multiplicaton_ans = fno * sno;

    all_div_tag[7].innerHTML = "<p>" + "Subtraction is =" +multiplicaton_ans+ "<p>";
};

//factorial operation has performed
operation_fact_btn[0].onclick=function factorial_op() {
    var factorial_ans= 1;
    var number = parseInt(operation_fact[0].value);

    while (number >= 1 ) {
        factorial_ans = factorial_ans * number;
        number--;
    }

    all_div_tag[9].innerHTML = "<p>" + "Factorial  is =" +factorial_ans+ "<p>";
};


//Armstrong number
operation_arm_btn[0].onclick = function armstrongl_op() {
    var b, temp, c = 0;
    var no=operation_arm[0].value;
    temp= no;
    while (temp > 0) {
        b = temp % 10;
        c = c + (b * b * b);
        temp= parseInt(temp / 10);

    }
    if (no== c) {
        all_div_tag[11].innerHTML = "<p>" + " Number is armstrong "+ "<p>";
    }
    else {
        all_div_tag[11].innerHTML = "<p>" + " Number is not armstrong " + "<p>";
    }

};



//check even or odd 

operation_ev_btn[0].onclick=function even_odd_op() {
    var no = parseInt(operation_ev[0].value);
    if (no % 2 == 0)
    {
        all_div_tag[15].innerHTML = "<p>" + "Number is Even" + "<p>";
    } else {
        all_div_tag[15].innerHTML = "<p>" + "Number is odd"+"<p>";
    }

   
};



// //Table print





//conatainer two operation element accses 


const con_two = document.querySelector("#container_two");

const div_op_tag = con_two.getElementsByTagName("div");

console.log(div_op_tag);

//for table
var table_input = div_op_tag[0].getElementsByTagName("input");
var table_btn = div_op_tag[0].getElementsByTagName("button");

//for table
var fibo_input = div_op_tag[2].getElementsByTagName("input");
var fibo_btn = div_op_tag[2].getElementsByTagName("button");


//table function
table_btn[0].onclick=function print_table() {

    var no = parseInt(table_input[0].value);
     
    for (i = no; i <= no*10; i = i + no){
        var li_ele = document.createElement("li");
        li_ele.innerText = i;
        div_op_tag[1].firstElementChild.append(li_ele);
    }


};



fibo_btn[0].onclick = function fibonacci() {
    
    var start = parseInt(fibo_input[0].value);
    var end =start+1;
    var sum;
    var check_one = parseInt(fibo_input[1].value);

    var check_two = start + 9;

    if (check_one == check_two)
    {
        var li_one = document.createElement("li");
        li_one.innerText = start;
        div_op_tag[3].firstElementChild.append(li_one);
        var li_two = document.createElement("li");
        li_two.innerText = end;
        div_op_tag[3].firstElementChild.append(li_two);
    
        for (let i = 3; i <= 10; i++){
            sum = start + end;
            start = end;
            end = sum;
            var last_li = document.createElement("li");
            last_li.innerText = sum;
            div_op_tag[3].firstElementChild.append(last_li);
    
        }
    } else {
        alert("Plese Enter valind input for ex = 11 to 20 ");
       }

};
