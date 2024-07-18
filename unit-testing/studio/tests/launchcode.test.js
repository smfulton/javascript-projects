// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("organization should be nonprofit",function(){
    expect(launchcode.organization).toEqual("nonprofit");
  });
  test("executiveDirector should be Jeff",function(){
    expect(launchcode.executiveDirector).toEqual("Jeff");
  });
  test("programsOffered should contain the correct values",function(){
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
    expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
    expect(launchcode.programsOffered[2]).toEqual("Liftoff");
    expect(launchcode.programsOffered.length).toEqual(3);
  });
  
  test("launchOutput should return Launch! when only divisible by 2",function(){
    expect(launchcode.launchOutput(2)).toEqual("Launch!");
  });  
  test("launchOutput should return Code! when only divisible by 3",function(){
    expect(launchcode.launchOutput(9)).toEqual("Code!");
  });
  test("launchOutput should return Rocks! when only divisible by 5",function(){
    expect(launchcode.launchOutput(25)).toEqual("Rocks!");
  });
  test("launchOutput should return LaunchCode! when divisible by 2 and 3",function(){
    expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
  });
  test("launchOutput should return Code Rocks! when divisible by 3 and 5",function(){
    expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
  });
  test("launchOutput should return Launch Rocks! (CRASH!!!!) when divisible by 2 and 5",function(){
    expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!!)");
  });
  test("launchOutput should return LaunchCode Rocks! when divisible by 2, 3, and 5",function(){
    expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
  });
  test("launchOutput should return Rutabagas! That doesn't work. when not divisible by 2, 3, and 5",function(){
    expect(launchcode.launchOutput(17)).toEqual("Rutabagas! That doesn't work.");
  });

});