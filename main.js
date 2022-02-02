const calculateTemp = () => {

    const numberTemp = document.getElementById("temp").value;

    const tempSelected = document.getElementById("temp_diff");
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celTofah = (cel) => {
        let fn = Math.round((cel * 9 / 5) + 32);
        return fn;
    }

    const fehTocel = (fehr) => {
        let cl = (fehr - 32) * 5 / 9;
        return cl;
    }

    let result;

    if (valueTemp == "cel") {

        result = celTofah(numberTemp);
        document.getElementById("resultContainer").innerHTML = `${result}° Fahreneit`;
    } else {
        result = fehTocel(numberTemp);
        document.getElementById("resultContainer").innerHTML = `${result}° Celsius`;
    }

}