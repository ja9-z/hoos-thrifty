class itemProfile{
    //private fields:
    //person personal info: first name, last name, email, phone
    //furniture info: name, short description, tags, answers to hinge questions? lol
    //tags must be all lowercase, and will be limited to 10 

    constructor(lastName, firstName, email, itemName){
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.itemName = itemName;
        this.itemTags = [];
        this.itemAnswers = ["", "", "", "", "", ""];
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }

    addTags(tag){
        if(this.itemTags.length < 10 && this.itemTags.indexOf(tag) == -1){
            this.itemTags.push(tag.toLowerCase());
        }
        
    }
    removeTag(tag){
        const idx = this.itemTags.indexOf(tag);
        this.itemTags.splice(idx, 1);
    }


}


