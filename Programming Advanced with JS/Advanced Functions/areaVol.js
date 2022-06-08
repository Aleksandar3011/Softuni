function calc(area, vol, params){
    let input = JSON.parse(params);
    console.log(input);

  
}

calc(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`);

    function area(){
        return Math.abs(this.x * this.y);
    }

    function vol(){
        return Math.abs(this.x * this.y * this.z)
    }