
const msg = document.querySelector("#msgg");
const userScorePara = document.querySelector("#score-id");
const compScorePara = document.querySelector("#Comp-id");
const DrawScorePara = document.querySelector("#Draw-id");

let draw_score = 0;
let user_score = 0;
let comp_score = 0;

const randomGenerator = () => {
    const choices = ["paper", "scissor", "stone"];
    const comp_choice = Math.floor(Math.random() * 3);
    return choices[comp_choice];
};

const game = (user_choice) => {
    const comp_choice = randomGenerator();
    if (user_choice === comp_choice) {
        draw_score++;
        msg.innerText = `Match Drawn`;
        DrawScorePara.innerText = draw_score;
    } else {
        if(user_choice==="stone"&& comp_choice==="paper"){
        comp_score++;
        msg.innerText = `Comp wins!and you chose ${user_choice} and comp chose${comp_choice}`;
        compScorePara.innerText = comp_score;
        }
        else if(user_choice==="paper"&& comp_choice==="scissor"){
            comp_score++;
            msg.innerText = `Comp wins! and you chose ${user_choice} and comp chose${comp_choice}`;
            compScorePara.innerText = comp_score;
            }
            else if(user_choice==="scissor"&& comp_choice==="paper"){
                user_score++;
                msg.innerText = `You win! and you chose ${user_choice} and comp chose ${comp_choice}`;
                userScorePara.innerText = user_score;
                }
                else{
                user_score++;
                msg.innerText = `You win! and you chose ${user_choice} and comp chose ${comp_choice}`;
                userScorePara.innerText = user_score;
                }
        
    }
};

const opt = document.querySelectorAll(".option");

opt.forEach(option => {
    option.addEventListener("click", () => {
        const user_choice = option.getAttribute("id");
        game(user_choice);
    });
});
