function redirectSubmit() {
    var value = $('input[name=option]:checked').val();
    if (value == 'Basic') {
      console.log(value);
      window.open('https://square.link/u/DGJdI0bb','_blank');
    }
    else if (value == 'Advanced') {
      console.log(value);
      window.open('https://square.link/u/k59DiHnv','_blank');
    }
  };