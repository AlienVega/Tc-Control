
        var ID,btn,resultfalse,resulttrue,odd=0,even=0,result,i,j,z,tctotal=0;
        ID =document.querySelector("#tc");
        resultfalse =document.querySelector("#resultfalse");
        resulttrue =document.querySelector("#resulttrue");
        btn =document.querySelector("#btn");

        btn.addEventListener("click",function(){
            for(i=0;i<9;i+=2){
                odd+=Number(ID.value[i]);
            }
            odd*=7;
            for(j=1;j<8;j+=2){
                even+=Number(ID.value[j]);
            }
            result=Math.abs(odd-even)
            for(z=0;z<10;z++){
                tctotal+=Number(ID.value[z]);
            }
            resultfalse.style.display="block";
            resulttrue.style.display="none";   
            if(ID.value==""){
                resultfalse.textContent="kimlik numarasını boş bırakamazsınız";
            }
            else if(ID.value.length!==11){
                
                resultfalse.textContent="kimlik numarası 11 haneli olmak zorundadır";
            }else if(isNaN(ID.value)){
                
                resultfalse.textContent="kimlik numarası sayılardan oluşmak zorundadur";
            }else if(ID.value[0]==0){
                
                resultfalse.textContent="kimlik numarasının ilk rakamı sıfır olmaz";
            }else if(result%10 !=Number(ID.value[9])){
                
                resultfalse.textContent="Girilen tc numarası gerçek bir şahısa ait değildir."
            }else if(tctotal%10 != Number(ID.value[10])){
                resultfalse.textContent="Girilen tc numarası gerçek bir kişiye ait değildir."
            }else{
                resultfalse.style.display="none";
                resulttrue.style.display="block";
                resulttrue.textContent="girilen kimlik numarası sorunsuzdur";  
            }
        });
 