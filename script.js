function mach() {
  let v = parseFloat(document.getElementById("v1").value);
  let a = parseFloat(document.getElementById("a1").value);

  if (isNaN(v) || isNaN(a) || a === 0) {
    document.getElementById("m").innerHTML = "Please enter valid values.";
    return;
  }

  let result = v / a;
  document.getElementById("m").innerHTML = "Mach Number = " + result.toFixed(3);
}

function dp() {
  let d = parseFloat(document.getElementById("d1").value);
  let v = parseFloat(document.getElementById("v2").value);

  if (isNaN(d) || isNaN(v)) {
    document.getElementById("d").innerHTML = "Please enter valid values.";
    return;
  }

  let result = 0.5 * d * v * v;
  document.getElementById("d").innerHTML = "Dynamic Pressure = " + result.toFixed(3) + " Pa";
}

function re() {
  let d = parseFloat(document.getElementById("rd").value);
  let v = parseFloat(document.getElementById("rv").value);
  let l = parseFloat(document.getElementById("rl").value);
  let vis = parseFloat(document.getElementById("vis").value);

  if (isNaN(d) || isNaN(v) || isNaN(l) || isNaN(vis) || vis === 0) {
    document.getElementById("r").innerHTML = "Please enter valid values.";
    return;
  }

  let result = (d * v * l) / vis;
  document.getElementById("r").innerHTML = "Reynolds Number = " + result.toFixed(3);
}

function sound() {
  let g = parseFloat(document.getElementById("g").value);
  let R = parseFloat(document.getElementById("R").value);
  let t = parseFloat(document.getElementById("t").value);

  if (isNaN(g) || isNaN(R) || isNaN(t)) {
    document.getElementById("s").innerHTML = "Please enter valid values.";
    return;
  }

  let result = Math.sqrt(g * R * t);
  document.getElementById("s").innerHTML = "Speed of Sound = " + result.toFixed(3) + " m/s";
}