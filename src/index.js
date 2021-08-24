const sphynxCats=['Cosmo','Flooky','Cranky','Lila','Daisy','Nala','Lili','Jadu','Horu','Fanny'];

const randomCat=()=>{
    const string =sphynxCats[Math.floor(Math.random()*sphynxCats.length)];
    return string;
};
const makeUpperCase= str=>{
    return new Promise((resolve,reject)=>{
        if (!str) {
            reject(Error("There is no string :/ "));
        }
        resolve(str.toUpperCase());
    });
};

module.exports=randomCat;