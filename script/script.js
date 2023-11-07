// Toggle class active
const navbarnavq = document.querySelector
('.navbar-nav');

//ketija hamburger menu di clik
document.querySelector('#hamburger-menu').
onclick = () => {navbarnavq.classList.toggle('active');};

//klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector
('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarnavq.contains(e.target)) {
        navbarnavq.classList.remove('active');
    }
})



//Memunculkan form pemesanan
var modals = [document.getElementById("formmenu0"), 
              document.getElementById("formmenu1"), 
              document.getElementById("formmenu2"), 
              document.getElementById("formmenu3"), 
              document.getElementById("formmenu4"), 
              document.getElementById("formmenu5"), 
              document.getElementById("formmenu6"), 
              document.getElementById("formmenu7"), 
              document.getElementById("formmenu8"), 
              document.getElementById("formmenu9"), 
              document.getElementById("formmenu10"), 
              document.getElementById("formmenu11")];

var spans = document.getElementsByClassName("close");

for(let i = 0; i < modals.length; i++) {
var btns = document.getElementById("btnmenu"+i);
  btns.onclick = function() {
    modals[i].style.display = "block";
    var inputj = document.getElementById("inputj"+i);
    var inputa = document.getElementById("inputa"+i);
    inputj.focus();
    inputj.onkeydown = function(event) {
      if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();
        inputa.focus();
      }
    }
  }

  spans[i].onclick = function() {
    document.getElementById("inputj"+i).value ="";
    document.getElementById("inputa"+i).value ="";
    modals[i].style.display = "none";}
}


window.onclick = function(event) {
  for(let i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";}
  }
}



//pesan langsung ke chat WA
for(let a = 0; a < modals.length; a++) {
  document.getElementById("Btnps"+a).onclick = function(event){
    var isimenu = document.getElementById("namaminum"+a).innerText;
    var input =[
      document.getElementById("inputj"+a).value,
      document.getElementById("inputa"+a).value];
    
   /*kirim pesan menu 1*/
if(input[0] != "" && input[1] != "") {
  var waLink = "https://wa.me/+6285762444921?text=" + encodeURIComponent
  (isimenu +" Jumlah Porsi : = "+ input[0] + " di No Meja " + input[1]);
  for(let i = 0; i < modals.length; i++) {
    modals[i].style.display = "none";
  window.open(waLink, '_blank') = waLink;}}

else {
    alert("Harap isi semua jumlah Menu dan No Meja");
    event.preventDefault();}
    }};




/*script keranjang*/

let keranjang = [];



function toggleKeranjang() {
  let keranjangEl = document.getElementById('keranjang');
  keranjangEl.classList.toggle('tampil');
  lihatKeranjang();
}

function lihatKeranjang() {
  let isiKeranjang = document.getElementById('isiKeranjang');
  isiKeranjang.innerHTML = '';
  for(let i = 0; i < keranjang.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = keranjang[i];
      isiKeranjang.appendChild(li);}}

function updateItemCount(count){
  var itemCountElement = document.getElementById('jmlpesanan');
  itemCountElement.textContent = count;
}

function tambahKeKeranjang(produk) {
  keranjang.push(produk);
  alert(produk + ' telah ditambahkan ke keranjang!');
  for(let i = 0; i < modals.length; i++) {
    document.getElementById("inputj"+i).value ="";
    document.getElementById("inputa"+i).value ="";
  modals[i].style.display = "none";
  event.preventDefault();  }
  updateItemCount(keranjang.length);
}

function kirimKeWA() {
  if( keranjang.length === 0 ){
    alert("Harap isi semua jumlah Menu dan No Meja");
        event.preventDefault();}
  else{
        let pesan = 'Saya ingin memesan :\n';
        for(let i = 0; i < keranjang.length; i++) {
            pesan += (i+1) + '. ' + keranjang[i] + '\n';
        }
        window.open('https://wa.me/+6285762444921/?text=' + encodeURIComponent(pesan));
        }}

//menu masuk ke keranjang
for(let x = 0; x < 999; x++) {
  document.getElementById("BtnK"+x).onclick = function(event){
    var isimenu =
      document.getElementById("namaminum"+x).innerText;
    var input =[
      document.getElementById("inputj"+x).value,
      document.getElementById("inputa"+x).value];
                 
      if(input[0] != "" && input[1] != ""){
              tambahKeKeranjang([isimenu +" Jumlah porsi : "+ input[0] + " | Di No Meja : " + input[1]]);
            toggleKeranjang();}

      else {
        alert("Harap isi semua jumlah Menu dan No Meja");
        event.preventDefault();}
      }};


   



