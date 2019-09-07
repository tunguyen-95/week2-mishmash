function groupAdultsByAgeRange(persons) {
    return persons.reduce((ob,person)=>{

        if (person.age<18) {
            return ob;
        }
        if (person.age < 21) {
            !ob['20 and younger'] ? ob['20 and younger'] = [person] : ob['20 and younger'].push(person);
        } else if (person.age < 31 ) {
            !ob['21-30'] ? ob['21-30'] = [person] : ob['21-30'].push(person);
        } else if (person.age < 41 ) {
            !ob['31-40'] ? ob['31-40'] = [person] : ob['31-40'].push(person);
        } else if (person.age < 51) {
            !ob['41-50'] ? ob['41-50'] = [person] : ob['41-50'].push(person);
        } else {
            !ob['51 and older'] ? ob['51 and older'] = [person] : ob['51 and older'].push(person);
        }
        return ob;


    }, {});

}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;