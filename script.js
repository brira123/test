// Write all your Javascript here!
function initialize() {
    $.ajax ({
    url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang`,
    success: function(data) {
        console.log(data);
        let info = document.querySelector(".container");
        info.innerHTML +=
        `
        <h2>A Flower A Day...</h2>
        <br>

    <div class="row">
  <div class="col-sm-6">
      <div class="row">
      <div class="col-6 col-md-4"><em>What's new at TechKaro?</em></div>
      </div>
    <div class="card">
    <img class="card-img-top" src="${data.imageURL}" alt="Card image cap">
    <div class="card-footer">
      <small class="card-date"><i class="fas fa-calendar-alt"></i> ${data.date} <i class="fas fa-user"></i> by <span class="green">TechKaro Community</span></small>
    </div>
    <div class="card-body">
      <h5 class="card-title"><strong>${data.info.heading}</strong></h5>
      <p class="card-text">${data.info.description}</p>
    </div>
  </div>
  </div>
  <div class="col-sm-4">
      <div class="row">
      <div class="col-6 col-md-7"><strong>New to TechKaro?</strong> Learn More></div>
      </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${data.sale.heading}</h5>
        <p class="card-text">${data.info.description}</p>
      </div>
    </div>
  </div>
</div>`
    }
})
}

function urd() {
    $.ajax ({
    url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=ur`
    })
}



