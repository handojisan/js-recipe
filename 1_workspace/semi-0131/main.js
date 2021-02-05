const drinkContainer = document.getElementById('drink-container')
const moneyDisplay = document.getElementById('money-display')
const coinContainer = document.getElementById('coin-container')
const display = document.getElementById('display')

// 投入金額
let money = 0

// ドリンクリスト
const drinks = [
  {
    name: 'お茶',
    price: 130,
    stock: 3,
  },
  {
    name: 'コーラ',
    price: 120,
    stock: 4,
  },
  {
    name: 'コーヒー',
    price: 180,
    stock: 6,
  },
  {
    name: 'オレンジジュース',
    price: 100,
    stock: 2,
  },
  {
    name: 'いろはす',
    price: 100,
    stock: 2,
  },
  {
    name: '麦茶',
    price: 110,
    stock: 1,
  },
]

// 硬貨リスト
const coins = [
  10,
  50,
  100,
  500,
]

// ドリンクをJSから作る
for (let i = 0; i < drinks.length; i++) {
  const drinkButton = document.createElement('button')
  drinkButton.textContent = `${drinks[i].name}${drinks[i].price}円 残り ${drinks[i].stock}本`
  drinkButton.onclick = function () {
    if (money > drinks[i].price && drinks[i].stock > 0) {
      money -= drinks[i].price
      moneyDisplay.textContent = `現在${money}円入っています`

      drinks[i].stock--
      drinkButton.textContent = `${drinks[i].name}${drinks[i].price}円 残り ${drinks[i].stock}本`
      if (drinks[i].stock === 0) {
        drinkButton.disabled = true
      }

      const message = document.createElement('div')
      message.textContent = `${drinks[i].name}を手に入れました！残り${drinks[i].stock}本です！`
      display.append(message)
    }
  }
  drinkContainer.append(drinkButton)
}

// 硬貨をJSから作る
for (let i = 0; i < coins.length; i++) {
  const coinButton = document.createElement('button')
  coinButton.textContent = `${coins[i]}円`
  coinButton.onclick = function () {
    money += coins[i]
    moneyDisplay.textContent = `現在${money}円入っています`
  }
  coinContainer.append(coinButton)
}


