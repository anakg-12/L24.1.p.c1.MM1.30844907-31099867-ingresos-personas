export default class CL_ingreso{
    constructor(n,i){
        this.nombre=n;
        this.ingre=i;
    }
    getnombre(){
        return this.nombre;
    }
    getingre(){
        return this.ingre;
    }
    setnombre(n){
    this.nombre=n;
}
setingre(i){
    this.ingre=i;
}

}