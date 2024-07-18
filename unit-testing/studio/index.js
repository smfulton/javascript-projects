
let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput:function(number){
        if(number % 2 == 0){
            if(number % 3 == 0){
                if(number % 5 == 0){
                    return 'LaunchCode Rocks!';
                }
                else{
                    return 'LaunchCode!';
                }
            }
            else if(number % 5 == 0){
                return 'Launch Rocks! (CRASH!!!!)';
            }
            else{
                return 'Launch!';
            }
        }
        else if(number % 3 == 0){
            if(number % 5 == 0){
                return 'Code Rocks!';
            }
            else{
                return 'Code!';
            }
        }
        else if(number % 5 == 0){
            return 'Rocks!';
        }
        else{
            return "Rutabagas! That doesn't work.";
        }
    }
}

module.exports = launchcode;

