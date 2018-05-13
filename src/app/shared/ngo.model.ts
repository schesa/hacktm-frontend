export class NGO {
    Email: String;
    Password:String;
    Name:String;
    Purpose:String;
    Website:String;
    Location:String;

    constructor(Email: String, Password:String, Name:String,
        Purpose:String, Website:String, Location:String){
            this.Email= Email;
            this.Password=Password;
            this.Name=Name;
            this.Purpose=Purpose;
            this.Website=Website;
            this.Location=Location;  
    }

    getJSON(){
        return "{"+
        "\"email\":\""+this.Email+"\","+
        "\"password\":\""+this.Password+"\","+
        "\"name\":\""+this.Name+"\","+
        "\"purpose\":\""+this.Purpose+"\","+
        "\"website\":\""+this.Website+"\","+
        "\"location\":\""+this.Location+"\""+
        "}";
    }
}