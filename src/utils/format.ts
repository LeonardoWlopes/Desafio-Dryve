export function numberToKM(n: number) {
    const km = n
        .toFixed(2)
        .replace(".", ",")
        .replace(/\d{3}(?=(\d{3})*,)/g, function (s) {
            return "." + s;
        });

    return km.substring(0, km.length - 3) + " Km";
}

export function toMoney(value: number) {
    return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 0,
    }).format(value);
}
