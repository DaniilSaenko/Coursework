$(document).ready(function() {
  let domain = {
    "Выберите домен": 0,
    "aijob.github.io": 0,
    "aijob.ru": 27,
    "aijob.org": 71,
  };

  let hosting = {
    "Выберите хостинг": 0,
    Github: 0,
    Эконом: 150,
    Скоростной: 300
  };

  let admin = {
    "Выберите тариф": 0,
    Минимум: 1320,
    Базовый: 3345,
    Стандарт: 6140,
    Оптимальный: 13540,
    Максимальный: 23670
  };

  function domainFillSelect() {
    let html = "";
    for (type in domain) {
      html += "<option value='" + type + "'>" + type + "</option>";
    }
    $("#dom").append(html);
    console.log(html);
  }
  domainFillSelect();

  function hostingFillSelect() {
    let html = "";
    for (type in hosting) {
      html += "<option value='" + type + "'>" + type + "</option>";
    }
    $("#host").append(html);
    console.log(html);
  }
  hostingFillSelect();

  function adminFillSelect() {
    let html = "";
    for (type in admin) {
      html += "<option value='" + type + "'>" + type + "</option>";
    }
    $("#adm").append(html);
    console.log(html);
  }
  adminFillSelect();

  $(".calculate").change(function() {
    domPrice = domain[$("#dom").val()];
    hostPrice = hosting[$("#host").val()];
    admPrice = admin[$("#adm").val()];
    sum = domPrice + hostPrice + admPrice;
    $("#itogo").html(sum);
    $("#itogoDom").html(domPrice);
    $("#itogoHost").html(hostPrice);
    $("#itogoAdmin").html(admPrice);
  });
});
