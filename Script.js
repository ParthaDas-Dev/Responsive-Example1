//Jquery
$(document).ready(function(){
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
    $('.modal').modal();
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('.fixed-action-btn').floatingActionButton();
    $('.tabs').tabs();
    M.updateTextFields();
    $('input.phone_no').characterCounter();
  });
  //Slider 
  const slider = document.querySelector(".slider");
  M.Slider.init(slider,{
    indicators:false,
    height:400,
    transition:500,
    interval:5000
  });

//Search AutoCompelete With IMG URL
const autocomplete = document.querySelector(".autocomplete");
M.Autocomplete.init(autocomplete,{
  data: {
    "Products":'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
    "Acer":'https://upload.wikimedia.org/wikipedia/commons/d/d7/Acer-Logo_2011.png',
    "Asus":'https://upload.wikimedia.org/wikipedia/commons/d/de/AsusTek-black-logo.png',
    "lenovo":'https://upload.wikimedia.org/wikipedia/commons/0/05/Lenovo-Logo.svg',
    "Corsair":'https://upload.wikimedia.org/wikipedia/commons/d/d3/Corsair_logo.png',
    "HyperX":'https://upload.wikimedia.org/wikipedia/commons/b/b7/Kingston_HyperX_120GB_3K_SSD.JPG',
    "Predator Series":'https://upload.wikimedia.org/wikipedia/commons/c/c5/Acer_Predator.png',
    "Xbox":'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/600px-Xbox_one_logo.svg.png',
    "Windows":'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Windows_10_logo.png/240px-Windows_10_logo.png',
    "Gigabtye":'https://upload.wikimedia.org/wikipedia/commons/1/11/GigaByte_Logo.png',
    "AMD":'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/1280px-AMD_Logo.svg.png',
    "Intel":'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/800px-Intel-logo.svg.png',
    "Playsation":'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/1009px-Playstation_logo_colour.svg.png',
    "Apple":'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png',
    "Macbook":'https://upload.wikimedia.org/wikipedia/commons/6/6e/MacbookPro.png',
    "Processors":'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Apple_A5_Chip.jpg/511px-Apple_A5_Chip.jpg',
    "Graphics Cards":'https://upload.wikimedia.org/wikipedia/commons/3/38/ASUS_NVIDIA_GeForce_210_silent_graphics_card_with_HDMI.JPG',
    "Ram":'https://cdn.pixabay.com/photo/2019/08/08/16/55/ram-4393379_960_720.jpg',
    "PSU":'https://p0.pikist.com/photos/722/758/power-supply-case-computer-psu-fan.jpg',
    "Cabinet":'https://cdn.pixabay.com/photo/2015/03/21/19/27/pc-684125_960_720.jpg',
    "Cooling":'https://upload.wikimedia.org/wikipedia/commons/0/0b/Arctic_cooling_fan_Pro_TC_20060621.jpg',
    "MSI":'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Msi-Logo.jpg/1280px-Msi-Logo.jpg',
    "Zotac":'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Logo_of_Zotac_International.svg/800px-Logo_of_Zotac_International.svg.png',
    "Kingston":'https://upload.wikimedia.org/wikipedia/commons/9/90/Kingston_technology_logo.jpg',
    "Games":'https://upload.wikimedia.org/wikipedia/commons/f/f4/Magicdelivery_gaming_logo.svg',



       
  }
})
//Floating Button
const FAB = document.querySelector('.fixed-action-btn');
M.FloatingActionButton.init(FAB, {
      direction: 'left'
    });
    //Animate On Scroll
    AOS.init();