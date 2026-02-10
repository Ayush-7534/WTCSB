// function aa(){
//     console.log('first');
// }
// setTimeout(aa,2000);

// setTimeout(()=> {
//     console.log("First");
// },4000);

// let count = 0;
// let id = setInterval(()=>{
//     console.log("First");
//     count++;
//     if(count === 5){
//         clearInterval(id);
//     }
// }, 2000);


// let count = 2;
// function roll(num , next){      
//     setTimeout(()=>{
//         console.log("Roll. no. is - "+num);
//         if(next) next()
//     }, 1000*(count++))
// }

// roll(11 , ()=>{   // this is called callback hell
//     console.log("Wait its getting downloading");
//     roll(12 , ()=>{
//         console.log("Wait its getting downloading");
//         roll(13 , ()=> {
//             console.log("Wait its getting downloading");
//             roll(14);

//         });

//     });
// });

// Arrays for teams
const uiTeam = ["HTML", "CSS", "JavaScript"];
const flutterTeam = ["Dart", "Flutter", "Firebase"];

// Function to display team based on type
const display = (teamType, option) => {
    switch (teamType) {
        case "UI":
            console.log("UI Team:", uiTeam);
            break;

        case "FLUTTER":
            console.log("Flutter Team:", flutterTeam);
            break;

        case "ALL":
            const mergedTeam = [...uiTeam, ...flutterTeam]; // spread operator
            console.log("All Teams:", mergedTeam);
            break;

        default:
            console.log("Invalid team type");
    }
};

// Function to show menu and teams
const showMenu = () => {
    console.log("UI Team Members:");
    console.log(uiTeam);

    console.log("\nFlutter Team Members:");
    console.log(flutterTeam);

    console.log("\nMerged Team Members:");
    const merged = [...uiTeam, ...flutterTeam];
    console.log(merged);
};

// Function calls
showMenu();
display("UI");
display("FLUTTER");
display("ALL");

