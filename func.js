var elements = [];

elements.push(document.querySelector('body'));
elements.push(document.querySelector('h1'));
elements.push(document.querySelectorAll("button"));
elements.push(document.querySelectorAll("a"));




var radio_buttons = [];
radio_buttons.push(document.getElementById("light_radio"));
radio_buttons.push(document.getElementById("dark_radio"));

var radio_result = document.getElementById("radio_result");

var visitCount = localStorage.getItem("page_view") || 1;

// Increment the count on each visit
visitCount = Number(visitCount) + 1;
localStorage.setItem("page_view", visitCount);

// Display the coun
if (document.getElementById("counter-value"))
{
    document.getElementById("counter-value").innerHTML = visitCount;
}

// Reset the counter
function resetCounter()
{
    localStorage.removeItem("page_view");
    document.getElementById("counter-value").innerHTML = 1;
}

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function change_theme()
{
    // if light mode:
    if (radio_buttons[0].checked)
    {
        elements[0].style.backgroundColor = 'white';
        elements[1].style.color = 'black';

        elements[2].forEach(function(button)
        {
            button.style.color = 'black';
            button.style.backgroundColor = 'white';
        });


        elements[3].forEach(function(link)
        {
            link.style.color = "#2a4b8d";
        });
        document.getElementsByClassName("theme_submit_button")[0].style.color = 'grey';
        document.getElementById("welcome_sign").innerHTML = "goodbye";
        document.getElementsByClassName("penguin_pfp")[0].style.border = "5px solid black";
    }
    // elif dark mode:
    else if (radio_buttons[1].checked)
    {
        elements[0].style.backgroundColor = 'black';
        elements[1].style.color = 'blue';

        // for each button, change color to blue and bg to black
        elements[2].forEach(function(button) 
        {
            button.style.color = 'blue';
            button.style.backgroundColor = 'black';
        });
 
        elements[3].forEach(function(link)
        {
            link.style.color = "red";
        });
        document.getElementById("change_theme_button").style.color = "grey";
        document.getElementsByClassName("penguin_pfp").style.border = "5px solid blue";
    }
    // else idk:
    else
    {
        console.log("idk man");
    }
}

const query_box = document.querySelector("textarea");

function handleResize()
{
    this.style.height = "70px";
    this.style.height = this.scrollHeight + "px";
}
query_box.addEventListener("input", handleResize);


window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };


  query_box.addEventListener("keydown", function(event)
  {
    if ((event.ctrlKey && event.key === "Enter") || (event.key === "Enter" && isMobileDevice()))
    {
        if (query_box.value !== "") 
        {
            quack();
        }
    }
});

function isMobileDevice()
{
    const userAgent = navigator.userAgent;
    const mobileKeywords = ["Android", "iPhone", "iPad", "Windows Phone", "Mobile"];

    return mobileKeywords.some(keyword => userAgent.includes(keyword));
}


function submit()
{
    if (query_box.value != "")
    {
        quack();
    }
}

async function quack()
{
    let iterate = Math.floor(Math.random() * 10) + 1;
    for (let i = 1; i <= iterate; i++)
    {
        query_box.value = "";
        let audio = new Audio("quack.mp3");
        audio.volume = 0.3;
        audio.play();
        await sleep(150);
    }
    query_box.value = "";
}

// duck info remov after 12 seconds ⬇

// document.addEventListener('DOMContentLoaded', async function()
// {
//     await sleep(12000);
//     document.getElementById("ddb_info").innerHTML = "";
// });
