function afficherRIB() {
  const ribDiv = document.getElementById("rib-container");
  ribDiv.style.display = "flex";
}

function copierRIB() {
  const rib = document.getElementById("rib").innerText;
  navigator.clipboard.writeText(rib).then(() => {
    alert("RIB copié !");
  }).catch(() => {
    alert("Erreur de copie.");
  });
}

function payerAvecPaypal() {
  const montant = prompt("Entrez le montant à payer (en EUR) :");
  if (!montant || isNaN(montant) || montant <= 0) {
    alert("Montant invalide !");
    return;
  }
  document.getElementById("paypalAmount").value = montant;
  document.forms[0].submit();
}

function payerAvecOrangeMoney() {
  const montant = prompt("Entrez le montant à payer (en XOF) :");
  if (!montant || isNaN(montant) || montant <= 0) {
    alert("Montant invalide !");
    return;
  }
  const numero = "0707941719";
  const ussdCode = `tel:*144*1*${numero}*${montant}#`;
  window.location.href = ussdCode;
}
