function tekshirish() {
  let login = document.getElementById("login").value
  let parol = document.getElementById("password").value

  if (login == "Abdurasul" && parol == "2009") {
    window.location.href = "lattecafe.html"
  } else {
    document.getElementById("error").innerText = "Login yoki Parol xato ! Saytga kirishga ruxsat yo'q"
  }

  if ( login == "Otabek" && parol == "4554") {
    window.location.href = "lattecafe.html"
  } else {
    document.getElementById("error").innerText = "Login yoki Parol xato ! Saytga kirishga ruxsat yo'q"
  }
}