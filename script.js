terminou = false;
var cont = 0
function interaction(x) {
    if (terminou == true) {
        return;
    } else {
        if (x.innerHTML == "X" || x.innerHTML == "O") {
            return;
        }
        if (cont % 2 == 0) {
            x.innerHTML = "X";
            x.style.color = "white";

        } else {
            x.innerHTML = "O";
            x.style.color = "white";
        }
        cont += 1;
        verify();
    }

}

function verify() {
    // VERIFICAÇÃO DO "X" NA HORIZONTAL
    if (
        document.getElementById("table1").rows[0].cells.item(0).innerHTML == "X" &&
        document.getElementById("table1").rows[0].cells.item(1).innerHTML == "X" &&
        document.getElementById("table1").rows[0].cells.item(2).innerHTML == "X"
    ) {
        terminou = true;
        for (var i = 0; i <= 2; i += 1) {
            document.getElementById("table1").rows[0].cells.item(i).style.color = "#F2B705";
        }


    }

    if (
        document.getElementById("table1").rows[1].cells.item(0).innerHTML == "X" &&
        document.getElementById("table1").rows[1].cells.item(1).innerHTML == "X" &&
        document.getElementById("table1").rows[1].cells.item(2).innerHTML == "X"
    ) {
        terminou = true;
        for (var i = 0; i <= 2; i += 1) {
            document.getElementById("table1").rows[1].cells.item(i).style.color = "#F2B705";

        }
    }

    if (
        document.getElementById("table1").rows[2].cells.item(0).innerHTML == "X" &&
        document.getElementById("table1").rows[2].cells.item(1).innerHTML == "X" &&
        document.getElementById("table1").rows[2].cells.item(2).innerHTML == "X"
    ) {
        terminou = true;
        for (var i = 0; i <= 2; i += 1) {
            document.getElementById("table1").rows[2].cells.item(i).style.color = "#F2B705";

        }
    }

    // VERIFICAÇÃO DO "O" NA HORIZONTAL
    if (
        document.getElementById("table1").rows[0].cells.item(0).innerHTML == "O" &&
        document.getElementById("table1").rows[0].cells.item(1).innerHTML == "O" &&
        document.getElementById("table1").rows[0].cells.item(2).innerHTML == "O"
    ) {
        terminou = true;
        for (var i = 0; i <= 2; i += 1) {
            document.getElementById("table1").rows[0].cells.item(i).style.color = "#F2B705";

        }
    }

    if (
        document.getElementById("table1").rows[1].cells.item(0).innerHTML == "O" &&
        document.getElementById("table1").rows[1].cells.item(1).innerHTML == "O" &&
        document.getElementById("table1").rows[1].cells.item(2).innerHTML == "O"
    ) {
        terminou = true;
        for (var i = 0; i <= 2; i += 1) {
            document.getElementById("table1").rows[1].cells.item(i).style.color = "#F2B705";

        }
    }
    if (
        document.getElementById("table1").rows[2].cells.item(0).innerHTML == "O" &&
        document.getElementById("table1").rows[2].cells.item(1).innerHTML == "O" &&
        document.getElementById("table1").rows[2].cells.item(2).innerHTML == "O"
    ) {
        terminou = true;
        for (var i = 0; i <= 2; i += 1) {
            document.getElementById("table1").rows[2].cells.item(i).style.color = "#F2B705";

        }
    }

    // VERIFICAÇÃO DO "X" NA VERTICAL
    if (
        document.getElementById("table1").rows[0].cells.item(0).innerHTML == "X" &&
        document.getElementById("table1").rows[1].cells.item(0).innerHTML == "X" &&
        document.getElementById("table1").rows[2].cells.item(0).innerHTML == "X"
    ) {
        terminou = true;
        for (var i = 0; i <= 2; i += 1) {
            document.getElementById("table1").rows[i].cells.item(0).style.color = "#F2B705";

        }
    }

    if (
        document.getElementById("table1").rows[0].cells.item(1).innerHTML == "X" &&
        document.getElementById("table1").rows[1].cells.item(1).innerHTML == "X" &&
        document.getElementById("table1").rows[2].cells.item(1).innerHTML == "X"
    ) {
        terminou = true;
        for (var i = 0; i <= 2; i += 1) {
            document.getElementById("table1").rows[i].cells.item(1).style.color = "#F2B705";

        }
    }
    if (
        document.getElementById("table1").rows[0].cells.item(2).innerHTML == "X" &&
        document.getElementById("table1").rows[1].cells.item(2).innerHTML == "X" &&
        document.getElementById("table1").rows[2].cells.item(2).innerHTML == "X"
    ) {
        terminou = true;
        for (var i = 0; i <= 2; i += 1) {
            document.getElementById("table1").rows[i].cells.item(2).style.color = "#F2B705";

        }
    }

    // VERIFICAÇÃO DO "O" NA VERTICAL
    if (
        document.getElementById("table1").rows[0].cells.item(0).innerHTML == "O" &&
        document.getElementById("table1").rows[1].cells.item(0).innerHTML == "O" &&
        document.getElementById("table1").rows[2].cells.item(0).innerHTML == "O"
    ) {
        terminou = true;
        for (var i = 0; i <= 2; i += 1) {
            document.getElementById("table1").rows[i].cells.item(0).style.color = "#F2B705";

        }
    }
    if (
        document.getElementById("table1").rows[0].cells.item(1).innerHTML == "O" &&
        document.getElementById("table1").rows[1].cells.item(1).innerHTML == "O" &&
        document.getElementById("table1").rows[2].cells.item(1).innerHTML == "O"
    ) {
        terminou = true;
        for (var i = 0; i <= 2; i += 1) {
            document.getElementById("table1").rows[i].cells.item(1).style.color = "#F2B705";

        }
    }
    if (
        document.getElementById("table1").rows[0].cells.item(2).innerHTML == "O" &&
        document.getElementById("table1").rows[1].cells.item(2).innerHTML == "O" &&
        document.getElementById("table1").rows[2].cells.item(2).innerHTML == "O"
    ) {
        terminou = true;
        for (var i = 0; i <= 2; i += 1) {
            document.getElementById("table1").rows[i].cells.item(2).style.color = "#F2B705";

        }
    }

    // VERIFICAÇÃO DO "X" NA DIAGONAL PRINCIPAL
    if (
        document.getElementById("table1").rows[0].cells.item(0).innerHTML == "X" &&
        document.getElementById("table1").rows[1].cells.item(1).innerHTML == "X" &&
        document.getElementById("table1").rows[2].cells.item(2).innerHTML == "X"
    ) {
        terminou = true;
        for (var i = 0; i <= 2; i += 1) {
            document.getElementById("table1").rows[i].cells.item(i).style.color = "#F2B705";

        }
    }

    // VERIFICAÇÃO DO "O" NA DIAGONAL PRINCIPAL
    if (
        document.getElementById("table1").rows[0].cells.item(0).innerHTML == "O" &&
        document.getElementById("table1").rows[1].cells.item(1).innerHTML == "O" &&
        document.getElementById("table1").rows[2].cells.item(2).innerHTML == "O"
    ) {
        terminou = true;
        for (var i = 0; i <= 2; i += 1) {
            document.getElementById("table1").rows[i].cells.item(i).style.color = "#F2B705";

        }

    }

    // VERIFICAÇÃO DO "X" NA DIAGONAL SECUNDÁRIA

    if (
        document.getElementById("table1").rows[0].cells.item(2).innerHTML == "X" &&
        document.getElementById("table1").rows[1].cells.item(1).innerHTML == "X" &&
        document.getElementById("table1").rows[2].cells.item(0).innerHTML == "X"
    ) {
        terminou = true;
        for (var i = 0; i <= 2; i += 1) {
            document.getElementById("table1").rows[i].cells.item(2 - i).style.color = "#F2B705";

        }
    }

    // VERIFICAÇÃO DO "O" NA DIAGONAL SECUNDÁRIA

    if (
        document.getElementById("table1").rows[0].cells.item(2).innerHTML == "O" &&
        document.getElementById("table1").rows[1].cells.item(1).innerHTML == "O" &&
        document.getElementById("table1").rows[2].cells.item(0).innerHTML == "O"
    ) {
        terminou = true;
        for (var i = 0; i <= 2; i += 1) {
            document.getElementById("table1").rows[i].cells.item(2 - i).style.color = "#F2B705";

        }
    }

    if (terminou == true) {
        var player;
        if (cont % 2 != 0) {
            player = 1;
        } else {
            player = 2;
        }

        document.getElementById("final_msg").innerHTML = "O jogador " + player + " venceu!";
        document.getElementById("reiniciar").style.display = "inline";
    }
    if (cont > 9) {
        document.getElementById("final_msg").innerHTML = "Empate";
        document.getElementById("reiniciar").style.display = "inline";
    }
}

function refresh() {
    location.reload();
}

