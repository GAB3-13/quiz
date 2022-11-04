var correct_ans = ["Riley","12","Viewsonic","Eagles","CSET","Neon","Car","Glue","Riley","Dell"];
var user_ans= [];

let final_score = 0;


function score()
{
    if(user_ans<10)
    // {
    // alert("answer the remaining questions");
    // }
    // else
    displayRadioValue()
    console.log("\n\n\n");
    for(x = 0;x<11;x++)
    {
        if(user_ans[x] === correct_ans[x])
        {
            final_score ++ ;
        }
        
    }
    alert("Your score is " + final_score + "/10");
}
// let x=document.getElementsByClassName("1q")
// function check1() {
//     if(x.checked)
//     {console.log("happy")}
// }
// selectElement = document.querySelector('q1');
//         output = selectElement.value;
//         console.log(output)


// function check1()
// {
//     q1=document.getElementById("1q")
//     if(q1===q1.checked)
//     {
//         alert("hehe")
//     }
//     else{
//         alert("answer the question")
//     }
// }


// // function add_ans(x,y)
// {
//     // console.log("test");
//     // user_ans[y] = x.value;
//     // console.log(user_ans[y]);
// }


function displayRadioValue() {
    var ele = document.getElementsByName('Q');
        
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        {
            user_ans.push(ele[i].value);
            console.log(ele[i].value,i);
        }
        // document.getElementById("result").innerHTML
        //         = "Q: "+ele[i].value;
    }
};

// function search(ans)
// {
// if(ans.name === "G")
// final_score ++
// }
// function score()
// {
//     console.log(final_score)
// }
function refreshPage(){
    window.location.reload();
} 
// function display2()
// {
// document.getElementById('question2').style.display="block";
// }