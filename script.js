// Import stylesheets

// Body element
const body = document.getElementById('body');

// Button elements
const btnSend = document.getElementById('btnSend');
const btnClose = document.getElementById('btnClose');
const btnShare = document.getElementById('btnShare');
const btnLogIn = document.getElementById('btnLogIn');
const btnLogOut = document.getElementById('btnLogOut');
const btnScanCode = document.getElementById('btnScanCode');
const btnOpenWindow = document.getElementById('btnOpenWindow');

// Profile elements
const email = document.getElementById('email');
const userId = document.getElementById('userId');
const pictureUrl = document.getElementById('pictureUrl');
const displayName = document.getElementById('displayName');
const statusMessage = document.getElementById('statusMessage');

// QR element
const code = document.getElementById('code');
const friendShip = document.getElementById('friendShip');
async function main() {
  // Initialize LIFF app)
  await liff.init({ liffId: '1660714848-LkYxxV1W' });
  // Try a LIFF function
  if (liff.isLoggedIn()) {
    const profile = await liff.getProfile();
    document.getElementById(
      'displayName'
    ).innerText = `${profile.displayName}`;
    document.getElementById('pictureUrl').src = profile.pictureUrl;
    document.getElementById(
      'userId'
    ).innerText = `User ID: ${profile.userId}`;
    document.getElementById(
      'statusMessage'
    ).innerText = `Status Message: ${profile.statusMessage}`;

    document.getElementById('email').innerText = `Email: ${liff.getDecodedIDToken().email
      }`;
  }

}
main();

async function getUserProfile() {
  const profile = await liff.getProfile();
  document.getElementById('pictureUrl').src = profile.pictureUrl;
  document.getElementById('userId').innerText = `User ID: ${profile.userId}`;
  document.getElementById('statusMessage').innerText = `Status Message: ${profile.statusMessage}`;
  document.getElementById('displayName').innerText = `Display Name: ${profile.displayName}`;
  document.getElementById('email').innerText = `Email: ${liff.getDecodedIDToken().email
    }`;
};

$('.minus-btn').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 0;
  }

  $input.val(value);
  calculatePrice();
})

$('.plus-btn').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value < 100) {
    value = value + 1;
  } else {
    value = 100;
  }

  $input.val(value);
  calculatePrice();
})

$('.like-btn').on('click', function() {
  $(this).toggleClass('is-active');
});

//document.getElementById("qtyup").src = "https://designmodo.com/demo/shopping-cart/plus.svg"
//document.getElementById("qtydown").src = "https://designmodo.com/demo/shopping-cart/minus.svg"

document.getElementById('productImage1').src =
  'https://www.medileen.com/image/product/product10_600.png';
document.getElementById('productImage2').src =
  'https://www.medileen.com/image/product/product26_600.jpg';
document.getElementById('productImage3').src =
  'https://www.medileen.com/image/product/product16_600.jpg';
document.getElementById('productImage4').src =
  'https://www.medileen.com/image/product/product23_600.jpg';
document.getElementById('productImage5').src =
  'https://www.medileen.com/image/product/product2_600.jpg';
document.getElementById('productImage6').src =
  'https://www.medileen.com/image/product/product15_600.jpg';
document.getElementById('productImage7').src =
  'https://www.medileen.com/image/product/product18_600.jpg';
document.getElementById('productImage8').src =
  'https://www.medileen.com/image/product/product12_600.jpg';
document.getElementById('productImage9').src =
  'https://www.medileen.com/image/product/product13_600.png';
document.getElementById('productImage10').src =
  'https://www.medileen.com/image/product/product31_600.jpeg';
document.getElementById('productImage11').src =
  'https://www.medileen.com/image/product/product29_600.png';
document.getElementById('productImage12').src =
  'https://www.medileen.com/image/product/product30_600.png';

const products = [
  { id: 'm01', name: 'Revive Factor Plus+', price: 2750, qty: 0, pdp: 0 },
  { id: 'm02', name: 'Calleaf 24', price: 1450, qty: 0, pdp: 0 },
  { id: 'm03', name: 'Veronika Plus+', price: 1950, qty: 0, pdp: 0 },
  { id: 'm04', name: 'Age Recovery Cream', price: 1450, qty: 0, pdp: 0 },
  { id: 'm05', name: 'Dark Spot Corrector', price: 1750, qty: 0, pdp: 0 },
  { id: 'm06', name: 'Hydrating Gel Cleanser', price: 750, qty: 0, pdp: 0 },
  { id: 'm07', name: 'Prerotic Plus Probiotic', price: 1050, qty: 0, pdp: 0 },
  { id: 'm08', name: 'Sun Screen Protection SPF50 PA+++', price: 800, qty: 0, pdp: 0, },
  { id: 'm09', name: 'Black Mud Cleansing Balm Plus', price: 850, qty: 0, pdp: 0, },
  { id: 'm10', name: 'THE BODY SERIE', price: 1756, qty: 0, pdp: 0 },
  { id: 'm11', name: 'Plant Protein42', price: 1050, qty: 0, pdp: 0 },
  { id: 'm12', name: 'Shake Melon Flavour', price: 1050, qty: 0, pdp: 0 },
];

function calculatePrice() {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    const quantity = document.getElementsByName(`quantity${i + 1}`)[0].value;
    products[i].qty = parseInt(quantity); // เพิ่มบรรทัดนี้
    const price = quantity * findPriceById(products[i].id);
    totalPrice += price;
    document.getElementById(`price${i + 1}`).innerHTML = price;
    products[i].pdp = price; // เพิ่มบรรทัดนี้
  }
  const memberPrice = totalPrice * 0.95;
  const formattedTotalPrice = numberWithCommas(totalPrice.toFixed(2));
  const formattedMemberPrice = numberWithCommas(memberPrice.toFixed(2));
  document.getElementById('totalPrice').innerHTML = formattedTotalPrice;
  document.getElementById('memberPrice').innerHTML = formattedMemberPrice;
}

products.forEach((product) => {
  const el = document.getElementById(`productName${product.id.slice(1)}`);
  if (el) {
    el.textContent = product.name;
  }
});

function findPriceById(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i].price;
    }
  }
  return 0; // หากไม่พบราคาสินค้า
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

btnSend.onclick = () => {
  sendMsg();
};

async function sendMsg() {
  if (
    liff.getContext().type !== 'none' &&
    liff.getContext().type !== 'external'
  ) {
    let message = displaySelectedProducts();

    liff
      .sendMessages(message)
      .then(() => {
        liff.closeWindow();
      })
      .catch((err) => {
        console.error(err.code, error.message);
      });
  }
}

function getSelectedProducts() {
  const selectedProducts = [];
  let totalAmount = 0;
  for (const product of products) {
    const qty = parseInt(document.getElementById(`qty${product.id}`).value);
    if (qty > 0) {
      const price = product.price * qty;
      selectedProducts.push({
        name: product.name,
        qty: qty,
        price: price,
      });
      totalAmount += price;
    }
  }
  return {
    selectedProducts: selectedProducts,
    totalAmount: totalAmount,
  };
}

function displaySelectedProducts() {
  const filteredProducts = products.filter((product) => product.qty > 0);
  let tpr = document.getElementById('totalPrice').innerHTML;
  let mpr = document.getElementById('memberPrice').innerHTML;
  const dpn = document.getElementById('displayName').innerText;
  const totalQty = products.reduce(
    (accumulator, currentProduct) => accumulator + currentProduct.qty,
    0
  );

  let flexJson = {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: filteredProducts.map((product) => ({
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'text',
            text: product.name,
            flex: 1,
            size: 'sm',
          },
          {
            type: 'text',
            text: product.qty.toString(),
            flex: 0,
            size: 'sm',
          },
          {
            type: 'text',
            text: product.pdp.toString() + ' B',
            flex: 0,
            size: 'sm',
          },
          {
            type: 'text',
            text: `${totalQty}`,
            flex: 0,
            size: 'sm',
          },
        ],
      })),
    },
  };

  let flexJson2 = {
    type: 'bubble',
    size: 'giga',
    header: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'text',
              text: 'Quote',
              size: 'md',
              flex: 1,
              color: '#ffffff',
              weight: 'bold',
            },
            {
              type: 'text',
              text: `${dpn}`,
              align: 'end',
              size: 'sm',
              color: '#eeeeee',
            }
          ]
        },
        {
          type: 'text',
          text: 'By Ami Ex001',
          align: 'end',
          size: 'sm',
          flex: 1,
          color: '#eeeeee',
        }
      ],
      backgroundColor: '#292929'
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'box',
          layout: 'vertical',
          contents: filteredProducts.map((product) => ({
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: product.name,
                size: 'sm',
                color: '#555555',
                flex: 4,
              },
              {
                type: 'text',
                text: product.qty.toString() + ' Pcs',
                color: '#555555',
                size: 'sm',
                flex: 1,
              },
              {
                type: 'text',
                text: product.pdp.toString() + ' B',
                size: 'sm',
                color: '#555555',
                align: 'end',
                flex: 2,
              },
            ],
          })),
        },
        {
          type: 'separator',
          margin: 'xxl',
        },
        {
          type: 'box',
          layout: 'horizontal',
          margin: 'xxl',
          contents: [
            {
              type: 'text',
              text: 'ITEMS',
              size: 'sm',
              color: '#555555',
              flex: 2,
            },
            {
              type: 'text',
              text: `${totalQty}` + ' Pcs',
              size: 'sm',
              color: '#555555',
              align: 'end',
              flex: 1,
            },
          ],
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'text',
              text: 'Total Price',
              size: 'sm',
              color: '#555555',
              flex: 2,
            },
            {
              type: 'text',
              text: `${tpr}` + ' B',
              size: 'sm',
              color: '#555555',
              align: 'end',
              flex: 1,
            },
          ],
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'text',
              text: 'for Member Only 5%',
              size: 'sm',
              color: '#555555',
              flex: 2,
            },
            {
              type: 'text',
              text: `${mpr}` + ' B',
              size: 'sm',
              color: '#555555',
              align: 'end',
              flex: 1,
            },
          ],
        },
        {
          type: 'separator',
          margin: 'xxl',
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'image',
              url: 'https://sv1.picz.in.th/images/2023/04/06/m5hw8R.png',
              flex: 1,
              aspectMode: 'fit',
              gravity: 'bottom',
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  margin: 'md',
                  contents: [
                    {
                      type: 'text',
                      text: 'โอนเงิน',
                      size: 'xs',
                      color: '#555555',
                      flex: 0,
                      wrap: true,
                    },
                    {
                      type: 'text',
                      text: 'เลขบัญชี 772-2-31457-8',
                      color: '#555555',
                      size: 'xs',
                      align: 'end',
                    },
                  ],
                },
                {
                  type: 'box',
                  layout: 'horizontal',
                  margin: 'md',
                  contents: [
                    {
                      type: 'text',
                      text: 'ธ.กสิกร',
                      color: '#555555',
                      size: 'xs',
                      flex: 0,
                    },
                    {
                      type: 'text',
                      text: 'ชื่อบัญชี กัลยกร ลาภปริณายก',
                      size: 'xs',
                      color: '#555555',
                      align: 'end',
                    },
                  ],
                },
              ],
              flex: 5,
            },
          ],
        },
      ],
      background: {
        type: 'linearGradient',
        angle: '0deg',
        startColor: '#29292955',
        endColor: '#ffffff',
      }
    },
    styles: {
      footer: {
        separator: true,
      },
    },
  };

  return [{ type: 'flex', altText: 'ใบสรุปราคา', contents: flexJson2 }];
}

function createFlexMessage() {
  let qtt1 = document.getElementsByName('quantity1')[0].value * 1;
  let qtt2 = document.getElementsByName('quantity2')[0].value * 1;
  let qtt3 = document.getElementsByName('quantity3')[0].value * 1;
  let qtt4 = document.getElementsByName('quantity4')[0].value * 1;
  let qtt5 = document.getElementsByName('quantity5')[0].value * 1;
  let qtt6 = document.getElementsByName('quantity6')[0].value * 1;
  let qtt7 = document.getElementsByName('quantity7')[0].value * 1;
  let qtt8 = document.getElementsByName('quantity8')[0].value * 1;
  let qtt9 = document.getElementsByName('quantity9')[0].value * 1;
  let qtt10 = document.getElementsByName('quantity10')[0].value * 1;
  let qtt11 = document.getElementsByName('quantity11')[0].value * 1;
  let qtt12 = document.getElementsByName('quantity12')[0].value * 1;
  let qttt =
    qtt1 +
    qtt2 +
    qtt3 +
    qtt4 +
    qtt5 +
    qtt6 +
    qtt7 +
    qtt8 +
    qtt9 +
    qtt10 +
    qtt11 +
    qtt12;

  let pr1 = document.getElementById('price1').innerHTML;
  let pr2 = document.getElementById('price2').innerHTML;
  let pr3 = document.getElementById('price3').innerHTML;
  let pr4 = document.getElementById('price4').innerHTML;
  let pr5 = document.getElementById('price5').innerHTML;
  let pr6 = document.getElementById('price6').innerHTML;
  let pr7 = document.getElementById('price7').innerHTML;
  let pr8 = document.getElementById('price8').innerHTML;
  let pr9 = document.getElementById('price9').innerHTML;
  let pr10 = document.getElementById('price10').innerHTML;
  let pr11 = document.getElementById('price11').innerHTML;
  let pr12 = document.getElementById('price12').innerHTML;
  let tpr = document.getElementById('totalPrice').innerHTML;
  let mpr = document.getElementById('memberPrice').innerHTML;

  if (qtt1 > 0) {
  }

  let flexJson = {
    type: 'bubble',
    header: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: `${qtt1}`,
        },
        {
          type: 'text',
          text: `${qttt}`,
        },
        {
          type: 'text',
          text: `${mpr}`,
        },
        {
          type: 'text',
          text: 'test' + `${tpr}`,
        },
      ],
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [],
    },
  };

  return [{ type: 'flex', altText: 'ใบสรุปราคา', contents: flexJson }];
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbxEkY1punDoJNYCAKatomco6NUOpfj_iWvmXC7bzvLnoMC1ztRBcTG2q40vUes1g5GN/exec'
const form = document.forms['contact']

form.addEventListener('submit', e => {
  e.preventDefault()
  const formData = new FormData(form)
  const qtyy = products.reduce(
    (accumulator, currentProduct) => accumulator + currentProduct.qty, 0);
  let date = new Date();
  console.log(date.toLocaleString());
  const uuid = document.getElementById('userId').innerHTML;
  const dpnn = document.getElementById('displayName').innerHTML;
  const stm = document.getElementById('statusMessage').innerHTML;
  const emal = document.getElementById('email').innerHTML;
  //const purl = document.getElementById('pictureUrl').innerHTML;
  const tttp = document.getElementById('totalPrice').innerHTML;
  const mbbp = document.getElementById('memberPrice').innerHTML;

  formData.set('Time', date);
  formData.set('Uid', uuid);
  formData.set('display_name', dpnn);
  formData.set('statusMessage', stm);
  formData.set('email', emal);
  //formData.set('img_url', purl);
  formData.set('total_Price', tttp);
  formData.set('member_Price', mbbp);
  formData.set('total_Qty', qtyy);

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => document.getElementById("demo").innerHTML =
      "<div></div>")
    .catch(error => console.error('Error!', error.message))
})