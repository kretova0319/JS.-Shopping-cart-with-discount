const price1 = document.querySelector(".price1");
const price1Number = +price1.textContent;
price1.textContent = price1Number.toLocaleString("ja-JP", {
  style: "currency",
  currency: "JPY",
});

const price2 = document.querySelector(".price2");
const price2Number = +price2.textContent;
price2.textContent = price2Number.toLocaleString("ja-JP", {
  style: "currency",
  currency: "JPY",
});

const price3 = document.querySelector(".price3");
const price3Number = +price3.textContent;
price3.textContent = price3Number.toLocaleString("ja-JP", {
  style: "currency",
  currency: "JPY",
});

const price4 = document.querySelector(".price4");
const price4Number = +price4.textContent;
price4.textContent = price4Number.toLocaleString("ja-JP", {
  style: "currency",
  currency: "JPY",
});

const priceFull = document.querySelector(".priceFull");
const amount = price1Number + price2Number + price3Number + price4Number;
priceFull.textContent = amount.toLocaleString("ja-JP", {
  style: "currency",
  currency: "JPY",
});

function getDiscount() {
  const price1WithDiscount = price1Number - price1Number * 0.2;
  const price2WithDiscount = price2Number - price2Number * 0.2;
  const price3WithDiscount = price3Number - price3Number * 0.2;
  const price4WithDiscount = price4Number - price4Number * 0.2;
  const amountWithDiscount = amount - amount * 0.2;
  price1.textContent = price1WithDiscount.toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
  });
  price2.textContent = price2WithDiscount.toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
  });
  price3.textContent = price3WithDiscount.toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
  });
  price4.textContent = price4WithDiscount.toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
  });

  priceFull.textContent = amountWithDiscount.toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
  });
}
