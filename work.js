const navigation = document.querySelector('.navigation');
const menuTab = document.querySelectorAll('.menuTab ');

const innerblock = document.querySelectorAll('.innerlink');
const col =document.querySelectorAll('.col');
const links = document.querySelectorAll('.links');
let path="images/icon-arrow-up.svg";
let path2="images/icon-arrow-down.svg";
const showLink =(ele,i)=>{
     
if (ele.querySelector('.outerlinks').classList.contains('col')) {
    
    
    
    let imarrow =ele.querySelector('.downarrow').querySelector('img');
    
    innerblock.forEach((linkno,k)=>{
     
        
        if (i!==k) {
            
            linkno.classList.remove('active')
            
                
                
     
          linkno.parentElement.querySelector('.outerlinks').querySelector
          ('.downarrow').querySelector('img').src =path2
            
    
           
        }
        else{
           
            
            if(!linkno.classList.contains('active')){
                        linkno.classList.add("active")
                       
                        imarrow.src=path
                    }
            else{
                linkno.classList.remove("active")
                
                imarrow.src=path2
            }
        
        }

    })

}
else{
    innerblock.forEach(element =>{
        element.classList.remove('active')
        element.parentElement.querySelector('.outerlinks').querySelector
          ('.downarrow').querySelector('img').src =path2
    })
    return 0

}


    

}
links.forEach((ele,i)=> {
    ele.addEventListener('click' ,()=>{
        showLink(ele,i)
    })
    
});

const toggelTheBar =()=>{
    
   
   

   if (!navigation.classList.contains("openmenu")) {
      navigation.classList.add("openmenu")
      
       
   }
   else{
      navigation.classList.remove("openmenu")
   }

   
   
}
menuTab.forEach(element => {
      element.addEventListener("click", toggelTheBar)
      
});
      
