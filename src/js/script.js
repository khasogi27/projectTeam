var profile =[
    ["1", "WEB", "src/img/portfolio-1.jpg",],
    ["2", "WEB", "src/img/portfolio-2.jpg"],
    ["3", "IOS", "src/img/portfolio-3.jpg"],
    ["4", "ANDROID", "src/img/portfolio-4.jpg"],
    ["5", "WEB", "src/img/portfolio-5.jpg"],
    ["6", "ANDROID", "src/img/portfolio-6.jpg"],
    ["7", "IOS", "src/img/portfolio-7.jpg"],
    ["8", "IOS", "src/img/portfolio-8.jpg"]
]

function printItems(barang){
    var cards="";

    for(var i=0; i<barang.length;i++){
        cards += `<div class="content">
                    <div class="content-icon">
                            <img class="content-img" onclick="showModal('${profile[i][0]}')" id="imgs${profile[i][0]}"  src="${barang[i][2]}">
                            <div class="porto-type">${barang[i][1]}</div>
                    </div>
                </div>`
    }
    var listProfile = document.getElementById("porto-contents")
    listProfile.innerHTML = cards
    return cards
}

printItems(profile);

//Modal Image
var modals =""
for(var i=0;i<profile.length;i++){
    modals  += `<!-- The Modal -->    
            <div id="myModal${profile[i][0]}" class="zoomin">
                
                  <!-- The Close Button -->
                  <span id="keluar" class="keluar" onclick="keluar(${profile[i][0]})">&times;</span>
                
                  <!-- Modal Content (The Image) -->
                  <img class="zoomin-content" id="modalImg${profile[i][0]}">
                
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







