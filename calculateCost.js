export default function calculateCost(month){
    var totalCost = 0;
    // 循環計算指定月份的成本
    for (var a = 1; a <= 10; a++) {
        var cost = parseInt(document.getElementById('m'+month+'_cost'+a).innerHTML);
        totalCost += cost;
    }
    return totalCost;
    
}