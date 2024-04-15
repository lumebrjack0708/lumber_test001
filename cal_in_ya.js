export default function cal_in_ya(month){
    var in_ya_a = 0;
    // 循環計算指定月份的營業額(O
    for (var a = 1; a <= 10; a++) {
        var cost = parseInt(document.getElementById('m'+month+'_cost'+a).innerHTML);
        var price = parseInt(document.getElementById('m'+month+'_price'+a).innerHTML);
        var count = parseInt(document.getElementById('m'+month+'_conunt'+a).value);
        in_ya_a += (price - cost) * count;
    }
    return in_ya_a;   
}