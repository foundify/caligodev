$('#landingSubmit').click(function() {
    var value = $('input[name=option]:checked').val();
    if (value == 'Basic') {
      console.log(value);
      window.open('https://square.link/u/XoQ884Vy','_blank');
    }
    else if (value == 'Advanced') {
      console.log(value);
      window.open('https://square.link/u/YtCWtArP','_blank');
    }
  });