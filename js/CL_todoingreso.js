export default class CL_todoingreso{
    constructor(){
        this.menoringre=9999;
        this.cont=0;
        this.acumingre=0;
    }
    procesar(ing){
    this.cont++;
    this.acumingre+=ing.getingre();
    if(ing.ingre<this.menoringre)
        this.menoringre=ing.ingre;
    }
    promedio(){
       return this.acumingre/this.cont; 

    }

}