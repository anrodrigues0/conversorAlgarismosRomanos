
class NumerosRomanos {


    getUnidades() {
        let unidades = {
            1: 'I', 2: 'II', 3: 'III', 4: 'IV',5: 'V',
            6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX',
        };

        return unidades;
    }

    
    getDezenas(){
        let dezenas = {
            10: 'X',20: 'XX', 30: 'XXX',40: 'XL',50: 'L',
            60: 'LX',70: 'LXX',80: 'LXXX',90: 'XC'
        };
        
        return dezenas;
    }

    getCentenas(){
        let centenas = {
            100: 'C',200: 'CC', 300: 'CCC',400: 'CD',500: 'D',
            600: 'DC',700: 'DCC',800: 'DCCC',900: 'CM',
        };
        
        return centenas;
    }


    getMilhares(){

        let milhares =  {1000:'M' , 2000:'MM' , 3000:'MMM'}

        return milhares;
    }


    setUnidades(value){
        const unidades = this.getUnidades();

        if(value.toString().indexOf(0) != -1 && value.length == 2){ 
            return unidades[value.toString().charAt(1)]
          } else if(value >= 1 && value <= 9){
              return unidades[value];
        }
    }

    setDezenas(value){
        
        const unidades = this.getUnidades();
        const dezenas = this.getDezenas();

            

        if(value.toString().charAt(1) == 0 && value.length == 2) {
            return dezenas[value];
        }


        if(value.toString().charAt(0) == 0){
            return `Por favor , não inicie acima dos decimais com 0.`
        }
        
        if(value.toString().charAt(1) != 0 && value.toString().charAt(0) != 0 ){
            
            return `${dezenas[value.charAt(0)+0]}${unidades[value.charAt(1)]}` 
        }

       
    }

    setCentenas(value){

        const unidades = this.getUnidades();
        const dezenas = this.getDezenas();
        const centenas = this.getCentenas();


        if(value.toString().charAt(0) == 0){
            return `Por favor , não inicie com 0.`
        }


        if(value.toString().substr(1,2) == '00') {
        
            return centenas[value];
        }

        if(value.toString().charAt(1) == 0 ){
            return `${centenas[value.charAt(0)+'00']}${unidades[value.charAt(2)]}`
        }

        if(value.toString().charAt(1) != 0 && value.toString().charAt(2) == 0){
            return `${centenas[value.charAt(0)+'00']}${dezenas[value.charAt(1)+'0']}`
        } else {
            return `${centenas[value.charAt(0)+'00']}${dezenas[value.charAt(1)+'0']}${unidades[value.charAt(2)]}`
        }   

    }

    setMilhares(value){
       
        const unidades = this.getUnidades();
        const dezenas = this.getDezenas();
        const centenas = this.getCentenas();
        const milhares = this.getMilhares(); 
    

        if(value.toString().charAt(0) == 0){
            return `Por favor , não inicie com 0.`
        }


        if(value.toString().substr(1,3) == '000'){
        
            return milhares[value];
        }

        if(value.toString().substr(1,2) == '00'){
            
            return `${milhares[value.charAt(0)+'000']}${unidades[value.charAt(3)]}`
        }

        if(value.toString().charAt(1) == 0 && value.toString().charAt(3) == 0 ){
            return `${milhares[value.charAt(0)+'000']}${dezenas[value.charAt(2)+'0']}`
        }

        if(value.toString().charAt(1) == 0 && value.toString().charAt(3) != 0 ){
            return `${milhares[value.charAt(0)+'000']}${dezenas[value.charAt(2)+'0']}${unidades[value.charAt(3)]}`
        }

        if(value.toString().charAt(1) != '0' && value.toString().substr(2,3) == '00'){

            return `${milhares[value.charAt(0)+'000']}${centenas[value.charAt(1)+'00']}`;
        }

        if(value.toString().charAt(1) != '0' && value.toString().charAt(2) == 0 && value.toString().charAt(3) != 0){
            
            return `${milhares[value.charAt(0)+'000']}${centenas[value.charAt(1)+'00']}${unidades[value.charAt(3)]}`;
        }

        if(value.toString().charAt(1) != '0' && value.toString().charAt(2) != '0' && value.toString().charAt(3) == '0'){
            return `${milhares[value.charAt(0)+'000']}${centenas[value.charAt(1)+'00']}${dezenas[value.charAt(2)+'0']}`;
        } else {
            return `${milhares[value.charAt(0)+'000']}${centenas[value.charAt(1)+'00']}${dezenas[value.charAt(2)+'0']}${unidades[value.charAt(3)]}`
        }
    }

}




class  ConversorRomano extends NumerosRomanos {

    Conversor(value){
        
        if(value >= 1 && value <= 9 ){
         
           return super.setUnidades(value);
         }


         if(value >= 10 && value <= 99) {

            return super.setDezenas(value);
        }


        if(value >= 100 &&  value <= 999) {
            return super.setCentenas(value);
        }


        if(value >= 1000 && value <= 3999){
            return super.setMilhares(value);
        }

        
       if(value.length >= 3 && value.charAt(0) == 0){ 
            return 'Error' 
        } 
        
        
        if(value >= 4000){
            return "Valor maximo 3999";
        } else if (value <= 0){
            return 'Insira um numero acima de zero'
        } 



        
    }
}



document.getElementById("btn").addEventListener('click', () =>{
    
    const conversorRomano =  new ConversorRomano();
    const inputData = document.getElementById("input");
    const outputData = document.getElementById("output");
   
    outputData.value = conversorRomano.Conversor(inputData.value);
   
    inputData.style.display = "none";
    outputData.style.display = "inline-block";

    
    setInterval(() => { window.location.reload() } , 3000);
})