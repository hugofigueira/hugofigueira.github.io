// TOOLTIP

$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});


// BENEFICIARIO

$(document).ready(function(){

  $('#beneficiario_open').hide();
  $('#beneficiario_selected').hide();

  $('#openit').click(function(){ 
      $('#beneficiario').hide();
      $('#beneficiario_open').slideDown();
  });

  $('#closeit').click(function(){ 
      $('#beneficiario_open').hide();
      $('#beneficiario').show();
  }); 
  $('#choseit').click(function(){ 
      $('#beneficiario_open').hide();
      $('#beneficiario_selected').slideDown();
  }); 
  $('#removeit').click(function(){ 
      $('#beneficiario_selected').hide();
      $('#beneficiario').fadeIn();
  }); 
});


// PHONE ICON

$(document).ready(function(){

  $('#phonebig').hide();

  $('#phoneopen').click(function(){ 
      $('#phoneopen').fadeOut();
      $('#phonebig').slideDown();
  });

  $('#phoneclose').click(function(){ 
      $('#phonebig').fadeOut();
      $('#phoneopen').show();
  }); 
});


// SUBMENUS

$(document).ready(function(){

  $('#sm-transfers').hide();
  $('#sm-payments').hide();
  $('#sm-accounts').hide();

  $('#sm-transfers-open').click(function(){ 
      $('#sm-transfers').slideToggle();
      $('#sm-payments').hide();
      $('#sm-accounts').hide();
      $('#sm-transfers-open').toggleClass("activelink2");
      $('#sm-payments-open').removeClass("activelink2");
      $('#sm-accounts-open').removeClass("activelink2");
  });

  $('#sm-payments-open').click(function(){ 
      $('#sm-payments').slideToggle();
      $('#sm-transfers').hide();
      $('#sm-accounts').hide();
      $('#sm-payments-open').toggleClass("activelink2");
      $('#sm-transfers-open').removeClass("activelink2");
      $('#sm-accounts-open').removeClass("activelink2");
  });

  $('#sm-accounts-open').click(function(){ 
      $('#sm-accounts').slideToggle();
      $('#sm-transfers').hide();
      $('#sm-payments').hide();
      $('#sm-accounts-open').toggleClass("activelink2");
      $('#sm-transfers-open').removeClass("activelink2");
      $('#sm-payments-open').removeClass("activelink2");
  });

});


$(document).ready(function(){

  $('#sm-transactions-open').hover(function(){ 
      $('#sm-transactions-open').toggleClass("activelink2");
  });

});

// SEARCH

$(document).ready(function(){

  $('#sm-search').hide();

  $('#sm-search-open').click(function(){ 
      $('#sm-search').slideToggle();
  });

  $('#sm-search-close').click(function(){ 
      $('#sm-search').slideToggle();
  });

});


// TIME OUT

$(document).ready(function() {
    setTimeout(function() {
      $('#timeout').modal('show');
    }, 555000); // milliseconds
});