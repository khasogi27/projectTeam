//tampilan potofolio
var portofolio =[
    ["1", "WEB", "src/img/portfolio-1.jpg",],
    ["2", "WEB", "src/img/portfolio-2.jpg"],
    ["3", "IOS", "src/img/portfolio-3.jpg"],
    ["4", "ANDROID", "src/img/portfolio-4.jpg"],
    ["5", "WEB", "src/img/portfolio-5.jpg"],
    ["6", "ANDROID", "src/img/portfolio-6.jpg"],
    ["7", "IOS", "src/img/portfolio-7.jpg"],
    ["8", "IOS", "src/img/portfolio-8.jpg"]
]

function printItems(portofolio){
    var cards="";

    for(var i=0; i<portofolio.length;i++){
        cards += `<div class="content">
                    <div class="content-icon">
                            <img class="content-img" onclick="showModal('${portofolio[i][0]}')" id="imgs${portofolio[i][0]}"  src="${portofolio[i][2]}">
                            <div class="porto-type">${portofolio[i][1]}</div>
                    </div>
                </div>`
    }
    var listportofolio = document.getElementById("porto-contents")
    listportofolio.innerHTML = cards
    return cards
}

printItems(portofolio);

//Modal Image
var modals =""
for(var i=0;i<portofolio.length;i++){
    modals  += `<!-- The Modal -->    
            <div id="myModal${portofolio[i][0]}" class="zoomin">
                
                  <!-- The Close Button -->
                  <span id="keluar" class="keluar" onclick="keluar(${portofolio[i][0]})">&times;</span>
                
                  <!-- Modal Content (The Image) -->
                  <img class="zoomin-content" id="modalImg${portofolio[i][0]}">
                
                  <!-- Modal Caption (Image Text) -->
                  <div id="caption"></div>
            </div>`
}
var listModal = document.getElementById("porto-zoomin")
listModal.innerHTML = modals



function showModal(imgId){
    var modal = document.getElementById("myModal" + imgId)
    var gambar = document.getElementById("imgs" +imgId);
    var modalImg = document.getElementById("modalImg" + imgId);
    modal.style.display= "block";
    modalImg.src = "src/img/portfolio-"+imgId+".jpg";
    console.log(modalImg.src)
}

function keluar(imgId){
    var modal = document.getElementById("myModal" + imgId)
    // Get the <span> element that closes the modal
    var span = document.getElementById("keluar");

    //When the user clicks on <span> (x), keluar the modal 
    modal.style.display = "none";
}


//filtering search portofolio
function filtering(filter){
    if(filter == 'all'){
        printItems(portofolio) 
    }else{
        var filteredItem =[]
        for(var j=0;j<portofolio.length;j++){
            
            if(portofolio[j][1].toLowerCase().includes(filter.toLowerCase())){
                filteredItem.push(portofolio[j])
            }
        }
        printItems(filteredItem) 
    }
    
}









