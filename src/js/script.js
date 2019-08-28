var opcionIcono='', valormensaje='';
const $icon1=document.getElementById('icon-container-1');
const $icon2=document.getElementById('icon-container-2');
const $icon3=document.getElementById('icon-container-3');
const $icon4=document.getElementById('icon-container-4');
const $icon5=document.getElementById('icon-container-5');


const $product1=document.getElementById('product1');
const $product2=document.getElementById('product2');
const $product3=document.getElementById('product3');
const $product4=document.getElementById('product4');
const $product5=document.getElementById('product5');

const $overlay=document.getElementById('overlay');
const $modal=document.getElementById('modal');


function mostrarDesaparecerModal(){
    if ($overlay.classList.contains('hidden')) {
        $overlay.classList.toggle('hidden');
        $modal.style.animation='modalIn .5s forwards';
    }else{
        $modal.style.animation='modalOut .5s forwards'; 
        setTimeout( function() {
            $overlay.classList.toggle('hidden'); 
       }, 500);     
    }
}

function irHome() {
    // window.scrollTo({top:1000, left:0,behavior:"smooth"});
    document.getElementById('home').scrollIntoView({block:'end', behavior:'smooth'});
}
function irAbout() {
    // window.scrollTo({top:1000, left:0,behavior:"smooth"});
    document.getElementById('about').scrollIntoView({block:'end', behavior:'smooth'});
}
function irClient() {
    // window.scrollTo({top:1000, left:0,behavior:"smooth"});
    document.getElementById('client').scrollIntoView({block:'end', behavior:'smooth'});
}
function irProduct() {
    // window.scrollTo({top:1000, left:0,behavior:"smooth"});
    document.getElementById('product').scrollIntoView({block:'end', behavior:'smooth'});
}
function irContact() {
    // window.scrollTo({top:1000, left:0,behavior:"smooth"});
    document.getElementById('contact').scrollIntoView({block:'end', behavior:'smooth'});
}

function verProducto1() {
    if ($product1.classList.contains('hidden')) {
        ocultarProductoVisible();
        setTimeout( function() {
            $product1.style.animation='verProducto .5s forwards';
            $product1.classList.remove('hidden');
            $product1.classList.add('visible');
            quitarActiveDeIconos();
            $icon1.classList.toggle('active');
           
       }, 0);
    } else {        
    }
}

function verProducto2() {
    if ($product2.classList.contains('hidden')) {
        ocultarProductoVisible();
        setTimeout( function() {
            $product2.style.animation='verProducto .5s forwards';
            $product2.classList.remove('hidden');
            $product2.classList.add('visible');
            quitarActiveDeIconos();
            $icon2.classList.toggle('active');
            
       }, 0);
       
    } else {        
    }
}
function verProducto3() {
    if ($product3.classList.contains('hidden')) {
        ocultarProductoVisible();
        setTimeout( function() {
            $product3.style.animation='verProducto .5s forwards';
            $product3.classList.remove('hidden');
            $product3.classList.add('visible');
            quitarActiveDeIconos();
            $icon3.classList.toggle('active');
          
       }, 0);
    } else {        
    }
}
function verProducto4() {
    if ($product4.classList.contains('hidden')) {
        ocultarProductoVisible();
        setTimeout( function() {
            $product4.style.animation='verProducto .5s forwards';
            $product4.classList.remove('hidden');
            $product4.classList.add('visible');
            quitarActiveDeIconos();
            $icon4.classList.toggle('active');
           
       }, 0);
    } else {        
    }
}

function verProducto5() {
    if ($product5.classList.contains('hidden')) {
        ocultarProductoVisible();
        setTimeout( function() {
            $product5.style.animation='verProducto .5s forwards';
            $product5.classList.remove('hidden');
            $product5.classList.add('visible');
            quitarActiveDeIconos();
            $icon5.classList.toggle('active');
           
       }, 0);
    } else {        
    }
}

// function verProducto1() {
//     if ($product1.classList.contains('visible')) {
       
//     } else {
//         ocultarProductoVisible();
//         $product1.classList.remove('hidden');
//         setTimeout( function() {
//         $product1.classList.add('visible');
//        }, 300);
//     }
// }

// function verProducto2() {
//     if ($product2.classList.contains('visible')) {
       
//     } else {
//         ocultarProductoVisible();
//         $product2.classList.remove('hidden');
//         setTimeout( function() {
//         $product2.classList.add('visible');
//        }, 300);
//     }
// }

// function verProducto3() {
//     if ($product3.classList.contains('visible')) {
       
//     } else {
//         ocultarProductoVisible();
//         $product3.classList.remove('hidden');
//         setTimeout( function() {
//         $product3.classList.add('visible');
//        }, 300);
//     }
// }

// function verProducto4() {
//     if ($product4.classList.contains('visible')) {
       
//     } else {
//         ocultarProductoVisible();
//         $product4.classList.remove('hidden');
//         setTimeout( function() {
//         $product4.classList.add('visible');
//        }, 300);
//     }
// }

function  ocultarProductoVisible() {
    if ($product1.classList.contains('visible')) {
            $product1.style.animation='ocultarProducto .5s ease-out forwards';
            $product1.classList.remove('visible');
        setTimeout( function() {
            $product1.classList.add('hidden'); 
        }, 500);

    }else{
        if ($product2.classList.contains('visible')) {
                $product2.style.animation='ocultarProducto .5s ease-out forwards';
                $product2.classList.remove('visible');
            setTimeout( function() {
                $product2.classList.add('hidden'); 
            }, 500);
        }else{

        if ($product3.classList.contains('visible')) {
                $product3.style.animation='ocultarProducto .5s ease-out forwards';
                $product3.classList.remove('visible');
            setTimeout( function() {
                $product3.classList.add('hidden'); 
            }, 500);
        }else{
            if ($product4.classList.contains('visible')) {
                    $product4.style.animation='ocultarProducto .5s ease-out forwards';
                    $product4.classList.remove('visible');
                setTimeout( function() {
                    $product4.classList.add('hidden'); 
                }, 500);
                
               }else{
                if ($product5.classList.contains('visible')) {
                        $product5.style.animation='ocultarProducto .5s ease-out forwards';
                        $product5.classList.remove('visible');
                    setTimeout( function() {
                        $product5.classList.add('hidden'); 
                    }, 500);
                  }
                }
            }
        }
    }
}

function quitarActiveDeIconos() {
    $icon1.classList.remove('active');
    $icon2.classList.remove('active');
    $icon3.classList.remove('active');
    $icon4.classList.remove('active');
    $icon5.classList.remove('active');
}





// function ocultarProductoVisible() {
//     if ($product1.classList.contains('visible')) {
//         $product1.classList.remove('visible');
//         setTimeout( function(){
//             $product1.classList.add('hidden');
//         }, 300);
//     }else{
//         if ($product2.classList.contains('visible')) {
//             $product2.classList.remove('visible');
//             setTimeout( function(){
//                 $product2.classList.add('hidden');
//             }, 300);
//         }else{

//         if ($product3.classList.contains('visible')) {
//              $product3.classList.remove('visible');
//              setTimeout( function(){
//              $product3.classList.add('hidden');
//              }, 300);
//         }else{
//             if ($product4.classList.contains('visible')) {
//                 $product4.classList.remove('visible');
//                 setTimeout( function(){
//                     $product4.classList.add('hidden');
//                 }, 300);
//                }   
//             }
//         }
//     }
// }